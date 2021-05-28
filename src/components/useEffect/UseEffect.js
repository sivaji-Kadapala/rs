//for side effects:api,dynamic data,calculations,{componentDidMount,componentDidUodate,componentWillUnMount}===UseEffect
import React, { useState, useEffect,Component } from 'react';

export default function UseEffect() {
    //#1.hooks are placed in top,executed in sequential order
    const [username,setUsername]=useState("Sivaji");
   const [count,setCount]=useState(0);
   const [data,setData]=useState([]);
 
   useEffect(() => {
      fetch("http://jsonplaceholder.typicode.com/users")
      .then((res)=>res.json())
      .then((data)=>{
          setData(data);
      });
   },[count],);
    return (
        <div>
            <h1>Message Notifications</h1>
            <p>You have recieved {count} new messages</p>
            <div>
                {data.map((user)=>
                    <p>{user.name}</p>
                    
                )}
            </div>
            <button onClick={()=>setCount(count+1)}>Send Message</button>
            {username}
            <button onClick={()=>setUsername("sivam")}>ClickMe</button>
        </div>
    )
}
