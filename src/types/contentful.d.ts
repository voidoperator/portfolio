export interface HeroBannerProps {
  siteTitle: string
  heroGreeting: string
  heroHeadline: string
  heroSlogan: string
}

export interface AboutMeProps {
  sectionTitle: string
  imgUrl: {
    title: string
    description: string
    url: string
  }
  description: string[]
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

export interface Post {
  heroBannerSection: {
    data: HeroBannerProps
  }
  aboutMeSection: {
    data: AboutMeProps
  }
  experience: {
    data: ExperienceProps
  }
}

export interface IndexProps {
  title: string
  data: Post
}

export interface FetchContentful {
  title: string
  herobanner: HeroBannerProps
  aboutme: AboutMeProps
  experience: Post
}
