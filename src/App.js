//import logo from './logo.svg';
import './App.css';
import MainWindow from './components/content/windows/MainWindow/MainWindow';

import ELanguage from './components/assets/js/ELanguage/ELanguage.jsx'

function App() {
  const eLang = ELanguage()
  return (
    <div className="App">
      <header className="App-header">
        Header {eLang.test}
        <div className="Search-Container">
            Wer ist heute da?
            </div>
      </header>
      <div className="App-Container">
        <MainWindow />
      </div>
      
    </div>
  );
}

export default App;
