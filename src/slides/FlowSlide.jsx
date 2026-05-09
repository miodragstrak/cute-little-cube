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

function FlowSlide() {
  return (
    <div className="w-full">
      <div className="max-w-4xl">
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

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
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
