import './Entry.css'
import Icon from '../../../assets/js/Icon/icon.asset';


function Entry({entryStatus, user, information}) {

    let entryIcon = "";

    entryStatus === "Homeoffice" ? entryIcon = "home" : entryStatus === "Vacation" ? entryIcon = "palme": 
        entryStatus === "Training" ? entryIcon = "university" : entryStatus === "Ill" ? entryIcon = "thermometer" : 
            entryStatus === "Absent" ? entryIcon = "clock" : entryIcon = "heart";

    return(
        <div className="Entry">
            <p className="Entry-Name">{user}</p>
            <div className={"Entry-Status Entry-Status-"+entryStatus}>
                <Icon name={entryIcon} size="16" />
            </div>
        </div>
    )
}

export default Entry;