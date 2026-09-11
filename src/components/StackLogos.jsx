'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

import { Container } from '@/components/Container'
import claudeLogo from '@/images/logos/claude-logo.svg'
import githubLogo from '@/images/logos/github-logo.svg'
import nextjsLogo from '@/images/logos/nextjs-logo.svg'
import reactLogo from '@/images/logos/react-logo.svg'
import supabaseLogo from '@/images/logos/supabase-logo.svg'
import tailwindcssLogo from '@/images/logos/tailwindcss-logo.svg'

const stackLogos = [
  { name: 'React', src: reactLogo },
  { name: 'Next.js', src: nextjsLogo },
  { name: 'Tailwind CSS', src: tailwindcssLogo },
  { name: 'Supabase', src: supabaseLogo },
  { name: 'GitHub', src: githubLogo },
  { name: 'Claude', src: claudeLogo },
]

function StackLogo({ name, src }) {
  return (
    <div className="flex flex-none items-center">
      <Image src={src} alt={name} className="select-none h-auto w-35" unoptimized />
    </div>
  )
}

export function StackLogos() {
  return (
    <Container className="overflow-hidden mt-5">
      <div>
        <motion.div
          className="flex w-max gap-10 md:gap-16"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {[...stackLogos, ...stackLogos].map((logo, index) => (
            <StackLogo key={index} {...logo} />
          ))}
        </motion.div>
      </div>
    </Container>
  )
}
