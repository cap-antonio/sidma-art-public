//eslint-disable-next-line
export const debounce = <T extends Function>(fn: T, delay: number) => {
  let timer: NodeJS.Timeout | null = null
  return <A>(...args: Array<A>) => {
    if (timer) clearTimeout(timer)
    //eslint-disable-next-line
    timer = setTimeout(() => fn(...args), delay)
  }
}

export const capitalizeFirstCharacter = (string: string): string => {
  if (!string) return ''
  return string.trim().charAt(0).toUpperCase() + string.trim().slice(1)
}
