---
name: Heritage Royale
colors:
  surface: '#fff8f6'
  surface-dim: '#f2d4c8'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ec'
  surface-container: '#ffe9e2'
  surface-container-high: '#ffe2d7'
  surface-container-highest: '#fbdcd0'
  on-surface: '#281811'
  on-surface-variant: '#5a403f'
  inverse-surface: '#3e2c25'
  inverse-on-surface: '#ffede7'
  outline: '#8e706e'
  outline-variant: '#e2bebc'
  surface-tint: '#b4262d'
  primary: '#910619'
  on-primary: '#ffffff'
  primary-container: '#b3262d'
  on-primary-container: '#ffccc8'
  inverse-primary: '#ffb3af'
  secondary: '#bb0318'
  on-secondary: '#ffffff'
  secondary-container: '#df2a2e'
  on-secondary-container: '#fffbff'
  tertiary: '#78301d'
  on-tertiary: '#ffffff'
  tertiary-container: '#964732'
  on-tertiary-container: '#ffcdc1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3af'
  on-primary-fixed: '#410005'
  on-primary-fixed-variant: '#910619'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb3ac'
  on-secondary-fixed: '#410003'
  on-secondary-fixed-variant: '#930010'
  tertiary-fixed: '#ffdbd2'
  tertiary-fixed-dim: '#ffb4a2'
  on-tertiary-fixed: '#3c0800'
  on-tertiary-fixed-variant: '#78301d'
  background: '#fff8f6'
  on-background: '#281811'
  surface-variant: '#fbdcd0'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  section-gap: 80px
---

## Brand & Style

The visual identity of this design system is rooted in the "Heritage Royale" aesthetic—a sophisticated fusion of North Indian architectural grandeur and premium hospitality. The UI is designed to evoke the sensory experience of a fine-dining Rajasthani establishment: warm, inviting, and steeped in tradition.

The design style avoids all modern "tech" tropes, favoring a **Tactile / Heritage** approach. It utilizes high-fidelity textures, such as dark walnut wood grains and weathered terracotta, to provide a physical sense of place. Visual motifs are drawn directly from traditional *Jharokhas* (ornate windows) and *Mandala* line art, creating a digital environment that feels like an extension of a physical palace.

**Key Brand Pillars:**
- **Regal Hospitality:** Every interaction should feel like a curated guest experience.
- **Architectural Depth:** Using arches and layered patterns to create structural hierarchy.
- **Warmth & Earthiness:** A palette and lighting model that reflects the sunset over a desert haveli.

## Colors

The color strategy is a celebration of North Indian festivals and earthy landscapes. 

- **Primary & Secondary Reds:** Used for high-priority actions and brand highlights, mirroring the "Gulab" (rose) namesake and festive attire.
- **Royal Gold:** Reserved for ornamental accents, thin dividers, and interactive states to signify premium quality.
- **Warm Ivory Background:** Provides a soft, parchment-like canvas that is easier on the eyes than pure white, enhancing the "heritage" feel.
- **Terracotta & Walnut:** These "Heritage Surface" colors are used for containers, sidebars, and footers to ground the UI in natural, physical materials.

**Usage Note:** Avoid high-vibrancy "neon" variants. All colors should feel slightly desaturated or "sun-baked."

## Typography

The typography pairings contrast the ornate, historical nature of the brand with modern accessibility. 

**Playfair Display** is used for all headlines to provide a literary and premium feel. Its high-contrast serifs echo the calligraphy found in historical Indian manuscripts. For large display roles, a slight negative letter-spacing is applied to give it a more modern, editorial edge.

**Inter** is utilized for all body copy and functional labels. While the brand is traditional, the utility must be effortless. Inter provides the clean, neutral counterpoint necessary to ensure menus and descriptions remain legible across all devices.

**Hierarchy Guidance:**
- Use `display-lg` for hero sections and main menu categories.
- `label-md` should be used for prices and tags, always in uppercase with increased letter spacing to evoke a "stamped" or "engraved" look.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop to maintain the integrity of decorative borders and archway motifs. The layout is centered, mimicking the symmetrical balance found in Rajasthani architecture (Mandala-style symmetry).

**Rhythm & Grids:**
- **Desktop:** 12-column grid with a 1280px max-width.
- **Tablet:** 8-column grid with fluid gutters.
- **Mobile:** 4-column grid with 16px side margins.

**Spacing Philosophy:**
Generous "breathable" margins are essential. Avoid cramped layouts. Large section gaps (80px+) should be used to separate courses or experiences, allowing each "chapter" of the digital experience to feel distinct.

## Elevation & Depth

This system rejects the "floating" nature of modern SaaS. Instead, it uses **Tonal Layers** and **Physical Shadows** to create a sense of grounded weight.

- **Surface Tiers:** The background is Warm Ivory (#F5EFE7). Primary surfaces (cards) sit one level above, using a subtle Terracotta border or a very soft, "ambient" shadow.
- **Ambient Shadows:** Shadows are rare and intentionally "heavy" but soft. Use a #2A1A13 (Walnut) tint at 10% opacity with a large blur (20px+) to suggest an object sitting on a wooden table.
- **Decorative Arches:** Depth is often created through "masking." Content should appear to reside *inside* a Jharokha arch, using an inner shadow to suggest the content is recessed into the wall.
- **Dividers:** Instead of simple lines, use 1px Royal Gold borders or decorative Mandala-patterned horizontal rules.

## Shapes

The shape language is primarily **Structured and Rectilinear**, but accented with complex curves. 

- **Containers:** Standard cards and buttons use "Soft" (0.25rem) roundedness. This prevents the UI from feeling too sharp/aggressive while maintaining a traditional, hand-crafted feel.
- **Architectural Accents:** The top corners of primary images or main navigation containers should use a "Jharokha" arch mask (a pointed or multi-lobed arch) rather than simple rounding.
- **Buttons:** Rectangular with a very slight radius. Avoid fully pill-shaped (rounded-full) elements, as they feel too "app-like" and modern.

## Components

### Buttons
- **Primary:** Solid #B3262D background, White text, 1px Royal Gold inset border on hover.
- **Secondary:** Transparent background, 1px #34241A border, Playfair Display medium weight.
- **Decorative:** Icons (like "Book a Table") should be encased in a circular Mandala line-art frame.

### Cards
- **Menu Items:** Background of light walnut texture or solid ivory with a 1px Terracotta border. Typography for dish names must be Playfair Display.
- **Image Cards:** Must use an arched top (Jharokha style) to frame food photography.

### Input Fields
- Underlined style only (not boxed). Uses #34241A for the line. Labels should be small and uppercase above the line.

### Lists & Menus
- Use decorative bullet points (small gold diamonds or rose petals). 
- Category headers should be centered and flanked by horizontal Mandala line art.

### Navigation
- A top-centered logo with a transparent background. 
- Links should have a subtle Gold underline that expands from the center on hover.