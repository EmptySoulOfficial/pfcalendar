import './AddBox.css'
import { useState } from 'react';
import Icon from '../../../assets/js/Icon/icon.asset.jsx'
import {getLang} from '../../../assets/js/ELanguage/ELanguage'
import ButtonAddStatus from '../../molecules/buttons/ButtonAddStatus/ButtonAddStatus';

function AddBox() {

    const eLang = getLang();
    const [buttonaddstatusState, buttonaddstatusChange] = useState({
        activeButton: null,
        buttonObjects: [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
    });

    function toggleActive(index){
        buttonaddstatusChange({...buttonaddstatusState, activeButton: buttonaddstatusState.buttonObjects[index]})
        console.log('clicked');
    }

    function toggleActiveStyles(index){
        if(buttonaddstatusState.buttonObjects[index] === buttonaddstatusState.activeButton){
            console.log('active')
            return "Button-AddStatus--active";
        }else{
            return "Button-AddStatus"
        }
    }

    function hello(index){
        alert('hello'+index);
    }

    return(
    <div className="AddBox">
        <div className="AddBox-Container-Buttons">
        
            {buttonaddstatusState.buttonObjects.map((elements, index)=> (
                <ButtonAddStatus className={toggleActiveStyles} label={eLang.Homeoffice} icon='addsmooth' key={index} id={index} index={index} onClick={() => {console.log("hello");}}/>
            ))}
            
        </div>
        <div className="AddBox-Container-Dates">
            <p>From</p><input className="AddBox-Date-Input" type="date"></input><p>To</p><input className="AddBox-Date-Input" type="date"></input>
        </div>
        <div className="AddBox-Container-Notes">
            <textarea placeholder="Some additional informations"></textarea>
        </div>
    </div>
    )

}

export default AddBox