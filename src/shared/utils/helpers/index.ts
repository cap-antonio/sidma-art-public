//eslint-disable-next-line
export const debounce = <T extends Function>(fn: T, delay: number) => {
  let timer: NodeJS.Timeout | null = null
  return <A>(...args: Array<A>) => {
    if (timer) clearTimeout(timer)
    //eslint-disable-next-line
    timer = setTimeout(() => fn(...args), delay)
  }
}

export const capitalizeFirstCharacter = (str: string): string => {
  return str.trim().charAt(0).toUpperCase() + str.trim().slice(1)
}

export const truncateString = (str: string, maxLength = 150): string => {
  return str.length <= maxLength ? str : `${str.substring(0, maxLength)}...`
}
