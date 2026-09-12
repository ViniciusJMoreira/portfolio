import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/blog'
import { formatDate } from '@/lib/formatDate'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Leggi l&rsquo;articolo</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 max-md:hidden"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata = {
  title: 'Blog',
  description:
    "Condivido la mia esperienza di sviluppo front-end, React e Next.js, e di come uso l'AI nel workflow quotidiano.",
  alternates: {
    canonical: '/blog',
  },
}

export default async function BlogIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Condivido la mia esperienza di sviluppo front-end, React e Next.js, e di come uso l'AI nel workflow quotidiano."
      intro="Note, appunti ed esperienze dal mio percorso formativo."
    >
      {articles.length > 0 ? (
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Non ho ancora pubblicato nulla — il primo articolo arriverà presto.
        </p>
      )}
    </SimpleLayout>
  )
}
