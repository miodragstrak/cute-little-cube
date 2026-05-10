import { motion } from 'framer-motion'

const nodes = [
  'left-[11%] top-[28%]',
  'left-[24%] bottom-[24%]',
  'left-[41%] top-[18%]',
  'left-[55%] bottom-[18%]',
  'right-[27%] top-[30%]',
  'right-[13%] bottom-[30%]',
]

const routes = [
  'left-[13%] top-[36%] w-[30%] rotate-[18deg]',
  'left-[26%] bottom-[34%] w-[34%] -rotate-[12deg]',
  'left-[43%] top-[31%] w-[30%] rotate-[22deg]',
  'right-[16%] bottom-[40%] w-[30%] -rotate-[18deg]',
]

function ClosingNetwork() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="closing-field absolute inset-0" />
      <div className="closing-fog absolute left-[8%] top-[14%] h-[28rem] w-[40rem] rounded-full bg-violet-500/10 blur-[96px]" />
      <div className="closing-fog-delayed absolute bottom-[8%] right-[8%] h-[24rem] w-[34rem] rounded-full bg-amber-300/8 blur-[92px]" />

      {routes.map((route, index) => (
        <motion.div
          animate={{ opacity: [0.1, 0.36, 0.1], scaleX: [0.24, 1, 0.24] }}
          className={`absolute h-px origin-center bg-gradient-to-r from-transparent via-amber-100/34 to-transparent ${route}`}
          initial={{ opacity: 0, scaleX: 0.2 }}
          key={route}
          transition={{
            delay: 0.35 + index * 0.28,
            duration: 5.8 + index * 0.7,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      ))}

      {nodes.map((node, index) => (
        <motion.div
          animate={{ opacity: [0.38, 0.78, 0.38], scale: [1, 1.08, 1] }}
          className={`closing-node absolute ${node}`}
          key={node}
          transition={{
            delay: index * 0.35,
            duration: 4.8 + index * 0.25,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  )
}

function ClosingSlide() {
  return (
    <div className="relative flex min-h-[72vh] w-full items-center justify-center overflow-hidden text-center">
      <ClosingNetwork />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mb-7 font-mono text-xs uppercase tracking-[0.34em] text-amber-100/60"
          initial={{ opacity: 0, y: 18 }}
          transition={{ delay: 0.12, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          materialize
        </motion.p>

        <motion.h2
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          className="closing-title mx-auto max-w-6xl text-[clamp(3.1rem,7.2vw,7.6rem)] font-black leading-[0.94] text-white"
          initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
          transition={{ delay: 0.26, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-white">
            AI generates solutions.
          </span>
          <span className="mx-auto my-5 block h-px w-40 bg-gradient-to-r from-transparent via-amber-200/36 to-transparent sm:my-6 sm:w-56" />
          <span className="block text-amber-100/92">
            Decentralized machines manufacture them.
          </span>
        </motion.h2>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.28em] text-violet-50/62 sm:text-sm"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 1.02, duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Generated</span>
          <span className="text-violet-200/70">→</span>
          <span>Routed</span>
          <span className="text-amber-100/72">→</span>
          <span>Manufactured</span>
        </motion.div>
      </div>
    </div>
  )
}

export default ClosingSlide
