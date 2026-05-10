import { motion } from 'framer-motion'
import brokenPipesImage from '../assets/images/pipes/broken-pipes.png'

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 19) % 84)}%`,
  top: `${12 + ((index * 29) % 72)}%`,
  delay: index * 0.19,
  duration: 4.8 + (index % 5) * 0.7,
}))

function RevealText({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      className={className}
      initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
      transition={{ delay, duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function AtmosphereLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="problem-fog absolute -left-[12%] top-[8%] h-[28rem] w-[42rem] rounded-full bg-violet-500/10 blur-[90px]" />
      <div className="problem-fog-delayed absolute -right-[10%] bottom-[4%] h-[24rem] w-[34rem] rounded-full bg-amber-300/8 blur-[95px]" />
      <div className="problem-scanline absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-amber-100/34 to-transparent" />
      {particles.map((particle) => (
        <motion.span
          animate={{
            opacity: [0, 0.52, 0],
            y: [-8, -42],
            x: [0, particle.id % 2 === 0 ? 12 : -10],
          }}
          className="absolute h-1 w-1 rounded-full bg-violet-100/38"
          initial={{ opacity: 0 }}
          key={particle.id}
          style={{ left: particle.left, top: particle.top }}
          transition={{
            delay: particle.delay,
            duration: particle.duration,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  )
}

function BrokenPipeScene() {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="problem-image-stage relative min-h-[23rem] w-full overflow-hidden lg:min-h-[35rem]"
      initial={{ opacity: 0, scale: 0.97, y: 18 }}
      transition={{ delay: 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <AtmosphereLayer />

      <motion.div
        animate={{ scale: [1.02, 1.055, 1.02], x: [0, -10, 0], y: [0, 6, 0] }}
        className="absolute inset-y-[3%] right-[-8%] w-[116%] sm:right-[-4%] sm:w-[108%] lg:inset-y-[2%] lg:right-[-12%] lg:w-[118%]"
        transition={{ duration: 13, ease: 'easeInOut', repeat: Infinity }}
      >
        <img
          alt="Broken industrial pipes that cannot connect"
          className="problem-pipes-image h-full w-full object-cover"
          draggable="false"
          src={brokenPipesImage}
        />
      </motion.div>

      <motion.div
        animate={{ opacity: [0.2, 0.46, 0.2], x: ['-18%', '18%', '-18%'] }}
        className="absolute left-1/2 top-[14%] h-[72%] w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-100/12 to-transparent blur-xl"
        transition={{ duration: 8.5, ease: 'easeInOut', repeat: Infinity }}
      />

      <motion.div
        animate={{ opacity: [0.24, 0.5, 0.24], scale: [1, 1.04, 1] }}
        className="absolute left-[49%] top-[48%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/8 shadow-[0_0_92px_rgba(245,158,11,0.22)] blur-sm sm:h-56 sm:w-56"
        transition={{ duration: 5.2, ease: 'easeInOut', repeat: Infinity }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_48%,transparent_0%,rgba(0,0,0,0.04)_30%,rgba(2,1,4,0.48)_88%),linear-gradient(90deg,rgba(2,1,4,0.94)_0%,rgba(2,1,4,0.28)_31%,rgba(2,1,4,0.02)_67%,rgba(2,1,4,0.34)_100%)]" />
      <div className="absolute inset-0 bg-violet-950/12 mix-blend-color" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,176,68,0.08),transparent_24%,rgba(217,79,123,0.05)_74%,rgba(0,0,0,0.34))]" />
      <div className="absolute left-[12%] top-[48%] h-px w-[76%] bg-gradient-to-r from-transparent via-amber-200/28 to-transparent" />
      <div className="absolute right-[9%] top-[18%] h-[62%] w-px bg-gradient-to-b from-transparent via-violet-200/20 to-transparent" />
      <div className="absolute bottom-[18%] right-[12%] h-px w-[34%] bg-gradient-to-r from-transparent via-violet-200/18 to-transparent" />

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-7 left-1/2 w-[min(30rem,86%)] -translate-x-1/2 border-t border-violet-100/12 pt-4 text-center font-mono text-[0.62rem] uppercase tracking-[0.26em] text-violet-100/52"
        initial={{ opacity: 0, y: 14 }}
        transition={{ delay: 0.72, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        connector unavailable · system halted
      </motion.div>
    </motion.div>
  )
}

function ProblemSlide() {
  return (
    <div className="relative grid w-full items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
      <div className="order-2 lg:order-1">
        <RevealText
          className="mb-5 font-mono text-xs uppercase tracking-[0.34em] text-amber-100/62"
          delay={0.1}
        >
          problem scene
        </RevealText>
        <RevealText delay={0.22}>
          <h2 className="cinematic-title max-w-5xl text-[clamp(3rem,7.4vw,7.2rem)] font-black leading-[0.9] text-white">
            One missing part can stop an entire system.
          </h2>
        </RevealText>
        <RevealText
          className="mt-7 max-w-2xl text-xl font-medium leading-8 text-violet-50/66 sm:text-2xl sm:leading-9"
          delay={0.4}
        >
          Custom manufacturing is still slow, fragmented, and centralized.
        </RevealText>
      </div>

      <div className="order-1 lg:order-2">
        <BrokenPipeScene />
      </div>
    </div>
  )
}

export default ProblemSlide
