import './Entry.css'
import Icon from '../../../assets/js/Icon/icon.asset';
import ContexMenu from '../ContexMenu/ContexMenu';
import { useMemo } from 'react';
import EntryInformation from '../EntryInformation/EntryInformation';


function Entry({entryStatus, user, setcontexmenuitems, setshowEntryInformation, setEmployeeInformation, entryInformation}) {

    console.log(user);
    let entryIcon = ""

    setEmployeeInformation(entryInformation)

    entryStatus === "Homeoffice" ? entryIcon = "home" : entryStatus === "Vacation" ? entryIcon = "palme": 
        entryStatus === "Training" ? entryIcon = "university" : entryStatus === "Ill" ? entryIcon = "thermometer" : 
            entryStatus === "Absent" ? entryIcon = "clock" : entryIcon = "heart";

    return(
        <div className="Entry" onMouseOver={() => (setshowEntryInformation(true))} onMouseLeave={() => (setshowEntryInformation(false))}>
            <p className="Entry-Name">{user}</p>
            <div className={"Entry-Status Entry-Status-"+entryStatus}>
                <Icon name={entryIcon} size="16" />
            </div>
        </div>
    )
}

export default Entry;