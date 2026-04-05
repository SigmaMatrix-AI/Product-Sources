---
name: frontend-slides
description: Create beautiful HTML/CSS presentation slides. Use when the user wants to build a slide deck, presentation, or visual slideshow in HTML/CSS. Supports importing from PPTX, applying style presets, and adding animations.
---

# Frontend Slides Skill

Create polished, interactive HTML/CSS presentation slides with viewport-based layouts, style presets, and smooth animations.

## Overview

This skill produces self-contained HTML files — one file per slide deck — that run in any browser without dependencies. Slides use viewport units for resolution-independent rendering.

## Workflow

Make a todo list for all the tasks in this workflow and work through them one by one.

### 1. Gather Content

**From scratch:** Ask the user for:
- Topic / title
- Key points or outline
- Preferred style preset (see STYLE_PRESETS.md)
- Number of slides (approximate)

**From PPTX:** If the user provides a `.pptx` file, run the extraction script:
```bash
python3 ~/.claude/skills/frontend-slides/scripts/extract-pptx.py <file.pptx>
```
This outputs structured JSON with slide titles, body text, speaker notes, and image references.

### 2. Choose a Style Preset

Refer to `STYLE_PRESETS.md` for available presets:
- `dark-pro` — Dark background, vibrant accents (default)
- `light-clean` — White background, minimal design
- `gradient-bold` — Full-bleed gradient backgrounds
- `corporate` — Navy/gray professional palette
- `neon` — Dark with neon highlights

Apply the preset's CSS variables to the `:root` block in the output file.

### 3. Build the HTML File

Use the template in `html-template.md` as the starting point.

**Key rules:**
- Use viewport units (`vw`, `vh`, `vmin`) for all sizing — never `px` for layout
- Each slide is a `<section class="slide">` inside `<div class="deck">`
- Include the full CSS from `viewport-base.css` inline in `<style>`
- Navigation: keyboard (←/→), click, and touch swipe
- No external dependencies — everything inline

### 4. Add Animations

Refer to `animation-patterns.md` for reusable entrance, transition, and emphasis animations. Apply them via CSS classes or inline `style` attributes.

Default: fade-in on slide enter, staggered list item reveals.

### 5. Output the File

Write the completed slide deck to the project directory:
```
<project-root>/slides/<deck-name>.html
```

Open it in the browser to preview:
```bash
open slides/<deck-name>.html   # macOS
xdg-open slides/<deck-name>.html  # Linux
```

### 6. Iterate

Ask the user if they want to:
- Adjust content or order
- Change the style preset
- Add/remove animations
- Export to PDF (print via browser `Ctrl+P` → Save as PDF, landscape)

## Slide Types

| Type | Class | Purpose |
|------|-------|---------|
| Title slide | `slide--title` | Opening / section divider |
| Content | `slide--content` | Bullet points, text |
| Two-column | `slide--two-col` | Side-by-side content |
| Image full | `slide--image-full` | Full-bleed background image |
| Code | `slide--code` | Syntax-highlighted code block |
| Quote | `slide--quote` | Pull quote / highlight |
| Stats | `slide--stats` | Big numbers / metrics |
| Closing | `slide--closing` | Thank you / CTA |

## Tips

- Keep slides sparse — one idea per slide
- Use `<strong>` for key terms, not entire sentences
- For code slides, use `<pre><code class="language-*">` — the template includes highlight.js inline styles
- Speaker notes go in `<aside class="notes">` inside each `<section>` (hidden from view)
- Test arrow-key navigation before delivering to the user
