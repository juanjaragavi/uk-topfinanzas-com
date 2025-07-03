# Project Overview

This is a Next.js project for Top Finanzas, a financial services website. It includes a blog, credit card comparison tools, and other financial services.

## Key Technologies

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/UI, Radix UI
- **Content:** MDX
- **Deployment:** PM2

## Project Structure

- `app/`: Contains the application's routes, pages, and components.
- `components/`: Contains reusable UI components.
- `content/`: Contains the content for the website in MDX format.
- `public/`: Contains static assets like images and fonts.
- `lib/`: Contains utility functions and libraries.
- `next.config.mjs`: The main configuration file for the Next.js project.
- `package.json`: Defines the project's dependencies and scripts.

## Development Workflow

- **Install dependencies:** `npm install`
- **Run the development server:** `npm run dev`
- **Build the project for production:** `npm run build`
- **Start the production server:** `npm run start`
- **Lint the code:** `npm run lint`

## Deployment

The application is deployed using PM2. The deployment configuration is defined in the `ecosystem.config.js` file. To deploy the application, run the following command:

```bash
pm2 start ecosystem.config.js --env production
```

## API Key Management

All API keys and sensitive information are managed through environment variables and should never be hardcoded in the application code. Environment files are stored in `/opt/app` on the server with strict permissions.
