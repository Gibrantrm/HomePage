---
version: "1.0"
name: "Residencia Premium — Aura Cálida"
description: "Landing page de lujo para una residencia premium. Tema oscuro cálido con acentos dorados, efectos cinematográficos de Aura Premium y estética material de Wabi-Sabi. Fusión de: Aura Premium WebGL & Iconify (efectos) + Cerâmica Wabi-Sabi (paleta/tipografía), ambos de designmd.app, adaptados a inmobiliaria residencial."
colors:
  primary: "#15120E"        # Carbón cálido — fondo principal (nunca #000000 puro)
  secondary: "#FAF0E6"      # Crema — texto principal sobre oscuro
  tertiary: "#211C16"       # Superficie elevada — cards, nav
  neutral: "#9A8F80"        # Piedra cálida — texto secundario, bordes
  surface: "#2B241C"        # Superficie de inputs y hover
  accent: "#D4AF37"         # Oro — CTA, líneas decorativas, foco
typography:
  display:
    fontFamily: Cormorant Garamond
    fontWeight: 600
  body:
    fontFamily: Inter
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#15120E"
    shape: pill
---

## Overview

Landing de UNA sola propiedad residencial de lujo. La casa es la protagonista: la fotografía ocupa el máximo espacio posible y el diseño la enmarca sin competir con ella. El tono es "residencia", no "startup": oscuro cálido, dorado discreto, serif editorial, mucho aire.

El wow viene de pocos efectos precisos (reveal de imágenes al scroll, luz que recorre el CTA, titular que se revela), nunca de muchos a la vez.

- Density: 3/10 — Airy
- Variance: 5/10 — Moderate
- Motion: 6/10 — Expressive (cinematográfico, no juguetón)
- **Light/Dark:** ✗ No / ✓ Full (solo tema oscuro)

## Colors

