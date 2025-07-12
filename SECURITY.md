# Security Best Practices for MeowClient

## HTTP Security Headers
- Use a reverse proxy (e.g., Nginx, Vercel, Netlify) to set headers:
  - `Content-Security-Policy`
  - `Strict-Transport-Security`
  - `X-Frame-Options`
  - `X-Content-Type-Options`
  - `Referrer-Policy`
  - `Permissions-Policy`

## Dependency Management
- Keep all dependencies up to date.
- Use `npm audit` and `npm outdated` regularly.

## Environment Variables
- Never commit secrets or API keys.
- Use `.env` files and Vite's `import.meta.env` for config.

## XSS & Injection
- React escapes content by default, but always validate user input.

## PWA & Service Worker
- Review service worker code for security.

---
For more, see the [OWASP Top 10](https://owasp.org/www-project-top-ten/).
