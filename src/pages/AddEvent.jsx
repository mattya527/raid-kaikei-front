import {useState} from 'react';
import {TextField,Button} from '@mui/material/';
import InviteButton from '../components/InviteButton';

function AddEvent(){
    const [eventName, setEventName] = useState('イベント名')
    
    const ClickInviteButton = ()=>{
        console.log("invite")
    }
    
    return (
        <>
        <h1>イベントの登録</h1>
        <div>
            <TextField id="filled-basic" label="イベントの名前を入力してください" variant="filled" sx={{width:"80%"}} required/>
        </div>
        <div style={{marginTop:50}}>
            <InviteButton onClick={ClickInviteButton}></InviteButton>
        </div>
        </>
    )
}
export default AddEvent