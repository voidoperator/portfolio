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
}
