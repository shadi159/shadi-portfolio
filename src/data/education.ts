/**
 * Education data. Grades are intentionally left as "XX" placeholders —
 * replace them with your real grades once you have them.
 */

export interface Course {
  name: string;
  grade: string; // keep as "XX" until you have a real grade
}

export const degree = {
  title: "B.Sc. in Software Engineering and Applied Mathematics",
  institution: "Braude College of Engineering",
  gpa: "85",
  graduationYear: "2026",
};

export const relevantCourses: Course[] = [
  { name: "Introduction to Computer Science", grade: "87" },
  { name: "Discrete Mathematics", grade: "100" },
  { name: "Digital Systems", grade: "96" },
  { name: "Data Structures", grade: "80" },
  { name: "Object-oriented programming", grade: "83" },
  { name: "Software Testing", grade: "86" },
  { name: "Automata and Computability", grade: "82" },
  { name: "Cryptography", grade: "100" },
  { name: "Introduction to Artificial Intelligence", grade: "86" },
  { name: "Data mining", grade: "91" },
  { name: "Introduction to Cloud Computing", grade: "97" },
  { name: "Generative deep learning", grade: "100" },
  { name: "Embedded systems", grade: "96" },
  { name: "Data Analysis Lab", grade: "93" },
  { name: "Requirements Engineering", grade: "91" },
  { name: "Game Theory", grade: "99" },
  { name: "Software Engineering Final Project", grade: "100" },
  { name: "Applied Mathematics Final Project", grade: "98" },

];
