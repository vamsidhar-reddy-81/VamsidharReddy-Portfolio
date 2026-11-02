<div align="center">

# Vamsidhar Reddy | Portfolio

**AI & ML student · Python developer · Project-driven learner**

[![Live Site](https://img.shields.io/badge/Live%20Site-Visit-e50914?style=for-the-badge)](https://vamsidhar-reddy-81.github.io/Vamsidhar-Portfolio-/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-121013?style=for-the-badge&logo=github&logoColor=white)

</div>

My personal portfolio website, built from scratch with **plain HTML, CSS and JavaScript** (no frameworks, no build step). It presents who I am, my internship, education, projects, certificates, skills and coding profiles in one fast, responsive, animated page.

**Live site:** https://vamsidhar-reddy-81.github.io/Vamsidhar-Portfolio-/

---

## Table of contents

1. [About this project](#about-this-project)
2. [Sections](#sections)
3. [Features and animations](#features-and-animations)
4. [Design system](#design-system)
5. [Tech stack](#tech-stack)
6. [How it works](#how-it-works)
7. [Folder structure](#folder-structure)
8. [What is shown on the site](#what-is-shown-on-the-site)
9. [Run locally](#run-locally)
10. [Deploy on GitHub Pages](#deploy-on-github-pages)
11. [How to customize](#how-to-customize)
12. [Browser support and notes](#browser-support-and-notes)
13. [Future improvements](#future-improvements)
14. [Acknowledgements](#acknowledgements)
15. [Contact](#contact)

---

## About this project

I am a 3rd-year B.Tech student (Artificial Intelligence & Machine Learning) who learns by building. This portfolio is my main online profile. I am looking for a **Python Developer** role or internship, with the goal of growing into an AI / Generative AI engineer.

**Goals of this site**

- Show real work (projects with live demos and source code) instead of only describing skills
- Make my certificates and coding profiles easy to verify
- Stay lightweight: no framework, no build tools, works by simply opening `index.html`
- Look good and work smoothly on desktop, tablet and mobile

## Sections

| # | Section | What it shows |
|---|---|---|
| 1 | **Home** | Name, typing animation, short intro, social links (GitHub, LinkedIn, LeetCode), Download CV, profile photo |
| 2 | **About** | Short introduction and four strengths: project-driven learning, collaboration, practical innovation, rapid adaptation |
| 3 | **Experience** | Python Programming internship at KODBUD (certificate opens in a popup) and an education timeline |
| 4 | **Projects** | HabitGrid, Live Weather App, Personal Portfolio, RFID Door Locking System, each with tech tags, source code and live demo |
| 5 | **Achievements & Certifications** | Carousel of certificate cards that flip on hover to reveal the certificate |
| 6 | **Technical Arsenal** | Skill cards that flip on hover to show how I use each skill |
| 7 | **Coding Stats Hub** | Animated total problems solved plus GeeksforGeeks, LeetCode and HackerRank cards |
| 8 | **Contact** | Email, social links and a message form |

## Features and animations

**Interaction**

- **Custom cursor:** a small red dot follows the mouse instantly while a ring follows with a smooth delay (automatically disabled on touch devices)
- **Animated background:** soft red particle network that reacts to the mouse, plus slow drifting glows (pauses when the tab is hidden and respects reduced-motion settings)
- **3D tilt and red spotlight** on project and stat cards, magnetic buttons, shine effect on buttons
- **Scroll progress bar**, shrinking navbar and back-to-top button
- **Tech marquee** and animated hero stats
- **Typing animation** in the hero (`a Problem Solver`, `an ML Enthusiast`, `a Python Developer`)
- **Active navigation link** updates while scrolling and the navbar has a blur (glass) effect
- **Mobile menu** with a hamburger button

**Scroll animations**

- Content fades and slides in when it enters the screen
- Section headings reveal with a left-to-right wipe
- Education timeline: the red line grows, dots pop in and cards slide in from the left and right
- Skill cards appear one after another (staggered)
- Total problems solved **counts up** when the section is visible

**Cards and popups**

- **3D flip cards** for certificates and skills (hover to flip)
- **Certificate carousel:** 3 cards per page on desktop, arrows and dots, auto-slides every 6 seconds, swipe/scroll on mobile
- **Certificate popup (lightbox):** opens from Experience and always fits the screen (no scrolling), the page behind stays locked, click anywhere / press `Esc` / tap the close button to return
- **Resume popup:** Download CV shows a preview of the resume and downloads the PDF; a Download PDF button is inside the popup
- Google AI Essentials card opens the Credly verification page when clicked
- Project cards zoom slightly on hover, project images zoom inside the card

**Responsive**

- Layout adapts for screens below 900 px (stacked sections, mobile menu, horizontal swipe for certificates, 2-column skills)

## Design system

| Item | Value |
|---|---|
| Background | `#121212` |
| Cards | `#222222` |
| Accent red | `#e50914` (headings use `#c6111b`) |
| Muted text | `#9a9a9a` |
| Headings font | Roboto (700, 900) |
| Body font | Poppins (300 to 600) |

All colors are CSS variables at the top of `css/style.css` (`--bg`, `--card`, `--red`, `--rt`, `--mut`, `--bd`), so the whole theme can be changed in one place.

## Tech stack

| Technology | Why it is used |
|---|---|
| **HTML5** | Page structure with semantic sections |
| **CSS3** | Flexbox, Grid, CSS variables, 3D transforms, `clip-path`, `backdrop-filter`, media queries |
| **JavaScript (vanilla)** | Cursor, typing effect, carousel, flip cards, popup, scroll observers, counters |
| **Font Awesome (local copy)** | UI icons (works even when the CDN is blocked) |
| **Devicon / Simple Icons (SVG files)** | Skill and platform logos stored in `images/` |
| **Google Fonts** | Roboto and Poppins |
| **GitHub Pages** | Free hosting |

## How it works

- **`index.html`** contains the structure of the eight sections.
- **`css/style.css`** contains the theme variables, layout, hover effects and all animations. Animations that hide content before it appears are only applied after JavaScript adds a `js` class to the page, so content is never hidden if JavaScript fails.
- **`js/script.js`** is data-driven:
  - `C` is the list of certificates (icon, title, issuer, optional verify link). Certificate card `n` loads `certs/n.png`.
  - `S` is the list of skills with the text shown on the back of each card.
  - `IntersectionObserver` is used for scroll reveal, active navigation, heading wipe and the counter.
  - The certificate popup is created once and reused for any element that has a `data-c` attribute.
- **Contact form:** opens the visitor's email app with the name and message filled in (`mailto:`), so no server or API key is needed.

## Folder structure

```
Vamsidhar-Portfolio-/
├── index.html                    # Page structure (8 sections)
├── css/
│   └── style.css                 # Theme, layout, animations, responsive rules
├── js/
│   └── script.js                 # Interactions and data lists (certificates, skills)
├── certs/
│   ├── 1.png ... 7.png           # Certificates shown in the carousel
│   ├── 8.png                     # (add) Deloitte Data Analytics certificate
│   └── kodbud.png                # Internship certificate (Experience popup)
├── images/
│   ├── skills/                   # Skill logos (SVG)
│   ├── platforms/                # GeeksforGeeks, LeetCode, HackerRank logos (SVG)
│   ├── projects/                 # Project images: habitgrid, weather, portfolio, rfid
│   └── resume.png                # Resume preview image shown in the popup
├── vendor/
│   └── fontawesome/              # Font Awesome CSS and webfonts (local)
├── image.png                     # Profile photo
├── Vamsidhar_Reddy_Resume.pdf    # Resume (Download CV shows a preview popup and downloads it)
└── README.md
```

## What is shown on the site

### Experience

| Role | Organization | Period |
|---|---|---|
| Python Programming Intern | KODBUD (AICTE approved), Remote | Jun 2026 to Jul 2026 (8 weeks) |

### Education

| Course | Institution | Year | Score |
|---|---|---|---|
| B.Tech, Artificial Intelligence & Machine Learning | Tirumala Engineering College | 2025 to 2028 | CGPA 7.55 |
| Diploma, Electronics & Communication Engineering | CBIT, Proddatur | 2022 to 2025 | 79.4% |
| Secondary School Certificate (SSC) | AP Model School, Dharmavaram | 2022 | 425/600 |

### Projects

| Project | Description | Tech | Links |
|---|---|---|---|
| **HabitGrid** | Mobile-first habit tracker with streaks, progress ring, calendar history, analysis and Excel export | HTML, CSS, JavaScript, SheetJS | [Code](https://github.com/vamsidhar-reddy-81/HabitGrid) · [Live](https://vamsidhar-reddy-81.github.io/HabitGrid/) |
| **Live Weather App** | Search any city and see live temperature, humidity and wind speed | HTML, CSS, JavaScript, Weatherstack API | [Code](https://github.com/vamsidhar-reddy-81/Live-Weather-App) · [Live](https://vamsidhar-reddy-81.github.io/Live-Weather-App/) |
| **Personal Portfolio** | My first portfolio, designed from scratch and deployed on GitHub Pages | HTML, CSS, JavaScript | [Code](https://github.com/vamsidhar-reddy-81/My-Portfolio) · [Live](https://vamsidhar-reddy-81.github.io/My-Portfolio/) |
| **RFID Door Locking System** | Arduino program that allows access only to authorised RFID cards | Arduino, RFID | [Repositories](https://github.com/vamsidhar-reddy-81?tab=repositories) |

### Certifications

| Certificate | Issuer | Date |
|---|---|---|
| Software Engineering Job Simulation | JPMorgan Chase & Co. (Forage) | Jun 2026 |
| Technology Job Simulation | Deloitte (Forage) | Jun 2026 |
| Introduction to Data Science Job Simulation | Commonwealth Bank (Forage) | Jun 2026 |
| Data Analytics Job Simulation | Deloitte (Forage) | May 2026 |
| Google AI Essentials | Google, Coursera ([verify](https://www.credly.com/badges/55d2793c-3941-48ed-9a39-5656b44621db/linked_in?t=tfrz62)) | May 2026 |
| What Is Generative AI? | LinkedIn Learning | May 2026 |
| Python (Kaggle course) | Kaggle | Sep 2026 |
| Java (Basic) | HackerRank | Jun 2026 |
| Python Programming Internship | KODBUD | Aug 2026 |

### Skills

Python · Java · HTML5 · CSS3 · JavaScript · Git · GitHub · VS Code (plus SheetJS and Arduino used in projects)

### Coding profiles

| Platform | Stats | Profile |
|---|---|---|
| GeeksforGeeks | 23 problems solved, coding score 39, institute rank 43 | [mvamsidhdeiy](https://www.geeksforgeeks.org/profile/mvamsidhdeiy) |
| LeetCode | 2 problems solved | [Vamsidhar-Reddy-81](https://leetcode.com/u/Vamsidhar-Reddy-81/) |
| HackerRank | Python (2 stars), C language (2 stars), Java (Basic) certified | [m_vamsidhar20061](https://www.hackerrank.com/profile/m_vamsidhar20061) |

## Run locally

1. Clone the repository
   ```bash
   git clone https://github.com/vamsidhar-reddy-81/Vamsidhar-Portfolio-.git
   cd Vamsidhar-Portfolio-
   ```
2. Open `index.html` in your browser (double click is enough, no server or install needed).

Internet is only needed for the Google Fonts (Roboto and Poppins). Everything else is stored in the repository.

## Deploy on GitHub Pages

1. Push the files to a repository (`index.html` must be in the root).
2. Go to **Settings → Pages**.
3. Under **Source** choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
4. After a minute the site is live at `https://<username>.github.io/<repository-name>/`.

## How to customize

| What to change | Where |
|---|---|
| Profile photo | Replace `image.png` (square image works best) |
| Resume | Replace `Vamsidhar_Reddy_Resume.pdf` (keep the same file name) |
| Add a certificate | Add an entry to the `C` list in `js/script.js` and save the image as `certs/<position>.png` |
| Skill descriptions | Edit the `S` list in `js/script.js` |
| Add or edit a project | Copy one `<div class="pj rv">` block in `index.html` and change the text, links and image |
| Project images | Put images in `images/projects/` |
| Typing texts | Edit the `R` list in `js/script.js` |
| Coding stats | Edit the numbers inside `<section id="stats">` in `index.html` (and `data-to` for the total) |
| Colors and fonts | Edit the CSS variables at the top of `css/style.css` |

## Browser support and notes

- Works in the latest versions of Chrome, Edge, Firefox and Safari.
- Uses modern features: CSS Grid, `clip-path`, `backdrop-filter`, `IntersectionObserver`.
- The custom cursor is only shown on devices with a mouse.
- The contact form uses `mailto:`, so it opens the visitor's email app instead of sending the message directly.
- A missing image never breaks the layout: the profile photo, project images and certificates fall back to a placeholder.

## Future improvements

- Send contact messages directly from the page using a form service instead of `mailto:`
- Add a light / dark theme switch
- Add project screenshots and short demo videos
- Add a blog or notes section for what I learn
- Add Generative AI / ML projects as I build them

## Acknowledgements

- Icons: [Font Awesome](https://fontawesome.com/) (free), [Devicon](https://devicon.dev/), [Simple Icons](https://simpleicons.org/)
- Fonts: [Google Fonts](https://fonts.google.com/) (Roboto, Poppins)
- Hosting: [GitHub Pages](https://pages.github.com/)

## Contact

| | |
|---|---|
| **Name** | Morreddy Gari Vamsidhar Reddy |
| **Email** | m.vamsidhar20061@gmail.com |
| **LinkedIn** | [Morreddy Gari Vamsidhar Reddy](https://www.linkedin.com/in/morreddy-gari-vamsidharreddy-4b0640378/) |
| **GitHub** | [vamsidhar-reddy-81](https://github.com/vamsidhar-reddy-81) |
| **LeetCode** | [Vamsidhar-Reddy-81](https://leetcode.com/u/Vamsidhar-Reddy-81/) |

---

<div align="center">

Designed and built by **Vamsidhar Reddy** · © 2026

If you like this project, a ⭐ on the repository is appreciated.

</div>
