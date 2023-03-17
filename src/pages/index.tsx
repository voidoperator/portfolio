import React from 'react'
import JulioNunezLogo from '@/components/canvas/JulioNunezLogo'
import NavBar from '@/components/dom/Nav/NavBar'
import MobileNav from '@/components/dom/MobileNav/MobileNav'
import HeroBanner from '@/components/dom/Hero/HeroBanner'
import About from '@/components/dom/About/AboutSection'
import Experience from '@/components/dom/Experience/ExperienceSection'
import SkillSection from '@/components/dom/Skills/SkillSection'
import ProjectSection from '@/components/dom/Projects/ProjectSection'
import ContactSection from '@/components/dom/Contact/ContactSection'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import getPosts from 'getPosts'
import type { IndexProps } from '@/types/contentful'

export default function Page({ data }) {
  const { herobanner, aboutme, experience } = data
  return (
    <>
      <NavBar />
      <HeroBanner {...herobanner} />
      <About {...aboutme} />
      <Experience {...experience} />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <MobileNav />
    </>
  )
}
Page.canvas = (props: IndexProps) => <JulioNunezLogo position={[0.25, -0.21, -5.5]} scale={0.025} />

export const getStaticProps: GetStaticProps<IndexProps> = async (): Promise<GetStaticPropsResult<IndexProps>> => {
  const data = await getPosts()
  return {
    props: {
      title: data.portfolio.siteTitle,
      data: data,
    },
  }
}
