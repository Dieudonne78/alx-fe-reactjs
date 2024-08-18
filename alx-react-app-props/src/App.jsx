import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './WelcomeMessage'
import UserProfile from './UserProfile'
import ProfilePage from './ProfilePage'
import UserContext from './UserContext'


function App() {
  const Mybio = 'Loves football and photography'
  const [count, setCount] = useState(0)
  const userdata = { name: "Jane Doe", email: "jane.doe@example.com" }

  return (
    <>
      <div>
      <UserProfile name='Alice' age={25} bio={Mybio}/>
      <WelcomeMessage />

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logogf" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <UserContext.Provider value ={userdata} > <ProfilePage /></UserContext.Provider>
    </>
  )
}

export default App
