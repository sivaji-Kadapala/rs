import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    //  this.state.count=this.state.count+1
    // this.setState(
    //   //object
    //   {
    //     count: this.state.count + 1,
    //   },
    //   //callback function
    //   () => {
    //     console.log("callback value", this.state.count);
    //   }
    // );
    this.setState((prevState,props)=>({
        count:prevState.count+1
    }))
    console.log(this.state.count);
  }
  incrementFive()
  {
      this.increment();
       this.increment();
        this.increment();
         this.increment();
          this.increment();
  }
  render() {
    return (
      <div>
        <div>
          <h1>count-{this.state.count}</h1>
          <button onClick={() => this.incrementFive()}>Increment</button>
        </div>
      </div>
    );
  }
}

export default Counter;
