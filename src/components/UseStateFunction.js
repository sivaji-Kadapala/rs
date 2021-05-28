import React, { useState } from 'react';

export default function UseStateFunction() {
    //#1.hooks are placed in top,executed in sequential order
    const [username,setUsername]=useState("Sivaji");
   const [count,setCount]=useState(0);
    return (
        <div>
            <h1>Message Notifications</h1>
            <p>You have recieved {count} new messages</p>
            <button onClick={()=>setCount(count+1)}>Send Message</button>
            {username}
            <button onClick={()=>setUsername("sivam")}>ClickMe</button>
        </div>
    )
}
