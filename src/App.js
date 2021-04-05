import './App.css'
import useDarkMode from './hooks/useDarkMode'
import { routes } from './routes'
import React, { useState, useContext, Suspense } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Post from "./pages/Post"
import Login from "./pages/Login"

const AuthContext = React.createContext();
const AuthUpdateContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
};

export function useAuthUpdate() {
  return useContext(AuthUpdateContext);
};

function App (props) {
  const [colorTheme, setTheme] = useDarkMode()
  const [authState, setAuthState] = useState(false);

  return <>
    <div className="min-h-screen h-full w-screen dark:bg-nosferatu">
      <div className="flex text-buffy flex-col mx-auto items-center max-w-2xl min-h-screen px-8 md:px-0 lg:px-0">
        <Router>
           <Navbar />
           <Switch>
             <Route exact path="/about" component={About}/>
             <Route exact path="/blog" component={Blog}/>
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
