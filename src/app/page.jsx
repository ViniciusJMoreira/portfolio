import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import { StackLogos } from '@/components/StackLogos'
import { getAllArticles } from '@/lib/blog'
import { formatDate } from '@/lib/formatDate'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/blog/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Leggi l&rsquo;articolo</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Availability() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Attualmente disponibile</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Sono aperto a nuove opportunità come sviluppatore front-end — sia
        ruoli in team che progetti freelance, in sede, ibrido o da remoto. Se
        hai qualcosa in mente, contattami su LinkedIn.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        <Button
          href="https://www.linkedin.com/in/vinicius-jmoreira"
          className="w-full justify-center"
        >
          Contattami su LinkedIn
        </Button>
        <Button
          href="#"
          variant="secondary"
          className="group w-full justify-center"
        >
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Logica incontra creatività.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Sono Vinícius, sviluppatore front-end basato a Rimini. Costruisco
            interfacce moderne, performanti e accessibili con React e
            Next.js, con attenzione alla qualità del codice e alla user
            experience. Integro strumenti AI nel workflow per accelerare
            prototipazione e sviluppo, senza perdere di vista i dettagli.
          </p>
          <div className="mt-6">
            <Button href="/about">Scopri di più su di me</Button>
          </div>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.instagram.com/viniicius.dev"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/ViniciusJMoreira"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/vinicius-jmoreira"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
        <Container>
          <StackLogos />
        </Container>
      <Container className="mt-6 sm:mt-10">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.length > 0 ? (
              articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))
            ) : (
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Non ho ancora pubblicato articoli — presto qui troverai i miei
                appunti su sviluppo front-end e workflow AI.
              </p>
            )}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Availability />
          </div>
        </div>
      </Container>
    </>
  )
}
