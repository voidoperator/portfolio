import type { FetchContentful } from '@/types/contentful'
import fetchHeroBanner from './fetchHeroBanner'
import fetchAboutMe from './fetchAboutMe'
import fetchExperience from './fetchExperience'
import fetchSkills from './fetchSkills'
import fetchProjects from './fetchProjects'

async function fetchContentful() {
  const { heroBannerSection } = await fetchHeroBanner()
  const { aboutMeSection } = await fetchAboutMe()
  const experienceData = await fetchExperience()
  const { skillsSection } = await fetchSkills()
  const projectsData = await fetchProjects()

  const staticProps: FetchContentful = {
    title: heroBannerSection.data[0].siteTitle,
    herobanner: heroBannerSection.data,
    aboutme: aboutMeSection.data,
    experience: experienceData,
    skills: skillsSection.data,
    projects: projectsData,
  }
  return staticProps
}

export default fetchContentful
