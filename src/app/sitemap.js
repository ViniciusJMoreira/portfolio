import { getAllArticles } from '@/lib/blog'
import { siteUrl } from '@/lib/siteConfig'

export default async function sitemap() {
  let articles = await getAllArticles()

  let staticRoutes = ['', '/about', '/projects', '/blog'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }))

  let articleRoutes = articles.map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date),
  }))

  return [...staticRoutes, ...articleRoutes]
}
