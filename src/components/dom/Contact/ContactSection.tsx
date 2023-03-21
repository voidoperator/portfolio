import React, { useState } from 'react'
import tw from 'tailwind-styled-components'
import { motion, Variants } from 'framer-motion'
import MarqueeText from '../MarqueeText'
import { ContactProps } from '@/types/contentful'
import { LinkedInIcon, GithubIcon, EmailIcon, ResumeIcon, HomeIcon } from '../Icons/Icons'
import getRngTransition from '@/utility/getRngTransitions'

const Container = tw.section`
w-full h-true relative
snap-center text-black dark:text-white overflow-hidden oflow
`
const Wrapper = tw.div`
relative overflow-hidden oflow sm:w-full self-center w-screen
flex flex-col items-center justify-center
`
const ContactForm = tw.div`oflow font-sofiaprolight overflow-hidden sm:w-full w-[80vw] self-center
flex grow bg-noise-cards rounded-3xl shadow-2xl backdrop-blur-sm
font-normal text-xs md:text-sm lg:text-sm
sm:mx-10 mx-[20px] sm:max-w-[75%]
h-[62.5vh]
`
const ContentBoxMotion: Motion.Tag<'div'> = tw(motion.div)`
oflow relative flex flex-col items-center grow
`
const ParagraphContainer = tw.div`
h-full w-full
flex flex-col items-center justify-evenly
gap-0 sm:flex-col sm:items-center sm:px-6 md:px-8
`
const Spacer = tw.div`
w-full
`
const MarqueeSubWrapper: Motion.Tag<'div'> = tw(motion.div)`
z-10 w-full absolute top-24 left-0
`
const Form = tw.form`
flex flex-col items-center sm:gap-2 space-y-2 sm:pb-0 sm:pt-0 pt-2 pb-4 w-4/5 self-center
`
const InputMotion: Motion.Tag<'input'> = tw(motion.input)`focus:outline-none
h-10 rounded-md px-2 w-full bg-slate-100/90 dark:bg-slate-900/75 shadow-xl
bg-noise-half
`
const TextAreaMotion: Motion.Tag<'textarea'> = tw(motion.input)`focus:outline-none
h-28 rounded-md w-full text-start align-top pb-20 px-2 bg-slate-100/90 dark:bg-slate-900/75 shadow-xl
bg-noise-half
`
const Button = tw.button`
rounded-md bg-slate-800/75 py-2 px-6 text-base text-white dark:text-white shadow-2xl hover:opacity-75 transition-all duration-300
`
const Divider = tw.div`
h-[1px] w-full bg-black/75 dark:bg-white/75 my-0 sm:my-10 hidden sm:block
`
const AbsoluteBox: Motion.Tag<'a'> = tw(motion.a)`border-white/50 dark:border-white/30 hover:border-white/10
text-gray-50 hover:text-gray-200 dark:text-gray-200 hover:dark:text-gray-500
absolute bottom-0 left-1/2 border bg-slate-800/10 bg-blend-color-burn
hidden sm:flex items-center justify-center p-[2px] sm:p-2 rounded-full cursor-pointer focus:ring-2
focus:outline-none focus:ring-neutral-900/25 dark:focus:ring-white/50
transition-all duration-500
`
const IconMotion: Motion.Tag<'a'> = tw(motion.a)`
flex items-center justify-center p-[2px] sm:p-2 rounded-full cursor-pointer focus:ring-2
focus:outline-none focus:ring-neutral-900/25 dark:focus:ring-white/50
`
const FlexRow = tw.div`
flex flex-row gap-10 sm:gap-20 align-center justify-center w-full max-h-10
`
const twClasses =
  'transition-all h-10 w-10 text-gray-800 hover:text-gray-500 dark:text-gray-100 hover:dark:text-gray-400 duration-300'

const transitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  onScreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      delay: 1.3,
    },
  },
}

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

const links = [
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/julio-nunez/' },
  { title: 'GitHub', href: 'https://github.com/voidoperator' },
  { title: 'Email', href: 'mailto:julionunez@me.com' },
  { title: 'Resume', href: 'https://github.com/voidoperator' },
]

export default function ContactSection({ data }: { data: ContactProps[] }) {
  const [{ sectionTitle, email, linkedInUrl, githubUrl, resumeUrl }] = data
  const [emailSent, setEmailSent] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    const { target } = event
    const name = target.elements[0]
    const subject = target.elements[1]
    const message = target.elements[2]

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(
      `Name: ${name.value}\n\nMessage: ${message.value}`,
    )}`
    window.location.href = mailtoLink
    name.value = ''
    subject.value = ''
    message.value = ''
    setEmailSent(true)
  }

  return (
    <Container id='contact'>
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
        <ContactForm>
          <ContentBoxMotion
            initial='initial'
            whileInView='animate'
            viewport={{ once: true, amount: 0.4 }}
            variants={contentBoxVariant}
          >
            <ParagraphContainer>
              <Divider />
              {emailSent || (
                <Form onSubmit={handleSubmit}>
                  <InputMotion
                    variants={paragraphVariant}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true, amount: 0.2 }}
                    placeholder='Name'
                    autoComplete='false'
                    type='text'
                    required
                  />
                  <InputMotion
                    variants={paragraphVariant}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true, amount: 0.2 }}
                    placeholder='Subject'
                    autoComplete='false'
                    type='text'
                    required
                  />
                  <TextAreaMotion
                    variants={paragraphVariant}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true, amount: 0.2 }}
                    placeholder='Message'
                    autoComplete='false'
                    required
                  />
                  <Button type='submit'>Send</Button>
                </Form>
              )}
              {emailSent && (
                <div className='flex h-full w-full flex-col items-center justify-center rounded-3xl text-center font-sofiapro text-lg'>
                  <h4 className='rounded-full bg-slate-200/75 py-4 px-6 shadow-lg dark:bg-slate-800/75 dark:text-white'>
                    Thank you for reaching out! I will get back to you ASAP :)
                  </h4>
                </div>
              )}
              <Divider />
              <FlexRow>
                <IconMotion
                  initial='initial'
                  variants={transitionVariants}
                  target='_blank'
                  title='LinkedIn'
                  href={linkedInUrl}
                  whileInView={getRngTransition()}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <LinkedInIcon twClasses={twClasses} />
                </IconMotion>
                <IconMotion
                  initial='initial'
                  variants={transitionVariants}
                  target='_blank'
                  title='GitHub'
                  href={githubUrl}
                  whileInView={getRngTransition()}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <GithubIcon twClasses={twClasses} />
                </IconMotion>
                <IconMotion
                  initial='initial'
                  variants={transitionVariants}
                  target='_blank'
                  title='Email'
                  href={`mailto:${email}`}
                  whileInView={getRngTransition()}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <EmailIcon twClasses={twClasses} />
                </IconMotion>
                <IconMotion
                  initial='initial'
                  variants={transitionVariants}
                  target='_blank'
                  title='LinkedIn'
                  href={resumeUrl}
                  whileInView={getRngTransition()}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ResumeIcon twClasses={twClasses} />
                </IconMotion>
              </FlexRow>
              <Divider />
            </ParagraphContainer>
          </ContentBoxMotion>
        </ContactForm>
        <AbsoluteBox
          initial='initial'
          variants={transitionVariants}
          title='Home'
          href='#home'
          whileInView={getRngTransition()}
          viewport={{ once: true, amount: 0.2 }}
        >
          <HomeIcon twClasses={'h-7 w-7'} />
        </AbsoluteBox>
        <Spacer className='h-[210px] sm:h-[70px]' />
      </Wrapper>
    </Container>
  )
}
