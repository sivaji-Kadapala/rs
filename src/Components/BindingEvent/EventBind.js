import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'hello'
        }
         this.clickHandler=this.clickHandler.bind(this);
    }
    clickHandler(){
        this.setState({
            message:'good Bye'
        })
        console.log(this);
    }
   
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click</button>
                {/* 2nd Approach */}
                <br/>
                <button onClick={()=>this.clickHandler()}>Click 2nd Approach</button>
                <br/>
                <button onClick={this.clickHandler}>Click 3rd Approach</button>
            </div>
        )
    }
}

export default EventBind
