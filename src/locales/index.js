import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import PT_BR from './PT_BR'

i18next.use(initReactI18next).init({
  resources: { 'pt-BR': PT_BR },
  fallbackLng: 'pt-BR',
  lng: 'pt-BR',
  defaultNS: 'Common',
  debug: false,
})

export default i18next
