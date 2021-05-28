import React, { Component } from 'react'

import ComponentF from './ComponentF'
import UserContext from './userContext'

export default class ComponentE extends Component {
    static contextType=UserContext
    render() {
        return (
            <div>
                component E Context {this.context}
                 <ComponentF/>
            </div>
        )
       
    }
}
