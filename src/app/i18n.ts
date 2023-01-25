import i18n from 'i18next'
// import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { lsGet, LSKeys, lsSet } from 'src/shared/utils'

export enum Locales {
  en = 'en',
}

export const locales = {
  [Locales.en]: 'en-US',
}

i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng)
  lsSet(LSKeys.i18nextLng, lng)
})

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(
    resourcesToBackend((language, ns, callback) => {
      import(`../../public/locales/${language}/${ns}.json`)
        .then((res) => {
          callback(null, res)
        })
        .catch((e) => {
          callback(e, null)
        })
    }),
  )

  .init({
    lng: lsGet<string>(LSKeys.i18nextLng) || document.documentElement.lang,
    fallbackLng: false,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    ns: ['common'],
    nsSeparator: false,
    react: {
      useSuspense: false,
    },
    defaultNS: 'common',
    load: 'languageOnly',
  })

export default i18n
