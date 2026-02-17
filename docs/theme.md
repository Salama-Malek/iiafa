# Theme & Design Tokens

## Core Brand Palette
- `--primary-solid`: `#a97c50` (Gold/Clay primary for CTA, active states, highlights)
- `--primary-hover`: `#976d44` (hover)
- `--primary-strong`: `#855f3a` (pressed/active/link emphasis)
- `--primary-soft`: `#dcc5ab` (soft accents)
- `--danger`: `#99141e` (error/destructive only)
- `--danger-strong`: `#7a1018` (destructive hover)

## Neutrals & Surfaces
- `--ink`: `#1f1a16` (main text)
- `--muted-ink`: `#6f6256` (secondary text)
- `--surface-cream`: `#faf6f0` (app background)
- `--surface-soft`: `#f3eadf` (soft section backgrounds)
- `--surface-card`: `#fffcf7` (cards/forms)
- `--surface-dark`: `#342720` (dark section)
- `--surface-darker`: `#241b16` (hero/footer/deep backgrounds)
- `--border-warm`: `#dfd2c3`

## Semantic UI Tokens (HSL)
Configured in `src/globals.css` base layer:
- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--accent`, `--accent-foreground`
- `--muted`, `--muted-foreground`
- `--destructive`, `--destructive-foreground`
- `--border`, `--input`, `--ring`

## State Guidance
- Hover: darken primary (`--primary-hover`) or use subtle `primary/10` tint.
- Active/Pressed: stronger darken (`--primary-strong` / `primary/95`).
- Focus: visible ring via `--ring` (gold/clay).
- Disabled: keep existing opacity with reduced pointer events.
- Error: burgundy (`--danger`), never used as main brand color.
- Success/Warning/Info: `--success`, `--warning`, `--info`.

## Notes
- RTL Arabic typography remains Saudi/Tajawal with unchanged content/i18n.
- Components should prefer semantic Tailwind tokens (`bg-primary`, `text-foreground`, `border-input`) over hardcoded hex classes.
