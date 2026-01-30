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
    abstract?: string;
    selected: boolean;
}

export interface NewsItem {
    id: number;
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

export const news: NewsItem[] = [
    {
        id: 1,
        date: "2025-09-18",
        content: "Paper on vision-based LLM grounding for dash-cam video reasoning accepted in [NeurIPS 2025](https://neurips.cc/Conferences/2025)!"
    },
    {
        id: 2,
        date: "2024-06-24",
        content: "Join [NEC Labs America](https://www.nec-labs.com/) as Research Intern in Media Analytics team, mentored by [Abhishek Aich](https://abhishekaich27.github.io/)."
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
    "Samuel Schulter": "https://samschulter.github.io/"
};
