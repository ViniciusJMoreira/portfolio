import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

const skillGroups = [
  {
    title: 'Frontend',
    items:
      'React (Hooks, Routing, State Management), Next.js, JavaScript (ES6+), Sass, Tailwind CSS',
  },
  {
    title: 'Backend / Database',
    items: 'Supabase (Postgres, Auth, Storage)',
  },
  {
    title: 'Sicurezza',
    items: 'Supabase Auth / Row Level Security (RLS)',
  },
  {
    title: 'Strumenti',
    items: 'Git & GitHub, Vercel, Figma',
  },
  {
    title: 'Workflow AI',
    items: 'Claude Code (MCP), v0.dev, Google Stitch',
  },
  {
    title: 'In approfondimento',
    items: 'TypeScript, Testing (Jest, React Testing Library)',
  },
]

export const metadata = {
  title: 'About',
  description:
    'Sono Vinícius Junqueira Moreira. Vivo vicino a Rimini, dove trasformo problemi reali in interfacce che funzionano.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Sono Vinícius J. Moreira. <br />Vivo a Rimini, dove
            trasformo problemi reali in interfacce che funzionano.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              La mia passione per la tecnologia è nata da bambino, molto
              prima che diventasse un lavoro. La mia carriera, però, non è
              iniziata da uno schermo, ma da un cantiere: per anni ho
              lavorato come elettricista civile e industriale, imparando a
              leggere schemi, cablare quadri elettrici e risolvere problemi
              con le mani prima che con il codice.
            </p>
            <p>
              La mia formazione nel digitale è partita ad Araçatuba, in
              Brasile, con un percorso Microcamp di quasi un anno e mezzo tra
              informatica, grafica, HTML, CSS e marketing digitale. Da lì ho
              scelto di specializzarmi in front-end: il percorso Full-Stack
              JavaScript di OneBitCode, seguito dal 2022, approfondito con un
              corso su React, Next.js e Redux su Udemy, mi ha dato le basi
              solide su cui costruisco ogni giorno.
            </p>
            <p>
              Oggi lavoro ancora a tempo pieno nella manutenzione di centri
              sportivi, ma nel frattempo ho costruito — di mia iniziativa —
              una web app gestionale e un bot WhatsApp per digitalizzare la
              raccolta delle segnalazioni dei custodi: un problema reale,
              visto da vicino, risolto con codice.
            </p>
            <p>
              Mi concentro su React e Next.js, curando qualità del codice,
              accessibilità e performance, e integrando strumenti AI nel
              workflow per lavorare più velocemente senza abbassare gli
              standard. Sono abituato a lavorare con attenzione ai dettagli e
              a portare a termine quello che inizio, anche quando la strada è
              lunga. Cerco un contesto dove mettere in pratica questo
              approccio e continuare a crescere come sviluppatore.
            </p>
          </div>

          <div className="mt-12 space-y-6 border-t border-zinc-100 pt-10 dark:border-zinc-700/40">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {group.title}
                </h2>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {group.items}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="#"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/vinicius-jmoreira"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:viniciusit.moreira@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              viniciusit.moreira@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
