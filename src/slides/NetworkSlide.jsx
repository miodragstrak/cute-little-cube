import { motion } from 'framer-motion'

const stats = [
  ['Nodes', 'Machine capacity'],
  ['Materials', 'Verified supply'],
  ['Quality', 'Traceable output'],
]

function NetworkSlide() {
  return (
    <div className="grid w-full items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
      <div>
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 font-mono text-xs uppercase tracking-[0.34em] text-amber-100/62"
          initial={{ opacity: 0, y: 16 }}
          transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          infrastructure layer
        </motion.p>
        <motion.h2
          animate={{ opacity: 1, y: 0 }}
          className="cinematic-title text-[clamp(2.75rem,7vw,6.7rem)] font-black leading-[0.92]"
          initial={{ opacity: 0, y: 22 }}
          transition={{ delay: 0.18, duration: 0.74, ease: [0.22, 1, 0.36, 1] }}
        >
          Manufacturing becomes programmable capacity.
        </motion.h2>
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mt-7 max-w-2xl text-xl leading-8 text-violet-50/64"
          initial={{ opacity: 0, y: 18 }}
          transition={{ delay: 0.32, duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
        >
          Cute Little Cube routes product intent across a distributed network of
          production partners, turning idle machines into accessible infrastructure.
        </motion.p>
      </div>

      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="relative min-h-[28rem] overflow-hidden border border-violet-200/12 bg-white/[0.03] p-7 backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.96 }}
        transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.18),transparent_48%)]" />
        <div className="relative grid h-full min-h-[24rem] place-items-center">
          <div className="network-node h-24 w-24 border border-amber-200/46 bg-amber-200/10 shadow-[0_0_54px_rgba(245,158,11,0.28)]" />
          <div className="absolute left-[14%] top-[20%] h-16 w-16 border border-violet-200/28 bg-violet-300/10" />
          <div className="absolute right-[16%] top-[18%] h-12 w-12 border border-violet-200/28 bg-violet-300/10" />
          <div className="absolute bottom-[18%] left-[20%] h-12 w-12 border border-violet-200/28 bg-violet-300/10" />
          <div className="absolute bottom-[16%] right-[18%] h-16 w-16 border border-violet-200/28 bg-violet-300/10" />
          <div className="absolute inset-x-[18%] top-1/2 h-px bg-gradient-to-r from-transparent via-amber-200/28 to-transparent" />
          <div className="absolute inset-y-[19%] left-1/2 w-px bg-gradient-to-b from-transparent via-violet-200/30 to-transparent" />
        </div>

        <div className="relative grid gap-3 sm:grid-cols-3">
          {stats.map(([label, detail]) => (
            <div className="border-t border-violet-200/12 pt-4" key={label}>
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-amber-100/58">
                {label}
              </div>
              <div className="mt-2 text-sm text-violet-50/58">{detail}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default NetworkSlide
