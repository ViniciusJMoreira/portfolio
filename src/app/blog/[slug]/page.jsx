import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

import { ArticleLayout } from '@/components/ArticleLayout'
import { getAllArticles, getArticleBySlug } from '@/lib/blog'

export async function generateStaticParams() {
  let articles = await getAllArticles()

  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }) {
  let { slug } = await params
  let article = await getArticleBySlug(slug)

  if (!article) {
    return {}
  }

  return {
    title: article.title,
    description: article.description,
  }
}

export default async function ArticlePage({ params }) {
  let { slug } = await params
  let article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <ArticleLayout article={article}>
      <MDXRemote
        source={article.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypePrism],
          },
        }}
      />
    </ArticleLayout>
  )
}
