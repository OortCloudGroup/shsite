import { createI18n } from 'vue-i18n'
import { defineNuxtPlugin } from '#app'
import zh from '../lang/zh'
import en from '../lang/en'

const message = {
  zh,
  en
}
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'zh',
  warnHtmlMessage: false,
  messages: message
})

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(i18n)
})
