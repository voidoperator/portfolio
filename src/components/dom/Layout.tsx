import { useRef, forwardRef, useImperativeHandle } from 'react'
import tw from 'tailwind-styled-components'

const Div = tw.div`relative top-0 left-0 z-10 w-screen h-screen overflow-hidden text-gray-800 dom bg-zinc-500 dark:bg-zinc-900 dark:text-gray-50`

interface LayoutProps {
  children?: React.ReactNode
}

const Layout = forwardRef((props: LayoutProps, ref: React.RefObject<HTMLDivElement>) => {
  const localRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => localRef.current)

  return (
    <Div {...props} ref={localRef}>
      {props.children}
    </Div>
  )
})
Layout.displayName = 'Layout'

export default Layout
