css=open('src/style.css').read(); logic=open('src/logic.js').read(); ui=open('src/ui.js').read()
html=f'''<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="Apolo">
<meta name="theme-color" content="#eef1ea" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0d1310" media="(prefers-color-scheme: dark)">
<meta name="robots" content="noindex">
<title>Partidos Juvenil Apolo</title>
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png?v=2">
<link rel="icon" href="icons/icon-192.png?v=2">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
{css}
</style>
</head>
<body>
<div id="app"></div>
<div id="sheet"></div>
<script id="logic">
{logic}
</script>
<script>
{ui}
</script>
</body>
</html>
'''
open('index.html','w').write(html)
