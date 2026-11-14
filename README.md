# Partidos Juvenil · C.D. Apolo

App de banquillo para apuntar los partidos (convocatoria, once, minutos con cambios volantes, goles, tarjetas, rival) y guardarlos en el Google Sheet de la temporada. Se instala en el iPhone desde Safari → Compartir → Añadir a pantalla de inicio.

- `index.html` es la app ya montada (la que sirve GitHub Pages).
- `src/` tiene el código por partes; `python3 src/build.py` regenera `index.html`.
- El enlace del Google Sheet y el ID de cliente OAuth se configuran en Ajustes dentro de la app; no están en el código.
