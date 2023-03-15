import * as languageData from './lang/lang.json'
import AutoLang from './AutoLanguage'

const langISOCode = AutoLang()
const jsonObj = JSON.parse(JSON.stringify(languageData)).default
const langObj = jsonObj[langISOCode] ? jsonObj[langISOCode]: jsonObj["en"];

export const getLang = () => langObj;
export const getLangVar = (key) => langObj[key];