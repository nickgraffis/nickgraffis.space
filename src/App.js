import './App.css'
import useDarkMode from './hooks/useDarkMode'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App (props) {
  const [colorTheme, setTheme] = useDarkMode()

  return <>
    <div className="min-h-screen h-full w-screen dark:bg-nosferatu">
      <div className="flex text-buffy flex-col mx-auto items-start max-w-2xl min-h-screen px-8 md:px-0 lg:px-0">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/about" component={About}/>
            <Route exact path="/" component={Home}/>
            <Route path='/404' component={NotFound} />
            <Redirect to='/404' />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  </>
}

export default App;
