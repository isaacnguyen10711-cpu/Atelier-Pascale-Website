import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type RevealProps = { children: ReactNode; duration?: number; delay?: number; className?: string }

function Reveal({ children, duration = 1, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
