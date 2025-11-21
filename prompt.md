You are an expert front-end developer and product designer specializing in premium, modern, animated portfolio websites.

I (the user) have all my current portfolio content extracted into a single markdown file. That markdown file contains all sections, text, projects, experiences, etc. You will use ONLY that content (unless I explicitly ask to add more) and design a totally new portfolio with a very different look and feel.

1. Context & Goal

I want a new portfolio website that:

Feels premium, like a designer crafted it brick by brick.

Has a minimal, modern, boxy layout (cards, sections, clean grids).

Uses smooth, tasteful animations on scroll and on hover.

Has amazing components (project cards, timelines, testimonials, etc.).

Looks like websites that win design awards.

Some visual and interaction inspirations (DO NOT copy; only use for style direction):

https://portfolio-25-phi.vercel.app/

https://web3.xmethod.de/

https://innostart.framer.website/

https://www.awwwards.com/websites/portfolio/

My content is in: portfolio-content.md
(Assume you can read this file. It includes all the text I want to show.)

2. Tech & Constraints

Unless I explicitly change this, use:

Framework: Next.js (App Router) with TypeScript

Styling: Tailwind CSS

Animations: Framer Motion

UI: Use a boxy, card-based, minimal layout (inspired by modern award-winning sites).

General rules

The design should be:

Fully responsive (mobile → tablet → desktop).

Fast (good performance, avoid overkill animations).

Accessible (semantic HTML, proper contrast, focus states, aria where needed).

Code should be:

Well-structured, clean, and modular.

With clear file/folder structure and comments where helpful.

3. Workflow – DO THIS STEP BY STEP

Do NOT jump straight to full code.
Follow these phases in order, and wait for my approval after each phase before going ahead.

Phase 1 – Understand & Structure Content

Read portfolio-content.md.

Extract and summarize:

My sections (About, Skills, Projects, Experience, Achievements, etc.).

All important content pieces (headings, subpoints, descriptions).

Propose a clear sitemap / information architecture as a markdown list, for example:

Home

About

Experience

Projects

Skills

Achievements / Awards

Contact

Ask me for confirmation or edits on:

The sitemap

Section order

Anything unclear in the content

Output for this phase:
A concise summary of content + proposed sitemap in markdown.

Phase 2 – Visual Direction & Layout Concept

After sitemap is approved:

Propose 2–3 high-level visual directions, e.g.:

Option A: Light theme, soft neutrals, subtle glassmorphism.

Option B: Dark premium theme, high contrast, neon accents.

Option C: Mixed theme with clear section separation.

For the chosen direction, define:

Color palette (primary, background, accent, text).

Typography (heading font style, body font style, approximate scale).

Spacing & layout philosophy (boxy/grid, container widths, section padding).

Animation style:

On scroll: e.g., fade-up, slide-in, staggered cards.

On hover: e.g., subtle scale, border/outline, background shift.

Show rough wireframe descriptions (no need for images, just textual/ASCII explanation) for:

Hero section

Projects section

About / Experience section

Contact / CTA section

Output for this phase:
Visual direction + color/typography choices + section-by-section layout description.

Phase 3 – Component Inventory & UX Details

Once the visual direction is approved:

Create a component inventory as a list, e.g.:

Navbar

Footer

SectionWrapper (for scroll animations)

HeroSection

ProjectCard

TimelineItem (for experience)

StatCard (for achievements / numbers)

TestimonialCard (if any)

ContactForm / ContactBlock

Tag components (for skills/tech stack)

For each component, describe:

Purpose

Main props (data it needs)

How it will animate (if applicable)

Output for this phase:
A markdown table or list describing each component and its behavior.

Phase 4 – Implementation Plan

Before writing full code:

Propose the file structure, for example:

/app
  /page.tsx
  /about/page.tsx
  /projects/page.tsx
/components
  /layout/Navbar.tsx
  /layout/Footer.tsx
  /ui/SectionWrapper.tsx
  /ui/ProjectCard.tsx
  ...
/lib
  /content.ts
/styles
  /globals.css


Explain:

How the content from portfolio-content.md will be structured in code (e.g. as JSON / TS config objects).

Where animations are handled (SectionWrapper? Per component?).

Any reusable layout patterns (containers, grids, etc.).

Output for this phase:
File/folder structure + explanation of data flow & animation strategy.


Phase 5 – Code Generation (Step-by-Step)

Now start writing code in small, reviewable chunks, in this order:

Base setup

Tailwind config

Global styles

Layout component (root layout, fonts, <html> structure)

Basic light/dark theme handling if used

Shell & Navigation

Navbar with links to main sections/pages

Footer with minimal info + links

Hero Section

Premium, boxy layout

Clear introduction (name, role, short blurb)

Primary CTA(s) (View Projects, Download Resume, Contact)

Initial animations (Framer Motion)

Projects Section

Responsive grid of project cards

Each card: title, description, tech stack, links

Scroll + hover animations (staggered entrance, subtle hover)

About / Experience / Skills

Timeline or cards for experience

Boxy cards for skills / tech tags

Animated appearance on scroll

Achievements / Stats (if in content)

Stat cards or highlight section

Simple count-up or reveal animations (optional)

Contact Section

Contact form or CTA block

Links to email, LinkedIn, GitHub, etc.

At each step:

Explain briefly what you’re doing.

Show only the relevant files or diffs.

Ensure the code is consistent with previous decisions.

Phase 6 – Polish, Performance, and Accessibility

After main pages are implemented:

Optimize for:

Performance (avoid heavy/unnecessary libraries, proper image usage).

Accessibility (semantic tags, alt text, aria where needed).

Refine micro-interactions:

Hover states for buttons & links.

Slight scroll parallax or depth where appropriate (but not overdone).

Suggest:

Any small content tweaks to make the UX clearer (without changing my core content).

Provide a final checklist of:

 All breakpoints checked (mobile, tablet, desktop)

 Animations smooth and not janky

 Lighthouse-like performance/accessibility considerations

 Navigation clear and intuitive

Important Interaction Rules

Always work phase by phase and wait for my feedback before moving on.

At every phase, explicitly ask:

“Do you approve this phase?”

“Do you want any changes before we continue?”

If something from my content is unclear, ask before guessing.