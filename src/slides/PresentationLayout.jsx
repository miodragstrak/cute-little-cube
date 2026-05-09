import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import SlideContainer from './SlideContainer'

function clampSlide(index, length) {
  return Math.min(Math.max(index, 0), length - 1)
}

function PresentationLayout({ slides }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [direction, setDirection] = useState(1)

  const slideCount = slides.length
  const CurrentSlide = slides[activeSlide].component

  const goToSlide = useCallback(
    (nextIndex) => {
      const resolvedIndex = clampSlide(nextIndex, slideCount)

      if (resolvedIndex === activeSlide) {
        return
      }

      setDirection(resolvedIndex > activeSlide ? 1 : -1)
      setActiveSlide(resolvedIndex)
    },
    [activeSlide, slideCount],
  )

  const goNext = useCallback(() => {
    goToSlide(activeSlide + 1)
  }, [activeSlide, goToSlide])

  const goPrevious = useCallback(() => {
    goToSlide(activeSlide - 1)
  }, [activeSlide, goToSlide])

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'ArrowRight') {
        goNext()
      }

      if (event.key === 'ArrowLeft') {
        goPrevious()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrevious])

  const progressWidth = useMemo(() => {
    return `${((activeSlide + 1) / slideCount) * 100}%`
  }, [activeSlide, slideCount])

  return (
    <main className="presentation-shell relative h-screen w-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(168,85,247,0.28),transparent_34%),radial-gradient(circle_at_78%_74%,rgba(245,158,11,0.15),transparent_30%),linear-gradient(135deg,#050208_0%,#09000f_44%,#020104_100%)]" />
      <div className="presentation-grid pointer-events-none absolute inset-0 opacity-45" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.84)_0%,transparent_22%,transparent_78%,rgba(0,0,0,0.78)_100%)]" />

      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <SlideContainer key={slides[activeSlide].id} direction={direction}>
          <CurrentSlide />
        </SlideContainer>
      </AnimatePresence>

      <div className="pointer-events-none absolute left-4 right-4 top-4 z-20 flex items-center justify-between gap-4 sm:left-8 sm:right-8 sm:top-7">
        <div className="min-w-0 font-mono text-[0.64rem] uppercase tracking-[0.32em] text-violet-100/62 sm:text-xs">
          {slides[activeSlide].eyebrow}
        </div>
        <div className="font-mono text-[0.64rem] text-amber-200/70 sm:text-xs">
          {String(activeSlide + 1).padStart(2, '0')} / {String(slideCount).padStart(2, '0')}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-20 h-px w-full bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-400 via-fuchsia-300 to-amber-300"
          animate={{ width: progressWidth }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <nav className="absolute bottom-5 right-5 z-30 flex items-center gap-2 sm:bottom-8 sm:right-8">
        <button
          aria-label="Previous slide"
          className="presentation-nav-button"
          disabled={activeSlide === 0}
          onClick={goPrevious}
          type="button"
        >
          <ArrowLeft size={18} strokeWidth={1.8} />
        </button>
        <button
          aria-label="Next slide"
          className="presentation-nav-button"
          disabled={activeSlide === slideCount - 1}
          onClick={goNext}
          type="button"
        >
          <ArrowRight size={18} strokeWidth={1.8} />
        </button>
      </nav>
    </main>
  )
}

export default PresentationLayout
