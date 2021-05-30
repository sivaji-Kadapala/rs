import React, { Component } from 'react'

 class ClassCkick extends Component {
     clickhandler(){
         console.log("clicked the button");
     }
    render() {
        return (
            <div>
                <button onClick={this.clickhandler}>Click me</button>
            </div>
        )
    }
}

export default ClassCkick
