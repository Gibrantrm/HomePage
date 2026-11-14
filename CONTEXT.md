# Contexto del proyecto (sesión inicial — 2026-11-14)

Resumen de la sesión de arranque (hecha con Claude Code) para que cualquier agente (Gemini CLI, Claude, etc.) o persona retome el trabajo con todo el contexto.

## La idea

Landing page tipo "una sola propiedad" para promocionar una casa nueva estilo muy premium en una zona residencial premium. El dueño del proyecto (Gibran) la está promoviendo. La página debe sentirse de lujo con efecto "wow" controlado — cinematográfica, no de startup tech — y su única meta de conversión es que el visitante agende una visita.

## Decisiones tomadas y por qué

| Decisión | Elección | Por qué |
|---|---|---|
| Hosting | **Cloudflare Pages** (gratis) | Ancho de banda ilimitado y permite uso comercial. Vercel Hobby prohíbe uso comercial; Firebase Hosting tiene cuota diaria (~360MB/día) que fotos de alta calidad agotan; Netlify cambió a créditos confusos. |
| Leads | **Web3Forms** (gratis, ~250 envíos/mes) + botón WhatsApp con mensaje prellenado | Sin backend. WhatsApp convierte mejor en inmobiliaria en México. |
| Analytics | Cloudflare Web Analytics | Gratis, incluido en Pages. |
| Código | HTML/CSS/JS estático + GSAP (CDN) | Una landing no necesita framework ni build. |
| Diseño | `DESIGN.md` propio (ver abajo) | Fuente única de verdad visual. |
| Dominio | Pendiente/opcional | Cloudflare Registrar a precio de costo (~$10 USD/año) si se quiere. |

## El diseño (DESIGN.md)

Se investigó https://designmd.app/library (catálogo open-source de ~759 especificaciones de diseño en Markdown para agentes de IA). Al usuario le gustó la categoría "premium con efecto wow". Se leyeron a fondo varias y el resultado es una **fusión hecha a medida** en `DESIGN.md`:

- **Efectos** tomados de *Aura Premium WebGL & Iconify* (designmd.app/library/aura-premium-webgl-iconify): reveal de galería en columnas al scroll, titular que se revela letra por letra, border beam dorado en el CTA, flashlight sutil en cards. Regla clave: máximo UN elemento en movimiento por viewport; si baja de 60fps en móvil, se elimina.
- **Paleta y tipografía** tomadas de *Cerâmica Wabi-Sabi* (designmd.app/library/ceramica-wabi-sabi), adaptadas: carbón cálido #15120E de fondo, crema #FAF0E6, oro #D4AF37 como acento único, Cormorant Garamond (titulares) + Inter (UI).
- Se **descartaron**: Liquid Glass (el efecto compite con la fotografía de la casa, pesa en GPU y envejece rápido) y Estilo de Elegância Espacial (vibe XR/tech, contraste roto en botones).
- Los DESIGN.md originales de designmd traían contradicciones internas (contrastes ilegibles, variables sin definir, estructura SaaS con pricing de 3 planes); el `DESIGN.md` de este repo ya las corrige y adapta la estructura a inmobiliaria: Nav, Hero, La Residencia, Galería, Amenidades, Ubicación, Contacto, Footer.

## Estado actual

- [x] Repo creado: https://github.com/Gibrantrm/HomePage.git — local en `C:\Workspace Gibran\Git\HomePage`
- [x] `DESIGN.md`, `AGENTS.md` (instrucciones para agentes), `CLAUDE.md` (apunta a AGENTS.md)
- [ ] Conectar el repo a Cloudflare Pages (dash.cloudflare.com → Workers & Pages → Pages → conectar `Gibrantrm/HomePage`, sin build command, output `/`)
- [ ] Crear cuenta en web3forms.com y obtener la access key para el formulario
- [ ] **Construir `index.html`** siguiendo DESIGN.md
- [ ] Dominio propio (opcional)

## Datos que faltan (pedirlos al usuario antes de construir, NO inventarlos)

1. Nombre de la propiedad y colonia/zona.
2. m² de terreno y construcción, recámaras, baños, estacionamientos, niveles.
3. Precio, o "precio bajo consulta".
4. Amenidades destacadas.
5. Número de WhatsApp para el CTA.
6. Fotos reales (optimizar a WebP antes de commitear). Si no hay aún, placeholders claramente marcados.
