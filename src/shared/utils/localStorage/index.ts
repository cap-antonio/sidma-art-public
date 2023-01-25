import { LSKeys } from './types'

export * from './types'

const localStorageSupported =
  typeof window !== 'undefined' &&
  typeof window['localStorage'] !== 'undefined' &&
  window['localStorage'] != null

export const lsGet = <T>(key: LSKeys): T | undefined => {
  const v = localStorageSupported && localStorage.getItem(key)
  if (!v) return

  try {
    return JSON.parse(v) as T
  } catch (e: unknown) {
    return v as unknown as T
  }
}

export const lsSet = <T>(key: LSKeys, value: T): void => {
  localStorageSupported
    ? localStorage.setItem(key, JSON.stringify(value))
    : console.error('Local storage is not supported')
}

export const lsRemove = (key: LSKeys): void => localStorage.removeItem(key)
