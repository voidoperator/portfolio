import NavBar from '@/components/dom/Nav/NavBar'
import JNLogoAscii from '@/components/canvas/JNLogoAscii'

// const Ascii = dynamic(() => import('@/components/canvas/Ascii'), { ssr: false })

export default function Page(props) {
  return (
    <>
      <NavBar />
    </>
  )
}

Page.canvas = (props) => <JNLogoAscii />

export async function getStaticProps() {
  return { props: { title: "Julio's Portfolio" } }
}
