import React from 'react'
import FullScene from '@/components/canvas/FullScene'
import NavBar from '@/components/dom/Nav/NavBar'
import MobileNav from '@/components/dom/MobileNav/MobileNav'
import HeroBanner from '@/components/dom/Hero/HeroBanner'
import AboutSection from '@/components/dom/About/AboutSection'
import ExperienceSection from '@/components/dom/Experience/ExperienceSection'
import SkillSection from '@/components/dom/Skills/SkillSection'
import ProjectSection from '@/components/dom/Projects/ProjectSection'
import ContactSection from '@/components/dom/Contact/ContactSection'
import fetchContentful from '@/graphql/fetchContentful'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import type { IndexProps } from '@/types/contentful'

export default function Page({ herobanner, aboutme, experience, skills, projects, contact }) {
  return (
    <>
      <NavBar data={contact} />
      <HeroBanner data={herobanner} />
      <AboutSection data={aboutme} />
      <ExperienceSection data={experience} />
      <SkillSection data={skills} />
      <ProjectSection data={projects} />
      <ContactSection data={contact} />
      <MobileNav />
    </>
  )
}
Page.canvas = (props: IndexProps) => <FullScene position={[0, -2.5, 0]} />

export const getStaticProps: GetStaticProps<IndexProps> = async (): Promise<GetStaticPropsResult<IndexProps>> => {
  const data = await fetchContentful()
  return {
    props: data,
  }
}
