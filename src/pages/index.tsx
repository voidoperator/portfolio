import dynamic from 'next/dynamic'
import { JNLogoAscii, Test } from '@/components/canvas/JNLogoAscii'
import NavBar from '@/components/dom/Nav/NavBar'
import HeroBanner from '@/components/dom/Hero/HeroBanner'
import About from '@/components/dom/About/AboutSection'
import Experience from '@/components/dom/Experience/ExperienceSection'
import SkillSection from '@/components/dom/Skills/SkillSection'
import ProjectSection from '@/components/dom/Projects/ProjectSection'
import ContactSection from '@/components/dom/Contact/ContactSection'
import { createRef } from 'react'
import Scroll from '@/templates/Scroll'

// const JNLogoAscii = dynamic(() => import('@/components/canvas/JNLogoAscii'), { ssr: false })
// const Test = dynamic(() => import('@/components/canvas/JNLogoAscii'), { ssr: false })

type Props = {
  title: string
}

export default function Page(props: Props) {
  const lenisRef = createRef()
  const orderedRefList = new Array(6).fill(null).map(() => createRef())
  const [heroBannerRef, aboutRef, experienceRef, skillsRef, projectsRef, contactRef] = orderedRefList
  return (
    <Scroll refList={orderedRefList} lenisRef={lenisRef}>
      <NavBar refList={orderedRefList} lenisRef={lenisRef} />
      <HeroBanner heroBannerRef={heroBannerRef} />
      <About aboutRef={aboutRef} />
      <Experience experienceRef={experienceRef} />
      <SkillSection skillsRef={skillsRef} />
      <ProjectSection projectsRef={projectsRef} />
      <ContactSection contactRef={contactRef} />
    </Scroll>
  )
}

Page.canvas = (props: Props) => (
  <>
    <JNLogoAscii />
    <Test />
  </>
)

export async function getStaticProps() {
  return {
    props: {
      title: "Julio's Portfolio",
    },
  }
}
