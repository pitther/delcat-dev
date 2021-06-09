import './App.css'
import { ScrollArrow } from './components/features/ScrollArrow'
import Home from './components/Home'
import Company from './components/Company'
import CatFooter from './components/CatFooter'
import CatHeader from './components/CatHeader'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Administration from './components/Administration'
import { Layout, Menu, Breadcrumb } from 'antd'
import { GlobalContext } from './context/GlobalContext'
import { useEffect, useState } from 'react'
import { p5map } from './utils/utils'
const { Header, Content, Footer } = Layout

function App() {
  const [calculatedCompanies, setCalculatedCompanies] = useState([])

  return (
    <>
      <GlobalContext.Provider
        value={{ calculatedCompanies, setCalculatedCompanies }}
      >
        <Router>
          <Layout>
            <Switch>
              <Route path="/admin">
                <Administration />
              </Route>
              <Route path="/company/:id">
                <CatHeader />
                <Company />
                <CatFooter />
              </Route>
              <Route path="/">
                <CatHeader />
                <Home />
                <CatFooter />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </GlobalContext.Provider>
    </>
  )
}

export default App
