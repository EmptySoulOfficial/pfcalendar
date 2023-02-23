#ELanguage by Empty Soul
## V 1.2 REACT

## How to import
import ELanguage from '<UR PATH>/ELanguage/ELanguage.jsx'

Inside your function:

const eLang = ELanguage()

## How to use

<p className="this_is_a_translated_text">{eLang.<UR DEFINET PROP IN JSON>}</p>

example:
<p className="this_is_a_translated_text">{eLang.test}</p>

## Infos
You have to make every translation as string in the json (lan/lang.json) first.
Then call the desired translated text as extention.
You can also add new languages.
Every not defined language will replaced with english.
