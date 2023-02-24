import './MainWindow.css'
import DayBox from '../../modules/DayBox/DayBox'

function MainWindow() {
    return(
        
        <div className="MainWindow">
            <div>
            
            </div>
            <div className="MainWindow-Month-Container">
                <button className="Month-Button-Back">x</button><h1>JANUAR</h1><button className="Month-Button-Back">x</button>
            </div>
            <div className="MainWindow-Search-Container">
            Wer ist heute da?
            </div>
            <div className="MainWindow-Calendar-Container">
                <div className="MainWindow-Calendar-Days-Container">
                    <p className="Day-Label">MO</p>
                    <p className="Day-Label">DI</p>
                    <p className="Day-Label">MI</p>
                    <p className="Day-Label">DO</p>
                    <p className="Day-Label">FR</p>
                    <p className="Day-Label">SA</p>
                    <p className="Day-Label">SO</p>
                </div>
            <div className="MainWindow-Calendar">
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />
                < DayBox />

                < DayBox />
                < DayBox /> 
                </div>
            </div>
            

            

        </div>
        
    
    
    );
   
}
export default MainWindow