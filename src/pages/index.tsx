import React, { createContext, useEffect, useRef, useState } from 'react'
import tw from 'tailwind-styled-components'
import JulioNunezLogo from '@/components/canvas/JulioNunezLogo'
import NavBar from '@/components/dom/Nav/NavBar'
import HeroBanner from '@/components/dom/Hero/HeroBanner'
import About from '@/components/dom/About/AboutSection'
import Experience from '@/components/dom/Experience/ExperienceSection'
import SkillSection from '@/components/dom/Skills/SkillSection'
import ProjectSection from '@/components/dom/Projects/ProjectSection'
import ContactSection from '@/components/dom/Contact/ContactSection'
import { useScrollOffset } from '@/templates/hooks/useScrollOffset'

const MainContainer = tw.div`absolute top-0 h-full w-full overflow-x-hidden overflow-y-auto`
const SubWrapper = tw.div`relative min-h-screen bg-[length:200px] bg-[0px_0px] bg-repeat bg-noise snap-y snap-mandatory`

type Props = {
  title: string
}
export default function Page(props: Props) {
  const { setScroll } = useScrollOffset()
  const ref = useRef(null)

  useEffect(() => {
    if (ref) {
      const scrollRef = ref.current
      scrollRef.addEventListener('scroll', () => {
        setScroll(scrollRef.scrollTop)
      })
    }
  }, [setScroll])

  return (
    <MainContainer id='sb_1' ref={ref}>
      <SubWrapper>
        <NavBar />
        <HeroBanner />
        <About />
        <Experience />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </SubWrapper>
    </MainContainer>
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
