# Frontier Creatives — Master Style Guide

Pasteable reference generated from the live codebase (tailwind.config.js, globals.css, LandingPage.jsx, RsvpPage.jsx).

---

## 🎨 Colors

| Token             | Hex       | Tailwind Class        | Usage                                |
|-------------------|-----------|-----------------------|--------------------------------------|
| Brand Blue        | `#244BFF` | `brand-blue`          | Borders, icons, labels, CTAs, links  |
| Brand Cream       | `#e9e5df` | `brand-cream`         | Page background                      |
| Brand Stone       | `#ded9d2` | `brand-stone`         | Placeholder video area               |
| Black (primary)   | `#000000` | `black`               | Body text, headings                  |
| Black / 20        | —         | `black/20`            | Input placeholders                   |
| Black / 30        | —         | `black/30`            | "optional" labels                    |
| Black / 50        | —         | `black/50`            | Subdued footnote text                |
| Black / 60        | —         | `black/60`            | Subdued body                         |
| Black / 70        | —         | `black/70`            | Secondary paragraph text             |
| White             | `#FFFFFF` | `white`               | Selection text color                 |
| Blue / 5          | —         | `brand-blue/5`        | Subtle hover background              |
| Blue / 40         | —         | `brand-blue/40`       | Disabled text                        |
| Blue shadow       | —         | `rgba(36,75,255,0.2)` | CTA shadow                           |
| Blue shadow hover | —         | `rgba(36,75,255,0.15)`| CTA shadow on hover                  |

```css
/* Pasteable CSS custom properties */
:root {
  --color-brand-blue:  #244BFF;
  --color-brand-cream: #e9e5df;
  --color-brand-stone: #ded9d2;
  --color-text:        #000000;
  --color-text-subtle: rgba(0,0,0,0.5);
  --color-text-muted:  rgba(0,0,0,0.3);
  --color-placeholder: rgba(0,0,0,0.2);
}
```

---

## 🔤 Typography

### Font Family

```css
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
             "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
/* Tailwind class: font-sans (the default) */
```

### Weight

| Weight          | Tailwind      | Where                                    |
|-----------------|---------------|------------------------------------------|
| 900 (Black)     | `font-black`  | **Everything** — headings, body, labels, CTAs, pills, footer |
| 400 (Normal)    | `font-normal` | Only "optional" label hints              |

```css
/* Pasteable */
--font-weight-primary: 900;
```

### Case

| Style     | Where                                     |
|-----------|-------------------------------------------|
| `lowercase` | Hero headings, video titles, CTA headings, value chips |
| `uppercase` | NumberTags, pills, CTAs, labels, footer, header links, form labels |

### Text Size Scale

| Tailwind / Arbitrary  | Approx px     | Where                                    |
|-----------------------|---------------|------------------------------------------|
| `text-[9px]`          | 9px           | Video placeholder footer                |
| `text-[10px]`         | 10px          | Pills, header links, footer             |
| `text-[11px]`         | 11px          | NumberTag                               |
| `text-xs`             | 12px          | Pills, footer, CTA buttons              |
| `text-[13px]`         | 13px          | Form labels                             |
| `text-sm`             | 14px          | Pills, labels, buttons                  |
| `text-base`           | 16px          | Subdued paragraph text                  |
| `text-lg`             | 18px          | Body text, value chips                  |
| `text-xl`             | 20px          | Body intro text, form inputs            |
| `text-2xl`            | 24px          | Body text, form textareas               |
| `text-3xl`            | 30px          | About intro, success messages           |
| `text-4xl`            | 36px          | Body text, form inputs                  |
| `text-5xl`            | 48px          | Body intro                              |
| `text-6xl`            | 60px          | CTA headings, success messages          |
| `text-7xl`            | 72px          | About intro                             |
| `text-[8vw]`          | viewport      | Form section titles ("tell us about you")|
| `text-[10vw]`         | viewport      | Next session heading (lg)               |
| `text-[10.5vw]`       | viewport      | Video story titles (lg)                 |
| `text-[11vw]`         | viewport      | Video story titles (md)                 |
| `text-[12vw]`         | viewport      | Form section titles (mobile)            |
| `text-[13vw]`         | viewport      | Video story titles (sm)                 |
| `text-[13.5vw]`       | viewport      | Hero "frontier creatives" (lg)          |
| `text-[14vw]`         | viewport      | Next session heading                    |
| `text-[18vw]`         | viewport      | Next session heading (md)               |
| `text-[19vw]`         | viewport      | Video story titles (md)                 |
| `text-[22vw]`         | viewport      | Hero "frontier creatives" (mobile)      |

### Letter Spacing (Tracking)

