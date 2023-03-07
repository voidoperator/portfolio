import { createRef } from 'react'
import tw from 'tailwind-styled-components'
import JNLogoAscii from '@/components/canvas/JNLogoAscii'
import NavBar from '@/components/dom/Nav/NavBar'
import HeroBanner from '@/components/dom/Hero/HeroBanner'
import About from '@/components/dom/About/AboutSection'
import Experience from '@/components/dom/Experience/ExperienceSection'
import SkillSection from '@/components/dom/Skills/SkillSection'
import ProjectSection from '@/components/dom/Projects/ProjectSection'
import ContactSection from '@/components/dom/Contact/ContactSection'

const MainContainer = tw.div`absolute top-0 h-full w-full overflow-auto snap-y snap-mandatory`
const SubWrapper = tw.div`relative min-h-screen bg-[length:200px] bg-[0px_0px] bg-repeat bg-noise`

type Props = {
  title: string
}

export default function Page(props: Props) {
  return (
    <MainContainer id='sb_1'>
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
Page.canvas = (props: Props) => <JNLogoAscii />

export async function getStaticProps() {
  return {
    props: {
      title: "Julio's Portfolio",
    },
  }
}
