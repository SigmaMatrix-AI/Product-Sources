# Style Presets

Apply these CSS variable blocks to the `:root` selector in the slide deck's `<style>` tag.

---

## `dark-pro` (default)

Dark, modern, with a vibrant accent. Works well for tech and product presentations.

```css
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
```

---

## `light-clean`

Crisp white background, subtle grays. Great for business and academic slides.

```css
:root {
  --bg:           #ffffff;
  --bg-alt:       #f7f8fc;
  --surface:      #eef0f7;
  --accent:       #4361ee;
  --accent-2:     #f72585;
  --text:         #1a1a2e;
  --text-muted:   #6c757d;
  --heading:      #0d0d1a;
  --code-bg:      #f0f1f6;
  --border:       rgba(67, 97, 238, 0.2);
  --shadow:       0 4px 24px rgba(0,0,0,0.08);
  --radius:       0.8vmin;
  --font-heading: 'Segoe UI', system-ui, sans-serif;
  --font-body:    'Segoe UI', system-ui, sans-serif;
  --font-mono:    'Cascadia Code', 'Fira Code', monospace;
}
```

---

## `gradient-bold`

Full-bleed gradient backgrounds per slide. High visual impact for keynotes.

```css
:root {
  --bg:           #0a0a0a;
  --bg-alt:       #111111;
  --surface:      rgba(255,255,255,0.08);
  --accent:       #ff6b6b;
  --accent-2:     #ffd93d;
  --text:         #ffffff;
  --text-muted:   rgba(255,255,255,0.65);
  --heading:      #ffffff;
  --code-bg:      rgba(0,0,0,0.4);
  --border:       rgba(255,255,255,0.15);
  --shadow:       0 8px 40px rgba(0,0,0,0.6);
  --radius:       1vmin;
  --font-heading: 'Segoe UI', system-ui, sans-serif;
  --font-body:    'Segoe UI', system-ui, sans-serif;
  --font-mono:    'Cascadia Code', 'Fira Code', monospace;

  /* Per-slide gradient helpers — apply via inline style or extra class */
  --grad-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --grad-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --grad-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --grad-4: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  --grad-5: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}
```

To use a per-slide gradient, add `style="background: var(--grad-2)"` to the `<section>`.

---

## `corporate`

Navy and gray. Conservative, trustworthy, boardroom-ready.

```css
:root {
  --bg:           #1b2a4a;
  --bg-alt:       #243556;
  --surface:      #2e4270;
  --accent:       #4a90d9;
  --accent-2:     #e8b84b;
  --text:         #dce6f5;
  --text-muted:   #8fa3c0;
  --heading:      #ffffff;
  --code-bg:      #152035;
  --border:       rgba(74, 144, 217, 0.3);
  --shadow:       0 6px 28px rgba(0,0,0,0.4);
  --radius:       0.5vmin;
  --font-heading: 'Georgia', serif;
  --font-body:    'Segoe UI', system-ui, sans-serif;
  --font-mono:    'Courier New', monospace;
}
```

---

## `neon`

Dark background with electric neon highlights. Perfect for tech demos and developer talks.

```css
:root {
  --bg:           #08080f;
  --bg-alt:       #0d0d1a;
  --surface:      #13132a;
  --accent:       #00ff9f;
  --accent-2:     #ff00ff;
  --text:         #c8d6e5;
  --text-muted:   #5f7a8a;
  --heading:      #00ff9f;
  --code-bg:      #080814;
  --border:       rgba(0, 255, 159, 0.3);
  --shadow:       0 0 30px rgba(0, 255, 159, 0.15);
  --radius:       0.4vmin;
  --font-heading: 'Cascadia Code', 'Fira Code', monospace;
  --font-body:    'Segoe UI', system-ui, sans-serif;
  --font-mono:    'Cascadia Code', 'Fira Code', monospace;
}
```

---

## Customizing a Preset

Override individual variables after the preset block:

```css
:root {
  /* base preset */
  ...dark-pro variables...

  /* overrides */
  --accent: #ff6b35;
  --font-heading: 'Playfair Display', serif;
}
```
