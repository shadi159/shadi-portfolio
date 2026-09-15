/**
 * ============================================================
 *  PROJECTS DATA
 * ============================================================
 * Add, edit, or remove projects here. Every project is rendered
 * as a card on the Projects page and gets its own detail page at
 * /projects/:id automatically.
 *
 * Fields left as "[Add ... here]" are placeholders — replace them
 * with your real content. Nothing here should be treated as a
 * real result, metric, or screenshot until you provide it.
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  technologies: string[];
  image?: string; // path under /public, e.g. "/projects/my-project/cover.png"
  githubUrl?: string;
  liveUrl?: string;
  overview: string;
  problem: string;
  solution: string;
  contribution: string;
  challenges: string;
  results: string;
  screenshots?: string[]; // paths under /public
}

export const projects: Project[] = [
  {
    id: "edubridge",
    title: "EduBridge",
    category: "Full Stack / Web Development",
    shortDescription:
      "A full-stack platform built for international student transition support, with user authentication, cross-cultural comparison tools, and a curated resource library.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "Full Stack"],
    githubUrl: "https://github.com/shadi159/WEB_Project",
    image: "/public/edubridge.jpg",
    overview:
      "EduBridge is a web platform designed to help international students transition more smoothly into new academic and cultural environments. It brings together practical resources, comparison tools, and personalized support features in one experience.",
    problem:
      "International students often need help navigating cultural differences, academic expectations, and practical day-to-day decisions when moving to a new country or institution.",
    solution:
      "The project provides user authentication, resource organization, and cross-cultural comparison tools to simplify the transition process and make information more accessible.",
    contribution:
      "I contributed to the end-to-end development of the application, including the interface, the information flow, and the overall user experience built with Vite and Tailwind CSS.",
    challenges:
      "The main technical challenge was designing a clean, usable experience for a broader audience while balancing the platform’s functional requirements with a responsive, accessible UI.",
    results: "The platform demonstrates full-stack web capability with a focus on usability, user flow, and cross-cultural support.",
    screenshots: [],
  },
  {
    id: "agriVision",
    title: "AgriVision",
    category: "AI / IoT / Cloud",
    shortDescription:
      "An AI-powered plant monitoring platform that tracks plant health using IoT sensors, live dashboards, alerts, and a Gemini-powered RAG chatbot.",
    technologies: ["Python", "Firebase", "Microservices", "AI", "IoT"],
    githubUrl: "https://github.com/shadi159/Cloud-Computing-Project",
    image: "/public/AgriVision.jpg",
    overview:
      "AgriVision is a cloud-based plant health monitoring application that combines real-time sensor data, automation, and AI assistance to support more informed agricultural decision-making.",
    problem:
      "Agricultural monitoring often depends on delayed or fragmented information, which makes it harder to detect plant stress or act quickly on unhealthy conditions.",
    solution:
      "The system collects sensor data in real time, processes it through a dual-microservice backend, visualizes it in a live dashboard, and adds automated alerts and a Gemini-powered chatbot for contextual guidance.",
    contribution:
      "I helped build the backend and data flow, integrate the chatbot and alerting mechanisms, and connect the platform’s monitoring and reporting features into a coherent system.",
    challenges:
      "The project required integrating live data collection, backend orchestration, AI assistance, and gamified user engagement while keeping the system responsive and reliable.",
    results: "The application combines monitoring, automation, and AI support into a practical real-time platform for plant health management.",
    screenshots: [],
  },
  {
    id: "laplacian-spectrum",
    title: "Hearing Image Textures Through the Laplacian Spectrum",
    category: "Image Processing / Machine Learning / Research",
    shortDescription:
      "A research project that models images as weighted graphs and uses the Graph Laplacian spectrum to classify texture types, with a Spectral-MLP hybrid approach.",
    technologies: ["Python", "NumPy", "MATLAB", "Image Processing", "Machine Learning"],
    githubUrl: "https://github.com/shadi159/Final-Project-Mathematics",
    image: "/public/Textures.jpg",
    overview:
      "This project explores how image textures can be analyzed using graph-based mathematical representations. It models images as weighted graphs and studies the Graph Laplacian spectrum to distinguish between smooth and stochastic textures.",
    problem:
      "Traditional texture descriptors can struggle to capture the structural and spectral properties of visually complex image patterns, especially when signals vary across different texture families.",
    solution:
      "The work computes the Graph Laplacian spectrum and extends it with a Spectral-MLP hybrid architecture, validated on the DTD dataset with 10-fold cross-validation.",
    contribution:
      "I worked on the mathematical formulation, implementation, and evaluation pipeline for the texture classification system, including the graph modeling and experimental validation.",
    challenges:
      "The major challenge was bridging mathematical graph theory with practical image classification, while ensuring the spectral representation was robust and interpretable.",
    results: "The work evaluates the approach on a 5,640-image dataset and demonstrates a research-driven method for texture classification using spectral graph properties.",
  },
  {
    id: "socialchange-arabic-discourse",
    title: "SocialChange Detection in Arabic Discourse (XPlatform)",
    category: "NLP / Deep Learning / Social Analysis",
    shortDescription:
      "A data-driven NLP system for detecting social and political shifts in Arabic Twitter discourse using n-grams, feature selection, temporal analysis, and clustering.",
    technologies: ["Python", "NLP", "Deep Learning", "BERT", "Feature Selection", "Clustering"],
    githubUrl: "https://github.com/shadi159/Final-Project",
    image: "/public/SocialChange.jpg",
    overview:
      "This project analyzes Arabic social media discourse to detect periods of social or political transformation. It combines NLP and statistical methods to identify temporal shifts in online conversations and relate them to broader change events.",
    problem:
      "Large-scale Arabic social media data is noisy and complex, and traditional analysis often struggles to isolate meaningful shifts in tone, topics, and discourse patterns over time.",
    solution:
      "The system uses n-grams, Feature Selection, Mean Rank Dependency, ZVT, and PAM clustering to identify relevant time windows and discover patterns linked to social or political transformation.",
    contribution:
      "I contributed to the design and implementation of the NLP pipeline, including feature construction, temporal analysis, and clustering-based interpretation of the discourse patterns.",
    challenges:
      "The main challenge was balancing linguistic nuance, noisy real-world data, and statistical signal detection in order to isolate meaningful change patterns from large Arabic datasets.",
    results: "The project demonstrates a practical approach for monitoring social and political change in Arabic discourse through data-driven NLP and temporal analysis.",
    screenshots: [],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
