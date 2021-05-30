import React, { Component } from "react";

class Greeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //------Fourth:Short circute Approach------
    //  return this.state.isLoggedIn && <div>Welcome Sivaji</div>; // it is talking only true
    // //------Short circute Approach End------

    //----Third Approach (ternary)------
     return(
        this.state.isLoggedIn?
        <div>Welcome Sivaji</div>:
        <div>Welcome Guest</div>
    )
    //----Third  Approach  end------
    //----Second Approach ------
    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome Sivaji</div>
    // }else{
    //     message=<div>Welcome Guest</div>
    // }
    // return <div>{message}</div>
    //----Second approach end---------
    //----first Approach ------
    // if(this.state.isLoggedIn){
    //     return (
    //         <div>Welcome Sivaji</div>
    //     )
    // }else{
    //     return (
    //         <div>Welcome Guest</div>
    //     )
    // }
    //----first approach end---------
    // return (
    //     <div>
    //         <div>
    //         Welcome Sivaji
    //     </div>
    //     <div>Welcome Guest</div>
    //     </div>
    // )
  }
}

export default Greeting;
