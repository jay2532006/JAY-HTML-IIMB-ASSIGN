# Web Development Assignment — Personal Resume Website (CSS Module)

**Student Name:** Jay Parmar  
**Institution:** Indian Institute of Management Bangalore (IIMB)  
**Program:** BBA in Digital Business & Entrepreneurship (DBE)  
**Due Date:** 17 November 2026, 10:30 PM IST  

---

## 🎯 Assignment Objective
Apply modern CSS concepts to enhance the personal resume website originally created during the HTML module — improving its design, layout, and visual appeal using fonts, colors, positioning, and selectors, while demonstrating clear technical progress from the unoptimized baseline.

---

## 📁 Submission File Structure

| File | Description | Purpose / Role |
| :--- | :--- | :--- |
| **`index.html`** | **Enhanced CSS Portfolio & Resume** | **Primary Step 2 Submission**: Modern, responsive HTML5 & pure CSS3 website. |
| **`styles.css`** | **CSS Engine & Design Tokens** | **CSS Mastery**: Variables, Google Fonts, Flexbox, Grid, Sticky/Fixed positioning, Selectors. |
| **`unoptimized.html`** | **Raw HTML Baseline Resume** | **Step 1 Baseline**: Unoptimized, unstyled semantic HTML resume proving progress. |
| **`comparison.html`** | **Concept Proof & Comparison Dossier** | **Academic Verification**: Concept-by-concept before/after breakdown with live side-by-side iframe. |
| **`articles.html`** | **Field Essays & Research Notes** | **Extended Reading**: 13 long-form essays by Jay Parmar in clean HTML/CSS. |
| **`assets/`** | **Images, Brand, & PDF Documents** | Self-contained assets (portraits, project previews, certificate scans, resume PDF). |

---

## 🚀 How to Run & View

### Option 1: Direct Double-Click (Zero Setup Required)
You can directly double-click any of the HTML files in Windows Explorer:
- Double-click **`index.html`** to view the enhanced modern resume.
- Double-click **`unoptimized.html`** to view the Step 1 baseline.
- Double-click **`comparison.html`** to inspect the concept-by-concept proof.

### Option 2: Local Web Server
You can also preview via any standard local HTTP server:
```powershell
# Using npx serve:
npx serve .

# Or using Python (if installed):
python -m http.server 3000
```
Then open `http://localhost:3000` in your web browser.

---

## 💡 Concept-by-Concept Execution

### 1️⃣ Typography & Fonts
- **Google Fonts Imported:**
  - `Syne` (700, 800) for high-impact executive and tech display headlines.
  - `Plus Jakarta Sans` (300, 400, 500, 600, 700) for clean, high-legibility body copy.
  - `JetBrains Mono` (400, 500, 600, 700) for quantitative metrics, dates, and technology tags.
- **Fluid Typography:** Scaled using CSS `clamp()` (e.g., `font-size: clamp(2.6rem, 5.5vw, 4.8rem)`).

### 2️⃣ Color Palette & Visual Theme
- **Theme:** Obsidian Ink & Champagne Gold Executive Theme.
- **Tokens in `:root`:**
  - Surface deep tones: `--bg-black: #060608`, `--bg-primary: #0a0a0e`, `--bg-surface: #101015`, `--bg-card: #14141b`.
  - Foreground text: `--text-white: #ffffff`, `--text-primary: #f5f1e8`, `--text-secondary: #d0cbc0`, `--text-muted: #8e897f`.
  - Metallic Accents: `--accent-gold: #c8a882`, `--accent-gold-light: #e8d2b7`, `--border-highlight: rgba(200, 168, 130, 0.35)`.
  - Ambient radial gradients with `filter: blur(140px)` for depth.

### 3️⃣ CSS Selectors Taxonomy
- **Element Selectors:** `html`, `body`, `h1`-`h4`, `p`, `section`, `nav`, `ul`, `a`, `button`, `input`.
- **Class Selectors:** `.btn-primary`, `.project-card`, `.stat-card`, `.nav-link`, etc.
- **ID Selectors:** `#dossier-overview`, `#dossier-education`, `#dossier-experience`, `#dossier-builds`, `#contact`.
- **Combinator Selectors:** `.nav-container > .brand-link`, `.portrait-caption strong`.
- **Attribute Selectors:** `a[target="_blank"]`, `input[type="email"]`.
- **Pseudo-classes & Elements:** `:hover`, `:focus-visible`, `:first-child`, `:last-child`, `::before`, `::after`, `::selection`.

### 4️⃣ Display & Positioning Properties
- **`position: sticky; top: 0;`** with glassmorphism `backdrop-filter: blur(20px)` on `.site-header`.
- **`position: fixed; bottom: 24px; right: 24px;`** for the floating quick switcher pill.
- **`position: relative` & `position: absolute`** for card badges, glowing status indicator dots, and image overlays.
- **`display: flex`** for navigation alignments, button groups, and KPI rows.
- **`display: grid`** for multi-column layouts (3-column project cards, 2-column experience timeline, 4-column KPI stats, 5-column skills matrix).

### 5️⃣ Alignment, Spacing & Box Model UX
- Universal `box-sizing: border-box` on all elements.
- Strict 8-point spacing scale (`--space-2xs` to `--space-4xl`).
- Centered container with `max-width: 1440px` and responsive fluid padding.
- `scroll-padding-top: 100px` to prevent sticky navigation bar from overlapping anchor links.
- Responsive design across 3 breakpoints (`<= 1200px`, `<= 860px`, `<= 520px`).


### 6️⃣ Advanced CSS3 Animations, Transitions & 10/10 Score USPs
- **Scroll-Driven Reading Progress Bar:** Fixed GPU-accelerated gradient bar (`position: fixed; top: 0; height: 3.5px; z-index: 99999`) smoothly tracking document scroll depth.
- **Scroll-Triggered Reveal Animations:** Using native `IntersectionObserver` with custom cubic-bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`) for slide-up (`.reveal`), slide-left (`.reveal-left`), slide-right (`.reveal-right`), and subtle scale-in (`.reveal-scale`).
- **Interactive Stagger Delays:** Grid items dynamically stagger entrance timing from 0.08s to 0.48s (`.stagger-1` to `.stagger-6`).
- **Specular Light Sheen on Card Hover:** Project, education, and honor cards feature a 3D lift (`translateY(-8px) scale(1.012)`) and a moving diagonal light reflection beam across the glass surface via `::before` pseudo-element.
- **Animated Headline Text Shimmer:** Continuous luxury metallic gradient sweep on `.hero-title-gradient` using `@keyframes textShimmer`.
- **Radar Pulse Verified Badge:** Continuous dual-ring acoustic ripple on the verified status dot via `@keyframes radarPulse`.
- **Interactive KPI Count-Up Animation:** Real-time smooth count-up from 0 to target metrics (₹47.5L, 233, <12ms, 3×) when the stats grid enters the viewport.
- **Interactive Multi-Theme Switcher:** In-header palette toggle allowing evaluators to switch live between *Obsidian Gold*, *Midnight Velvet*, and *High-Contrast Studio* palettes.
- **Spring-Physics Micro-Interactions on Buttons:** Bounce response on buttons and rotating arrow translations using `cubic-bezier(0.34, 1.56, 0.64, 1)`.
- **Accessibility Compliance (`prefers-reduced-motion`):** Graceful fallback disabling animations for users with vestibular disorders or operating system motion reduction enabled.
