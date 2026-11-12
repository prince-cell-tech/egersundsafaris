<?php
// Front controller for Hostinger PHP hosting - serves Astro static build from dist/
// Upload layout in public_html/: index.php, .htaccess, dist/{index.html,no/index.html,sv/index.html,...,_astro/*,images/*}
// If .htaccess rewrites are active, Apache serves /_astro/* and /images/* directly.
// Otherwise it falls back here with correct MIME types.

$base = __DIR__ . '/dist';

$mime = [
	'css' => 'text/css; charset=utf-8',
	'js' => 'application/javascript; charset=utf-8',
	'mjs' => 'application/javascript; charset=utf-8',
	'html' => 'text/html; charset=utf-8',
	'htm' => 'text/html; charset=utf-8',
	'json' => 'application/json; charset=utf-8',
	'ico' => 'image/x-icon',
	'svg' => 'image/svg+xml',
	'png' => 'image/png',
	'jpg' => 'image/jpeg',
	'jpeg' => 'image/jpeg',
	'webp' => 'image/webp',
	'avif' => 'image/avif',
	'gif' => 'image/gif',
	'woff' => 'font/woff',
	'woff2' => 'font/woff2',
	'ttf' => 'font/ttf',
	'otf' => 'font/otf',
	'webm' => 'video/webm',
	'mp4' => 'video/mp4',
	'xml' => 'application/xml; charset=utf-8',
	'txt' => 'text/plain; charset=utf-8',
	'pdf' => 'application/pdf',
	'webmanifest' => 'application/manifest+json',
];

$uri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
if (!is_string($uri) || $uri === '') {
	$uri = '/';
}
$path = urldecode($uri);
if (strpos($path, '..') !== false || strpos($path, "\0") !== false) {
	http_response_code(400);
	exit('Bad request');
}
$path = rtrim($path, '/');
if ($path === '') {
	$path = '/';
}

$candidates = [];
if ($path === '/') {
	$candidates[] = $base . '/index.html';
	$candidates[] = __DIR__ . '/index.html';
} else {
	$rel = ltrim($path, '/');
	$candidates[] = $base . '/' . $rel;                 // e.g. /favicon.ico -> dist/favicon.ico
	$candidates[] = $base . '/' . $rel . '.html';       // e.g. /about -> dist/about.html
	$candidates[] = $base . '/' . $rel . '/index.html'; // e.g. /no/packages -> dist/no/packages/index.html
	// Flattened-upload fallback (dist contents copied to web root)
	$candidates[] = __DIR__ . '/' . $rel;
	$candidates[] = __DIR__ . '/' . $rel . '.html';
	$candidates[] = __DIR__ . '/' . $rel . '/index.html';
}

foreach ($candidates as $file) {
	if (is_file($file)) {
		$ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
		if (isset($mime[$ext])) {
			header('Content-Type: ' . $mime[$ext]);
		}
		// Long-lived caching for hashed Astro assets
		if (strpos($file, '/_astro/') !== false && preg_match('/-[A-Za-z0-9]{8}\./', $file)) {
			header('Cache-Control: public, max-age=31536000, immutable');
		}
		readfile($file);
		exit;
	}
}

http_response_code(404);
header('Content-Type: text/html; charset=utf-8');
echo 'Page not found.';
