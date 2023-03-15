import './ButtonAddStatus.css'
import Icon from '../../../../assets/js/Icon/icon.asset'

function ButtonAddStatus({label, icon, id, index}) {

    return(
        <button className="Button-AddStatus" id={'button-addstatus_'+id}>
            <Icon name={icon} />
            <p>{label}</p>
        </button>
    )
}

export default ButtonAddStatus
