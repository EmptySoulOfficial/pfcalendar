import {useMemo, useState } from 'react'
import * as languageData from './lang/lang.json'
import AutoLang from './AutoLanguage'

function ELanguage() {
  const langISOCode = AutoLang()

  const eLang = useMemo (
    () => {
      const jsonObj = JSON.parse(JSON.stringify(languageData)).default
      // If Language does not exist -> take english
      return(jsonObj[langISOCode] ? jsonObj[langISOCode]: jsonObj["en"])    
    },
    []
  )
  return eLang
}

export default ELanguage