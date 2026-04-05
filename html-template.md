# HTML Slide Deck Template

Copy this template as the starting point for every slide deck. Replace the placeholder content with the actual slides.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{{DECK_TITLE}}</title>
  <style>
    /* ── Paste the full contents of viewport-base.css here ── */

    /* ── Style Preset — paste chosen preset from STYLE_PRESETS.md ── */
    :root {
      --bg:           #0f1117;
      --bg-alt:       #1a1d27;
      --surface:      #22263a;
      --accent:       #6c63ff;
      --accent-2:     #00d4ff;
      --text:         #e8eaf6;
      --text-muted:   #8892b0;
      --heading:      #ffffff;
      --code-bg:      #161b2e;
      --border:       rgba(108, 99, 255, 0.25);
      --shadow:       0 8px 32px rgba(0,0,0,0.5);
      --radius:       0.8vmin;
      --font-heading: 'Segoe UI', system-ui, sans-serif;
      --font-body:    'Segoe UI', system-ui, sans-serif;
      --font-mono:    'Cascadia Code', 'Fira Code', monospace;
    }
  </style>
</head>
<body>

<div class="deck" id="deck">

  <!-- ── Slide 1: Title ───────────────────────────────────────────── -->
  <section class="slide slide--title" id="slide-1">
    <div class="slide__eyebrow">{{EYEBROW_TAG}}</div>
    <h1 class="slide__heading">{{MAIN_TITLE}}</h1>
    <p class="slide__subheading">{{SUBTITLE_OR_DATE}}</p>
    <aside class="notes">Speaker notes go here.</aside>
  </section>

  <!-- ── Slide 2: Content with bullet list ────────────────────────── -->
  <section class="slide slide--content" id="slide-2">
    <div class="slide__accent-bar"></div>
    <div class="slide__eyebrow">{{SECTION_TAG}}</div>
    <h2 class="slide__heading">{{SLIDE_HEADING}}</h2>
    <ul class="slide__list">
      <li>{{POINT_1}}</li>
      <li>{{POINT_2}}</li>
      <li>{{POINT_3}}</li>
      <li>{{POINT_4}}</li>
    </ul>
    <aside class="notes">Speaker notes for slide 2.</aside>
  </section>

  <!-- ── Slide 3: Two-column ──────────────────────────────────────── -->
  <section class="slide slide--two-col" id="slide-3">
    <div class="slide__accent-bar"></div>
    <h2 class="slide__heading">{{SLIDE_HEADING}}</h2>
    <div class="slide__body">
      <div class="card">
        <h3 class="slide__subheading">{{COL_1_TITLE}}</h3>
        <ul class="slide__list">
          <li>{{ITEM}}</li>
          <li>{{ITEM}}</li>
          <li>{{ITEM}}</li>
        </ul>
      </div>
      <div class="card">
        <h3 class="slide__subheading">{{COL_2_TITLE}}</h3>
        <ul class="slide__list">
          <li>{{ITEM}}</li>
          <li>{{ITEM}}</li>
          <li>{{ITEM}}</li>
        </ul>
      </div>
    </div>
    <aside class="notes">Speaker notes for slide 3.</aside>
  </section>

  <!-- ── Slide 4: Stats ────────────────────────────────────────────── -->
  <section class="slide slide--stats" id="slide-4">
    <div class="slide__accent-bar"></div>
    <h2 class="slide__heading">{{SLIDE_HEADING}}</h2>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-card__number">{{NUMBER}}</div>
        <div class="stat-card__label">{{LABEL}}</div>
      </div>
      <div class="stat-card">
        <div class="stat-card__number">{{NUMBER}}</div>
        <div class="stat-card__label">{{LABEL}}</div>
      </div>
      <div class="stat-card">
        <div class="stat-card__number">{{NUMBER}}</div>
        <div class="stat-card__label">{{LABEL}}</div>
      </div>
    </div>
    <aside class="notes">Speaker notes for slide 4.</aside>
  </section>

  <!-- ── Slide 5: Quote ────────────────────────────────────────────── -->
  <section class="slide slide--quote" id="slide-5">
    <p class="slide__quote-text">{{QUOTE_TEXT}}</p>
    <p class="slide__attribution">— {{ATTRIBUTION}}</p>
    <aside class="notes">Speaker notes for slide 5.</aside>
  </section>

  <!-- ── Slide 6: Code ─────────────────────────────────────────────── -->
  <section class="slide slide--code" id="slide-6">
    <div class="slide__accent-bar"></div>
    <h2 class="slide__heading">{{SLIDE_HEADING}}</h2>
    <pre><code class="language-{{LANG}}">{{CODE_CONTENT}}</code></pre>
    <aside class="notes">Speaker notes for slide 6.</aside>
  </section>

  <!-- ── Slide 7: Closing ──────────────────────────────────────────── -->
  <section class="slide slide--closing" id="slide-7">
    <h2 class="slide__heading">{{CLOSING_HEADING}}</h2>
    <p class="slide__subheading">{{CLOSING_SUBTEXT}}</p>
    <aside class="notes">Speaker notes for slide 7.</aside>
  </section>

</div><!-- /.deck -->

<!-- Progress bar & counter -->
<div class="progress" id="progress"></div>
<div class="slide-counter" id="counter">1 / 7</div>

<script>
(function () {
  'use strict';

  const slides   = Array.from(document.querySelectorAll('.slide'));
  const progress = document.getElementById('progress');
  const counter  = document.getElementById('counter');
  let current    = 0;

  function goTo(index) {
    if (index < 0 || index >= slides.length) return;

    if (slides[current]) {
      slides[current].classList.remove('active');
      slides[current].classList.add('exit');
      setTimeout(() => slides[current] && slides[current].classList.remove('exit'), 450);
    }

    current = index;
    slides[current].classList.add('active');
    progress.style.width = ((current + 1) / slides.length * 100) + '%';
    counter.textContent  = (current + 1) + ' / ' + slides.length;
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')                    { e.preventDefault(); prev(); }
    if (e.key === 'Home') goTo(0);
    if (e.key === 'End')  goTo(slides.length - 1);
  });

  // Click / tap
  document.addEventListener('click', e => {
    const w = window.innerWidth;
    if (e.clientX > w * 0.15 && e.clientX < w * 0.85) next();
    else if (e.clientX <= w * 0.15) prev();
  });

  // Touch swipe
  let touchStartX = 0;
  document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend',   e => {
    const dx = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) dx > 0 ? next() : prev();
  });

  // Init
  goTo(0);
}());
</script>
</body>
</html>
```

## Usage Notes

- Replace every `{{PLACEHOLDER}}` with real content before delivering to the user.
- Add or remove `<section>` blocks as needed — the JS automatically counts them.
- The `<aside class="notes">` content is hidden; it's for speaker reference only.
- For image-full slides, set `style="background-image: url('path/to/image.jpg')"` on the `<section>` and wrap content in `<div class="slide__overlay">`.
- Inline syntax highlighting: either add a minimal token-coloring `<style>` block manually, or instruct the user to open in a browser that supports CSS-only highlighting via a linked stylesheet.
