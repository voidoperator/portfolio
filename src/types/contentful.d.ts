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
export interface ProjectsProps {
  projectsSection: {
    data: [
      {
        sectionTitle: string
      },
    ]
  }
  projectItems: {
    items: ProjectItems[]
  }
}
export type ProjectItems = {
  name: string
  headline: string
  techStack: string[]
  description: string[]
  imgUrl: {
    title: string
    description: string
    url: string
  }
  techStack: string[]
  tags: string[]
  codeUrl: string
  liveUrl: string
  sys: {
    id: string
  }
}
export interface ContactProps {
  sectionTitle: string
  email: string
  linkedInUrl: string
  githubUrl: string
  resumeUrl: string
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
  projects?: {
    data: ProjectsProps
  }
  contactSection?: {
    data: ContactProps
  }
}
export interface IndexProps {
  title: string
  herobanner: HeroBannerProps
  aboutme: AboutMeProps
  experience: ExperienceProps
  skills: SkillsProps
  projects: ProjectsProps
  contact: ContactProps
}
export interface FetchContentful {
  title: string
  herobanner: HeroBannerProps
  aboutme: AboutMeProps
  experience: ExperienceProps
  skills: SkillsProps
  projects: ProjectsProps
  contact: ContactProps
}
