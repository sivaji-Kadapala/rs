
import './App.css';
import EventBind from './Components/BindingEvent/EventBind';
import DClass from './Components/destructuring/DClass';
import { DeStructure } from './Components/destructuring/DeStructure';
import ClassCkick from './Components/event Handling/ClassCkick';
import FunctionClick from './Components/event Handling/FunctionClick';
import Welcome from './Components/Functional Components/Class Components/Welcome';
import {Greet} from './Components/Functional Components/Greet';
import Hello from './Components/Jsx/Hello';
import List from './Components/ListRendering/List';
import Counter from './Components/setState/Counter';
import Message from './Components/State/Message';
import Greeting from './ConditionalRendering/Greeting';
import ParentComponent from './MethodsAsprops/ParentComponent';

function App() {
  return (
    <div className="App">
     <Greet name="Sivaji" heroName="iron Man">
       <p>This is children props</p>
     </Greet>
     <Greet name="Kadapala" heroName="bat Man">
       <button>Action</button>
     </Greet>
     <Greet name="Siva" heroName="super Man"/>
     <Welcome name="Sivaji" heroName="iron Man"/>
     <Welcome name="Kadapala" heroName="bat Man"/>
     <Welcome name="Siva" heroName="super Man"/>
     <Hello/>
     <Message/>
     
       <Counter/>
       <DeStructure name="sivaji" heroName="Iron Man"/>
       <DClass  name="sivaji" heroName="Iron Man"/>
       <FunctionClick/>
       <ClassCkick/>
       <EventBind/>
       <ParentComponent/>
       <Greeting/>
       <List/>
    </div>
  );
}

export default App;
