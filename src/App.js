import './App.css';
import { Hello } from "./Hello"
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import { useForm } from './useForm';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

const App = () => {
  const [count, setCount] = useState(5); // for single variable
  const [{ count1, count2 }, setCount2] = useState({ count1: 1, count2: 2 }); // can use for similar variables, which requires inc on same time

  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  const [values, handleChange] = useForm({ email: "", password: "" });


  // will be called/ render the comp when state is changed
  // useEffect (() => {
  //   console.log("faruu renderrr") // will monitor all states
  //   setCount(count + 1)
  // }, count1)

  // useEffect (() => {
  //   console.log("renderrr") // will be call on mount, substitute for componenetDidMount
  // }, [])

  // useEffect (() => {
  //   console.log("renderrr")
  // }, [values.email, count]) // will be called on email change & count chnage

  // useEffect(() => {
  //   console.log("renderrr") // will be call on mount, substitute for componenetDidMount
  //   return () => {
  //     console.log("unmount")  // this is called when comp is unmounted
  //   }
  // }, [])

  // useEffect -> used for Updating value in Local storage or to do multical apis call based on some variable change

  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <hr/>
        <ItemContainer type="cake"/>
        <ItemContainer type="iceCream"/>
        <CakeContainer/>
        <HooksCakeContainer />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Hello count={count} />
        <h1>Testing hooks</h1>
        <button onClick={() => setCount((currentCount) => currentCount + 1)}>
          Inc Single count
        </button>
        <h3>{count}</h3>
        {/* now currentState will be an obj which have count1 & count2 */}
        <button onClick={() => setCount2(currentState => ({ ...currentState, count1: currentState.count1 + 1 }))}>
          Inc multiple counts
        </button>
        <h3>Count1 {count1}</h3>
        <h3>Count2 {count2}</h3>


        {/* Custom Hooks */}
        <div>
          {/* <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}>
        </input>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}> 
        </input> */}

          <input type="text" name="email" value={values.email} onChange={handleChange}>
          </input>
          <input type="password" name="password" value={values.password} onChange={handleChange}>
          </input>
        </div>


      </div>
    </Provider>
  );
}

export default App;
