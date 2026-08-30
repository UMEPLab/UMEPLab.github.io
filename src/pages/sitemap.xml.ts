import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET: APIRoute = async ({ site }) => {
  const baseURL = site ?? new URL('https://umeplab.github.io/');
  const newsEntries = await getCollection('news');
  const staticPaths = ['/', '/people/', '/research/', '/openings/'];

  const staticUrls = staticPaths.map((path) => ({
    location: new URL(path, baseURL).href,
  }));

  const newsUrls = newsEntries.map((entry) => ({
    location: new URL(`/news/${entry.slug}/`, baseURL).href,
    lastModified: entry.data.date.toISOString(),
  }));

  const entries = [...staticUrls, ...newsUrls]
    .map(({ location, lastModified }) => [
      '  <url>',
      `    <loc>${escapeXml(location)}</loc>`,
      lastModified ? `    <lastmod>${lastModified}</lastmod>` : '',
      '  </url>',
    ].filter(Boolean).join('\n'))
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
