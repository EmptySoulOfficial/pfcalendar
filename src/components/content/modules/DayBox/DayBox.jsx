import './DayBox.css'
function DayBox() {
return (
<div className="DayBox">
    <div className="DayBox-Head">
    <button className="addButton">+</button>
    <p className="DateNumber">01</p>
    </div>
    <div className="DayBox-MainContainer">
        <div className="DayBox-Entry">
            <p className="DayBox-Entry-Name">Steve Pietrowski</p>
            <div className="DayBox-Entry-Status">H/1</div>
        </div>

        <div className="DayBox-Entry">
            <p className="DayBox-Entry-Name">Steve Pietrowski</p>
            <div className="DayBox-Entry-Status">H/1</div>
        </div>
        
    </div>
</div>
);
}

export default DayBox