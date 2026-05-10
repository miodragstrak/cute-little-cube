import { motion } from 'framer-motion'
import materializeLogo from '../assets/images/branding/logo.jpg'

function OpeningSlide() {
  return (
    <div className="relative flex min-h-[72vh] w-full items-center justify-center overflow-hidden py-8">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <motion.img
          alt="Materialize"
          animate={{ opacity: 1, y: 0 }}
          className="materialize-logo-lockup mb-8 h-auto w-28 sm:w-36"
          draggable="false"
          initial={{ opacity: 0, y: 16 }}
          src={materializeLogo}
          transition={{ delay: 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-flex items-center gap-3 border border-amber-300/14 bg-white/[0.026] px-3 py-2 font-mono text-[0.6rem] uppercase tracking-[0.36em] text-amber-100/78 shadow-[0_0_42px_rgba(245,176,68,0.10)] backdrop-blur-md sm:text-xs"
          initial={{ opacity: 0, y: 18 }}
          transition={{ delay: 0.12, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(252,211,77,0.8)]" />
          COLOSSEUM FRONTIER
        </motion.div>

        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="cinematic-title flex w-full flex-col items-center justify-center text-[clamp(2.75rem,6.4vw,6.85rem)] font-black leading-[0.9] text-white"
          initial={{ opacity: 0, y: 24 }}
          transition={{ delay: 0.22, duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="flex items-baseline justify-center gap-x-[0.16em]">
            <span>Generated</span>
            <span className="text-[0.48em] font-black text-fuchsia-300/80">→</span>
            <span>Routed</span>
          </span>
          <span className="mt-3 flex items-baseline justify-center gap-x-[0.16em] sm:mt-5">
            <span className="text-[0.48em] font-black text-amber-200/88">→</span>
            <span>Manufactured</span>
          </span>
        </motion.h1>

        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="hero-positioning mt-10 max-w-4xl px-4 py-3 text-balance text-xl font-semibold leading-8 text-amber-50/84 sm:text-2xl sm:leading-9 lg:text-[1.75rem] lg:leading-10"
          initial={{ opacity: 0, y: 22 }}
          transition={{ delay: 0.38, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          AI-native decentralized manufacturing infrastructure
        </motion.p>
      </div>

      <motion.div
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        className="pointer-events-none absolute bottom-[4.5rem] right-[-5.5rem] hidden aspect-square h-[25rem] place-items-center opacity-56 lg:grid xl:right-[-1.5rem]"
        initial={{ opacity: 0, scale: 0.92, rotateX: 14 }}
        transition={{ delay: 0.34, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-12 rounded-full border border-fuchsia-300/8 bg-fuchsia-500/[0.018] blur-[1px]" />
        <div className="absolute inset-24 rounded-full border border-amber-200/10" />
        <div className="cube-orbit absolute h-[62%] w-[62%] rounded-full border border-dashed border-fuchsia-200/12" />
        <div className="cube-core relative h-36 w-36 rotate-45 border border-amber-200/28 bg-gradient-to-br from-fuchsia-300/10 via-white/[0.035] to-amber-300/14 shadow-[0_0_70px_rgba(245,176,68,0.16)] backdrop-blur-xl">
          <div className="absolute inset-5 border border-white/10" />
          <div className="absolute -right-6 top-7 h-px w-20 bg-gradient-to-r from-amber-200/80 to-transparent" />
          <div className="absolute -left-9 bottom-9 h-px w-24 bg-gradient-to-l from-fuchsia-300/70 to-transparent" />
        </div>
        <div className="absolute bottom-14 left-6 font-mono text-[0.56rem] uppercase tracking-[0.28em] text-violet-100/40">
          manufacturing route active
        </div>
        <div className="absolute right-7 top-16 border border-amber-200/16 bg-black/28 px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.26em] text-amber-100/72 shadow-[0_0_28px_rgba(245,176,68,0.10)] backdrop-blur-sm">
          toolpaths verified
        </div>
        <div className="absolute bottom-28 right-3 font-mono text-[0.52rem] uppercase tracking-[0.26em] text-fuchsia-100/34">
          local fabrication node
        </div>
      </motion.div>
    </div>
  )
}

export default OpeningSlide
