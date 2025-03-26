# Directorio de Contenido

Este directorio contiene el contenido para el sitio web Top Finanzas, organizado por tipo.

## Contenido del Blog (`/blog`)

El directorio `/blog` contiene archivos MDX para entradas de blog. Cada archivo representa una entrada de blog individual.

### Formato de Entrada de Blog

Las entradas de blog están escritas en formato MDX, que combina Markdown con JSX (componentes de React). Cada entrada de blog debe tener la siguiente estructura:

```mdx
---
title: "Título de la Entrada"
date: "Día de Mes, Año"
author: "Nombre del Autor"
authorImage: "URL de la imagen del autor"
readingTime: "X minutos de lectura"
categories:
  - name: "Nombre de la Categoría"
    slug: "slug-de-categoria"
featuredImage: "URL de la imagen destacada"
excerpt: "Un breve resumen de la entrada para vistas previas y SEO"
---

# El contenido de la entrada comienza aquí

El contenido de tu entrada de blog en formato Markdown con componentes JSX opcionales.

## Encabezado H2

### Encabezado H3

- Elementos de lista
- Otro elemento

[Enlaces](https://ejemplo.com)

![Texto Alternativo de Imagen](url-imagen.jpg)

Y así sucesivamente...

```

### Campos de Frontmatter

La sección frontmatter (entre los marcadores `---`) contiene metadatos sobre la entrada:

- **title**: Título de la entrada (requerido)
- **date**: Fecha de publicación en formato "Día de Mes, Año" (requerido)
- **author**: Nombre del autor (requerido)
- **authorImage**: URL a la imagen de perfil del autor (requerido)
- **readingTime**: Tiempo estimado de lectura, ej., "6 minutos de lectura" (requerido)
- **categories**: Array de objetos de categoría, cada uno con `name` y `slug` (requerido)
- **featuredImage**: URL a la imagen destacada (requerido)
- **excerpt**: Breve resumen de la entrada (requerido)
- **views**: Conteo de vistas (opcional, por defecto es 0)
- **commentCount**: Conteo de comentarios (opcional, por defecto es 0)

### Imágenes

Para imágenes en entradas de blog, usa el siguiente formato:

```mdx
![Texto alternativo](https://media.topfinanzas.com/images/generated/TIMESTAMP/sample_0.jpg)
```

Reemplaza `TIMESTAMP` con el identificador de marca de tiempo apropiado.

## Añadir Nuevas Entradas de Blog

Para añadir una nueva entrada de blog:

1. Crea un nuevo archivo MDX en el directorio `/blog`
2. Nómbralo usando kebab-case basado en el título de la entrada (ej., `tu-primer-sueldo.mdx`)
3. Incluye todos los campos de frontmatter requeridos
4. Escribe el contenido de tu entrada en formato MDX
5. La entrada estará automáticamente disponible en `/blog/post/[nombre-del-archivo-sin-extensión]`

## Importación desde WordPress

El archivo `lib/documents/TopFinance_WordPress_Export_Mar_15_2025.xml` contiene entradas de WordPress exportadas que pueden ser convertidas a formato MDX. Herramientas futuras podrían desarrollarse para automatizar este proceso de conversión.
