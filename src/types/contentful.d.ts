export enum SkillStack {
  'React',
  'TypeScript',
  'Redux',
  'React Native',
  'JavaScript',
  'Node.js',
  'Python',
  'Webpack',
  'Next.js',
  'Gatsby.js',
  'Pydantic',
  'Jest',
  'ReactTestingLibrary',
  'Pytest',
  'Mocha',
  'GraphQL',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'WebGL',
  'Three.js',
  'ReactThreeFiber',
  'Drei',
  'Git',
  'Docker',
  'AWS',
  'Apollo',
  'Material-UI',
  'Framer-Motion',
  'Tailwind',
  'Theme-UI',
  'Bootstrap',
  'BootstrapReact',
}

export interface SkillsProps {
  sectionTitle: string
  skillStack: SkillStack[]
}

export interface HeroBannerProps {
  siteTitle: string
  heroGreeting: string
  heroHeadline: string
  heroSlogan: string
}

type AboutMeDescription = {
  id: string
  text: string
}
export interface AboutMeProps {
  sectionTitle: string
  greeting: string
  imgUrl: {
    title: string
    description: string
    url: string
  }
  description: AboutMeDescription[]
}

export interface ExperienceProps {
  experienceSection: {
    data: [
      {
        sectionTitle: string
      },
    ]
  }
  experienceItems: {
    items: ExperienceItems[]
  }
}

export type ExperienceItems = {
  name: string
  svgIconName: string
  title: string
  subHeadline: string
  type: string
  startDate: string
  endDate: string
  techStack: string[]
  description: string[]
  sys: {
    id: string
  }
}

export interface Contentful {
  heroBannerSection?: {
    data: HeroBannerProps
  }
  aboutMeSection?: {
    data: AboutMeProps
  }
  experience?: {
    data: ExperienceProps
  }
  skillsSection?: {
    data: SkillsProps
  }
}

export interface IndexProps {
  title: string
  herobanner: HeroBannerProps
  aboutme: AboutMeProps
  experience: ExperienceProps
}

export interface FetchContentful {
  title: string
  herobanner: HeroBannerProps
  aboutme: AboutMeProps
  experience: ExperienceProps
  skills: SkillsProps
}
