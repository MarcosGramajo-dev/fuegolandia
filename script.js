// script.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://fuegolandia.com.ar/' }); // Reemplaza con tu dominio

const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(sitemap)
  .then(() => {
    console.log('✅ Sitemap generado correctamente.');
  })
  .catch(console.error);

// Rutas del sitio
sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });
sitemap.write({ url: '/contacto', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/ventas', changefreq: 'monthly', priority: 0.8 });

sitemap.end();
sitemap.pipe(writeStream);
