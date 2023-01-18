import './App.css';
import React from 'react'
import Message from './components/Message';
import Count from "./components/Count"
import Functionclick from "./components/Functionclick"
import Classclick from './components/Classclick';
import Eventbinding from './components/Eventbinding';
import Parentcomp from './components/Parentcomp';
import Condrendering from './components/Condrendering'
import PersonList from './components/PersonList';
import Stylecomp from './components/stylecomp';
import Formhandling from './components/Formhandling';
import LifecycleA from './components/LifecycleA';
import LifecycleC from './components/LifecycleC';
import Purecomp from './components/Purecomp';
import Ref from './components/Ref';
import ParentInput from './components/ParentInput';
import ParentFRref from './components/ParentFRref';
import Portal from './components/Portal';
import Name from './components/Name';
import Errorhandling from './components/Errorhandling';
import Counter from './components/Counter';
import Hover from './components/Hover';
import CounterTwo from './components/CounterTwo';
import HoverTwo from './components/HoverTwo';
import KeyDown from './components/KeyDown';
import Countercomp from './components/Countercomp';
import CompA from './components/CompA';
import { UserProvider } from "./components/UserContext"
import HttpGet from './componentsTwo/HttpGet';
import HttpPost from './componentsTwo/HttpPost';
import UseState from './componentThree/UseState';
import UseStateTwo from './componentThree/UseStateTwo';
import UsestateThree from './componentThree/UsestateThree';
import UseEffect from './componentThree/UseEffect';
import UseEffectTwo from './componentThree/UseEffectTwo';
import CreateContext from './componentThree/CreateContext';
import UseReducer from './componentThree/UseReducer';
import UseReducerTwo from './componentThree/UseReducerTwo';
import UseReducerThree from './componentThree/UseReducerThree';
import CompATwo from './componentThree/CompATwo';
import CompCThree from './componentThree/CompCThree';
import UseReducerFour from './componentThree/UseReducerFour';
import UseCallback from './componentThree/UseCallback';
import UseMemo from './componentThree/UseMemo';
import UseRef from './componentThree/UseRef';
import DocTitle from './componentThree/DocTitle';
import CounterOne from './componentThree/CounterOne';
import CounterOneTwo from './componentThree/CounterOneTwo';
import Form from './componentThree/Form';


export const UserContext = React.createContext() 
export const AppContext = React.createContext() 

export const Context = React.createContext()
const initialValue = 0
const reducer = (state,action) =>{
      switch(action){
        case "Increment" :
          return state + 1;
        case "Decrement" :
          return state - 1
        case "Reset" :
          return initialValue
      }
}
function App() {
  const [count, dispatch] = React.useReducer(reducer,initialValue);
  return (
    <Context.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className="App" >
      {/*<p>count - {count}</p>
      <button onClick={()=>dispatch('Increment')}>Increment</button>
      <button onClick={()=>dispatch('Decrement')}>Decrement</button>
  <button onClick={()=>dispatch('Reset')}>Reset</button>*/}
      {/*<HttpGet />*/}
      {/*<HttpPost />*/}
      {/*<UseState />*/}
      {/*<UseStateTwo />*/}
      {/*<UsestateThree />*/}
      {/*<UseEffect />*/}
      {/*<UseEffectThree />*/}
      {/*<UseEffectTwo />*/}
      {/*<UserContext.Provider value="Jibola">
        <AppContext.Provider value="Alao">
        {<CreateContext />}
        </AppContext.Provider>
  </UserContext.Provider>*/}
    {/*<UseReducer />*/}
    {/*<UseReducerTwo />*/}
    {/*<UseReducerThree />*/}
    {/*<CompATwo />*/}
    {/*<CompCThree />*/}
    {/*<UseReducerFour/>*/}
    {/*<UseCallback />*/}
    {/*<UseMemo />*/}
    {/*<UseRef />*/}
    {/*<DocTitle />*/}
    {/*<CounterOne/>*/}
    {/*<CounterOneTwo />*/}
    {<Form />}
    </div>
    </Context.Provider>
  );
}

export default App;
