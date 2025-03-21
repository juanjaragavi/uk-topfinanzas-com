# TopFinanzas Mexico: Wrapper Prompt

## Project Overview

TopFinanzas is expanding its operations to the Mexican market. This project involves adapting our existing website, originally developed for the US market, to meet the needs and expectations of Mexican users. This adaptation is not a simple translation, but a complete localization that considers cultural, legal, and user experience aspects specific to Mexico.

## General Task Description

The general task consists of transforming the current codebase to create a Mexican Spanish version of the TopFinanzas site. This includes:

1. **Content Translation**: Translate all texts, strings, and messages from English to Mexican Spanish, maintaining terminological consistency and adapting financial concepts to the Mexican reality.

2. **Directory Renaming**: Update directory names and paths where necessary, ensuring that all `href` links and `src` properties are correctly updated throughout the code.

3. **Metadata Updates**: Modify the `lang` attribute in the `<head>` section of the rendered HTML to "es-mx" and update metadata for SEO in Mexico.

4. **Financial Terms Localization**: Adapt terms specific to the US financial system to their Mexican equivalents (for example, "Social Security Number" to "CURP/RFC").

5. **Requirements Updates**: Modify credit card application requirements to reflect the Mexican financial system.

6. **SEO Optimization**: Update keywords and metadata to improve positioning in Spanish searches and specifically for Mexico.

## Project Structure

TopFinanzas uses a centralized content management system where all content is defined in TypeScript or JSON files with well-defined interfaces. The content is organized in several directories under `/lib`, including:

- `/lib/navigation`: Defines the site navigation structure
- `/lib/texts`: Contains static texts for components
- `/lib/images`: Defines image configurations
- `/lib/pages`: Contains specific content for different pages

## Reference to Codebase Analysis

To fully understand the project structure and how content is managed, refer to the codebase analysis file at:

`/lib/documents/topfinanzas-pages-mx-codebase-analysis-en.md`

This document provides a detailed analysis of:

- The project directory structure
- The centralized content management system
- Key files and their purposes
- Specific changes made for adaptation to the Mexican market
- Best practices for working with this codebase

## Instructions for Agents

1. **Familiarize Yourself with the Analysis**: Begin by reading the analysis document to understand the project structure and content management system.

2. **Identify Files to Modify**: Based on the specific task, identify which files need to be modified.

3. **Maintain Consistency**: Ensure that all changes are consistent throughout the site, using the same terminology and style.

4. **Verify Links**: When modifying paths or file names, ensure all related links are updated.

5. **Test Changes**: After making modifications, verify that everything works correctly and that the content displays properly.

6. **Document Changes**: Record all changes made for future reference.

## Work Process

1. **Analyze**: Review the relevant files to understand their structure and content.

2. **Plan**: Determine what specific changes need to be made and in which files.

3. **Implement**: Make the necessary modifications following best practices.

4. **Verify**: Check that the changes are correct and consistent.

5. **Document**: Update documentation as necessary to reflect the changes made.

By following this process, we will ensure an effective and consistent adaptation of the TopFinanzas site for the Mexican market.
