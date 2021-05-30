import React from 'react';
const Hello=()=>{
    //With JSX
    // return(
    //     <div>
    //         <h1>Hello Sivaji</h1>
    //     </div>
    // )
    //With out JSX
    return React.createElement('div',{id:'hello',className:'dummyClass'},React.createElement('h1',null,'hello Kadapala'))
}
export default Hello;