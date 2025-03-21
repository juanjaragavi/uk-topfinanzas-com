# TopFinanzas México: Wrapper Prompt

## Visión General del Proyecto

TopFinanzas está expandiendo sus operaciones al mercado mexicano. Este proyecto implica adaptar nuestro sitio web existente, originalmente desarrollado para el mercado de Estados Unidos, para satisfacer las necesidades y expectativas de los usuarios mexicanos. Esta adaptación no es una simple traducción, sino una localización completa que considera aspectos culturales, legales y de experiencia de usuario específicos para México.

## Descripción de la Tarea General

La tarea general consiste en transformar el código base actual para crear una versión en español mexicano del sitio TopFinanzas. Esto incluye:

1. **Traducción de Contenido**: Traducir todos los textos, cadenas y mensajes del inglés al español mexicano, manteniendo la coherencia terminológica y adaptando conceptos financieros a la realidad mexicana.

2. **Renombrado de Directorios**: Actualizar nombres de directorios y rutas donde sea necesario, asegurando que todos los enlaces `href` y propiedades `src` se actualicen correctamente en todo el código.

3. **Actualización de Metadatos**: Modificar el atributo `lang` en la sección `<head>` del HTML renderizado a "es-mx" y actualizar metadatos para SEO en México.

4. **Localización de Términos Financieros**: Adaptar términos específicos del sistema financiero estadounidense a sus equivalentes mexicanos (por ejemplo, "Social Security Number" a "CURP/RFC").

5. **Actualización de Requisitos**: Modificar los requisitos para solicitudes de tarjetas de crédito para reflejar el sistema financiero mexicano.

6. **Optimización de SEO**: Actualizar palabras clave y metadatos para mejorar el posicionamiento en búsquedas en español y específicamente para México.

## Estructura del Proyecto

TopFinanzas utiliza un sistema de gestión de contenido centralizado donde todo el contenido se define en archivos TypeScript o JSON con interfaces bien definidas. El contenido está organizado en varios directorios bajo `/lib`, incluyendo:

- `/lib/navigation`: Define la estructura de navegación del sitio
- `/lib/texts`: Contiene textos estáticos para componentes
- `/lib/images`: Define configuraciones de imágenes
- `/lib/pages`: Contiene el contenido específico para diferentes páginas

## Referencia al Análisis del Código Base

Para entender completamente la estructura del proyecto y cómo se gestiona el contenido, consulta el archivo de análisis del código base en:

`/lib/documents/topfinanzas-pages-mx-codebase-analysis.md`

Este documento proporciona un análisis detallado de:

- La estructura de directorios del proyecto
- El sistema de gestión de contenido centralizado
- Los archivos clave y sus propósitos
- Los cambios específicos realizados para la adaptación al mercado mexicano
- Las mejores prácticas para trabajar con este código base

## Instrucciones para los Agentes

1. **Familiarízate con el Análisis**: Comienza leyendo el documento de análisis para entender la estructura del proyecto y el sistema de gestión de contenido.

2. **Identifica Archivos a Modificar**: Basándote en la tarea específica, identifica qué archivos necesitan ser modificados.

3. **Mantén la Coherencia**: Asegúrate de que todos los cambios sean coherentes en todo el sitio, utilizando la misma terminología y estilo.

4. **Verifica Enlaces**: Al modificar rutas o nombres de archivos, asegúrate de actualizar todos los enlaces relacionados.

5. **Prueba los Cambios**: Después de realizar modificaciones, verifica que todo funcione correctamente y que el contenido se muestre adecuadamente.

6. **Documenta los Cambios**: Registra todos los cambios realizados para referencia futura.

## Proceso de Trabajo

1. **Analizar**: Revisa los archivos relevantes para entender su estructura y contenido.

2. **Planificar**: Determina qué cambios específicos se necesitan hacer y en qué archivos.

3. **Implementar**: Realiza las modificaciones necesarias siguiendo las mejores prácticas.

4. **Verificar**: Comprueba que los cambios son correctos y coherentes.

5. **Documentar**: Actualiza la documentación según sea necesario para reflejar los cambios realizados.

Al seguir este proceso, aseguraremos una adaptación efectiva y coherente del sitio TopFinanzas para el mercado mexicano.
