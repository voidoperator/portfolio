import JNLogoAscii from '@/components/canvas/JNLogoAscii'
import NavBar from '@/components/dom/Nav/NavBar'
import HeroBanner from '@/components/dom/Hero/HeroBanner'
import Test from '@/components/dom/AboutSection'
import AboutMe from '@/components/dom/ExperienceSection'

export default function Page(props) {
  const { aboutMeRef, experienceRef, heroBannerRef } = props
  return (
    <>
      <NavBar />
      <HeroBanner heroBannerRef={heroBannerRef} />
      <Test aboutMeRef={aboutMeRef} />
      <AboutMe experienceRef={experienceRef} />
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
