import React from 'react'
import JulioNunezLogo from '@/components/canvas/JulioNunezLogo'
import NavBar from '@/components/dom/Nav/NavBar'
import HeroBanner from '@/components/dom/Hero/HeroBanner'
import About from '@/components/dom/About/AboutSection'
import Experience from '@/components/dom/Experience/ExperienceSection'
import SkillSection from '@/components/dom/Skills/SkillSection'
import ProjectSection from '@/components/dom/Projects/ProjectSection'
import ContactSection from '@/components/dom/Contact/ContactSection'

type Props = {
  title: string
}
export default function Page(props: Props) {
  return (
    <>
      <NavBar />
      <HeroBanner />
      <About />
      <Experience />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </>
  )
}
Page.canvas = (props: Props) => <JulioNunezLogo position={[0.25, -0.21, -5.5]} scale={0.025} />

export async function getStaticProps() {
  return {
    props: {
      title: "Julio's Portfolio",
    },
  }
}
