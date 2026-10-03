export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link: string | null;
    tags: string[];
}

export interface Publication {
    id: string;
    title: string;
    authors: string[];
    venue: string;
    year: number;
    link?: string;
    pdf?: string;
    project?: string;
    abstract?: string;
    selected: boolean;
}

export interface NewsItem {
    date: string;
    content: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Brew Wise",
        description: "A Feedback-Driven Brewing Consultant. BrewWise addresses the complexity of dialing in specialty coffee by treating brewing as a dynamic optimization problem, using AI to adapt brewing process and align expected flavor with the actual sensory experience.",
        imageUrl: "https://raw.githubusercontent.com/GYeow/BrewWiseMini/master/src/static/workflow.png",
        link: "https://github.com/GYeow/BrewWiseMini",
        tags: ["Qwen", "Vue 3", "UniApp", "Tailwind CSS"]
    }
];

export const publications: Publication[] = [
    {
        id: "yao2026strive",
        title: "Driving Video Retrieval for Complex Queries with Structured Grounding",
        authors: ["Manyi Yao", "Sparsh Garg", "Christian R. Shelton", "Amit Roy-Chowdhury", "Abhishek Aich"],
        venue: "NeurIPS",
        year: 2026,
        link: "https://arxiv.org/abs/2606.09109",
        pdf: "https://arxiv.org/pdf/2606.09109",
        project: "https://gyeow.github.io/strive-d/",
        selected: true
    },
    {
        id: "Yaoetal25",
        title: "iFinder: Structured Zero-Shot Vision-Based LLM Grounding for Dash-Cam Video Reasoning",
        authors: ["Manyi Yao", "Bingbing Zhuang", "Sparsh Garg", "Amit Roy-Chowdhury", "Christian R. Shelton", "Manmohan Chandraker", "Abhishek Aich"],
        venue: "NeurIPS",
        year: 2025,
        link: "https://arxiv.org/abs/2509.19552",
        pdf: "https://arxiv.org/pdf/2509.19552",
        selected: true
    },
    {
        id: "yao2024efficient",
        title: "Efficient Transformer Encoders for Mask2Former-style models",
        authors: ["Manyi Yao", "Abhishek Aich", "Yumin Suh", "Amit Roy-Chowdhury", "Christian R. Shelton", "Manmohan Chandraker"],
        venue: "WACV WVAQ",
        year: 2026,
        link: "https://arxiv.org/abs/2404.15244",
        pdf: "https://arxiv.org/pdf/2404.15244",
        selected: true
    },
    {
        id: "chang2025afl",
        title: "Mitigating Participation Imbalance Bias in Asynchronous Federated Learning",
        authors: ["Xiangyu Chang", "Manyi Yao", "Srikanth V Krishnamurthy", "Christian R. Shelton", "Anirban Chakraborty", "Ananthram Swami", "Samet Oymak", "Amit Roy-Chowdhury"],
        venue: "Preprint",
        year: 2025,
        link: "https://arxiv.org/abs/2511.19066",
        pdf: "https://arxiv.org/pdf/2511.19066",
        selected: false
    }
];

// Add new entries anywhere — they are sorted by date (newest first) at render time.
export const news: NewsItem[] = [
    {
        date: "2026-09-24",
        content: "Paper on [driving video retrieval with structured grounding](https://arxiv.org/abs/2606.09109) accepted in [NeurIPS 2026](https://neurips.cc/Conferences/2026)!"
    },
    {
        date: "2026-06-15",
        content: "Join Amazon Alexa Edge AI - CV team as Applied Scientist Intern, mentored by [Jurijs Nazarovs](https://jurijsnazarovs.github.io/) and [Eunji Chong](https://ejcgt.github.io/) (manager: [Deb Pal](https://www.linkedin.com/in/debashish-pal-6a60377/))."
    },
    {
        date: "2025-09-18",
        content: "Paper on vision-based LLM grounding for dash-cam video reasoning accepted in [NeurIPS 2025](https://neurips.cc/Conferences/2025)!"
    },
    {
        date: "2024-06-24",
        content: "Join [NEC Labs America](https://www.nec-labs.com/) as Research Intern in Media Analytics team, mentored by [Abhishek Aich](https://abhishekaich27.github.io/) (manager: [Manmohan Chandraker](https://cseweb.ucsd.edu/~mkchandraker/))."
    }
];

export const coauthors: Record<string, string> = {
    "Abhishek Aich": "https://abhishekaich27.github.io/",
    "Manmohan Chandraker": "https://cseweb.ucsd.edu/~mkchandraker/",
    "Amit Roy-Chowdhury": "https://vcg.engr.ucr.edu/amit",
    "Christian R. Shelton": "https://www.cs.ucr.edu/~cshelton/",
    "Christian Shelton": "https://www.cs.ucr.edu/~cshelton/",
    "Yumin Suh": "https://yuminsuh.github.io/",
    "Bingbing Zhuang": "https://bbzh.github.io/",
    "Sparsh Garg": "https://www.linkedin.com/in/garg-sparsh/",
    "Srikanth V Krishnamurthy": "https://www.cs.ucr.edu/~krish/",
    "Anirban Chakraborty": "https://anirbanchakraborty.github.io/",
    "Ananthram Swami": "https://www.linkedin.com/in/ananthram-swami-3a492743/",
    "Samet Oymak": "https://sota.engin.umich.edu/",
    "Samuel Schulter": "https://samschulter.github.io/",
    "Xiangyu Chang": "https://scholar.google.com/citations?user=mQh2GmoAAAAJ&hl=en"
};

// Coauthor headshots (square, ~300px) stored in client/public/coauthors/.
// Reuse these for project pages, author lists, etc. Keys match `coauthors` above.
export const coauthorPhotos: Record<string, string> = {
    "Abhishek Aich": "/coauthors/abhishek-aich.jpg",           // from Google Scholar
    "Amit Roy-Chowdhury": "/coauthors/amit-roy-chowdhury.jpg", // from vcg.engr.ucr.edu/amit
    "Christian R. Shelton": "/coauthors/christian-shelton.jpg",// from cs.ucr.edu/~cshelton
    "Christian Shelton": "/coauthors/christian-shelton.jpg",
    "Sparsh Garg": "/coauthors/sparsh-garg.jpg"                // from Google Scholar
};
