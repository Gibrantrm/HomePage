# HomePage — Landing de residencia premium

Landing page estática de UNA propiedad residencial de lujo en venta. Objetivo: agendar visitas (WhatsApp + formulario).

## Regla principal

**Antes de generar o modificar cualquier UI, lee `DESIGN.md` completo y síguelo.** Paleta, tipografía, estructura de secciones, efectos y Do's/Don'ts están ahí. Ante conflicto entre una idea nueva y DESIGN.md, gana DESIGN.md salvo instrucción explícita del usuario.

## Stack

- HTML/CSS/JS estático, sin framework. GSAP + ScrollTrigger (CDN) solo para los efectos que DESIGN.md especifica.
- Hosting: Cloudflare Pages (deploy automático desde este repo, rama `main`).
- Formulario: Web3Forms (envío a correo, sin backend).
- Analytics: Cloudflare Web Analytics.

## Estructura

- `index.html` — la landing completa (una sola página).
- `css/` y `js/` — separados solo si crecen; mientras quepan legibles, inline está bien.
- `img/` — fotos de la propiedad en WebP/AVIF, optimizadas antes de commitear.

## Reglas de trabajo

- Español de México en todo el copy visible.
- Móvil primero: el tráfico llega de WhatsApp/Instagram.
- Rendimiento: solo `transform`/`opacity` en animaciones; imágenes lazy salvo hero; sin dependencias nuevas sin preguntar.
- Datos de la propiedad (nombre, ubicación, cifras, precio, teléfono WhatsApp): nunca inventarlos; pedirlos si faltan.
