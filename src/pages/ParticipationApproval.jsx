import RoundedButton from "../components/RoundedButton";
import {useState} from 'react';
function ParticioationApproval(){    
    const [eventName, setEventName] = useState("イベント名")
    
    const ClickRejectButton = ()=> {
        console.log("拒否")
    }

    const ClickAcceptButton = ()=> {
        console.log("参加")
    }

    return (
        <>
        <h1>{eventName}</h1>
        <div>
        から招待されています。<br/>
        参加しますか？
        </div>
        <RoundedButton buttonText="参加" onClick={ClickAcceptButton}/>
        <RoundedButton buttonText="拒否" onClick={ClickRejectButton}/>
        </>
    )
}
export default ParticioationApproval