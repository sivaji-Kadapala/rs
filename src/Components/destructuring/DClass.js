import React, { Component } from "react";

export default class DClass extends Component {
  render() {
    const { name, heroName } = this.props;
    //const {state1,state2}=this.state
    return (
      <h1>
        {name} is also know as {heroName}
      </h1>
    );
  }
}
