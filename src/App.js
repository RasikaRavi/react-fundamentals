// import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greet from'./components/Greet';
import Message from './components/Message';
import Counter from './components/counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      <UserGreeting/>
     {/* <ParentComponent/> */}
     {/* <EventBind/> */}
     {/* <FunctionClick/>
     <ClassClick/> */}
     {/* <Welcome name="Rasika" surName="Paapu"/>
     <Welcome name="Meena" surName="Meenu"/>
     <Welcome name="Ravi" surName="Bujju"/>
     <Greet  name="Rasika"/>
     <Greet  name="Meena"/>
     <Greet  name="Ravi"/> */}
     {/* <Message /> */}
    {/* <Counter />  */}
    </div>
  );
}

export default App;
