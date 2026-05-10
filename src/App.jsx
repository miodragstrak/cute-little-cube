import PresentationLayout from './slides/PresentationLayout'
import OpeningSlide from './slides/OpeningSlide'
import ProblemSlide from './slides/ProblemSlide'
import GenerationSlide from './slides/GenerationSlide'
import FlowSlide from './slides/FlowSlide'
import NetworkSlide from './slides/NetworkSlide'
import TeamSlide from './slides/TeamSlide'
import ClosingSlide from './slides/ClosingSlide'

const slides = [
  {
    id: 'opening',
    eyebrow: 'Cute Little Cube / Materialize',
    component: OpeningSlide,
  },
  {
    id: 'problem',
    eyebrow: 'The manufacturing bottleneck',
    component: ProblemSlide,
  },
  {
    id: 'generation',
    eyebrow: 'Adaptive manufacturing intelligence',
    component: GenerationSlide,
  },
  {
    id: 'flow',
    eyebrow: 'AI-native production pipeline',
    component: FlowSlide,
  },
  {
    id: 'network',
    eyebrow: 'Decentralized manufacturing mesh',
    component: NetworkSlide,
  },
  {
    id: 'team',
    eyebrow: 'Founding team',
    component: TeamSlide,
  },
  {
    id: 'closing',
    eyebrow: 'Future infrastructure',
    component: ClosingSlide,
  },
]

function App() {
  return <PresentationLayout slides={slides} />
}

export default App
