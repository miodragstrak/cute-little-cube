import { motion } from 'framer-motion'

const steps = [
  {
    label: 'Generate',
    detail: 'AI transforms intent into manufacturable product data.',
  },
  {
    label: 'Route',
    detail: 'Jobs match to verified machines, materials, and capacity.',
  },
  {
    label: 'Manufacture',
    detail: 'Local production nodes execute, verify, and ship.',
  },
]

const depinNodes = [
  'right-[31%] top-[18%]',
  'right-[12%] top-[28%]',
  'right-[38%] top-[48%]',
  'right-[18%] bottom-[30%]',
  'right-[4%] bottom-[18%]',
  'left-[56%] bottom-[12%]',
]

const depinLinks = [
  'M 69 18 L 88 28',
  'M 88 28 L 62 48',
  'M 62 48 L 82 70',
  'M 82 70 L 96 82',
  'M 62 48 L 56 88',
  'M 69 18 L 62 48',
]

function DePINNetwork() {
  return (
    <div className="pointer-events-none absolute inset-[-6%] z-[1] overflow-hidden">
      <div className="depin-field absolute inset-0" />
      <svg
        aria-hidden="true"
        className="depin-link-layer absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        {depinLinks.map((link, index) => (
          <g key={link}>
            <path className="depin-link-base" d={link} pathLength="1" />
            <motion.path
              animate={{ pathLength: [0, 1, 1], opacity: [0, 0.82, 0] }}
              className="depin-link-flow"
              d={link}
              initial={{ pathLength: 0, opacity: 0 }}
              pathLength="1"
              transition={{
                delay: 0.25 + index * 0.28,
                duration: 3.2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 1.2,
              }}
            />
          </g>
        ))}
      </svg>
      {depinNodes.map((node, index) => (
        <motion.div
          animate={{ opacity: [0.46, 0.95, 0.46], scale: [1, 1.16, 1] }}
          className={`depin-node absolute ${node}`}
          key={node}
          transition={{
            delay: index * 0.26,
            duration: 4.2 + index * 0.2,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      ))}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="absolute right-[7%] top-[14%] font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber-100/66"
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.72, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        depin capacity mesh
      </motion.div>
    </div>
  )
}

function FlowSlide() {
  return (
    <div className="relative w-full">
      <DePINNetwork />

      <div className="relative z-10 max-w-4xl">
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 font-mono text-xs uppercase tracking-[0.34em] text-amber-100/62"
          initial={{ opacity: 0, y: 16 }}
          transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          protocol view
        </motion.p>
        <motion.h2
          animate={{ opacity: 1, y: 0 }}
          className="cinematic-title text-[clamp(2.75rem,7.5vw,7rem)] font-black leading-[0.9]"
          initial={{ opacity: 0, y: 22 }}
          transition={{ delay: 0.18, duration: 0.74, ease: [0.22, 1, 0.36, 1] }}
        >
          From prompt to part, without the factory bottleneck.
        </motion.h2>
      </div>

      <div className="relative z-10 mt-12 grid gap-4 lg:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="border border-violet-200/12 bg-white/[0.035] p-6 shadow-[0_0_56px_rgba(168,85,247,0.10)] backdrop-blur-md"
            initial={{ opacity: 0, y: 24 }}
            key={step.label}
            transition={{
              delay: 0.32 + index * 0.1,
              duration: 0.62,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-xs text-violet-100/44">
                0{index + 1}
              </span>
              <span className="h-px w-20 bg-gradient-to-r from-violet-300/70 to-amber-200/10" />
            </div>
            <h3 className="text-3xl font-black text-white">{step.label}</h3>
            <p className="mt-4 text-base leading-7 text-violet-50/62">{step.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FlowSlide