- **Carbón Cálido** (#15120E) — fondo principal. Prohibido #000000 puro.
- **Crema** (#FAF0E6) — texto principal, titulares.
- **Superficie Elevada** (#211C16) — nav, cards, secciones alternas.
- **Piedra** (#9A8F80) — texto secundario, bordes 1px, labels.
- **Superficie Interactiva** (#2B241C) — inputs, hover de cards.
- **Oro** (#D4AF37) — CTA primario, border beam, líneas kintsugi, numeración de secciones, focus ring. Usarlo con tacañería: es condimento, no plato.
- **Blush Suave** (#E8C4B8) — acento decorativo ocasional (etiquetas, detalles).
- **Verde Matcha** (#6B7B3A) — estados de éxito (form enviado).

Contrastes obligatorios: texto crema sobre carbón ≥ 12:1. Texto #15120E sobre botón oro ≥ 8:1. Nunca texto piedra sobre superficie para contenido esencial.

## Typography

- **Display / Hero / H2:** Cormorant Garamond — weight 600, tracking ligeramente apretado. Serif editorial: esto es lo que dice "lujo".
- **Body / UI / Botones:** Inter — weight 400 body, 500 labels, 600 botones. 16px/1.6, máx 72ch.
- **Metadatos / cifras (m², recámaras):** Inter 500 con `font-variant-numeric: tabular-nums`, o JetBrains Mono 0.875rem.

Escala:
- Hero: clamp(3rem, 7vw, 5.5rem) — el titular debe sentirse monumental
- H2: clamp(2rem, 4vw, 3rem)
- Body: 1rem / 1.6
- Labels/caption: 0.8125rem, letter-spacing 0.08em, uppercase, color piedra

Cargar fuentes de Google Fonts con `font-display: swap` y preload del woff2 del display.

## Layout

- **Grid:** CSS Grid. Contenedor máx 1280px, padding lateral 1.5rem (mín 16px en móvil).
- **Espaciado:** base 8px. Gaps de sección: clamp(5rem, 10vw, 10rem) — el lujo es espacio en blanco.
- **Hero:** foto de la casa a viewport completo (`min-h-[100dvh]`, nunca `h-screen`) con overlay de gradiente inferior para legibilidad; titular + un solo CTA.
- **Secciones:** zig-zag asimétrico texto+imagen. Prohibidas 3 columnas iguales.
- **Galería:** grid asimétrico con tamaños variados (estilo editorial), no mosaico uniforme.
- **Móvil:** colapso a 1 columna bajo 768px. Sin overflow horizontal. Los visitantes llegan desde WhatsApp/Instagram: móvil primero en prioridad real.
- **z-index:** base 0 / nav sticky 100 / overlay 200 / modal-lightbox 300 / toast 500.

## Estructura de secciones (en orden)

1. **Nav** — fija, fondo carbón translúcido con `backdrop-filter: blur(12px)`, logo/lettermark tracking-tighter, enlaces ancla, CTA "Agendar visita".
2. **Hero** — foto hero a pantalla completa. Titular Cormorant revelándose letra por letra. Sub-línea con ubicación. CTA oro con border beam. Indicador de scroll sutil.
3. **La Residencia** — descripción editorial + cifras clave (m² terreno, m² construcción, recámaras, baños, estacionamientos) con numeración 01 02 03 y líneas verticales decorativas doradas.
4. **Galería** — reveal en columnas al scroll (clip slide down escalonado con leve motion blur). Click abre lightbox.
5. **Amenidades** — cards con flashlight dorado sutil que sigue el mouse. Iconos Lucide trazo fino, nunca emojis.
6. **Ubicación** — mapa embebido (iframe Google Maps lazy) + puntos de interés de la zona.
7. **Contacto** — formulario (Web3Forms) + botón WhatsApp prominente con mensaje prellenado. Un campo menos es un lead más: nombre, teléfono, mensaje opcional.
8. **Footer** — mínimo: contacto, aviso de privacidad, créditos.

Sin pricing de 3 planes, sin testimonios inventados, sin logos de marcas.

## Motion (efectos — máximo UN elemento en movimiento por viewport)

- **Física:** spring stiffness 120, damping 20. Transiciones con peso, seguras.
- **Entradas:** fade + translateY(16px→0) 480ms ease-out; cascada 100ms entre items.
- **Hero:** titular con clip reveal letra a letra (~1.2s total, una sola vez).
- **Galería:** imágenes en columnas con clip slide down escalonado al entrar al viewport.
- **CTA primario:** border beam de 1px dorado (conic-gradient animado ~3s) solo en hover/focus.
- **Cards amenidades:** flashlight radial dorado ~12% opacidad siguiendo el mouse (solo desktop).
- **Hover:** scale(1.02) + sombra, 200ms. Transiciones de página: fade 300ms.
- **Parallax:** solo en la foto hero, desplazamiento ≤ 10%.
- **Rendimiento innegociable:** solo `transform` y `opacity`. Si algo baja de 60fps en un móvil medio, se elimina, no se optimiza a medias. Nada de WebGL salvo que se pruebe fluido; los efectos listados se logran con CSS/JS ligero o GSAP + ScrollTrigger.
- **`prefers-reduced-motion`:** obligatorio — todo aparece sin animación manteniendo la jerarquía.

## Shapes & Components

- Radio base: 2px (casi recto — la arquitectura es de líneas rectas; nada de pills salvo el CTA).
- **Botón primario:** pill (9999px), fondo oro, texto #15120E weight 600. Hover: aclarar 6% + lift sutil. Active: translateY(1px). Sin glow exterior.
- **Botón secundario/ghost:** borde 1px piedra, texto crema. Hover: fondo superficie.
- **Cards:** fondo superficie elevada, borde 1px rgba(250,240,230,0.08), radio 2px, sombra 0 2px 12px rgba(0,0,0,0.3).
- **Inputs:** label arriba, fondo superficie interactiva, borde 1px piedra al 30%, focus ring 2px oro offset 2px. Error en rojo semántico bajo el campo.
- **Detalle kintsugi:** líneas doradas finas (1px) como separadores de sección, con una leve imperfección orgánica (SVG), no reglas rectas perfectas.
- **Imágenes:** WebP/AVIF, `loading="lazy"` salvo hero (preload), `aspect-ratio` reservado para evitar layout shift.

## Do's and Don'ts

- No emojis en UI — iconos Lucide trazo fino.
- No #000000 ni #FFFFFF puros.
- No gradientes decorativos salvo el overlay del hero y el border beam.
- No más de un efecto en movimiento por viewport.
- No 3 columnas iguales.
- No `h-screen` — usar `min-h-[100dvh]`.
- No clichés de IA: "Eleva tu estilo de vida", "Seamless", "Exclusividad sin límites".
- No testimonios ni datos inventados; solo información real de la propiedad.
- No fotos de stock de casas ajenas — si aún no hay fotos reales, placeholders neutros marcados como tales.
- No video de hero > 2MB; preferir foto optimizada.
- Do: numeración 01 02 03 en secciones, líneas verticales doradas, lettermark con tracking apretado, fotos reales protagonistas, WhatsApp como conversión primaria.

## Use Case

Landing de una sola propiedad residencial premium en venta. Objetivo: agendar visitas. Audiencia: compradores de alto poder adquisitivo llegando desde campañas en móvil.

<!-- Basado en: designmd.app/library/aura-premium-webgl-iconify + designmd.app/library/ceramica-wabi-sabi -->
