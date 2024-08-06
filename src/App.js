import './App.css';
// import ComponentA from './UserContext/ComponentA';
// import ReducerOne from './UserReducer/ReducerOne';
// import ReducerTwo from './UserReducer/ReducerTwo';
// import ReducerThree from './UserReducer/ReducerThree';

// import ClassCounter from './components/ClassCounter';
// import DataFetching from './components/DataFetching';
// import MouseContainer from './components/MouseContainer';
// import DataFetchingState from './UserReducer/DataFetchingState';
// import DataFetchingReducer from './UserReducer/DataFetchingReducer';
// import MainComponent from './UserReducer/ReduceContext/MainComponent';
// import { Navbar } from './Pages/Navbar';
// import Hero from './Pages/Hero';
// import HookCounter from './components/HookCounter';
// import HookCounterFive from './components/HookCounterFive';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterTwo from './components/HookCounterTwo';
// import MouseContainer from './components/MouseContainer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './React-Query/Home.page';
import { SuperHeroesPage } from './React-Query/SuperHeroes.page';
import { RQSuperHeroesPage } from './React-Query/RQSuperHeroes.page';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient= new QueryClient()

function App() {
  return (
    <div className="App">
<QueryClientProvider client={queryClient}>

      <Router>
        <nav>
          <ul>
            <li><Link to="/home-page">Home</Link></li>
            <li><Link to="/super-heroes">Traditional Super Heroes</Link></li>
            <li><Link to="/rq-super-heroes">RQ Super Heroes</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
</QueryClientProvider>

    </div>
  );
}

export default App;
