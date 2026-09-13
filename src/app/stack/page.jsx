import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description:
    'I principi che seguo in ogni progetto, dal primo problema reale al codice in produzione.',
  alternates: {
    canonical: '/uses',
  },
}

export default function Uses() {
  return (
    <SimpleLayout
      title="I principi dietro ogni progetto che costruisco"
      intro="Non un copione fisso da seguire in ordine, ma le cose a cui bado sempre — l'ordine e il peso cambiano a seconda di cosa serve davvero al progetto."
    >
      <div className="space-y-20">
        <ToolsSection title="Scoperta & design">
          <Tool title="Capire il problema prima del codice">
            Prima di scrivere una riga, capisco cosa serve davvero: parlo con
            chi userà lo strumento, isolo il problema reale. Non è un
            passaggio che esaurisco all&rsquo;inizio — ci torno ogni volta che
            qualcosa non è chiaro, anche a metà progetto. Anni da elettricista
            mi hanno insegnato a leggere una situazione prima di intervenire.
          </Tool>
          <Tool title="L’interfaccia si progetta, non si improvvisa">
            Uso wireframe e prototipi — Figma, v0.dev, Google Stitch — per
            validare un&rsquo;idea prima di costruirla, che sia l&rsquo;inizio
            del progetto o una funzionalità aggiunta dopo.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Sviluppo">
          <Tool title="Codice pulito, sempre">
            Componenti React chiari, routing e stato gestiti con criterio,
            styling coerente con Tailwind CSS e Sass. Non è una fase che
            finisce: è lo standard che mantengo dal primo commit all&rsquo;ultimo.
            Stack: React, Next.js, JavaScript (ES6+).
          </Tool>
          <Tool title="I dati si proteggono da subito, non dopo">
            Schema chiaro, permessi corretti fin dall&rsquo;inizio con
            Supabase — Postgres, Auth, Storage. Meglio pensarci prima che
            rincorrere una falla più avanti.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Qualità & rilascio">
          <Tool title="Sicurezza e test non sono un extra">
            Row Level Security per i dati sensibili, test con Jest e React
            Testing Library, audit di performance — li integro nel lavoro
            quotidiano, non li lascio per la fine.
          </Tool>
          <Tool title="Distribuzione senza sorprese">
            Versionato su Git & GitHub, deployato su Vercel, monitorato. Che
            sia il primo deploy o il centesimo, il processo resta affidabile.
          </Tool>
        </ToolsSection>
        <ToolsSection title="AI & crescita">
          <Tool title="L’AI accelera, non decide">
            Uso Claude Code (MCP) nel workflow per lavorare più velocemente
            senza abbassare gli standard: le decisioni restano mie, lo
            strumento le velocizza.
          </Tool>
          <Tool title="Non smetto mai di imparare">
            Ogni progetto è un&rsquo;occasione per approfondire qualcosa di
            nuovo. Al momento: TypeScript.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
