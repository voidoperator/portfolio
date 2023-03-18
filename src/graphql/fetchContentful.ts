import type { FetchContentful } from '@/types/contentful'
import fetchHeroBanner from './fetchHeroBanner'
import fetchAboutMe from './fetchAboutMe'
import fetchExperience from './fetchExperience'

async function fetchContentful() {
  const { heroBannerSection } = await fetchHeroBanner()
  const { aboutMeSection } = await fetchAboutMe()
  const experienceData = await fetchExperience()

  const staticProps: FetchContentful = {
    title: heroBannerSection.data[0].siteTitle,
    herobanner: heroBannerSection.data,
    aboutme: aboutMeSection.data,
    experience: experienceData,
  }
  return staticProps
}

export default fetchContentful
