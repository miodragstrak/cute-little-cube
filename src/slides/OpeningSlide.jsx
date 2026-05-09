import { motion } from 'framer-motion'

function OpeningSlide() {
  return (
    <div className="grid w-full items-center gap-12 lg:grid-cols-[1.03fr_0.97fr]">
      <div className="max-w-5xl">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-7 inline-flex items-center gap-3 border border-violet-300/18 bg-white/[0.035] px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.34em] text-amber-100/76 shadow-[0_0_48px_rgba(168,85,247,0.16)] backdrop-blur-md sm:text-xs"
          initial={{ opacity: 0, y: 18 }}
          transition={{ delay: 0.12, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(252,211,77,0.8)]" />
          Materialize Hackathon
        </motion.div>

        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="cinematic-title max-w-6xl text-[clamp(3rem,9.3vw,8.9rem)] font-black leading-[0.86] text-white"
          initial={{ opacity: 0, y: 24 }}
          transition={{ delay: 0.22, duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          Generated
          <span className="mx-3 text-violet-300 sm:mx-5">→</span>
          Routed
          <span className="mx-3 text-amber-200 sm:mx-5">→</span>
          Manufactured
        </motion.h1>

        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 max-w-3xl text-balance text-xl font-medium leading-8 text-violet-50/72 sm:text-2xl sm:leading-9 lg:text-3xl lg:leading-10"
          initial={{ opacity: 0, y: 22 }}
          transition={{ delay: 0.38, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          AI-native decentralized manufacturing infrastructure
        </motion.p>
      </div>

      <motion.div
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        className="relative hidden aspect-square max-h-[70vh] min-h-[25rem] w-full place-items-center lg:grid"
        initial={{ opacity: 0, scale: 0.92, rotateX: 14 }}
        transition={{ delay: 0.34, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-10 rounded-full border border-violet-300/10 bg-violet-500/[0.035] blur-[1px]" />
        <div className="absolute inset-20 rounded-full border border-amber-200/12" />
        <div className="cube-orbit absolute h-[72%] w-[72%] rounded-full border border-dashed border-violet-200/16" />
        <div className="cube-core relative h-48 w-48 rotate-45 border border-amber-200/38 bg-gradient-to-br from-violet-300/14 via-white/5 to-amber-300/18 shadow-[0_0_90px_rgba(168,85,247,0.34)] backdrop-blur-xl">
          <div className="absolute inset-5 border border-white/10" />
          <div className="absolute -right-8 top-9 h-px w-24 bg-gradient-to-r from-amber-200 to-transparent" />
          <div className="absolute -left-12 bottom-12 h-px w-28 bg-gradient-to-l from-violet-300 to-transparent" />
        </div>
        <div className="absolute bottom-14 left-10 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-violet-100/44">
          capacity mesh online
        </div>
        <div className="absolute right-8 top-16 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber-100/48">
          toolpaths verified
        </div>
      </motion.div>
    </div>
  )
}

export default OpeningSlide
