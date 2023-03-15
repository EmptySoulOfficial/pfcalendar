import React, {Component} from 'react';
import './Calendar.css'
import DayBox from '../modules/DayBox/DayBox';
import { getLang, getLangVar } from '../../assets/js/ELanguage/ELanguage';
import Icon from '../../assets/js/Icon/icon.asset';
import AddBox from '../modules/AddBox/AddBox';



export default class Calendar extends Component {
    constructor() {
        super();
   
        let eLang = getLang();
        this.weekdays = [eLang.Monday, eLang.Tuesday, eLang.Wednesday, eLang.Thursday, eLang.Friday, eLang.Saturday, eLang.Sunday];
        
        this.months = [eLang.January, eLang.February, eLang.March, eLang.April, eLang.May, eLang.June,
            eLang.July, eLang.August, eLang.September, eLang.October, eLang.November, eLang.December];

        this.state = {
          currentDay: new Date(),
        }

        let user = "Steve Pietrowski"
    }

    changeCurrentDay = (day) => {
        this.setState({ currentDay: new Date(day.year, day.month, day.number) });
      }
    
      nextDay = () => {
        this.setState({ currentDay: new Date(this.state.currentDay.setDate(32)) });
      }
    
      previousDay = () => {
        this.setState({ currentDay: new Date(this.state.currentDay.setDate(-31)) });
      }
    
      thisDay = () => {
        this.setState({ currentDay: new Date()});
      }

      
    render() 
        {
            return(
        <div className="MainWindow-Calendar">
        <AddBox />
        <div className="MainWindow-Headline-Container">
          <p className="Calendar-Year-Label">{this.state.currentDay.getFullYear()}</p>
          <div className="MainWindow-Month-Container">
          <button className="Button-Month-Back" onClick={this.previousDay} >
            <Icon name="backarrow_smooth" size="16" />
          </button>
            <button className="Button-Month-Today" onClick={this.thisDay}>
            <span className="material-test">
              {getLangVar('Today')}
            </span>
          </button>
          <button onClick={this.nextDay} className="Button-Month-For">
            <Icon name="forarrow_smooth" size="16" />
          </button>
          <p className="CurrentDate-Text">{this.state.currentDay.getDate()} {this.months[this.state.currentDay.getMonth()].substring(0, 12)}</p>
          </div>
          <div className="Menu-Container">
            <button className="Menu">
            <Icon name="burgermenu_smooth" size="16" />
            </button>
          </div>
        </div>
        <div className="MainWindow-Calendar-Container">
          <div className="MainWindow-Calendar-Week-Container">
          {this.weekdays.map(w => <p key={w} className="Day-Label">{w}</p>)}
          </div>
          <div className="MainWindow-Calendar-Days-Container">
            <div className="MainWindow-Calendar-Days">
              <DayBox day={this.state.currentDay} changeCurrentDay={this.changeCurrentDay}  />
            </div>
          </div>
        </div>

            

        </div>
    
    )
    } 

}