# Claude Context Document

This document provides context for AI agents working on this portfolio and blog website.

## Project Overview

**Purpose**: Personal portfolio and technical blog for Akshay Sharma
**Live URL**: https://imakshay.me
**Hosting**: GitHub Pages
**Repository**: akshaysharma-akay.github.io

## Project Type

**Hybrid Static Site:**
- Portfolio homepage (HTML/CSS/JS)
- Jekyll-powered blog (Markdown → HTML)
- Automated deployment via GitHub Actions

## Technology Stack

### Frontend
- **Portfolio**: HTML5, Tailwind CSS (CDN), Vanilla JavaScript
- **Blog Engine**: Jekyll 4.4.1, Liquid templating
- **Fonts**: Inter (Google Fonts)
- **Icons**: Font Awesome 6.0
- **Animations**: Animate.css 4.1.1

### Deployment
- **Platform**: GitHub Pages
- **CI/CD**: GitHub Actions (`.github/workflows/jekyll.yml`)
- **Build Process**:
  1. Trigger on push to `main`/`master`
  2. Setup Ruby 3.2 environment
  3. Build Jekyll site from `blog/` → `_site/blog/`
  4. Copy portfolio files to `_site/`
  5. Deploy unified site to GitHub Pages

### Content Management
- **Blog Posts**: Markdown files in `blog/_posts/`
- **Naming Convention**: `YYYY-MM-DD-title-slug.md`
- **Front Matter**: YAML (title, date, categories, tags, excerpt, cover_image)

## Directory Structure

```
/
├── index.html                    # Portfolio homepage
├── assets/
│   └── styles/
│       ├── layout.css           # CSS variables & global styles
│       └── header.css           # Header component styles
├── blog/
│   ├── _config.yml              # Jekyll configuration
│   ├── _layouts/
│   │   ├── default.html         # Base layout (header, footer, nav)
│   │   └── post.html            # Article layout with sticky TOC
│   ├── _posts/                  # Blog articles (Markdown)
│   ├── index.html               # Blog homepage
│   └── Gemfile                  # Ruby dependencies
├── .github/workflows/
│   └── jekyll.yml               # Deployment automation
└── claude.md                    # This file
```

## Design System

### Color Palette (from `assets/styles/layout.css`)

**Primary Brand:**
- `--color-primary: #3B82F6` (Vibrant blue)
- `--color-primary-hover: #2563EB` (Darker blue)
- `--color-secondary: #8B5CF6` (Purple accent)

**Text:**
- `--color-text-primary: #0A0A0A` (Rich black for headings)
- `--color-text-secondary: #3F3F46` (Dark gray for body)
- `--color-text-muted: #71717A` (Muted gray for metadata)

**Code:**
- `--color-code-bg: #FAFAF9` (Warm stone background)
- `--color-code-inline-bg: #FEF3C7` (Yellow highlight)
- `--color-code-inline-text: #92400E` (Amber text)

**Borders:**
- `--color-border-light: #E5E7EB`
- `--color-border-medium: #D1D5DB`

### Typography

**Font Family**: Inter (weights: 300, 400, 500, 600, 700, 800)

**Heading Hierarchy:**
- H1: `2.25rem` (36px) - Article titles
- H2: `1.5rem` (24px) - Major sections (with bottom border)
- H3: `1.125rem` (18px) - Subsections
- H4: `1rem` (16px) - Minor headings
- Body: `1rem` (16px), `line-height: 1.7`

### Component Patterns

**Tags**: Gradient blue pills with rounded corners
**Links**: Blue with underline on hover
**Code blocks**: Stone background with monospace font
**Inline code**: Yellow highlight with amber text
**Blockquotes**: Blue left border with light gray background
**Lists**: Custom blue bullets/numbers

## Blog Post Layout Features

### Sticky Table of Contents (TOC)

**Desktop:**
- Sidebar positioned on the right
- Sticky positioning (follows scroll)
- Auto-generated from H2 headings
- Active section highlighting (scroll spy)
- Smooth scroll to sections

**Mobile (<1024px):**
- Stacked layout (TOC above content)
- Gradient background box
- Full width

**JavaScript**: Auto-generates TOC using Intersection Observer API for scroll spy

### Cover Images

**Notion-style full-width covers:**
- Add `cover_image` to front matter
- Full viewport width
- Fixed height with object-fit cover
- Appears above article header

## Writing Workflow

### Adding a New Blog Post

1. Create file: `blog/_posts/YYYY-MM-DD-title-slug.md`
2. Add front matter:
   ```yaml
   ---
   layout: post
   title: "Your Article Title"
   date: YYYY-MM-DD HH:MM:SS +0000
   categories: [category1, category2]
   tags: [tag1, tag2]
   excerpt: "Short description for SEO and previews"
   cover_image: /blog/assets/images/covers/your-image.jpg
   ---
   ```
