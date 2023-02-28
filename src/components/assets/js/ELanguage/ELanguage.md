#ELanguage by Empty Soul
## V 2.0 REACT

## How to import
import { getLang, getLangVarable } from '<UR PATH>/ELanguage/ELanguage.jsx'

Inside your function:

const eLang = getLang()

## How to use

<p className="this_is_a_translated_text">{eLang.<UR DEFINET PROP IN JSON>}</p>

example:
<p className="this_is_a_translated_text">{eLang.test}</p>

## How to use inside constructor

example:

constructor() {
    super();

    let eLang = getLang(); //set eLang
    this.weekdays = [eLang.test]; //put translated text inside object
}

inside render return:
    render() 
        {
            return(
<h1>{getLangVar('test')}</h1> // use exported getlangVar
        )
    }

## Infos
You have to make every translation as string in the json (lan/lang.json) first.
Then call the desired translated text as extention.
You can also add new languages.
Every not defined language will replaced with english.
