import './App.css';
import ComponentA from './UserContext/ComponentA';
import ReducerOne from './UserReducer/ReducerOne';
import ReducerTwo from './UserReducer/ReducerTwo';
import ReducerThree from './UserReducer/ReducerThree';

// import ClassCounter from './components/ClassCounter';
import DataFetching from './components/DataFetching';
import MouseContainer from './components/MouseContainer';
import DataFetchingState from './UserReducer/DataFetchingState';
import DataFetchingReducer from './UserReducer/DataFetchingReducer';
import MainComponent from './UserReducer/ReduceContext/MainComponent';
import { Navbar } from './Pages/Navbar';
import Hero from './Pages/Hero';
// import HookCounter from './components/HookCounter';
// import HookCounterFive from './components/HookCounterFive';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterTwo from './components/HookCounterTwo';
// import MouseContainer from './components/MouseContainer';
function App() {
  return (
    <div className="App">
    <>
      <Navbar/>
      <Hero/>
    </>



    </div>
  );
}

export default App;
