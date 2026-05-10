import { motion } from 'framer-motion'
import machineStep from '../assets/images/machines/machine-step.gif'

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
          Materialize routes product intent across a distributed network of
          production partners, turning idle machines into accessible infrastructure.
        </motion.p>
      </div>

      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="machine-stage relative min-h-[28rem] overflow-hidden bg-white/[0.025] p-7 backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.96 }}
        transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_56%_42%,rgba(245,176,68,0.08),transparent_42%),radial-gradient(circle_at_44%_62%,rgba(217,79,123,0.07),transparent_52%)]" />
        <div className="relative min-h-[24rem] overflow-hidden">
          <motion.img
            alt="Manufacturing machine step"
            animate={{ scale: [1.02, 1.055, 1.02], x: [0, -8, 0] }}
            className="machine-step-image absolute inset-0 h-full w-full object-cover"
            draggable="false"
            src={machineStep}
            transition={{ duration: 12, ease: 'easeInOut', repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,1,4,0.42)_0%,rgba(2,1,4,0.06)_42%,rgba(2,1,4,0.24)_100%),linear-gradient(180deg,rgba(2,1,4,0.04),rgba(2,1,4,0.42))]" />
          <motion.div
            animate={{ opacity: [0.18, 0.44, 0.18], x: ['-20%', '24%', '-20%'] }}
            className="absolute left-1/2 top-[18%] h-[62%] w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-100/18 to-transparent blur-xl"
            transition={{ duration: 7.8, ease: 'easeInOut', repeat: Infinity }}
          />
          <div className="absolute left-8 top-8 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber-100/58">
            local fabrication node
          </div>
          <div className="absolute bottom-8 right-8 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-violet-50/48">
            capacity online
          </div>
          <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-amber-200/24 to-transparent" />
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
