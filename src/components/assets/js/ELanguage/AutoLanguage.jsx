
function AutoLang() {
  var webLanguage = navigator.language.split('-')[0]
  return webLanguage
}

export default AutoLang