| Tailwind              | Em value       | Where                                   |
|-----------------------|----------------|-----------------------------------------|
| `tracking-[-0.105em]` | -0.105em       | Main hero heading ("frontier creatives")|
| `tracking-[-0.07em]`  | -0.07em        | CTA headings, success messages          |
| `tracking-[-0.06em]`  | -0.06em        | Large body text                         |
| `tracking-[-0.055em]` | -0.055em       | Medium body text, tagline               |
| `tracking-[-0.03em]`  | -0.03em        | Body, inputs, textareas, value chips    |
| `tracking-[-0.02em]`  | -0.02em        | Selectable pills, buttons               |
| `tracking-[0.12em]`   | +0.12em        | Form labels                             |
| `tracking-[0.16em]`   | +0.16em        | Pills, event detail rows                |
| `tracking-[0.18em]`   | +0.18em        | Footer, video placeholder captions      |
| `tracking-[0.2em]`    | +0.2em         | CTA buttons                             |
| `tracking-[0.22em]`   | +0.22em        | NumberTag, header links                 |

### Line Height

| Tailwind         | Value   | Where                                    |
|------------------|---------|------------------------------------------|
| `leading-[0.73]` | 0.73    | Main hero heading                        |
| `leading-[0.74]` | 0.74    | Video story titles                       |
| `leading-[0.76]` | 0.76    | Next session heading                     |
| `leading-[0.78]` | 0.78    | Form section titles ("tell us about you")|
| `leading-[0.88]` | 0.88    | About section intro                      |
| `leading-[0.9]`  | 0.9     | CTA headings, success messages           |
| `leading-[0.92]` | 0.92    | Tagline ("A live room for designers…")   |
| `leading-[0.95]` | 0.95    | Body intro paragraphs                    |
| `leading-[1.15]` | 1.15    | Secondary paragraphs, subdued text       |

```css
/* Pasteable heading stack */
.h1-hero {
  font-weight: 900;
  font-size: clamp(3rem, 22vw, 13.5vw);
  line-height: 0.73;
  letter-spacing: -0.105em;
  text-transform: lowercase;
}
.h2-video {
  font-weight: 900;
  font-size: clamp(2rem, 13vw, 10.5vw);
  line-height: 0.74;
  letter-spacing: -0.03em;
  text-transform: lowercase;
}
.body-intro {
  font-weight: 900;
  font-size: clamp(1.25rem, 2.5vw, 2.5rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
}
.label-overline {
  font-weight: 900;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-brand-blue);
}
```

---

## 🖼️ Borders & Dividers

| Rule                                     | Usage                                      |
|------------------------------------------|--------------------------------------------|
| `border border-brand-blue`               | Cards, pills, inputs, buttons, value chips |
| `border-t border-brand-blue`             | Section dividers, header bottom            |
| `border-b border-brand-blue`             | Header separator, underlined inputs        |
| `border-l border-brand-blue`             | Sidebar on `lg:` breakpoint                |
| `border-t border-brand-blue/30`          | Subtle inner divider                       |
| `border-0 border-b border-brand-blue`    | Underline-only text inputs                 |

---

## 📐 Spacing

### Section Padding

```
px-5 md:px-10           → horizontal page gutters
py-10 md:py-14           → standard section
py-10 md:py-16           → taller section
pt-6 md:pt-10 pb-8       → hero section top/bottom
```

### Component Padding

| Component          | Padding             |
|--------------------|---------------------|
| Pills              | `px-3 py-2`         |
| Value chips        | `px-5 py-3`         |
| Selectable pills   | `px-4 py-3`         |
| CTA buttons        | `px-8 py-4` to `px-10 py-5` |
| Form text inputs   | `pb-3 pt-1`         |
| Form textareas     | `p-4 md:p-5`        |
| Section cards      | `p-5 md:p-7`        |
| Success card       | `p-8 md:p-14`       |

### Gaps (flex/grid)

| Gap                  | Where                                 |
|----------------------|---------------------------------------|
| `gap-1` to `gap-2`   | Tight icon rows, header pills         |
| `gap-3`              | Pills, value chips, form option grids |
| `gap-4` to `gap-8`   | Hero grid, video story grid           |

### Grid

```
grid-cols-12              → Main layout grid
lg:grid-cols-12           → Video story grid
grid-cols-2               → Hero detail pills
md:grid-cols-12           → Hero footer grid
```

---

## 🎬 Animations (from globals.css)

