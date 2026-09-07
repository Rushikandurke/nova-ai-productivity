# NOVA - AI Productivity Platform

NOVA is a polished, fully responsive company landing page created for a front-end development assignment. The fictional product combines project management, AI-assisted planning, workflow automation and team collaboration.

## Live demo

The deployed project URL is provided with the submitted assignment.

## Technologies used

- React 19 with TypeScript
- Next.js-compatible Vinext application structure
- Tailwind CSS foundation with custom responsive CSS
- Lucide React icons
- Semantic HTML and accessible interactive controls

## Features

- Responsive navigation with a mobile hamburger menu and working anchor links
- Modern hero with an original product dashboard preview
- Trusted-company strip, six feature cards and product overview
- Three-step product workflow and animated statistics
- Use-case cards for product, marketing and engineering teams
- Three-item testimonial carousel
- Three pricing plans with monthly/annual billing toggle
- Six-question accessible FAQ accordion
- Demo modal, dark/light mode and scroll reveal animations
- Validated newsletter form and back-to-top button
- Responsive layouts for desktop, laptop, tablet and mobile
- Reduced-motion support, focusable controls and descriptive labels

## Installation

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal. For a production build, run `npm run build`.

## Screenshots

Add exported desktop and mobile screenshots here before submitting the GitHub repository. The live implementation is the source of truth for the final design.

## Design decisions

The visual direction uses a confident violet accent, dense-but-readable typography, generous whitespace and an editorial product-dashboard hero. Reusable data arrays render repeated features, solutions, pricing plans, testimonials and FAQs, which keeps the code concise and makes content easy to update. Dark mode uses the same visual hierarchy with separate surface and border tokens.

## Component structure

- `Home` owns page-level interaction state and renders all required sections.
- `Nav` handles responsive navigation and theme controls.
- `DashboardPreview` builds the hero product interface.
- `SectionHeading`, `Stat` and `Logo` provide reusable UI patterns.
- `DemoModal` handles the interactive product-tour overlay.
- Content collections map into reusable cards and accordion items.

## Challenges and solutions

The main challenge was showing a realistic software product without relying on a stock screenshot. The dashboard is constructed entirely from semantic React markup and responsive CSS, keeping it sharp at every size. Mobile layouts progressively simplify dense interface details while preserving the core message and preventing horizontal scrolling.

## Accessibility and performance

Controls include accessible names, expanded states and semantic navigation. Color contrast, readable font sizes, keyboard-focusable elements and reduced-motion preferences are supported. The page uses no large image payloads; icons are lightweight SVG components and animation work is activated with Intersection Observer.

## AI tools used

OpenAI Codex was used to interpret the assignment, assist with design exploration, generate the initial React/CSS implementation and review code quality. All implementation choices and code should be understood and reviewed by the submitting developer before the interview.

## Future production improvements

A production version would connect forms to a real backend, replace placeholder destinations with application routes, add analytics and error monitoring, run automated accessibility tests, add authentication, and connect live project and billing APIs.
