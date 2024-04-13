import { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { TextField } from "@mui/material";
import RoundedButton from "../components/RoundedButton";

function EditPay(){
    const [totalFee, setTotalFee] = useState(0)

    const users = [
        {name:"user1",fee:null},
        {name:"user2",fee:1000},
        {name:"user3",fee:2000},
        {name:"user4",fee:null}
    ]

    useEffect(()=>{
        setTotalFee(5000)
    },[])

    const ClickUpdateButton = ()=>{
        console.log("update")
    }

    return (
        <>
        <h1>金額の登録</h1>
        <h2>合計金額:{totalFee}円</h2>
        <p style={{textAlign:"left"}}>割り勘の対象にならない人だけ直接金額を入力してください。</p>
        <List>
            <div>
                {users.map((user) => {
                    return(
                        <ListItem>
                            {user.name}
                            <TextField sx={{marginLeft:10}} type="number" defaultValue={user.fee} InputProps={{style: { textAlign: 'right' }}}/>円
                        </ListItem>
                    )
                })}
            </div>
        </List>
        <RoundedButton buttonText="更新" onClick={ClickUpdateButton}/>
        </>
    )
}
export default EditPay