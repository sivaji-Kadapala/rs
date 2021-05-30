import React from "react";

//  function Greet () {
//     return (
//         <div>
//             <h1>Hello Sivaji</h1>
//         </div>
//     )
// }
export const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} also known as {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};
//  export default Greet;
