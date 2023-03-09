//import logo from './logo.svg';
import './App.css';
import Calendar from './components/content/calendar/Calendar';

import { getLang } from './components/assets/js/ELanguage/ELanguage.js'
// import TestCalendar from './components/content/windows/testCalendar/TestCalendar';
//import LogIn from './components/content/start/LogIn.jsx'

function App() {
  const eLang = getLang()
  return (
    <div className="App">
      <header className="App-header">
        Header {eLang.test}
      </header>
      <div className="App-Container">
        <Calendar />
      </div>
      
    </div>
  );
}

export default App;
