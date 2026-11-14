---
version: "2.0"
name: "Residencia Premium — Liquid Glass"
description: "Landing page de lujo para una residencia premium. Tema oscuro frío con superficies de vidrio esmerilado (liquid glass), orbes iridiscentes de fondo y tipografía Inter moderna. Basado en 'Liquid Glass' de designmd.app, adaptado a inmobiliaria residencial. Regla de oro: el vidrio nunca se pone ENCIMA de las fotos de la casa."
colors:
  primary: "#0E0E14"        # Fondo base oscuro frío (nunca #000000 puro)
  secondary: "#F4F2F8"      # Texto principal
  tertiary: "#9A98A8"       # Texto secundario / muted
  neutral: "rgba(255,255,255,.055)"   # Glass base
  surface: "rgba(255,255,255,.085)"   # Glass elevado (botones, hover)
  accent: "linear-gradient(120deg,#7DD3FC 0%,#C4B5FD 45%,#F9A8D4 100%)"  # Iridiscente
typography:
  display:
    fontFamily: Inter
    fontWeight: 700
    letterSpacing: "-.035em"
  body:
    fontFamily: Inter
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "#FFFFFF"
    textColor: "#0E0E14"
    shape: pill
    hover: "glow iridiscente difuso detrás del botón"
---

## Overview

Landing de UNA sola propiedad residencial de lujo con estética **Liquid Glass**: superficies translúcidas con `backdrop-filter: blur + saturate`, bordes con brillo especular superior, formas pill, y orbes de color iridiscente derivando lentamente al fondo de toda la página.

**Regla de oro: la fotografía manda.** El vidrio enmarca la UI (nav, tarjetas, formulario, chips), pero NUNCA se coloca un panel de vidrio encima de una foto de la casa. En el hero, el texto va directo sobre la imagen con overlay de gradiente y text-shadow.

- Density: 4/10 — Airy
- Variance: 5/10 — Moderate
- Motion: 6/10 — Expressive
- **Light/Dark:** ✗ No / ✓ Full (solo tema oscuro)

## Colors

- **Fondo base** `#0E0E14` — oscuro frío. Prohibido #000000 puro.
- **Texto** `#F4F2F8`; secundario/muted `#9A98A8`; párrafos largos `#C9C6D6`.
- **Glass base** `rgba(255,255,255,.055)` con borde `rgba(255,255,255,.12)`.
- **Glass elevado** `rgba(255,255,255,.085)`; brillo especular superior `rgba(255,255,255,.28)`.
- **Iridiscente** `linear-gradient(120deg, #7DD3FC → #C4B5FD → #F9A8D4)` — SOLO para: texto degradado en acentos (una frase por sección máx.), numeración de secciones, precio, iconos (stroke con gradiente SVG), glow del CTA al hover, flashlight de tarjetas. Es condimento, no plato.
- **Orbes de fondo**: #38BDF8, #A78BFA, #F472B6 — blur 90px, opacidad .10–.16, fijos detrás de todo.
- **Éxito** `#86EFAC` (form enviado).

## Typography

- **Display/H1/H2:** Inter 700, tracking -.035em. Moderna y limpia; sin serifas en esta variante.
- **Body:** Inter 400, 16px/1.6, máx 72ch. Labels: 0.8125rem, 500, uppercase, letter-spacing .08em.
- Cifras con `font-variant-numeric: tabular-nums`.
- Escala: Hero clamp(2.5rem, 5.6vw, 4.3rem) · H2 clamp(1.9rem, 3.6vw, 2.8rem).
- Google Fonts con `font-display: swap`.

## Superficies de vidrio (receta exacta)

```css
.glass{
  background:rgba(255,255,255,.055);
  border:1px solid rgba(255,255,255,.12);
  backdrop-filter:blur(18px) saturate(1.5);
  border-radius:24px;
}
/* brillo especular: borde superior con gradiente blanco que se desvanece */
.glass::before{ padding:1px; background:linear-gradient(180deg,rgba(255,255,255,.28),transparent 40%); mask-composite:exclude; }
```

Dónde SÍ va vidrio: nav (pill flotante, top 14px, `rgba(14,14,20,.55)` + blur 20), tarjetas de stats y amenidades, formulario de contacto, chips de espacios, captions de galería (pill pequeño), lightbox backdrop.
Dónde NO va vidrio: encima de fotos (hero), y nunca más de ~4 capas con backdrop-filter visibles a la vez (presupuesto de GPU).

