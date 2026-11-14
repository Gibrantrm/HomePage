# Contexto del proyecto (actualizado 2026-11-14, rama liquid-glass)

Resumen de las sesiones de arranque (hechas con Claude Code) para que cualquier agente (Gemini CLI, Claude, etc.) o persona retome el trabajo con todo el contexto.

## La idea

Landing page tipo "una sola propiedad" para promocionar **Punta Peñasco #154**, casa nueva premium en la Privada Punta Peñasco, Lomas Punta del Este, León, Gto. El promotor es Gibran. Única meta de conversión: que el visitante agende una visita (WhatsApp 477 406 4268 + formulario). Precio publicado: $4,500,000 MXN.

## Estado del diseño — IMPORTANTE

Hay DOS variantes completas de `index.html`:

- **Rama `main`**: v1 "Aura Cálida" — oro/carbón, serif Cormorant Garamond, estilo residencia clásica de lujo.
- **Rama `liquid-glass` (esta)**: v2 "Liquid Glass" — la que **Gibran eligió**. Vidrio esmerilado, orbes iridiscentes, Inter, nav pill flotante. El DESIGN.md de esta rama describe esta estética.
- **Pendiente: Gibran hará el merge de `liquid-glass` a `main` él mismo.**

Regla clave aprendida en revisión: el panel de vidrio NO va encima de la foto del hero (tapaba la casa); el texto va directo sobre la foto con overlay + text-shadow. En el resto de la UI el vidrio sí es el lenguaje.

## Decisiones tomadas y por qué

| Decisión | Elección | Por qué |
|---|---|---|
| Hosting | **Cloudflare Pages** (gratis) | Ancho de banda ilimitado y permite uso comercial. Vercel Hobby prohíbe uso comercial; Firebase Hosting tiene cuota diaria (~360MB/día); Netlify cambió a créditos confusos. |
| Leads | **Web3Forms** (gratis, ~250/mes) + botón WhatsApp con mensaje prellenado | Sin backend. WhatsApp convierte mejor en inmobiliaria en México. |
| Analytics | Cloudflare Web Analytics | Gratis, incluido en Pages. |
| Código | HTML/CSS/JS estático + GSAP (CDN) | Una landing no necesita framework ni build. |
| Diseño | Liquid Glass (ver `DESIGN.md` de esta rama) | Elección de Gibran tras comparar ambas variantes en vivo. |
| Mapa | iframe Google Maps con `output=embed`, coords fijas, `filter: invert` para modo oscuro y bordes difuminados | Sin API key. La búsqueda por texto regaba pins por todo León. |

## Datos de la propiedad (reales, del avalúo — no inventar nada más)

- Punta Peñasco #154, Privada Punta Peñasco, Lomas Punta del Este, León, Gto.
- Terreno 171.25 m² · construcción total 148.10 m² (117.50 habitacional + 30.60 cochera/terraza) · 1 nivel · nueva.
- Programa: recibidor, sala, comedor, cocina-desayunador con alacena, estudio, 2 recámaras (principal con vestidor y baño), 3 baños completos, terraza, cuarto de lavado, jardín interior, cochera techada 2 autos.
- Equipamiento: SAPAL y CFE, tanque hidroneumático, cisterna, bomba sumergible, boiler eléctrico, parrilla, campana, horno de gas.
- Precio: $4,500,000 MXN. WhatsApp: 52 477 406 4268.
- Fotos: 11 en `img/` (WebP, optimizadas desde el issue #1 del repo). Hero = fachada al atardecer.

## Checklist de estado

- [x] Repo: https://github.com/Gibrantrm/HomePage.git — local en `C:\Workspace Gibran\Git\HomePage` (main) y `C:\Workspace Gibran\Git\HomePage-liquid` (worktree liquid-glass)
- [x] Landing v1 (oro/serif) en `main`, verificada en navegador desktop y móvil
- [x] Landing v2 Liquid Glass en esta rama, elegida por Gibran
- [ ] **Merge de liquid-glass a main (lo hace Gibran en su casa)**
- [ ] Verificar el pin del mapa: coords actuales `21.1314842,-101.6039515` (geocode del domicilio). Google también tiene la "Privada Punta Peñasco" como lugar en `21.1307783,-101.6016764` — confirmar con Gibran cuál es el punto correcto y actualizar el iframe
- [ ] Web3Forms: crear cuenta, poner la access key real en el form (hoy dice `TU_ACCESS_KEY_WEB3FORMS`; el form hace fallback a WhatsApp si falla)
- [ ] Conectar el repo a Cloudflare Pages (sin build command, output `/`)
- [ ] Opcionales: plano arquitectónico como imagen extra, 2-3 fotos de día, video corto para redes, dominio propio
