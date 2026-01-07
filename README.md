# Until Then — Cuenta atrás para Navidad

Una pequeña web estática creada con Astro que muestra una cuenta regresiva animada hasta Navidad (o cualquier fecha que configures). Incluye animaciones festivas (nieve y fuegos artificiales), un layout adaptado para SEO (meta tags, Open Graph, Twitter Card y JSON-LD) y componentes sencillos para montar el contador.

---

## Características

- Contador en tiempo real con días, horas, minutos y segundos.
- Animaciones: nieve para cuenta atrás y fuegos artificiales cuando llega el momento.
- Componentes reutilizables en `src/components/`:
  - `Countdown.astro` — lógica del contador y actualización cada segundo.
  - `NumberCard.astro` — tarjeta para mostrar número + etiqueta.
  - `Hero.astro` — sección principal del sitio.
- Layout SEO-friendly en `src/layouts/Layout.astro` que acepta props: `title`, `description`, `image`, `canonical`, `lang`.
- Código organizado con utilidades en `src/utils/` (`snowAnimation.ts`, `fireworksAnimation.ts`).

## Estructura del proyecto

Resumen de las carpetas principales:

```
/
├── public/                # Archivos estáticos: favicon, imágenes, og-image.png (recomendado)
├── src/
│   ├── assets/            # Imágenes y assets
│   ├── components/        # Componentes reutilizables (Countdown, NumberCard, Hero, ...)
│   ├── layouts/           # Layout global (SEO)
│   ├── pages/             # Páginas (index.astro)
│   └── utils/             # Animaciones y utilidades (snow/fireworks)
└── package.json
```

## Tecnologías

- Astro (v5)
- TypeScript (en componentes/acciones client-side)
- Tailwind (configuración básica en dependencias)
- canvas-confetti para las animaciones de confeti/fuegos artificiales

## Scripts (package.json)

- `pnpm install` — instalar dependencias
- `pnpm dev` — servidor de desarrollo
- `pnpm build` — construir para producción
- `pnpm preview` — previsualizar la build de producción

(Estos scripts ya están configurados en `package.json`.)

## Cómo usar / personalizar

1. Clona el repo y instala dependencias:

```bash
pnpm install
```

2. Inicia el servidor de desarrollo:

```bash
pnpm dev
```

3. Abre `http://localhost:4321` (según tu configuración de Astro) y verás la cuenta atrás.

4. Personalizar la fecha objetivo:

   - Actualmente `src/pages/index.astro` calcula un `TIMESTAMP_END` para el 25 de diciembre del año actual. Puedes cambiarlo allí o pasar otro `TIMESTAMP_END` al componente `Countdown`.

5. Personalizar metadatos SEO / Open Graph:
   - El layout `src/layouts/Layout.astro` acepta props: `title`, `description`, `image`, `canonical`, `lang`.
   - Ejemplo de uso en `src/pages/index.astro`:

```astro
---
import Layout from '@layouts/Layout.astro';
---
<Layout
	title="Cuenta atrás para Navidad 2026 — Until Then"
	description="Resta días, horas, minutos y segundos hasta Navidad con animaciones festivas."
	image="/og-image.png"
	canonical="https://tudominio.com/"
	lang="es-ES"
>
	<!-- contenido -->
</Layout>
```
