import type { FetchContentful } from '@/types/contentful'
import fetchHeroBanner from './fetchHeroBanner'
import fetchAboutMe from './fetchAboutMe'
import fetchExperience from './fetchExperience'
import fetchSkills from './fetchSkills'

async function fetchContentful() {
  const { heroBannerSection } = await fetchHeroBanner()
  const { aboutMeSection } = await fetchAboutMe()
  const experienceData = await fetchExperience()
  const { skillsSection } = await fetchSkills()

  const staticProps: FetchContentful = {
    title: heroBannerSection.data[0].siteTitle,
    herobanner: heroBannerSection.data,
    aboutme: aboutMeSection.data,
    experience: experienceData,
    skills: skillsSection.data,
  }
  return staticProps
}

export default fetchContentful
