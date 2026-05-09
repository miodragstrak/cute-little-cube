import { motion } from 'framer-motion'

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 90 : -90,
    scale: 0.985,
    filter: 'blur(12px)',
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -80 : 80,
    scale: 1.015,
    filter: 'blur(12px)',
  }),
}

function SlideContainer({ children, direction }) {
  return (
    <motion.section
      animate="center"
      className="absolute inset-0 z-10 flex min-h-screen w-full items-center"
      custom={direction}
      exit="exit"
      initial="enter"
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      variants={slideVariants}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-16">
        {children}
      </div>
    </motion.section>
  )
}

export default SlideContainer
