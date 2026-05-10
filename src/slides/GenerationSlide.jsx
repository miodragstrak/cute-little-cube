import { motion } from 'framer-motion'
import connectorRender from '../assets/images/renders/connector.gif'

const constructionLines = [
  'left-[16%] top-[24%] w-[38%] rotate-[11deg]',
  'right-[12%] top-[30%] w-[34%] -rotate-[17deg]',
  'left-[18%] bottom-[28%] w-[36%] -rotate-[10deg]',
  'right-[16%] bottom-[24%] w-[32%] rotate-[15deg]',
]

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

function ProblemContext() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="mt-10 grid max-w-xl gap-3"
      initial={{ opacity: 0, y: 18 }}
      transition={{ delay: 0.52, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="h-px w-44 bg-gradient-to-r from-amber-200/44 to-transparent" />
      <div className="flex items-center gap-4 font-mono text-[0.62rem] uppercase tracking-[0.26em] text-violet-100/48">
        <span className="h-2 w-2 rounded-full bg-amber-200/70 shadow-[0_0_22px_rgba(245,158,11,0.4)]" />
        physical constraint detected
      </div>
      <p className="max-w-md text-sm leading-6 text-violet-50/48 sm:text-base sm:leading-7">
        Uneven pipe diameters, offset alignment, and no catalog part that fits the
        installation envelope.
      </p>
    </motion.div>
  )
}

function GeneratedConnector() {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="generation-stage relative min-h-[25rem] w-full overflow-hidden lg:min-h-[38rem]"
      initial={{ opacity: 0, scale: 0.97, y: 18 }}
      transition={{ delay: 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="generation-field absolute inset-0" />
      <div className="generation-fog absolute -right-[12%] top-[8%] h-[28rem] w-[36rem] rounded-full bg-violet-500/12 blur-[92px]" />
      <div className="generation-fog-delayed absolute bottom-[4%] left-[12%] h-[20rem] w-[28rem] rounded-full bg-amber-300/8 blur-[86px]" />

      <motion.div
        animate={{ rotate: 360 }}
        className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-100/12"
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      />

      {constructionLines.map((line, index) => (
        <motion.div
          animate={{ opacity: [0.18, 0.48, 0.18], scaleX: [0.35, 1, 0.35] }}
          className={`absolute h-px origin-center bg-gradient-to-r from-transparent via-violet-100/36 to-transparent ${line}`}
          initial={{ opacity: 0, scaleX: 0.2 }}
          key={line}
          transition={{
            delay: 0.26 + index * 0.12,
            duration: 4.6 + index * 0.5,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      ))}

      <div className="absolute left-1/2 top-1/2 h-[25rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 sm:h-[31rem] sm:w-[22rem]">
        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="connector-render-shell absolute inset-0"
          initial={{ opacity: 0, scale: 0.94, y: 18 }}
          transition={{ delay: 0.34, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            className="absolute inset-0"
            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
            transition={{ delay: 0.46, duration: 1.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              alt="Generated manufacturable connector"
              className="connector-render-image h-full w-full object-contain"
              draggable="false"
              src={connectorRender}
            />
          </motion.div>

          <motion.div
            animate={{ opacity: [0, 0.78, 0], y: ['-52%', '52%'] }}
            className="absolute left-[14%] top-1/2 h-20 w-[72%] -translate-y-1/2 bg-gradient-to-b from-transparent via-amber-100/34 to-transparent blur-md"
            transition={{ delay: 0.52, duration: 2.3, ease: 'easeInOut', repeat: Infinity }}
          />

          <motion.div
            animate={{ opacity: [0.18, 0.42, 0.18] }}
            className="connector-render-wire absolute inset-[8%] border border-amber-100/22"
            transition={{ delay: 1.2, duration: 3.4, ease: 'easeInOut', repeat: Infinity }}
          />
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scaleX: 1 }}
          className="absolute left-[8%] top-[19%] h-px w-[84%] origin-left bg-gradient-to-r from-transparent via-fuchsia-100/28 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          transition={{ delay: 0.82, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          animate={{ opacity: 1, scaleX: 1 }}
          className="absolute bottom-[17%] left-[8%] h-px w-[84%] origin-right bg-gradient-to-r from-transparent via-amber-100/30 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          transition={{ delay: 0.95, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-8 right-4 max-w-xs font-mono text-[0.62rem] uppercase tracking-[0.26em] text-amber-100/54 sm:right-8"
        initial={{ opacity: 0, y: 14 }}
        transition={{ delay: 1.0, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      >
        manufacturable geometry generated
      </motion.div>
    </motion.div>
  )
}

function GenerationSlide() {
  return (
    <div className="relative grid w-full items-center gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
      <div>
        <RevealText
          className="mb-5 font-mono text-xs uppercase tracking-[0.34em] text-amber-100/62"
          delay={0.1}
        >
          generation moment
        </RevealText>
        <RevealText delay={0.22}>
          <h2 className="cinematic-title max-w-5xl text-[clamp(3rem,7.3vw,7rem)] font-black leading-[0.9] text-white">
            AI generates the missing connection.
          </h2>
        </RevealText>
        <RevealText
          className="mt-7 max-w-2xl text-xl font-medium leading-8 text-violet-50/66 sm:text-2xl sm:leading-9"
          delay={0.4}
        >
          Not searched from a catalog. Generated for the exact physical problem.
        </RevealText>
        <ProblemContext />
      </div>

      <GeneratedConnector />
    </div>
  )
}

export default GenerationSlide
