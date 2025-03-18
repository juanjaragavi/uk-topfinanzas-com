# N8N Workflow Analysis: TF_OPS_CC_Quiz_Page_Deployer

## Workflow Overview

The "TF_OPS_CC_Quiz_Page_Deployer" is an automated content management workflow implemented using n8n. This workflow enables LLM-based agents to generate content for a credit card quiz page, transform it into a TypeScript file, deploy it to a Next.js application, and notify stakeholders upon completion.

## Workflow Sections

The workflow is organized into four main sections:

1. **Content Generation** - Creates quiz content using AI models
2. **File Processing** - Converts content to TypeScript and saves it to the file system
3. **Deployment** - Rebuilds the Next.js application and restarts the service
4. **User Notification** - Sends email notifications and responds to the chat user

## Detailed Process Flow

### 1. Content Generation

The workflow begins with a chat trigger node called "Operador" that receives input from a user. This triggers the following process:

- **Generador de Contenidos** - A chain LLM node that:
  - Uses a specialized system prompt for TopFinanzas Quiz Content Creator
  - Takes the user's input about a credit card brand
  - Generates a neutral, unbiased credit card recommendation quiz in Markdown format
  - Uses the models/gemini-2.0-flash-001 AI model with temperature 0.7

### 2. File Processing

The Markdown content is then processed into usable TypeScript files:

- **Generador de Plantilla** - A chain LLM node that:
  - Takes the Markdown content generated in the previous step
  - Transforms it into a TypeScript file structure based on a provided template
  - Creates a `strings.ts` file with quiz step data, questions, and options
  - Uses the models/gemma-3-27b-it AI model with temperature 0.1

- **Generador de Archivo de Página** - A text manipulation node that:
  - Processes the generated TypeScript content
  - Removes code fences and formatting markers
  - Prepares the file for saving

- **Guardar Archivo de Página en Disco** - A file write operation that:
  - Saves the processed TypeScript content to `/var/www/quiz-topfinanzas-com/lib/strings.ts`
  - This file contains the quiz questions and options that will be used by the Next.js application

### 3. Deployment

After the content file is saved, the workflow triggers the deployment process:

- **Reconstruir App y Reiniciar Servicio** - An execute command node that:
  - Runs a shell script: `sudo /usr/bin/scripts/deploy_quiz_topfinanzas_com.sh`
  - This script likely rebuilds the Next.js application and restarts the server
  - Ensures the new content is compiled and available on the live site

### 4. User Notification

Finally, the workflow notifies stakeholders about the completed operation:

- **Generador de Plantilla de Correo** - A chain LLM node that:
  - Converts the Markdown content to HTML format optimized for email
  - Uses the models/gemini-2.0-flash-001 AI model with temperature 0.1

- **Formatear HTML** - A text manipulation node that:
  - Cleans up the HTML output for email use
  - Removes any remaining code fences or Markdown artifacts

- **Enviar Email de Notificación** - An email send node that:
  - Sends an email notification to <juan.jaramillo@topnetworks.co>
  - Uses a professionally formatted HTML template
  - Includes the formatted content in the email body
  - Provides a link to view the updated quiz page

- **Responder al Chat del Usuario** - A text manipulation node that:
  - Prepares a response to send back to the original chat user
  - Returns the generated content to provide confirmation

## Integration with Our Dynamic Content Management System

This n8n workflow represents a practical implementation of the concepts we've developed in our dynamic content management system:

1. **Content Generation**: Uses LLM-based agents to create structured content (similar to our content JSON files)
2. **File Processing**: Transforms content into TypeScript files (similar to our bridge pattern)
3. **Deployment**: Updates the Next.js application to reflect content changes (similar to our rebuild process)
4. **Notification**: Keeps stakeholders informed about content updates

## Key Differences and Potential Improvements

When comparing this workflow to our newly implemented content management system:

1. **Content Structure**:
   - This workflow generates a TypeScript file directly
   - Our system separates content (JSON) from structure (TypeScript interfaces)

2. **Update Mechanism**:
   - This workflow uses direct file system writes
   - Our system uses an API endpoint that could be integrated with this workflow

3. **Deployment Process**:
   - This workflow uses a custom shell script
   - Our system could use a standardized rebuild process via API

## Integration Opportunities

This workflow could be enhanced to work with our new content management system by:

1. Modifying the output to generate JSON content instead of TypeScript
2. Updating the deployment step to use our API endpoint instead of direct file writes
3. Maintaining the notification system which provides valuable feedback

This would combine the strengths of automated content generation from n8n with our type-safe, separation-of-concerns architecture.
