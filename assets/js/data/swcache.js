---
layout: compress

# The list to be cached by PWA
---

const resource = [

  /* --- CSS --- */
  '{{ "/assets/css/style.css" | relative_url }}',

<<<<<<< HEAD
  /* --- JavaScripts --- */
  {% assign js_path = "/assets/js" | relative_url %}
  '{{ js_path }}/dist/home.min.js',
  '{{ js_path }}/dist/page.min.js',
  '{{ js_path }}/dist/post.min.js',
  '{{ js_path }}/dist/categories.min.js',
  '{{ js_path }}/data/search.json',
=======
  /* --- PWA --- */
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe
  '{{ "/app.js" | relative_url }}',
  '{{ "/sw.js" | relative_url }}',

  /* --- HTML --- */
  '{{ "/index.html" | relative_url }}',
  '{{ "/404.html" | relative_url }}',
  {% for tab in site.tabs %}
    '{{ tab.url | relative_url }}',
  {% endfor %}

<<<<<<< HEAD
  /* --- Favicons --- */
  {% assign favicon_path = "/assets/img/favicons" | relative_url %}

  '{{ favicon_path }}/android-chrome-192x192.png',
  '{{ favicon_path }}/android-chrome-512x512.png',
  '{{ favicon_path }}/apple-touch-icon.png',
  '{{ favicon_path }}/favicon-16x16.png',
  '{{ favicon_path }}/favicon-32x32.png',
  '{{ favicon_path }}/favicon.ico',
  '{{ favicon_path }}/mstile-150x150.png',
  '{{ favicon_path }}/site.webmanifest',
  '{{ favicon_path }}/browserconfig.xml'
=======
  /* --- Favicons & compressed JS --- */
  {% assign cache_list = site.static_files | where: 'swcache', true  %}
  {% for file in cache_list %}
    '{{ file.path | relative_url }}'{%- unless forloop.last -%},{%- endunless -%}
  {% endfor %}
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe

];

/* The request url with below domain will be cached */
const allowedDomains = [
<<<<<<< HEAD
  {% if site.google_analytics.id != '' %}
=======
  {% if site.google_analytics.id != empty and site.google_analytics.id %}
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe
    'www.googletagmanager.com',
    'www.google-analytics.com',
  {% endif %}

  '{{ site.url | split: "//" | last }}',

<<<<<<< HEAD
=======
  {% if site.img_cdn contains '//' and site.img_cdn %}
    '{{ site.img_cdn | split: '//' | last | split: '/' | first }}',
  {% endif %}

>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe
  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  {% if site.google_analytics.pv.cache_path %}
    '{{ site.google_analytics.pv.cache_path | absolute_url }}'
  {% endif %}
];
