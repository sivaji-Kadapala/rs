import "./App.css";
// import Todo from "./components/Todo";

import React, { Component } from "react";
import UseState from "./components/UseState";
import UseStateFunction from "./components/UseStateFunction";
import UseEffect from "./components/useEffect/UseEffect";
import CounterExample from "./components/useEffect/CounterExample";
import ComponetC  from "./components/ContextApi/ComponetC";
import {UserProvider} from './components/ContextApi/userContext'
import ComponentC from "./components/UseContext/ComponentC";
// import UseFetch from "./components/Custom/UseFetch";

// import TodoForm from "./components/TodoForm";

export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       todos: [
//         { id:1,title: "First Todo", complete: false },
//         { id:2,title: "Second Todo", complete: true },
//         {id:3, title: "Third Todo", complete: false },
//       ],
//     };
//   }
// addTodo=(todo)=>{
//   console.log(todo);
// }

  render() {
    return (
      <div className="App">
        {/* <h1 className="heading">Todo Management Application with React</h1>
        {/* Using Map method */}
        {/* {this.state.todos.map((todo) => 
          <Todo key={todo.id} todo={todo} />
        )}
        <TodoForm addTodo={(todo)=>this.addTodo(todo)}/> */} 
      <UseState/>
      <UseStateFunction/>
      <UseEffect/>
      <CounterExample/>
      {/* <UseFetch/> */}
      <UserProvider value="sivaji">
         <ComponetC/>
      </UserProvider>
     <ComponentC/>
      </div>
    );
  }
}
