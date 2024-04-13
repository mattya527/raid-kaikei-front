import { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemButton } from "@mui/material";
import { Navigate } from "react-router-dom";


function ListEvent(){
    const events = [
        {name:"event1",total_fee:5000,my_fee:1000},
        {name:"event2",total_fee:5000,my_fee:1000},
        {name:"event3",total_fee:5000,my_fee:1000},
        {name:"event4",total_fee:5000,my_fee:1000},
        {name:"event5",total_fee:5000,my_fee:1000},
    ]

    const ClickEvent =(e) =>{
        console.log(e)
        return <Navigate to="/edit" />;
    }
    return (
        <>
        <h1>イベント一覧表示</h1>
        <List>
        <div>
            {events.map((event) => {
                return (
                <ListItem  sx={{width: '100%', maxWidth: 360,bgcolor: 'background.paper', border: 1, marginTop:5}}>
                    <ListItemButton  key={event.id} onClick={ClickEvent}>
                        {event.name}<br></br>
                        合計金額：{event.total_fee}円<br></br>
                        自分の支払う金額：{event.my_fee}円
                    </ListItemButton>
                </ListItem>)
            })}
        </div>
        </List>
        </>
    )
}
export default ListEvent