```css
/* Slide out (downward) — used for FlipPill exit */
@keyframes slide-out-down {
  0%   { transform: translateY(0);    opacity: 1; }
  100% { transform: translateY(100%); opacity: 0; }
}
.animate-slide-out {
  animation: slide-out-down 0.4s ease-in forwards;
}

/* Slide in (upward) — used for FlipPill enter */
@keyframes slide-in-up {
  0%   { transform: translateY(-100%); opacity: 0; }
  100% { transform: translateY(0);     opacity: 1; }
}
.animate-slide-in {
  animation: slide-in-up 0.4s ease-out forwards;
}

/* Gentle wiggle — decorative, infinite */
@keyframes gentle-wiggle {
  0%, 100% { transform: rotate(2deg); }
  30%      { transform: rotate(2.8deg); }
  60%      { transform: rotate(1.2deg); }
}
.animate-gentle-wiggle {
  animation: gentle-wiggle 6s ease-in-out infinite;
}
```

---

## 🖱️ Interactive States

### Links
```
text-brand-blue
hover:underline underline-offset-4
```

### Buttons / CTAs (outline style)
```
border border-brand-blue text-brand-blue
hover:bg-brand-blue hover:text-brand-cream
transition-colors
```

### CTA with shadow (RSVP button)
```
bg-brand-blue text-brand-cream
rotate-[2deg] hover:rotate-[3deg] hover:scale-105
transition-all duration-300 ease-out
shadow-[2px_4px_0_0_rgba(36,75,255,0.2)]
hover:shadow-[3px_6px_0_0_rgba(36,75,255,0.15)]
```

### Subtle hover
```
hover:bg-brand-blue/5
```

### Disabled
```
text-brand-blue/40 cursor-not-allowed
```

### Selection
```
selection:bg-brand-blue selection:text-white
```

### Focus (inputs)
```
focus:outline-none focus:border-brand-blue focus:ring-0
```

---

## 🧩 Component Primitives

### NumberTag
```jsx
<span className="text-[11px] md:text-xs tracking-[0.22em] font-black text-brand-blue uppercase">
  {children}
</span>
```

### Pill
```jsx
<div className="flex items-center gap-3 border border-brand-blue px-3 py-2 text-brand-blue uppercase tracking-[0.16em] text-[10px] md:text-xs font-black">
  <GuidanceIcon name={icon} className="w-6 h-6 shrink-0" />
  <span>{children}</span>
</div>
```

### Label (form)
```jsx
<label className="block text-[13px] md:text-sm tracking-[0.12em] font-black text-brand-blue uppercase mb-3">
  {children}
</label>
```

### TextInput
```
w-full border-0 border-b border-brand-blue bg-transparent
pb-3 pt-1 text-xl sm:text-2xl md:text-4xl font-black
tracking-[-0.03em]
placeholder:text-black/20
focus:outline-none focus:border-brand-blue focus:ring-0 transition-colors
```

### TextArea
```
w-full border border-brand-blue bg-transparent
p-4 md:p-5 text-lg sm:text-xl md:text-2xl font-black
tracking-[-0.03em]
placeholder:text-black/20
focus:outline-none focus:ring-0 resize-none transition-colors
```

### SelectablePill
```
border px-4 py-3 text-left text-sm md:text-base font-black
tracking-[-0.02em] transition-all
Selected:   border-brand-blue bg-brand-blue text-brand-cream
Unselected: border-brand-blue text-brand-blue hover:bg-brand-blue/5
```

### SegmentSelector
```
inline-flex border border-brand-blue
Options: px-4 py-3 text-sm md:text-base font-black tracking-[-0.02em] uppercase transition-all
  border-r border-brand-blue last:border-r-0
  Selected:   bg-brand-blue text-brand-cream
  Unselected: text-brand-blue hover:bg-brand-blue/5
```

---

## 📋 Quick CSS Variables (copy-paste ready)

```css
:root {
  /* Colors */
  --brand-blue:  #244BFF;
  --brand-cream: #e9e5df;
  --brand-stone: #ded9d2;

  /* Typography */
  --font-weight: 900;
  --font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;

  /* Tracking */
  --tracking-hero:    -0.105em;
  --tracking-heading: -0.03em;
  --tracking-body:    -0.055em;
  --tracking-label:   0.12em;
  --tracking-pill:    0.16em;
  --tracking-footer:  0.18em;
  --tracking-cta:     0.2em;
  --tracking-number:  0.22em;

  /* Line heights */
  --leading-hero:    0.73;
  --leading-heading: 0.78;
  --leading-body:    0.95;
  --leading-small:   1.15;

  /* Transitions */
  --transition-button: background-color 150ms, color 150ms;
  --transition-cta:    all 300ms ease-out;
}
```

---

*Generated from `tailwind.config.js`, `globals.css`, `LandingPage.jsx`, and `RsvpPage.jsx`*