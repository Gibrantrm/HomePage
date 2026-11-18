# HomePage — Landing de residencia premium

Landing page estática de UNA propiedad residencial de lujo en venta, en zona residencial premium. Objetivo único: generar visitas agendadas (WhatsApp + formulario). Promotor: Gibran.

## Regla principal

**Antes de generar o modificar cualquier UI, lee `DESIGN.md` completo y síguelo.** Paleta, tipografía, estructura de secciones, efectos y Do's/Don'ts están ahí. Ante conflicto entre una idea nueva y DESIGN.md, gana DESIGN.md salvo instrucción explícita del usuario.

Para el contexto completo del proyecto (decisiones tomadas, por qué este stack, qué falta), lee `CONTEXT.md`.

## Stack

- HTML/CSS/JS estático, sin framework ni build step. GSAP + ScrollTrigger (CDN) solo para los efectos que DESIGN.md especifica.
- Hosting: Cloudflare Pages, deploy automático desde este repo, rama `main`.
- Formulario: Web3Forms (envío a correo, sin backend).
- Analytics: Cloudflare Web Analytics.
- No agregar dependencias nuevas sin preguntar al usuario.

## Estructura

- `index.html` — solo contenido y estructura (una sola página). Sin `<style>` ni `<script>` inline.
- `css/styles.css` — todo el estilo (tokens en `:root`, receta `.glass`, layout, responsive, reduced-motion).
- `js/main.js` — todo el comportamiento: animaciones GSAP, lightbox, flashlight de cards, envío del formulario. Script clásico (no `type="module"`) cargado al final del `<body>`: el `onclick="lb.close()"` del lightbox depende de que `lb` sea global.
- `img/` — fotos de la propiedad en WebP/AVIF, optimizadas antes de commitear.

Gotcha: los iconos de amenidades llevan `stroke="url(#iriGrad)"` como atributo en el HTML, no en el CSS. Un `url(#id)` dentro de un `.css` externo Safari puede resolverlo contra el archivo CSS y el icono pierde el degradado. No moverlo al CSS.

## Reglas de trabajo

- Español de México en todo el copy visible.
- Móvil primero: el tráfico llega de WhatsApp/Instagram.
- Rendimiento: solo `transform`/`opacity` en animaciones; imágenes lazy salvo hero; `prefers-reduced-motion` obligatorio.
- Datos de la propiedad (nombre, ubicación, cifras, precio, teléfono WhatsApp): **nunca inventarlos**; pedirlos si faltan. Nada de testimonios ni datos ficticios.
