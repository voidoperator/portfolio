import JNLogoAscii from '@/components/canvas/JNLogoAscii'
import NavBar from '@/components/dom/Nav/NavBar'
import HeroBanner from '@/components/dom/Hero/HeroBanner'
import About from '@/components/dom/About/AboutSection'
import Experience from '@/components/dom/Experience/ExperienceSection'
import SkillSection from '@/components/dom/Skills/SkillSection'
import ProjectSection from '@/components/dom/Projects/ProjectSection'
import ContactSection from '@/components/dom/Contact/ContactSection'
import { createRef, useRef } from 'react'
import Scroll from '@/templates/Scroll'

export default function Page(props) {
  const orderedRefList = new Array(6).fill(null).map(() => createRef())
  const [heroBannerRef, aboutRef, experienceRef, skillsRef, projectsRef, contactRef] = orderedRefList
  const wrapperRef = useRef(null)
  const contentRef = useRef(null)
  return (
    <Scroll refList={orderedRefList} wrapperRef={wrapperRef} contentRef={contentRef}>
      <NavBar refList={orderedRefList} />
      <HeroBanner heroBannerRef={heroBannerRef} />
      <About aboutRef={aboutRef} />
      <Experience experienceRef={experienceRef} />
      <SkillSection skillsRef={skillsRef} />
      <ProjectSection projectsRef={projectsRef} />
      <ContactSection contactRef={contactRef} />
    </Scroll>
  )
}

Page.canvas = (props) => <JNLogoAscii />

export async function getStaticProps() {
  return {
    props: {
      title: "Julio's Portfolio",
    },
  }
}
