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
| Hosting | **Cloudflare Workers (static assets)** (gratis) | Ancho de banda ilimitado y permite uso comercial. Vercel Hobby prohíbe uso comercial; Firebase Hosting tiene cuota diaria (~360MB/día); Netlify cambió a créditos confusos. Se planeó Pages, pero el dashboard de Cloudflare ahora lleva a Workers por defecto; para un sitio estático es equivalente. |
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
- [x] Pin del mapa: coordenadas exactas de Gibran `21.1312232,-101.6040754` (pin GPS compartido por él, 2026-11-18). Las usan el iframe y el botón "Abrir en Google Maps" (`maps/search/?api=1&query=lat,lng`, un solo pin; antes buscaba por texto y mostraba varios resultados)
- [x] Web3Forms: access key real puesta en `index.html` (input `access_key`) y probada el 2026-11-18 con un envío real (success). La key es pública por diseño (solo permite enviar al correo del dueño), por eso va en el HTML y no en un `.env`; Cloudflare Pages no necesita configuración para ella. Si el envío falla, el form avisa y manda a WhatsApp
- [x] Config de Cloudflare en el repo (`wrangler.jsonc` + `.assetsignore`), verificada con `wrangler dev`: el sitio responde 200 y los `.md`, la config y `.git` dan 404
- [x] Repo conectado a Cloudflare (Workers Builds). Cada push a `main` despliega solo; el resultado aparece como check "Workers Builds: homepage" en el commit de GitHub. Solo `main` dispara deploy (preview builds apagados)
- [x] Dominio **puntapenasco154.com** (comprado en Cloudflare, 2026-11-18) + `www.puntapenasco154.com`, ambos en Production
- [x] Vista previa para WhatsApp/redes: `og:image` absoluta a `img/og-fachada.jpg` (JPG 1200×630, recorte de la fachada con el atardecer), `og:url` y `canonical` al dominio final
- [x] QR para impresos/flyers apunta a `https://puntapenasco154.com/qr`. El archivo `_redirects` (`/qr / 200`) sirve la misma página en esa ruta sin redirigir, para que Cloudflare Web Analytics cuente las visitas del QR como path `/qr` (Web Analytics no reporta query strings como `?src=qr`). No borrar `_redirects` ni meterlo a `.assetsignore`. Falta activar Web Analytics en el dashboard (Analytics & Logs → Web Analytics → Add site)
- [ ] Probar en el celular con datos móviles (no Wi-Fi de oficina) y mandar el link por WhatsApp para ver la vista previa
- [x] `www` → raíz: registro DNS `AAAA www 100::` (proxied, naranja) + Redirect Rule "Redirect from WWW to root" (301). El registro hace que `www` exista y pase por Cloudflare; la regla decide a dónde mandarlo. Sin el registro, la regla nunca corre (NXDOMAIN)

Nota para agentes: herramientas automáticas (curl, PowerShell, WebFetch de Claude/Gemini) reciben **403** del dominio por la protección anti-bots/anti-IA de Cloudflare. No es un error del sitio; verificar con un navegador real. En la PC de oficina de Gibran además hay un proxy Netskope que aísla dominios nuevos.

Hero en móvil: `img/fachada-movil.webp` es cuadrada: cielo extendido con Gemini arriba + foto original intacta abajo (verificado pixel a pixel). Solo se usa en pantallas verticales vía `<picture>`; desktop usa `img/fachada.webp`.
- [ ] Opcionales: plano arquitectónico como imagen extra, 2-3 fotos de día, video corto para redes, dominio propio
