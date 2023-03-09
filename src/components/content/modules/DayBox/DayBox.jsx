import "./DayBox.css";
import { getLang, getLangVar } from '../../../assets/js/ELanguage/ELanguage';
import Icon from "../../../assets/js/Icon/icon.asset";

function DayBox(props) {
  const currentDate = new Date()
  let firstDayOfMonth = new Date(
    props.day.getFullYear(),
    props.day.getMonth(),
    0
  );
  let weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];
  let dayidcounter = 1;


  //BITTE VON CALENDAR IMPORTIEREN!!
  let eLang = getLang();
  let months = [eLang.January, eLang.February, eLang.March, eLang.April, eLang.May, eLang.June,
    eLang.July, eLang.August, eLang.September, eLang.October, eLang.November, eLang.December];

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - 1));
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === props.day.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === props.day.toDateString(),
      currentDay: firstDayOfMonth.toDateString() === new Date(firstDayOfMonth.toDateString()),
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }
  return (
    <>
      {currentDays.map((day) => {
        console.log(">"+day.date)
        return(
        <div key={day.number+"-"+dayidcounter++} className={"DayBox" + (day.currentMonth ? " CurrentDay" : "") + 
                                                            (day.selected ? (day.date > currentDate ? " selected" : " selected-today") : "" )} 
                                                            >
          <div className="DayBox-Head" onClick={() => {props.changeCurrentDay(day);}}>
            <div className="addButton" onClick={() => {alert('add')}}><Icon name="addsmooth" size="16" /></div>
            <p className="DayBox-CurrentMonth">{months[day.month]}</p>
            <p className="DateNumber" >{day.number}</p>
          </div>
          <div className="DayBox-MainContainer">
            <div className="DayBox-Entry">
              <p className="DayBox-Entry-Name">Steve Pietrowski</p>
              <div className="DayBox-Entry-Status">
                <Icon name="home" size="16" />
              </div>
            </div>

            <div className="DayBox-Entry">
              <p className="DayBox-Entry-Name">Steve Pietrowski</p>
              <div className="DayBox-Entry-Status">
                <Icon name="test" size="16" />
              </div>
            </div>
          </div>
        </div>
        )
      })}
    </>
  );
}

export default DayBox;
