import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

import { ArticleLayout } from '@/components/ArticleLayout'
import { getAllArticles, getArticleBySlug } from '@/lib/blog'
import { siteUrl } from '@/lib/siteConfig'

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
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      type: 'article',
      url: `/blog/${article.slug}`,
      title: article.title,
      description: article.description,
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
  }
}

export default async function ArticlePage({ params }) {
  let { slug } = await params
  let article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  let articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    url: `${siteUrl}/blog/${article.slug}`,
    mainEntityOfPage: `${siteUrl}/blog/${article.slug}`,
  }

  return (
    <ArticleLayout article={article}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
