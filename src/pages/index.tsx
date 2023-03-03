import JNLogoAscii from '@/components/canvas/JNLogoAscii'
import NavBar from '@/components/dom/Nav/NavBar'
import HeroBanner from '@/components/dom/Hero/HeroBanner'
import About from '@/components/dom/About/AboutSection'
import Experience from '@/components/dom/Experience/ExperienceSection'
import SkillSection from '@/components/dom/Skills/SkillSection'
import ProjectSection from '@/components/dom/Projects/ProjectSection'
import ContactSection from '@/components/dom/Contact/ContactSection'

export default function Page(props) {
  const {
    heroBannerRef,
    aboutRef,
    experienceRef,
    skillsRef,
    projectsRef,
    contactRef,
    lenisContentRef,
    lenisWrapperRef,
  } = props
  return (
    <>
      <NavBar
        heroBannerRef={heroBannerRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <HeroBanner heroBannerRef={heroBannerRef} />
      <About aboutRef={aboutRef} />
      <Experience experienceRef={experienceRef} />
      <SkillSection skillsRef={skillsRef} />
      <ProjectSection projectsRef={projectsRef} />
      <ContactSection contactRef={contactRef} />
    </>
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
