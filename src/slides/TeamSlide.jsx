import { motion } from 'framer-motion'
import miodragImage from '../assets/images/team/miodrag.png'
import nenadImage from '../assets/images/team/nenad.png'
import marijaImage from '../assets/images/team/marija.png'
import filipImage from '../assets/images/team/filip.jpeg'

const team = [
  {
    name: 'Miodrag',
    role: 'Product Systems & Orchestration',
    image: miodragImage,
    className: 'lg:translate-y-5',
    imageClassName: 'object-[50%_38%]',
  },
  {
    name: 'Nenad',
    role: 'Manufacturing Execution & Hardware',
    image: nenadImage,
    className: 'lg:-translate-y-4',
    imageClassName: 'object-[50%_30%]',
  },
  {
    name: 'Marija',
    role: 'Business Strategy',
    image: marijaImage,
    className: 'lg:translate-y-6',
    imageClassName: 'object-[50%_36%]',
  },
  {
    name: 'Fića',
    role: 'Communication & Presentation',
    image: filipImage,
    className: 'lg:translate-y-0',
    imageClassName: 'object-[50%_34%]',
  },
]

function TeamPortrait({ person, index }) {
  return (
    <motion.figure
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      className={`team-portrait group relative min-h-[18rem] overflow-hidden sm:min-h-[23rem] lg:min-h-[29rem] ${person.className}`}
      initial={{ opacity: 0, y: 34, filter: 'blur(12px)' }}
      transition={{
        delay: 0.32 + index * 0.11,
        duration: 0.82,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.img
        alt={`${person.name} portrait`}
        animate={{ scale: [1.03, 1.055, 1.03], y: [0, -5, 0] }}
        className={`team-portrait-image absolute inset-0 h-full w-full object-cover ${person.imageClassName}`}
        draggable="false"
        src={person.image}
        transition={{
          delay: index * 0.3,
          duration: 13 + index,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,1,4,0.02),rgba(2,1,4,0.34)_58%,rgba(2,1,4,0.92)),radial-gradient(circle_at_50%_24%,rgba(168,85,247,0.08),transparent_44%)]" />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <figcaption>
          <div className="text-2xl font-black leading-none text-white sm:text-3xl">
            {person.name}
          </div>
          <div className="mt-3 max-w-[15rem] font-mono text-[0.62rem] uppercase leading-5 tracking-[0.22em] text-amber-100/58">
            {person.role}
          </div>
        </figcaption>
      </div>
    </motion.figure>
  )
}

function TeamSlide() {
  return (
    <div className="relative w-full py-2 lg:py-4">
      <div className="team-atmosphere pointer-events-none absolute inset-[-8%]" />

      <div className="relative z-10 mb-8 max-w-5xl lg:mb-12">
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 font-mono text-xs uppercase tracking-[0.34em] text-amber-100/58"
          initial={{ opacity: 0, y: 16 }}
          transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          builders
        </motion.p>
        <motion.h2
          animate={{ opacity: 1, y: 0 }}
          className="team-title max-w-4xl text-[clamp(3rem,6.4vw,6.45rem)] font-black leading-[0.9] text-white"
          initial={{ opacity: 0, y: 24 }}
          transition={{ delay: 0.2, duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          Small team. Future infrastructure.
        </motion.h2>
      </div>

      <div className="relative z-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {team.map((person, index) => (
          <TeamPortrait index={index} key={person.name} person={person} />
        ))}
      </div>
    </div>
  )
}

export default TeamSlide
