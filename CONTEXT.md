# Contexto del proyecto (actualizado 2026-11-18)

Resumen de las sesiones de arranque (hechas con Claude Code) para que cualquier agente (Gemini CLI, Claude, etc.) o persona retome el trabajo con todo el contexto.

## La idea

Landing page tipo "una sola propiedad" para promocionar **Punta Peñasco #154**, casa nueva premium en la Privada Punta Peñasco, Lomas Punta del Este, León, Gto. El promotor es Gibran. Única meta de conversión: que el visitante agende una visita (WhatsApp 477 406 4268 + formulario). Precio publicado: $4,500,000 MXN.

## Estado del diseño — IMPORTANTE

El diseño vigente es **v2 "Liquid Glass"** (elegido por Gibran): vidrio esmerilado, orbes iridiscentes, Inter, nav pill flotante. `DESIGN.md` describe esta estética. Ya está en `main` (la rama `liquid-glass` se fusionó y se eliminó el 2026-11-18).

La v1 "Aura Cálida" (oro/carbón, serif Cormorant Garamond) quedó descartada; si alguna vez se quiere recuperar, está en el historial de git en el commit `f4171e8`.

El código está separado en `index.html` (contenido), `css/styles.css` (estilo) y `js/main.js` (comportamiento). Ver `AGENTS.md` → Estructura.

Regla clave aprendida en revisión: el panel de vidrio NO va encima de la foto del hero (tapaba la casa); el texto va directo sobre la foto con overlay + text-shadow. En el resto de la UI el vidrio sí es el lenguaje.

## Decisiones tomadas y por qué

| Decisión | Elección | Por qué |
|---|---|---|
| Hosting | **Cloudflare Pages** (gratis) | Ancho de banda ilimitado y permite uso comercial. Vercel Hobby prohíbe uso comercial; Firebase Hosting tiene cuota diaria (~360MB/día); Netlify cambió a créditos confusos. |
| Leads | **Web3Forms** (gratis, ~250/mes) + botón WhatsApp con mensaje prellenado | Sin backend. WhatsApp convierte mejor en inmobiliaria en México. |
| Analytics | Cloudflare Web Analytics | Gratis, incluido en Pages. |
| Código | HTML/CSS/JS estático + GSAP (CDN) | Una landing no necesita framework ni build. |
| Diseño | Liquid Glass (ver `DESIGN.md`) | Elección de Gibran tras comparar ambas variantes en vivo. |
| Archivos | HTML, CSS y JS separados | Más fácil de editar con agentes de IA: cada cambio toca solo el archivo de su tipo. Sin impacto en velocidad. |
| Mapa | iframe Google Maps con `output=embed`, coords fijas, `filter: invert` para modo oscuro y bordes difuminados | Sin API key. La búsqueda por texto regaba pins por todo León. |

## Datos de la propiedad (reales, del avalúo — no inventar nada más)

- Punta Peñasco #154, Privada Punta Peñasco, Lomas Punta del Este, León, Gto.
- Terreno 171.25 m² · construcción total 148.10 m² (117.50 habitacional + 30.60 cochera/terraza) · 1 nivel · nueva.
- Programa: recibidor, sala, comedor, cocina-desayunador con alacena, estudio, 2 recámaras (principal con vestidor y baño), 3 baños completos, terraza, cuarto de lavado, jardín interior, cochera techada 2 autos.
- Equipamiento: SAPAL y CFE, tanque hidroneumático, cisterna, bomba sumergible, boiler eléctrico, parrilla, campana, horno de gas.
- Precio: $4,500,000 MXN. WhatsApp: 52 477 406 4268.
- Fotos: 11 en `img/` (WebP, optimizadas desde el issue #1 del repo). Hero = fachada al atardecer.

## Checklist de estado

- [x] Repo: https://github.com/Gibrantrm/HomePage.git — local en `C:\Workspace Gibran\Git\HomePage` (solo rama `main`)
- [x] Landing v2 Liquid Glass elegida por Gibran, fusionada a `main`; rama `liquid-glass` eliminada
- [x] Código separado en HTML / CSS / JS, verificado en navegador (sin errores de consola, animaciones, lightbox y formulario funcionando)
- [ ] Verificar el pin del mapa: coords actuales `21.1314842,-101.6039515` (geocode del domicilio). Google también tiene la "Privada Punta Peñasco" como lugar en `21.1307783,-101.6016764` — confirmar con Gibran cuál es el punto correcto y actualizar el iframe
- [ ] Web3Forms: crear cuenta, poner la access key real en el form (hoy dice `TU_ACCESS_KEY_WEB3FORMS`; el form hace fallback a WhatsApp si falla)
- [ ] Conectar el repo a Cloudflare Pages (sin build command, output `/`)
- [ ] Opcionales: plano arquitectónico como imagen extra, 2-3 fotos de día, video corto para redes, dominio propio
