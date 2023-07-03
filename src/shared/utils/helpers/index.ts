//eslint-disable-next-line
export const debounce = <T extends Function>(fn: T, delay: number) => {
  let timer: NodeJS.Timeout | null = null
  return <A>(...args: Array<A>) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}
