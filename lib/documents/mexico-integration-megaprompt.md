# Prompt

The **User Journey - Mexico** below outlines the current URL structure for the Credit Cards User Journey. This structure reflects the existing setup on the WordPress blog from which we are migrating:

## User Journey - Mexico

This list outlines the user journey for Mexican users seeking credit card recommendations, starting from the quiz and leading to application pages.

1. **Quiz:** [https://topfinanzas.com/mx/campana-quiz/](https://topfinanzas.com/mx/campana-quiz/)
2. **Recommender:** [https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1](https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1)
    - 2.1. **CTA 1 (Call to Action 1):** [https://topfinanzas.com/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank/](https://topfinanzas.com/mx/soluciones-financieras/guia-tarjeta-de-credito-nu-bank/)
        - 2.1.1. [https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-de-credito-nu/](https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-de-credito-nu/)
            - 2.1.1.1. **See official site:** [https://nu.com.mx/credito/](https://nu.com.mx/credito/)
    - 2.2. **CTA 2 (Call to Action 2):** [https://topfinanzas.com/mx/soluciones-financieras/tarjeta-plata-card/](https://topfinanzas.com/mx/soluciones-financieras/tarjeta-plata-card/)
    - 2.3. **Learn how to apply:** [https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-plata-card/](https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-plata-card/)
        - 2.3.1. **See official site:** [https://platacard.mx/es/](https://platacard.mx/es/)
3. **Ad or Ads:** [https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-plata-card/](https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-plata-card/)

Note: For further details, please refer to the `/var/www/html/mx/topfinanzas-pages-mx/lib/documents/topfinanzas-pages-mx-codebase-analysis-en.md` file and other Markdown documentation files located in the `/var/www/html/mx/topfinanzas-pages-mx/lib/documents/` directory. These files contain comprehensive documentation for this project.

## Context

The routes listed above have been successfully emulated on our new Next.js website. This website is cloned from the GitHub repository <https://github.com/juanjaragavi/top-finanzas-pages-mx.git> and is currently located in the `/var/www/html/mx/topfinanzas-pages-mx/` directory, which you are currently accessing.

We now need to evaluate the performance of this new Next.js website against the existing WordPress site using Google Ads campaigns. These campaigns will direct users to the quiz at <https://recomendador.topfinanzas.com> and then to our Next.js website.

Our existing WordPress installation is hosted on a Google Cloud Platform Compute Engine VM instance running Ubuntu 22.04 LTS (this one in which we’re in). The WordPress website files are located in the `/var/www/html/mx/` directory, which includes essential WordPress files and folders such as `.htaccess`, `wp-config.php`, and `wp-content`, as well as a `quiz` directory containing another Next.js project we should ignore by now. The new Next.js website we will be working on is located in the current directory: `/var/www/html/mx/topfinanzas-pages-mx/` (this one).

Maintaining the current URL structure is critical (e.g., `https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1`), but these URLs must now point to our new Next.js application.

To differentiate and track analytics for the Next.js pages, all migrated page and blog post URLs, now have the suffix `-next` appended and are located in our `/var/www/html/mx/topfinanzas-pages-mx/app` directory. For example, `https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1` will become `https://topfinanzas.com/mx/recomendador-de-tarjetas-de-credito-p1-next`. This URL naming convention is essential for accurately tracking Google Ads campaign performance directed to the migrated Next.js pages in our analytics.

## Task

Your task is to thoroughly analyze the entire codebase and develop a comprehensive, well-documented plan detailing how to:

- Configure the `/var/www/html/mx/topfinanzas-pages-mx` Next.js application to run from the `/var/www/html/mx/` subdirectory on this server, alongside the WordPress installation.
- Ensure the Next.js application does not conflict with the existing WordPress installation at the root route `/var/www/html/mx/`.

**Important Considerations**:

- We have `sudo` or root access on the server to modify Apache configurations and manage services.
- The web server handling `topfinanzas.com` is Apache HTTP Server.
- The Next.js application is configured to serve the pages from the `/var/www/html/mx/topfinanzas-pages-mx/app` directory.
- Next.js is managed using the `pm2` service manager.
- Review all documentation within the `/var/www/html/mx/topfinanzas-pages-mx/lib/documents/` directory to gain a comprehensive understanding of the content structure.
- This Next.js application is configured to run on the '3003' port, as you will see in the `/var/www/html/mx/topfinanzas-pages-mx/package.json` file.
- The Next.js application in `/var/www/html/mx/topfinanzas-pages-mx/` is correctly built (npm run build) and ready for production.
- `pm2` is installed globally and configured correctly.
- The `pm2` service is called `topfinanzas-next` and is running the Next.js application.
- The necessary Apache modules (`mod_proxy`, `mod_proxy_http`, `mod_rewrite`) are installed.
