HERITAGE LUX — IMAGES FOLDER
=============================

This project's site images are NOT stored as local files in this
folder. Every image is loaded from one central place: js/data.js
(plus two small reviewer thumbnails in js/outfit.js, and a handful
of section images directly in html/index.html and html/account.html).

WHY images are centralized in data.js instead of this folder:
A static HTML/CSS/JS site with no backend has two ways to show
photos — (1) bundle real image files in a folder like this one, or
(2) point <img src="..."> at a hosted image URL. The original
project mixed broken/mismatched links from Unsplash, which is why
several images weren't rendering. This rebuild replaces every one
of those with verified, real, freely-licensed photos (Pexels —
free to use, no attribution required), and keeps them in ONE file
(js/data.js) so you only ever have to edit a single place.

HOW TO USE YOUR OWN PHOTOS INSTEAD:
1. Save your photo files into THIS folder, e.g.
     images/agbada-01.jpg
     images/saree-01.jpg
2. Open js/data.js and change the matching "image" (and "gallery")
   value from a pexels.com URL to a local path, e.g.:
     image: 'images/agbada-01.jpg',
3. For the two hero/avatar images that live directly in the HTML
   files, open html/index.html or html/account.html and do the
   same find-and-replace on the src="..." attribute.
4. For the two reviewer thumbnails on the outfit page, edit
   js/outfit.js (search for "review-thumbs").

That's it — because every page reads images from data.js, replacing
one entry there updates that image everywhere it appears across the
whole site (home page trending grid, browse grid, outfit detail
page, and account dashboard).

FOLDER MAP FOR THIS PROJECT
============================
html/    all .html pages (index, browse, outfit, account)
css/     all styling (style.css)
js/      all logic + the single image/data source (data.js)
images/  this folder — drop local image files here if you want
         to stop hotlinking and use your own photos instead
