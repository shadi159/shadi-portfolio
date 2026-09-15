/**
 * ============================================================
 *  SITE CONFIG — edit this file to update your personal info
 * ============================================================
 * Every value marked with [PLACEHOLDER] should be replaced
 * with your real information before you publish the site.
 */

export const siteConfig = {
  name: "Shadi Alkeesh",
  role: "Python Developer & Full Stack Developer",

  // Short line used in the browser tab / meta description.
  tagline: "Python Developer & Full Stack Developer | Software Engineering & Applied Mathematics graduate.",

  // Hero introduction — replaced with real CV content.
  heroIntro:
    "I'm a Software Engineering and Applied Mathematics graduate with hands-on experience building scalable web applications, " +
    "AI/NLP systems, and data-driven products. I enjoy turning technical ideas into practical solutions that combine strong engineering, " +
    "clean architecture, and meaningful user impact.",

  // About section — written from the actual CV background.
  aboutParagraphs: [
    "I’m a B.Sc. graduate in Software Engineering and Applied Mathematics from Braude College of Engineering, graduating in 2026 with a GPA of 85. " +
      "My studies combined applied mathematics, software engineering, and modern computing systems.",
    "I enjoy solving problems in AI/NLP, full-stack development, data analysis, and applied research. From Arabic sentiment analysis to plant monitoring systems and diffusion models, " +
      "I like building systems that connect mathematical thinking with practical real-world use cases.",
    "I’m looking to contribute to teams building intelligent, data-driven software products where engineering, problem-solving, and technical creativity matter. " +
      "I’m especially interested in roles involving Python, full-stack development, AI systems, and backend/data-heavy applications.",
  ],

  // Small stat cards shown next to the About text.
  aboutStats: [
    { label: "Degree", value: "B.Sc. SE & Applied Math" },
    { label: "GPA", value: "85" },
    { label: "Projects", value: "6+" },
    { label: "Grad. Year", value: "2026" },
  ],

  // Contact + social links.
  links: {
    email: "shadikeesha@gmail.com",
    linkedin: "https://www.linkedin.com/in/shadi-alkeesh-96abb2276",
    github: "https://github.com/shadi159",
  },

  // CV file in the public folder.
  cvPath: "/Shadi_Alkeesh_CV.pdf",

  // Hero profile photo.
  profileImage: "/img2.jpeg",
};

export type SiteConfig = typeof siteConfig;
