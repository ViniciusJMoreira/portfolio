import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { SimpleLayout } from '@/components/SimpleLayout'
import movin1 from '@/images/projects/links-movin/movin-1.png'
import movin2 from '@/images/projects/links-movin/movin-2.png'
import movin3 from '@/images/projects/links-movin/movin-3.png'
import movin4 from '@/images/projects/links-movin/movin-4.png'

// Progetto di PROVA, solo per vedere la riga progetto in azione.
// Da sostituire con i progetti reali (candidato certo: web app gestionale
// + bot WhatsApp per COOP134) quando saranno pronti.
// `imageMobile`: unica immagine mostrata sotto lg (mobile/tablet).
// `images`: fino a 3 screenshot mostrati da lg in su (2 a lg, 3 a xl).
// Finché restano null, i riquadri restano vuoti.
const projects = [
  {
    name: 'Bio Creator',
    description:
      'Pagina bio links per una content creator, con showcase prodotti in affiliazione, collegamenti ai social e una sezione per il recruiting di nuovi talenti.',
    link: { href: 'https://movinbio.vercel.app', label: 'Live preview' },
    imageMobile: movin1,
    images: [movin2, movin3, movin4],
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description:
    "Progetti che ho costruito, dal percorso di apprendimento a problemi reali.",
  alternates: {
    canonical: '/projects',
  },
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Progetti che ho costruito, dal percorso di apprendimento a problemi reali."
      intro="Alcuni nascono da corsi ed esercizi, altri da un problema vero che ho deciso di risolvere. Qui trovi il codice e cosa ho imparato lungo il mio percorso."
    >
      {projects.length === 0 ? (
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Sto preparando i primi progetti da mostrare qui — torna presto.
        </p>
      ) : (
      <ul role="list" className="flex flex-col gap-y-16">
        {projects.map((project) => (
          <li
            key={project.name}
            className="group grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-[minmax(220px,280px)_1fr] lg:grid-cols-[minmax(220px,280px)_repeat(2,1fr)] xl:grid-cols-[minmax(220px,280px)_repeat(3,1fr)]"
          >
            <div className="flex min-w-0 flex-col justify-center gap-3 px-4 sm:px-6 md:px-0">
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {project.name}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <Link
                href={project.link.href}
                className="inline-flex w-fit items-center text-sm font-medium text-zinc-400 transition hover:text-teal-500 dark:text-zinc-200"
              >
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </Link>
            </div>

            <div className="aspect-3/3 w-full min-w-0 overflow-hidden rounded-2xl bg-zinc-100 lg:hidden dark:bg-zinc-800">
              {project.imageMobile && (
                <Image
                  src={project.imageMobile}
                  alt=""
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              )}
            </div>

            {[0, 1, 2].map((slot) => (
              <div
                key={slot}
                className={clsx(
                  'aspect-3/3 w-full min-w-0 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800',
                  slot < 2 ? 'hidden lg:block' : 'hidden xl:block',
                )}
              >
                {project.images?.[slot] && (
                  <Image
                    src={project.images[slot]}
                    alt=""
                    className={clsx(
                      'h-full w-full object-cover transition duration-300 group-hover:scale-105',
                      slot === 1 && 'delay-75',
                      slot === 2 && 'delay-150',
                    )}
                  />
                )}
              </div>
            ))}
          </li>
        ))}
      </ul>
      )}
    </SimpleLayout>
  )
}
