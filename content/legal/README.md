# Directorio de Contenido Legal

Este directorio contiene documentos legales para el sitio web Top Finanzas en formato MDX.

## Archivos

- `privacy-policy.mdx` - Documento de Política de Privacidad
- `terms-conditions.mdx` - Documento de Términos y Condiciones

## Formato de Contenido

Cada documento legal está escrito en formato MDX con metadatos de frontmatter:

```mdx
---
title: "Título del Documento"
effectiveDate: "Fecha en que la política/términos entraron en vigor"
lastUpdated: "Fecha en que el documento fue actualizado por última vez"
---

# Contenido Principal

Contenido del documento en formato Markdown...
```

## Actualización de Documentos Legales

Al actualizar documentos legales:

1. Actualiza el campo `lastUpdated` en el frontmatter
2. Realiza los cambios necesarios al contenido del documento
3. Considera añadir una sección de "Registro de Cambios" si haces cambios significativos

## Páginas

Estos archivos MDX se renderizan en las siguientes rutas:

- Política de Privacidad: `/politica-de-privacidad`
- Términos y Condiciones: `/terminos`

El renderizado es gestionado por:

- `app/politica-de-privacidad/page.tsx`
- `app/terminos/page.tsx`

## Navegación

Los enlaces a estas páginas están definidos en `lib/navigation/footerNavigation.ts` bajo el array `legalLinks`.
