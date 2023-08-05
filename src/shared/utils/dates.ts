export const formatDate = (
  d: Date | string,
  lang?: string,
  withTime?: boolean,
): string => {
  const date = typeof d === 'string' ? new Date(d) : d
  const year = date.getFullYear()
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()

  if (!lang) {
    return `${year}-${month}-${day}`
  }
  const finalDate =
    lang === 'cs' ? `${day}.${month}.${year}` : `${month}/${day}/${year}`

  if (!withTime) {
    return finalDate
  }

  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
  const mins =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  const secs =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()

  const finalTime = `${hour}:${mins}:${secs}`

  return `${finalDate} ${finalTime}`
}
