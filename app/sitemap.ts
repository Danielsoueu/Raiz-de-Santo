import { MetadataRoute } from 'next' 
 
export default function sitemap(): MetadataRoute.Sitemap { 
  const baseUrl = 'https://raiz-de-santo.vercel.app' 
  const lastModified = new Date() 
 
  return [ 
    { 
      url: baseUrl, 
      lastModified, 
      changeFrequency: 'weekly', 
      priority: 1, 
    }, 
    { 
      url: `${baseUrl}/sobre`, 
      lastModified, 
      changeFrequency: 'monthly', 
      priority: 0.8, 
    }, 
    { 
      url: `${baseUrl}/contato`, 
      lastModified, 
      changeFrequency: 'monthly', 
      priority: 0.8, 
    }, 
    { 
      url: `${baseUrl}/roupas-umbanda`, 
      lastModified, 
      changeFrequency: 'weekly', 
      priority: 0.9, 
    }, 
    { 
      url: `${baseUrl}/roupas-candomble`, 
      lastModified, 
      changeFrequency: 'weekly', 
      priority: 0.9, 
    }, 
    { 
      url: `${baseUrl}/costura-sob-medida`, 
      lastModified, 
      changeFrequency: 'weekly', 
      priority: 0.9, 
    }, 
    { 
      url: `${baseUrl}/blog`, 
      lastModified, 
      changeFrequency: 'weekly', 
      priority: 0.7, 
    }, 
  ] 
} 