3. Write content in Markdown
4. Commit and push to `main`/`master`
5. GitHub Actions automatically builds and deploys

### Markdown Tips

- Use H2 (`##`) for major sections (auto-added to TOC)
- Use H3 (`###`) for subsections
- Code blocks: Triple backticks with language
- Inline code: Single backticks
- Lists render with custom blue bullets/numbers

## Common Tasks

### Local Development

```bash
cd blog
bundle install
bundle exec jekyll serve
# Visit http://localhost:4000/blog/
```

### Building Locally

```bash
cd blog
bundle exec jekyll build
# Output in blog/_site/
```

### Viewing Portfolio

```bash
# Open index.html directly or use a local server
python3 -m http.server 8000
# Visit http://localhost:8000/
```

## Design Philosophy

**Goals:**
- **Writer-focused**: Markdown-first, minimal friction
- **Professional**: Clean, modern tech documentation aesthetic
- **Readable**: Comfortable typography, good spacing
- **Fast**: Static site, minimal JavaScript
- **Maintainable**: Simple structure, standard tools

**Inspiration:**
- GitHub Docs (clean headings with borders)
- Stripe Docs (professional typography, blue accents)
- Linear Blog (modern spacing, gradient touches)
- Vercel Blog (sharp text, excellent readability)

## File Modification Guidelines

### When editing layouts:

**`blog/_layouts/post.html`:**
- Contains all article styling (inline `<style>` block)
- Includes sticky TOC styles and responsive breakpoints
- JavaScript at bottom for TOC generation and scroll spy
- Don't modify HTML structure without testing TOC functionality

**`blog/_layouts/default.html`:**
- Base template with header, footer, nav
- Tailwind CSS for utility classes
- Mobile menu toggle JavaScript
- Gradient sections for "Let's Connect" and banner

**`assets/styles/layout.css`:**
- CSS custom properties (variables)
- Global styles (scroll-behavior, body defaults)
- Reference this for consistent colors

### When editing blog posts:

- **Never change layout or design in Markdown files**
- Keep front matter consistent
- Use H2 for sections (TOC generation)
- Use H3 for subsections
- Test locally before pushing

## Navigation Structure

**Portfolio → Blog:**
- Home icon in header
- "BLOG" link in nav
- "Read More Articles" CTA

**Blog → Portfolio:**
- Home icon returns to root
- "PROJECTS" link in nav

**Within Blog:**
- Sticky TOC for section navigation
- Footer with publication date
- "Let's Connect" section at bottom

## Git Workflow

**Main Branch**: `master` (also accepts `main`)
**Deployment Branch**: Automatic from GitHub Actions
**Typical Workflow:**
1. Make changes locally
2. Test with Jekyll serve
3. Commit to `master`
4. Push triggers automatic deployment
5. Live in ~2-3 minutes

## Contact & Social Links

- **Email**: akshaysharmaak2@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/akshay-sharma-akay/
- **GitHub**: https://github.com/AkshaySharma-Akay

## Special Notes for AI Agents

### DO:
- ✅ Maintain consistent color scheme from CSS variables
- ✅ Use existing component patterns (tags, links, code blocks)
- ✅ Test responsive behavior (desktop + mobile)
- ✅ Preserve TOC functionality when editing layouts
- ✅ Keep Markdown workflow simple for the user
- ✅ Follow existing heading hierarchy
- ✅ Use Inter font family consistently

### DON'T:
- ❌ Break the sticky TOC sidebar layout
- ❌ Change the deployment workflow without testing
- ❌ Add dependencies without justification
- ❌ Complicate the Markdown writing experience
- ❌ Override Tailwind classes unnecessarily
- ❌ Remove scroll spy or smooth scroll functionality
- ❌ Change color scheme without updating variables

## Performance Considerations

- **Static Site**: No database, no server-side processing
- **CDN Assets**: Tailwind, Font Awesome, Animate.css from CDN
- **Minimal JS**: Only for mobile menu toggle and TOC functionality
- **Image Optimization**: Use compressed images for cover images
- **Font Loading**: Google Fonts with display=swap

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards

## Future Improvements (Consider These)

- Add dark mode toggle
- Implement search functionality
- Add reading time estimates
- RSS feed optimization
- Image lazy loading
- Social sharing buttons
- Related posts recommendations
- Comment system (maybe)

## Questions to Ask the User

When uncertain, ask about:
1. **Scope**: Is this a quick fix or major redesign?
2. **Breaking changes**: Will this affect existing blog posts?
3. **Testing**: Should I test on mobile breakpoints?
4. **Dependencies**: Should I add new libraries/tools?
5. **Content**: Should I modify existing articles?

## Last Updated

**Date**: 2025-12-13
**By**: Claude Sonnet 4.5
**Changes**: Initial creation with comprehensive project context

---

**Remember**: This is a personal portfolio/blog focused on simplicity and maintainability. The user values being able to write in Markdown and have things "just work." Keep that philosophy in mind for all changes.
