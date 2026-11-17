import type { MetadataRoute } from 'next';
import { BASE_URL } from '../lib/seo';
import { CATALOGO_ITEMS } from '../lib/catalogo-data';
import { BLOG_POSTS } from '../lib/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified when there is no reliable editorial modification date.
  const pages = ['', '/catalogo', '/roupas-umbanda',
    '/roupas-umbanda/roupa-de-racao', '/roupas-umbanda/saia-de-umbanda',
    '/roupas-candomble', '/roupas-candomble/pano-da-costa',
    '/roupas-candomble/oja-pano-de-cabeca', '/costura-sob-medida',
    '/sobre', '/contato', '/blog'];
  return [
    ...pages.map(path => ({ url: `${BASE_URL}${path}` })),
    ...CATALOGO_ITEMS.map(item => ({ url: `${BASE_URL}/catalogo/${item.id}` })),
    ...BLOG_POSTS.map(post => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.datePublished,
    })),
  ];
}
