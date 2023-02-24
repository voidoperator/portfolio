import { useRef, forwardRef, useImperativeHandle } from 'react'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout = forwardRef((props: LayoutProps, ref: React.RefObject<HTMLDivElement>) => {
  const localRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => localRef.current)

  return (
    <div
      {...props}
      ref={localRef}
      className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom bg-zinc-900 text-gray-50'
    >
      {props.children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
