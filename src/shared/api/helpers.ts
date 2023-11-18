import { directusBaseURL } from './api'

export const prepareImage = (id: string, alt: string) => {
  return {
    src: `${directusBaseURL}/assets/${id}`,
    alt,
  }
}
