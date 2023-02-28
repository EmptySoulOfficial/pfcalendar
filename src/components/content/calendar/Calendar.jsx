import React, {Component} from 'react';
import './Calendar.css'
import DayBox from '../modules/DayBox/DayBox';
import { getLang, getLangVar } from '../../assets/js/ELanguage/ELanguage';



export default class Calendar extends Component {
    constructor() {
        super();
   
        let eLang = getLang();
        this.weekdays = [eLang.Monday, eLang.Tuesday, eLang.Wednesday, eLang.Thursday, eLang.Friday, eLang.Saturday, eLang.Sunday];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'];
    
        this.state = {
          currentDay: new Date()
        }
      }

      
    render() 
        {
            return(
        <div className="MainWindow">

        {getLangVar('Monday')}
            <div className="MainWindow-Month-Container">
                <button className="Month-Button-Back">x</button><h1>JANUAR { getLangVar('Monday')}</h1><button className="Month-Button-Back">x</button>
            </div>
            <div className="MainWindow-Calendar-Container">
                <div className="MainWindow-Calendar-Days-Container">
                {this.weekdays.map(w => <p key={w} className="Day-Label">{w}</p>)}
                
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
    
    )
    } 

}