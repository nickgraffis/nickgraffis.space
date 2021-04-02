import './App.css'
import useDarkMode from './hooks/useDarkMode'
import { routes } from './routes'
import React, { useState, useContext } from 'react'
import { Router, View, NotFoundBoundary } from 'react-navi'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

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
        <Navbar />
        <Router routes={routes}>
          <NotFoundBoundary render={NotFound}>
            <AuthContext.Provider value={authState}>
              <AuthUpdateContext.Provider value={setAuthState}>
                <View />
              </AuthUpdateContext.Provider>
            </AuthContext.Provider>
          </NotFoundBoundary>
        </Router>
        <Footer />
      </div>
    </div>
  </>
}

export default App;
