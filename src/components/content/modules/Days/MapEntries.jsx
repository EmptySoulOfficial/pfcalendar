import './Days.css'
import Entry from '../Entry/Entry'
import { emplObj } from '../../../assets/js/EmployeeData/EmployeeData'
import { useMemo } from 'react'


function MapEntries ({setEmployeeInformation, setshowEntryInformation, information, setcontexmenuitems, dayNumber, monthNumber, index}) {

    const employeesObject = emplObj()

    let entries = ""
    let note = ""
    let entryStatus = ""
    let entryInformation = "No Informations"


    if(employeesObject["entries"][monthNumber] && employeesObject["entries"][monthNumber][dayNumber]) {

        if(employeesObject["entries"][monthNumber][dayNumber][1]) {
            entryInformation = employeesObject["entries"][monthNumber][dayNumber][1].entryInformation
        }
        
        console.log(entryInformation)

        entries = Object.keys(employeesObject["entries"][monthNumber][dayNumber])
        note = entries.map((key, i) => (
            <Entry key={i} user={i} entryStatus={entryStatus} entryInformation={entryInformation} setcontexmenuitems={setcontexmenuitems} setshowEntryInformation={setshowEntryInformation} setEmployeeInformation={setEmployeeInformation} />
       ))
  } else {
    note = ""
  }

  return(
    <>
    {note}
    </>
  )
}

export default MapEntries