export interface CVSection {
    intro: string;
    education: EducationItem[];
    experience: ExperienceItem[];
    service: ExperienceItem[];
    awards: AwardItem[];
    patents: PatentItem[];
}

export interface EducationItem {
    degree: string;
    institution: string;
    year: string;
    advisor?: string;
    description?: string;
}

export interface ExperienceItem {
    role: string;
    company: string;
    year: string;
    description?: string;
}

export interface AwardItem {
    title: string;
    organization: string;
    year: string;
}

export interface PatentItem {
    authors: string[];
    title: string;
    url?: string;
    number: string;
}

export function parseCVMarkdown(content: string): CVSection {
    const sections = content.split(/^## /m);
    const result: CVSection = {
        intro: "",
        education: [],
        experience: [],
        service: [],
        awards: [],
        patents: []
    };

    // Intro is before the first header
    if (sections[0].trim()) {
        // Remove the H1 title
        result.intro = sections[0].replace(/^# .*\n/, "").trim();
    }

    for (let i = 1; i < sections.length; i++) {
        const section = sections[i];
        const newlineIndex = section.indexOf('\n');
        const title = section.substring(0, newlineIndex).trim().toLowerCase();
        const body = section.substring(newlineIndex).trim();

        if (title === "education") {
            result.education = parseList(body).map(item => {
                const lines = item.split('\n').map(l => l.trim()).filter(Boolean);
                const degree = extractBold(lines[0]);
                const [institution, year] = (lines[1] || "").split('|').map(s => s.trim());
                const advisorLine = lines.find(l => l.startsWith("Advisors:"));
                const description = lines.filter(l => l !== lines[0] && l !== lines[1] && !l.startsWith("Advisors:")).join("\n");

                return {
                    degree,
                    institution,
                    year,
                    advisor: advisorLine ? advisorLine.replace("Advisors:", "").trim() : undefined,
                    description: description || undefined
                };
            });
        } else if (title === "experience") {
            result.experience = parseList(body).map(item => {
                const lines = item.split('\n').map(l => l.trim()).filter(Boolean);
                const role = extractBold(lines[0]);

                let company = "", year = "";
                let descStart = 1;

                if (lines[1] && lines[1].includes('|')) {
                    [company, year] = lines[1].split('|').map(s => s.trim());
                    descStart = 2;
                }

                const description = lines.slice(descStart).join("\n");

                return {
                    role,
                    company,
                    year,
                    description
                };
            });
        } else if (title === "service") {
            result.service = parseList(body).map(item => {
                const lines = item.split('\n').map(l => l.trim()).filter(Boolean);
                const role = extractBold(lines[0]);

                let company = "", year = "";
                let descStart = 1;

                if (lines[1] && lines[1].includes('|')) {
                    [company, year] = lines[1].split('|').map(s => s.trim());
                    descStart = 2;
                }

                const description = lines.slice(descStart).join("\n");

                return {
                    role,
                    company,
                    year,
                    description
                };
            });
        } else if (title.startsWith("awards")) {
            result.awards = parseList(body).map(item => {
                const lines = item.split('\n').map(l => l.trim()).filter(Boolean);
                // Check for format: **Title** (Year)
                const singleLineMatch = lines[0].match(/\*\*(.*?)\*\* \((.*?)\)/);

                if (singleLineMatch) {
                    return {
                        title: singleLineMatch[1],
                        organization: "", // No org in this format
                        year: singleLineMatch[2]
                    };
                }

                const title = extractBold(lines[0]);
                const [organization, year] = (lines[1] || "").split('|').map(s => s.trim());

                return {
                    title,
                    organization,
                    year
                };
            });
        } else if (title === "patents") {
            result.patents = parseList(body).map(item => {
                // Expected format: Authors. “Title” or “[Title](url)”. Number
                // Split by opening quote or bracket if no quote?
                // Actually the format is likely: Authors. "TitleContent". Number
                // TitleContent might be PlainTitle or [PlainTitle](url)

                // Let's use regex to find the quoted part
                const match = item.match(/(.*?)“(.*?)”(.*)/);
                if (!match) {
                    return { authors: [], title: item, number: "" };
                }

                const authorsPart = match[1].trim();
                const titleContent = match[2].trim();
                const numberPart = match[3].trim();

                // Clean authors
                const authorsClean = authorsPart.endsWith('.') ? authorsPart.slice(0, -1) : authorsPart;
                const authors = authorsClean.split(',').map(a => a.trim());

                // Check for link in title
                const linkMatch = titleContent.match(/\[(.*?)\]\((.*?)\)/);
                let title = titleContent;
                let url: string | undefined;

                if (linkMatch) {
                    title = linkMatch[1];
                    url = linkMatch[2];
                }

                // Remove trailing dot inside title if present (usually is "Title.")
                const titleClean = title.endsWith('.') ? title.slice(0, -1) : title;

                return { authors, title: titleClean, url, number: numberPart };
            });
        }
    }

    return result;
}

function parseList(content: string): string[] {
    // Split by "- " at start of line
    return content.split(/^-\s/m).slice(1).map(s => s.trim());
}

function extractBold(text: string): string {
    if (!text) return "";
    const match = text.match(/\*\*(.*?)\*\*/);
    return match ? match[1] : text;
}
