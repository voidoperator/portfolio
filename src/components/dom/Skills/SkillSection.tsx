import React from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import MarqueeText from '../MarqueeText'
import RubberBandElements from '@/components/dom/RubberBandElements'
import * as TechIcons from '../Icons/TechStackIcons'
import type { SkillsProps } from '@/types/contentful'

const techStackIcons = {
  Apollo: TechIcons.ApolloIcon,
  Docker: TechIcons.DockerIcon,
  AWS: TechIcons.AWSIcon,
  GraphQL: TechIcons.GraphQLIcon,
  JavaScript: TechIcons.JavaScriptIcon,
  Jest: TechIcons.JestIcon,
  MongoDB: TechIcons.MongoDBIcon,
  'Next.js': TechIcons.NextJSIcon,
  'Node.js': TechIcons.NodeJSIcon,
  PostgreSQL: TechIcons.PostgreSQLIcon,
  Python: TechIcons.PythonIcon,
  Pytest: TechIcons.PytestIcon,
  React: TechIcons.ReactIcon,
  'React Native': TechIcons.ReactNativeIcon,
  Redux: TechIcons.ReduxIcon,
  TypeScript: TechIcons.TypeScriptIcon,
  Webpack: TechIcons.WebpackIcon,
  'Framer-Motion': TechIcons.FramerMotionIcon,
  'Three.js': TechIcons.ThreeJSIcon,
  Drei: TechIcons.DreiIcon,
  ReactThreeFiber: TechIcons.ReactThreeFiberIcon,
  WebGL: TechIcons.WebGLIcon,
  FastAPI: TechIcons.FastAPIIcon,
  Pydantic: TechIcons.PydanticIcon,
  'Theme-UI': TechIcons.ThemeUIIcon,
  Git: TechIcons.GitIcon,
  BootstrapReact: TechIcons.BootstrapReactIcon,
  'Material-UI': TechIcons.MaterialUIIcon,
  Mocha: TechIcons.MochaIcon,
  ReactTestingLibrary: TechIcons.ReactTestingLibraryIcon,
  Tailwind: TechIcons.TailwindIcon,
  'Gatsby.js': TechIcons.GatsbyJSIcon,
  Bootstrap: TechIcons.BootstrapIcon,
}

const Container = tw.section`
w-full h-true
snap-center text-black dark:text-white overflow-hidden oflow
`
const Wrapper = tw.div`
relative overflow-hidden oflow
flex flex-col items-center justify-center
`
const SkillsSection = tw.div`oflow font-sofiaprolight overflow-hidden
flex grow bg-noise-cards rounded-3xl shadow-2xl backdrop-blur-sm
font-normal text-xs md:text-sm lg:text-sm
sm:mx-10 mx-[20px] 2xl:max-w-[50%] xl:max-w-[60%] lg:max-w-[70%] md:max-w-[80%] sm:max-w-[80%]
`
const ContentBoxMotion: Motion.Tag<'div'> = tw(motion.div)`

`
const Spacer = tw.div`
w-full
`
const MarqueeSubWrapper: Motion.Tag<'div'> = tw(motion.div)`
z-10 w-full absolute top-24 left-0
`
const IconWrapper: Motion.Tag<'div'> = tw(motion.div)`

`
const Divider = tw.div`
h-[1px] w-full bg-black/75 dark:bg-white/75 my-0 sm:my-10 hidden sm:block
`

const marqueeWrapperVariant: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.4,
    },
  },
}

const contentBoxVariant: Variants = {
  initial: {
    opacity: 0,
    y: -250,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
      delayChildren: 1,
      staggerChildren: 1,
    },
  },
}

const paragraphVariant: Variants = {
  initial: {
    y: 50,
  },
  animate: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      delay: 0.3,
      duration: 0.6,
    },
  },
}

export default function SkillSection({ data }: { data: SkillsProps[] }) {
  const [{ sectionTitle, skillStack }] = data
  return (
    <Container id='skills'>
      <Wrapper>
        <MarqueeSubWrapper
          variants={marqueeWrapperVariant}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true, amount: 0 }}
        >
          <MarqueeText
            string={sectionTitle}
            directionLeft={true}
            separatorSize={'h-5 sm:h-10 md:h-12 lg:h-14'}
            textSize={'text-[48px] sm:text-[72px] md:text-[82px] lg:text-[100px]'}
          />
        </MarqueeSubWrapper>
        <Spacer className='h-44 sm:h-[350px]' />
        <SkillsSection>
          <ContentBoxMotion
            initial='initial'
            whileInView='animate'
            viewport={{ once: true, amount: 0.4 }}
            variants={contentBoxVariant}
            className='oflow relative flex h-full w-full flex-row flex-wrap items-center justify-center gap-1 py-4 md:gap-2 lg:gap-2 xl:gap-3 2xl:gap-6'
          >
            <Divider />
            {skillStack.map((skill, index) => {
              const SkillIcon = techStackIcons[skill]
              return (
                <IconWrapper
                  key={skill + index}
                  variants={paragraphVariant}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true, amount: 0.2 }}
                  className='flex flex-row flex-wrap'
                  title={skill.toString()}
                >
                  <RubberBandElements key={skill + index}>
                    <div className='flex flex-row items-center gap-1 rounded-full bg-slate-100/70 py-1 px-4 text-black dark:bg-slate-900/75 dark:text-white lg:gap-3'>
                      <span className='cursor-default whitespace-nowrap text-xs lg:text-base xl:text-lg'>{skill}</span>
                      <SkillIcon twClasses='h-7 p-1 md:h-9 lg:h-11' />
                    </div>
                  </RubberBandElements>
                </IconWrapper>
              )
            })}
            <Divider />
          </ContentBoxMotion>
        </SkillsSection>
        <Spacer className='h-[210px] sm:h-[70px]' />
      </Wrapper>
    </Container>
  )
}
