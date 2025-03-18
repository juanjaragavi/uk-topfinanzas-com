# N8N Workflow Integration Guide

This document provides instructions for integrating our new Dynamic Content Management System with n8n workflows, enabling automated content updates through AI-powered agents.

## Overview

Our refactored content management system separates content from structure using:

1. TypeScript interfaces that define content structure
2. JSON files that store the actual content
3. Bridge modules that import the JSON content and validate it against interfaces

The n8n workflow approach allows AI-based agents to generate content, validate it against our type definitions, and update the JSON files via our API endpoint.

## Setting Up the N8N Workflow

We've created a sample workflow in `lib/documents/TF_TOPFINANZAS_Recommendation_Page_Deployer.json` that demonstrates the approach. To use this workflow:

1. Log in to your n8n instance
2. Go to Workflows > Import from File
3. Select the `TF_TOPFINANZAS_Recommendation_Page_Deployer.json` file
4. Update any credentials or server-specific settings

### Workflow Structure

Our workflow is organized into four main sections:

1. **Content Generation** - Uses AI models to create content based on user input
2. **JSON Formatting** - Ensures content is properly formatted as JSON that matches our interfaces
3. **Deployment** - Updates the content via our API and triggers a rebuild
4. **User Notification** - Sends email notifications about the update

## Configuration Requirements

To properly set up the workflow, you need:

1. **API Access**: Ensure the server running n8n can access your Next.js API endpoint
2. **Rebuild Script**: Make sure the rebuild script (`scripts/rebuild_app.sh`) is properly installed and executable
3. **Email Configuration**: Configure SMTP settings for email notifications

## Workflow Nodes

The key nodes in our workflow include:

### 1. Operator (Chat Trigger)

- Receives user prompts to generate new content

### 2. Generate Recommendation Content

- Uses Gemini AI to generate JSON content that matches our TypeScript interfaces

### 3. Generate Content Summary

- Creates a human-readable summary of the changes

### 4. Update Content via API

- Calls our API endpoint to update the JSON content file

### 5. Rebuild App

- Executes our rebuild script to apply changes

### 6. Format Email Content & Send Notification

- Formats results and sends email notifications

## Required Server-Side Components

### 1. API Endpoint

Our API endpoint at `/api/content/pages` handles:

- Getting current content for reference
- Updating content JSON files
- Validating content against type definitions

Implementation location: `app/api/content/pages/route.ts`

### 2. Rebuild Script

The rebuild script (`scripts/rebuild_app.sh`) performs:

- Next.js application build
- Service restart
- Logging of the process

## Adding New Content Types

To add a new content type to the workflow system:

1. Create a TypeScript interface file in `lib/pages/[section]/types/`
2. Create an initial JSON content file in `lib/pages/[section]/content/`
3. Create a bridge module that imports and exports the content
4. Create a new workflow in n8n based on our template
5. Update the API calls to point to the new content file

## Security Considerations

1. **API Access**: Ensure the API endpoint is properly secured
2. **Script Execution**: Use the least privileges necessary for the rebuild script
3. **Validation**: Always validate incoming content against the TypeScript interfaces
4. **Logging**: Maintain comprehensive logs of all content updates

## Testing the Workflow

Before deploying to production:

1. Test the workflow with sample content
2. Verify the JSON structure matches your TypeScript interface
3. Confirm the API endpoint correctly updates the content file
4. Check that the rebuild process works as expected
5. Verify the content appears correctly on the website

## Monitoring and Maintenance

- Monitor the logs at `/var/log/topfinanzas-rebuilds.log`
- Periodically review and update the AI prompts for optimal content generation
- Check for any TypeScript interface changes that might require workflow updates

## Troubleshooting

### Common Issues

1. **Content Validation Errors**: Ensure the AI model is properly instructed to follow the interface structure
2. **API Access Issues**: Check network connectivity and authorization
3. **Rebuild Failures**: Verify script permissions and environment setup
4. **Email Notification Problems**: Confirm SMTP settings are correct

For any issues, check the workflow execution logs in n8n and the application rebuild logs.
