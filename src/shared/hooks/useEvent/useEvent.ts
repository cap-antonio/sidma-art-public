import { useCallback, useLayoutEffect, useRef } from 'react'

type TCallback = <T>(...args: Array<T>) => void

export function useEvent<T>(handler: TCallback) {
  const handlerRef = useRef<TCallback | null>(null)

  useLayoutEffect(() => {
    handlerRef.current = handler
  })

  return useCallback((...args: Array<T>) => {
    return handlerRef.current?.(...args)
  }, [])
}
