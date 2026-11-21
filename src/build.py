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
<div id="splash"><div class="sp-stage"><div class="sp-logo"><img src="icons/icon-512.png?v=2" alt=""><span class="sp-target"></span></div><div class="sp-ball"><svg viewBox="0 0 100 100" aria-hidden="true"><defs><radialGradient id="bg" cx="38%" cy="32%" r="75%"><stop offset="0" stop-color="#fff"/><stop offset=".7" stop-color="#eef1ea"/><stop offset="1" stop-color="#b9c2bb"/></radialGradient></defs><circle cx="50" cy="50" r="47" fill="url(#bg)" stroke="#142019" stroke-width="3"/><path d="M50 30 l17 12 -6.5 20 h-21 L33 42z" fill="#142019"/><path d="M50 30V12M67 42l17-6M60.5 62l10 15M39.5 62l-10 15M33 42l-17-6" stroke="#142019" stroke-width="3" fill="none"/><path d="M41 6l9 6 9-6M88 30l-4 6 6 9M80 82l-9-5 -3 11M20 82l9-5 3 11M12 30l4 6 -6 9" fill="#142019" stroke="#142019" stroke-width="2" stroke-linejoin="round"/></svg></div></div><p class="sp-msg">Cargando…</p></div>
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
