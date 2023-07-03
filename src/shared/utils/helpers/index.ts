export const debounce = (fn: () => void, delay: number) => {
  let timer: NodeJS.Timeout | null = null

  return () => {
    if (timer) {
      clearTimeout(timer)
    } else {
      timer = setTimeout(() => fn(), delay)
    }
  }
}
