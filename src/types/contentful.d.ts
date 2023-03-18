export interface HeroBannerProps {
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
  portfolio: {
    title: string
    siteTitle: string
  }
  herobanner: {
    items: HeroBannerProps[]
  }
  aboutme: {
    items: AboutMeProps[]
  }
  experience: {
    items: ExperienceProps[]
  }
}

export interface IndexProps {
  title: string
  data: Post
}
