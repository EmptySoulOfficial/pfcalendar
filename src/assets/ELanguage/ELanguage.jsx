import { useEffect, useState } from 'react'
import * as languageData from './lang/lang.json'
import AutoLang from './AutoLanguage'

function ELanguage() {
  const langISOCode = AutoLang()
  const [ eLang, seteLang ] = useState('')

  useEffect(
    () => {
      const jsonObj = JSON.parse(JSON.stringify(languageData)).default
      // If Language does not exist -> take english
      seteLang(jsonObj[langISOCode] ? jsonObj[langISOCode]: jsonObj["en"])    
    },
    []
  )
  return eLang
}

export default ELanguage