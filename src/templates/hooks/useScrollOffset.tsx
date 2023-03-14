import { useCallback, useContext } from 'react'
import { ScrollOffsetContext } from '@/pages/_app'
import type { ScrollOffsetContextProps } from '@/types/context.types'

export const useScrollOffset = () => {
  const { context, setContext } = useContext<ScrollOffsetContextProps>(ScrollOffsetContext)

  const setScroll = useCallback(
    (scrollOffset: number) => {
      setContext({ ...context, scroll: scrollOffset })
    },
    [context, setContext],
  )

  const setSize = useCallback(
    (docSize: number) => {
      setContext({ ...context, size: docSize })
    },
    [context, setContext],
  )

  return {
    size: context.size,
    scroll: context.scroll,
    setScroll,
    setSize,
  }
}
