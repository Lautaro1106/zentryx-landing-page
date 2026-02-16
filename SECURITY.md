# Seguridad de tu Sitio Web

Tu sitio es estático (HTML/CSS/JS), lo cual ya lo hace muy seguro por defecto, ya que no hay bases de datos ni código de servidor ejecutable que puedan inyectar (SQLi, XSS persistente).

Sin embargo, aquí tienes las mejores prácticas para blindarlo:

## 1. Cloudflare (CRÍTICO) ✨
La mejor defensa para un sitio estático es ponerlo detrás de Cloudflare.
- **DDoS Protection**: Bloquea ataques de denegación de servicio.
- **WAF (Web Application Firewall)**: Filtra tráfico malicioso.
- **SSL/TLS**: Te da el candadito HTTPS automáticamente.
- **Instrucción**: En tu panel de Cloudflare, asegurate de que la "nube" al lado de tu dominio `zentryxhub.com.ar` esté **NARANJA (Proxied)**, no gris.

## 2. Dependencias
Aunque el build es estático, una dependencia infectada podría inyectar código malicioso en tu HTML final.
- Ejecutá `npm audit` regularmente antes de deployar.
- Mantené `astro` y `tailwindcss` actualizados.

## 3. Headers de Seguridad
Como usas EasyPanel/Docker, el servidor web (Traefik/Nginx interno) debería manejar esto. Cloudflare también agrega headers de seguridad por defecto.

## Resumen de Estado Actual
- **Vulnerabilidades npm**: 0 encontradas (✅ Verificado).
- **Source Maps**: Deshabilitados en producción para no exponer tu código fuente original (✅ Aplicado).
