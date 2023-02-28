// import dynamic from 'next/dynamic'
import NavBar from '@/components/dom/Nav/NavBar'
import AsciiTorus from '@/components/canvas/Ascii'

// const Ascii = dynamic(() => import('@/components/canvas/Ascii'), { ssr: false })

export default function Page(props) {
  return (
    <>
      <NavBar />
    </>
  )
}

Page.canvas = (props) => <AsciiTorus />

export async function getStaticProps() {
  return { props: { title: "Julio's Portfolio" } }
}
