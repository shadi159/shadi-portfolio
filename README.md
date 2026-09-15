# Shadi Alkeesh — Portfolio Website

A modern, professional portfolio built with **React + TypeScript + Tailwind CSS + Vite**.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```text
src/
├── components/     Reusable UI pieces (Navbar, Hero, About, Skills, Education,
│                   ProjectCard, Contact, Footer, SectionHeading, Reveal, ScrollToTop)
├── pages/          Route-level pages (Home, Projects, ProjectDetails)
├── data/           Edit these files to update your content — no JSX editing needed
│   ├── siteConfig.ts   Name, role, bio text, email, LinkedIn, GitHub, CV path
│   ├── skills.ts        Skill categories and badges
│   ├── education.ts     Degree info and relevant courses/grades
│   └── projects.ts      All project cards + project detail pages
├── context/        Theme (dark/light) context, persisted to localStorage
├── hooks/          Scroll-reveal animation + hash-scrolling hooks
├── App.tsx         Routes + layout (Navbar / page content / Footer)
├── main.tsx        App entry point
└── index.css       Tailwind layers + design tokens (grid background, buttons, cards)
```

## Where to put your CV

Put your CV PDF at:

```text
public/Shadi-Alkeesh-CV.pdf
```

The "Download CV" button in the Hero section already points to `/Shadi-Alkeesh-CV.pdf`
(see `cvPath` in `src/data/siteConfig.ts`) — just drop the file in and it works.

## Where to change your personal info

Open **`src/data/siteConfig.ts`** and edit:

- `heroIntro` — your intro paragraph on the homepage
- `aboutParagraphs` — your About Me text (currently placeholder paragraphs)
- `aboutStats` — the small stat cards next to the About text
- `links.email`, `links.linkedin`, `links.github` — replace the placeholder URLs/email
- `cvPath` / `profileImage` — CV file path and an optional profile photo

## Where to add or edit skills

Open **`src/data/skills.ts`** and add/remove entries inside each category's `skills` array,
or add a whole new category object.

## Where to update education / grades

Open **`src/data/education.ts`**:

- `degree` — your degree title, institution, GPA, graduation year
- `relevantCourses` — replace the `"XX"` placeholders with your real grades

## Where to add or edit projects

Open **`src/data/projects.ts`**. Each object in the `projects` array becomes a card on
`/projects` and a full detail page at `/projects/<id>`. To add a new project, copy an
existing object and change the `id` (used in the URL), `title`, `technologies`, and the
`overview` / `problem` / `solution` / `contribution` / `challenges` / `results` fields.

To add screenshots: put image files in `public/` (e.g. `public/projects/my-project/1.png`)
and reference them in the project's `image` and `screenshots` fields.

## Dark / light mode

Toggled from the navbar (sun/moon icon) and remembered via `localStorage`. Colors for
both modes live in `tailwind.config.ts` and `src/index.css`.

## Deploying

This is a static Vite app, so any static host works well:

- **Vercel / Netlify**: connect the repo, build command `npm run build`, output directory `dist`
- **GitHub Pages**: run `npm run build`, then deploy the `dist/` folder (you may need to set
  a `base` path in `vite.config.ts` if deploying to a subpath like `username.github.io/repo`)

## Notes

- All personal details, project results, grades, and screenshots are left as clearly marked
  placeholders (`[PLACEHOLDER]`, `XX`, `[Add ... here]`) — nothing was invented. Search the
  `src/data/` folder for these markers and replace them with your real information.
