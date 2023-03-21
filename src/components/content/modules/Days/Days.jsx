import "./Days.css";
import { getLang, getLangVar } from "../../../assets/js/ELanguage/ELanguage";
import Icon from "../../../assets/js/Icon/icon.asset";
import Entry from "../Entry/Entry";
import { getMonths } from "../../../assets/js/Months/Months.asset";
import { useMemo, useState } from "react";
import DaysItem from "./DayItem";

const Days = ({ day, changeCurrentDay, setshowAddBox }) => {

  const firstDayOfMonth = useMemo(
    () => new Date(day.getFullYear(), day.getMonth(), 0),
    [day]
  );

  const [selectedDay, setSelectedDay] = useState(new Date());



  let user = "Steve";
  let entryStatus = "Homeoffice";
  let information = "Ich bin ab 13 Uhr im Homeoffice";

  let weekdayOfFirstDay = firstDayOfMonth.getDay();
  const currentDays = useMemo(() => {
    const _currentDays = [];

    for (let _day = 0; _day < 42; _day++) {
      if (_day === 0 && weekdayOfFirstDay === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
      } else if (_day === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (_day - 1));
      } else {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
      }

      const calendarDay = {
        currentMonth: firstDayOfMonth.getMonth() === day.getMonth(),
        date: new Date(firstDayOfMonth),
        month: firstDayOfMonth.getMonth(),
        number: firstDayOfMonth.getDate(),
        selected: firstDayOfMonth.toDateString() === day.toDateString(),
        currentDay:
          firstDayOfMonth.toDateString() ===
          new Date(firstDayOfMonth.toDateString()),
        year: firstDayOfMonth.getFullYear(),
      };

      _currentDays.push(calendarDay);
    }

    return _currentDays;
  }, [day]);

  return (
    <>
      {currentDays.map((_day, index) => (
       <DaysItem
       key={index}
        _day={_day}
        changeCurrentDay={changeCurrentDay}

        setshowAddBox={setshowAddBox}
       >
       <Entry user={user} entryStatus={entryStatus} information={information} />

       </DaysItem>
            
      ))}
    </>
  );
};

export default Days;
