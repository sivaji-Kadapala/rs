import React, { Component } from 'react'

 class TodoForm extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              todotext:""
         }
     }
     addTodo=(e)=>{
     e.preventdefault();
     this.props.addTodo(this.state.todotext);
     }
    render() {
        return (
            <div>
                <form onSubmit={this.adTodo}>
                  <input
                 type="text" value={this.state.todotext} 
                 onChange={(e)=>this.setState({todotext:e.target.value})}
                  placeholder="Add Todo here ..."/>
                </form>
                
            </div>
        )
    }
}

export default TodoForm