## Layout

- Grid CSS, contenedor máx 1280px, padding lateral 1.5rem.
- Gaps de sección: clamp(5rem, 10vw, 9rem).
- **Hero:** foto a viewport completo (`min-h-[100dvh]`), texto abajo-izquierda directo sobre la foto, overlay `linear-gradient(180deg, rgba(14,14,20,.4), rgba(14,14,20,.05) 45%, rgba(14,14,20,.85))` + text-shadow en titular y subtítulo.
- Nav pill flotante centrado, máx 1060px.
- Secciones zig-zag; prohibidas 3 columnas iguales (las cards de amenidades 3×2 son la excepción permitida).
- Radios: superficies 20–28px, imágenes 16–20px, pills 9999px.
- Móvil: 1 columna bajo 768px, sin overflow horizontal.
- z-index: base 0 / nav 100 / overlay 200 / lightbox 300 / toast 500. Orbes en z-index -2.

## Estructura de secciones (en orden)

1. **Nav** — pill de vidrio flotante: lettermark (número en gradiente iridiscente), anclas, CTA blanco.
2. **Hero** — foto fachada full viewport, titular Inter 700 revelándose palabra por palabra, precio en gradiente iridiscente, CTA blanco. SIN panel de vidrio.
3. **La Residencia** — texto editorial + 6 stats en tiles de vidrio. Numeración 01–05 en kickers con gradiente.
4. **Galería** — grid asimétrico, imágenes radius 20px con borde sutil, caption en chip de vidrio al hover, clip reveal al scroll, lightbox.
5. **Amenidades** — 6 cards de vidrio con iconos de trazo en gradiente y flashlight violeta que sigue el mouse.
6. **Ubicación** — mapa embebido oscuro (filter invert) con bordes difuminados al fondo, radius 24px.
7. **Contacto** — formulario en panel de vidrio + botón WhatsApp prominente.
8. **Footer** — mínimo.

Sin pricing de planes, sin testimonios inventados, sin logos de marcas.

## Motion (máximo UN elemento protagonista en movimiento por viewport)

- **Orbes:** drift lento (26–38s, transform only, alternate). Son ambiente, no protagonistas.
- **Entradas:** fade + translateY(16px→0) 480ms ease-out, GSAP ScrollTrigger start 'top 85%'.
- **Hero:** titular palabra por palabra (translateY 110%→0, stagger 70ms); parallax de foto ≤8%.
- **Galería:** clip reveal `inset(0 0 100% 0)→0` escalonado 100ms.
- **Cards:** flashlight radial `rgba(196,181,253,.14)` siguiendo el mouse (solo pointer:fine).
- **CTA:** glow iridiscente difuso (blur 10px) detrás del botón blanco al hover.
- **Hover imágenes:** scale(1.045) 550ms.
- Solo `transform`/`opacity` (+ los backdrop-filter estáticos). Si baja de 60fps en móvil medio, se quita.
- **`prefers-reduced-motion`:** todo visible sin animación, orbes estáticos.

## Do's and Don'ts

- No poner vidrio encima de fotos de la casa.
- No #000000 ni blanco puro de fondo (el botón CTA blanco es la excepción deliberada).
- No más de ~4 superficies con backdrop-filter simultáneas en viewport.
- No 3 columnas iguales (salvo el grid de amenidades 3×2).
- No `h-screen` — usar `min-h-[100dvh]`.
- No clichés de IA: "Eleva tu estilo de vida", "Seamless", "Exclusividad sin límites".
- No testimonios ni datos inventados; solo información real de la propiedad.
- No fotos de stock de casas ajenas.
- Do: iridiscente con tacañería, brillo especular en bordes superiores, pills, chips, numeración 01–05, WhatsApp como conversión primaria, imágenes WebP lazy salvo hero.

## Use Case

Landing de una sola propiedad residencial premium en venta. Objetivo: agendar visitas. Audiencia: compradores llegando desde campañas en móvil (WhatsApp/Instagram).

<!-- Basado en: designmd.app/library/liquid-glass · adaptado; v1.0 (oro/serif) vive en la rama main -->
