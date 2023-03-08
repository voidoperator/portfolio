import { useContext } from 'react'
import { ScrollOffsetContext } from '@/pages/_app'
import type { ScrollOffsetContextProps } from '@/types/context.types'

export const useScrollOffset = () => {
  const { context, setContext } = useContext<ScrollOffsetContextProps>(ScrollOffsetContext)
  return {
    scroll: context.scroll,
    setScroll: (scrollOffset) => setContext({ scroll: scrollOffset }),
  }
}
