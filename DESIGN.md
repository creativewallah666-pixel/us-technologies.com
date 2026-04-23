# Design Brief: Greener Advance Water Conditioner (US Technologies)

**Tagline**: Smart water solutions for farming — trustworthy, accessible, farmer-centric agriculture technology.

## Visual Direction
Warm, practical, earth-connected design that builds trust with Indian farmers and agricultural dealers. Agricultural green + earthy brown + golden harvest accents convey growth, soil health, and reliable solutions. NOT luxury — approachable and solution-focused.

## Tone
Friendly, trustworthy, practical. Generous spacing and warmth throughout. Accessible language and visual hierarchy. Suggests harvest abundance, soil health, water purity, and reliable farm solutions through warm, natural design.

## Color Palette

| Token | OKLCH | Purpose |
|-------|-------|---------|
| **Primary** | 0.58 0.15 142 | Agricultural green — growth, harvest, trust, buttons/CTAs |
| **Secondary** | 0.42 0.10 42 | Warm earthy brown — soil, natural earth connection, headers |
| **Muted** | 0.90 0.02 40 | Soft warm grey — subtle backgrounds, borders, dividers |
| **Accent** | 0.68 0.12 70 | Golden amber — highlights, growth accents, testimonial stars |
| **Destructive** | 0.55 0.22 25 | Warm red — alerts, errors |

Dark mode: Primary to 0.65 0.15 142, secondary to 0.50 0.10 42, backgrounds to earthy 0.15/0.22 0.02 40. Maintains warmth and trust in dark.

## Typography
- **Display**: Bricolage Grotesque — geometric, modern luxury, engineering precision
- **Body**: DM Sans — clean, highly readable, professional tech feel
- **Mono**: JetBrains Mono — technical credibility for specs/data

Type scale: Display 32/40px (headings), Body 16px (base), Small 14px (metadata).

## Shape Language
Border radius: 12px (cards, buttons) — warm, accessible, inviting feel. Spacing: 8px grid with 28px/32px gaps between sections. Warm rounded corners throughout convey approachability.

## Structural Zones

| Zone | Background | Treatment | Purpose |
|------|-----------|-----------|---------|
| **Header** | Cream white (0.98) | Sticky, subtle bottom border, brown logo/nav | Navigation, brand trust |
| **Hero** | Agricultural green gradient + field photo | Full-width, warm centered text, green CTA | Lead generation, visual crop connection |
| **Product cards** | White with warm shadow | Subtle rounded corners, green accent bar | Product benefit showcase |
| **Testimonial sections** | Soft muted (0.90) or brown (0.42) | Farmer photo cards, golden stars, green buttons | Social proof, trust building |
| **Footer** | Earthy brown (0.42) | White/cream text, phone/WhatsApp CTAs | Contact, lead generation |

## Component Patterns
- **Buttons**: Agricultural green (primary), golden highlights on hover, white text, 12px radius, smooth transitions
- **Cards**: White/cream background, warm subtle shadow, rounded 12px, green left accent stripe or top border
- **Forms**: Clean inputs with warm grey borders, green focus ring, label text in brown for trust
- **CTAs**: Green button on light, white button on brown, golden accents on highlights or success states
- **Testimonials**: Photo + star rating (golden), green "verified" badge, warm background muted tone

## Motion & Animation
- Scroll fade-in: 0.6s ease-out on all content sections (natural, growing appearance)
- Button hover: 0.3s smooth transitions on background/shadow, subtle scale lift
- Smooth section transitions between crops/benefits/testimonials
- Subtle field/growth animations in hero (optional CSS background animation)

## Constraints
- Mobile-first responsive: stack to 1 col on mobile, 2-4 cols on desktop
- No generic defaults — all colors use OKLCH tokens
- High whitespace emphasis — minimum 24px padding/margin on all sections
- Smooth animations throughout, no jarring effects
- Fast loading — optimized fonts via @font-face with swap display

## Signature Detail
**Agricultural field photography & growth imagery** throughout — hero shows real farm/crops, cards feature irrigation/water benefits, testimonials display farmer success photos. Green accent bars on cards suggest plant growth. Reinforces soil health, water conditioning, and real-world farm results.

---
**Design System Files**: `src/frontend/src/index.css`, `src/frontend/tailwind.config.js`  
**Typography**: Bricolage Grotesque (display), DM Sans (body), JetBrains Mono (mono)  
**Farmer-friendly language**: Simple English, problem-solution format, visible ROI/benefits emphasis
