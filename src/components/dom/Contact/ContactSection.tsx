import React from 'react'
import tw from 'tailwind-styled-components'

const Container = tw.div`h-screen bg-neutral-900/5 dark:bg-neutral-400/5`
const Wrapper = tw.div`flex flex-col items-center justify-center w-full h-full`
const Div = tw.div`w-full px-4 py-8 text-center bg-repeat select-none bg-noise bg-[length:150px] bg-[0px_0px] backdrop-blur-xl`
const Title = tw.h1`text-xl cursor-default text-black/25 tracking-[1.15em] md:text-3xl dark:text-white/25`
const H2 = tw.h2`text-xl tracking-widest text-black cursor-default md:text-3xl dark:text-white`

export default function ContactSection({ contactRef }) {
  return (
    <Container ref={contactRef}>
      <Wrapper>
        <Div>
          <Title>Contact Me</Title>
          <H2>SOFTWARE ENGINEER</H2>
        </Div>
      </Wrapper>
    </Container>
  )
}
