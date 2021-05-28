import React, { Component } from 'react'

export default class UseState extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"sivaji"
        }
    }
    
    render() {
        return (
            <div>
                {this.state.username}
                <br/>
                <button onClick={()=>{
                    this.setState({username:"siva"})
                }}>clickMe</button>
            </div>
        )
    }
}
