# Layouts

Esta carpeta contiene las plantillas base que envuelven a las páginas.

## Layout.astro

Es el layout principal que define la estructura HTML global:
- **<head>**: Metaetiquetas SEO, Favicon, tipografías (Inter) y View Transitions.
- **<body>**: Estilos base (fondo oscuro, texto claro) e inyección del botón de WhatsApp global.
- **<slot />**: Donde se renderiza el contenido de cada página.
