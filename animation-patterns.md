# Animation Patterns

Reusable CSS animations for slide decks. Add these `@keyframes` and utility classes to the deck's `<style>` block, then apply them via class names or inline styles.

---

## Entrance Animations

### Fade In (default for slides)
Already handled by `viewport-base.css` via `.slide.active`. No extra code needed.

### Fade Up
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(3vmin); }
  to   { opacity: 1; transform: translateY(0); }
}
.anim-fade-up {
  animation: fadeUp 0.5s ease forwards;
}
```

### Fade In Scale
```css
@keyframes fadeScale {
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
}
.anim-fade-scale {
  animation: fadeScale 0.45s ease forwards;
}
```

### Slide In Left
```css
@keyframes slideLeft {
  from { opacity: 0; transform: translateX(-6vmin); }
  to   { opacity: 1; transform: translateX(0); }
}
.anim-slide-left {
  animation: slideLeft 0.5s ease forwards;
}
```

### Slide In Right
```css
@keyframes slideRight {
  from { opacity: 0; transform: translateX(6vmin); }
  to   { opacity: 1; transform: translateX(0); }
}
.anim-slide-right {
  animation: slideRight 0.5s ease forwards;
}
```

### Reveal from Bottom (good for stat numbers)
```css
@keyframes countUp {
  from { opacity: 0; transform: translateY(4vmin); }
  to   { opacity: 1; transform: translateY(0); }
}
.anim-count-up {
  animation: countUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
```

---

## Stagger Helpers

Apply delays to children so they animate in sequence. Useful for lists, grid cards, etc.

```css
/* Usage: add .stagger to the parent, children get auto-delays */
.stagger > * { opacity: 0; animation-fill-mode: forwards; }
.stagger > *:nth-child(1) { animation-delay: 0.05s; }
.stagger > *:nth-child(2) { animation-delay: 0.15s; }
.stagger > *:nth-child(3) { animation-delay: 0.25s; }
.stagger > *:nth-child(4) { animation-delay: 0.35s; }
.stagger > *:nth-child(5) { animation-delay: 0.45s; }
.stagger > *:nth-child(6) { animation-delay: 0.55s; }
.stagger > *:nth-child(7) { animation-delay: 0.65s; }
.stagger > *:nth-child(8) { animation-delay: 0.75s; }
```

Combine with any entrance animation:
```html
<ul class="slide__list stagger">
  <li class="anim-fade-up">First point</li>
  <li class="anim-fade-up">Second point</li>
  <li class="anim-fade-up">Third point</li>
</ul>
```

---

## Emphasis / Highlight Animations

### Pulse Glow (draw attention to a key element)
```css
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(108, 99, 255, 0); }
  50%       { box-shadow: 0 0 0 1.5vmin rgba(108, 99, 255, 0.35); }
}
.anim-pulse {
  animation: pulseGlow 2s ease-in-out infinite;
}
```

### Underline Reveal (for headings)
```css
.anim-underline {
  position: relative;
  display: inline-block;
}
.anim-underline::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.3vmin;
  width: 0;
  height: 0.4vmin;
  background: var(--accent);
  border-radius: 99px;
  transition: width 0.5s ease 0.3s;
}
.slide.active .anim-underline::after {
  width: 100%;
}
```

### Shimmer (loading/highlight effect for stat numbers)
```css
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}
.anim-shimmer {
  background: linear-gradient(
    90deg,
    var(--accent) 0%,
    var(--accent-2) 30%,
    var(--accent) 60%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s linear infinite;
}
```

### Border Draw (draws a border around a card)
```css
@keyframes borderDraw {
  from { clip-path: inset(0 100% 100% 0); }
  to   { clip-path: inset(0 0 0 0); }
}
.anim-border-draw {
  animation: borderDraw 0.6s ease forwards;
}
```

---

## Slide Transition Overrides

The default transition is a horizontal slide. To use different transitions, override the `.slide` transition rules.

### Cross-fade (no movement)
```css
.slide {
  transform: none !important;
  transition: opacity 0.5s ease;
}
```

### Zoom in
```css
.slide {
  transform: scale(1.04);
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.slide.active {
  transform: scale(1);
}
.slide.exit {
  transform: scale(0.96);
}
```

### Vertical slide
```css
.slide {
  transform: translateY(3vh);
}
.slide.exit {
  transform: translateY(-3vh);
}
```

---

## Delay Utilities

```css
.delay-1 { animation-delay: 0.1s !important; }
.delay-2 { animation-delay: 0.2s !important; }
.delay-3 { animation-delay: 0.3s !important; }
.delay-4 { animation-delay: 0.4s !important; }
.delay-5 { animation-delay: 0.5s !important; }
.delay-6 { animation-delay: 0.6s !important; }
.delay-7 { animation-delay: 0.7s !important; }
.delay-8 { animation-delay: 0.8s !important; }
.delay-9 { animation-delay: 0.9s !important; }
.delay-10 { animation-delay: 1.0s !important; }
```

---

## Trigger Animations on Slide Activation

All animation classes above use `opacity: 0` and `animation-fill-mode: forwards` by default. To ensure they only fire when the slide becomes active (not on page load), wrap them:

```css
/* Only animate when parent slide is active */
.slide .anim-fade-up,
.slide .anim-slide-left,
.slide .anim-fade-scale {
  opacity: 0;
  animation: none;
}

.slide.active .anim-fade-up   { animation: fadeUp   0.5s ease forwards; }
.slide.active .anim-slide-left { animation: slideLeft 0.5s ease forwards; }
.slide.active .anim-fade-scale { animation: fadeScale 0.45s ease forwards; }
```
