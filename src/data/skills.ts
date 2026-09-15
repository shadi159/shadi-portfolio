/**
 * Skills data — add, remove, or edit entries in each category.
 * No proficiency percentages are used since those weren't provided;
 * skills are shown as clean badges instead.
 */

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    skills: ["Python", "C", "C#", "Java", "JavaScript", "TypeScript"],
  },
  {
    id: "web",
    title: "Web Development",
    skills: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    id: "data-math",
    title: "Data & Mathematics",
    skills: ["NumPy", "Pandas", "MATLAB", "Data Structures & Algorithms"],
  },
  {
    id: "tools",
    title: "Tools & Development",
    skills: ["Git", "GitHub", "VS Code", "PyCharm"],
  },
];
