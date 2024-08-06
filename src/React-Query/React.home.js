import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

import { HomePage } from './Home.page'
import { RQSuperHeroesPage } from './RQSuperHeroes.page'
import { SuperHeroesPage } from './SuperHeroes.page'

const queryClient = new QueryClient()

function ReactHome() {
  return (
    // <QueryClientProvider client={queryClient}>
      <Router>
        {/* <div> */}
          {/* <nav>
            <ul>
              <li>
                <Link to='/home-page'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav> */}
          <Routes>
          <Route path="/super-heroes" element={<SuperHeroesPage/>} />
          <Route path="/home-page" component={HomePage} />
          <Route path="/rq-super-heroes" component={RQSuperHeroesPage} />
          </Routes>
        {/* </div> */}
      </Router>

    // </QueryClientProvider>
  )
}

export default ReactHome