import articles from '@/content/articles.json'

export async function getAllArticles() {
  return [...articles].sort((a, z) => +new Date(z.date) - +new Date(a.date))
}

export async function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug) ?? null
}
