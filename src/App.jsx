import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import TitleBar from './components/TitleBar'
import './tw-styles.css'
import MapDisplay from './components/MapDisplay'
import PlaqueModal from './components/PlaqueModal'

function App() {

  // const [count, setCount] = useState(0)

  // function increment() {
  //   setCount(count + 1)
  // }
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
  <div className="mx-auto max-w-screen-xl bg-gray-50 min-h-screen">
    <TitleBar title="Recommended Reading"/>
    <MapDisplay longitude={-2.78479} latitude={54.05213} zoom={16} />
    {isModalOpen ? <PlaqueModal /> : null}
  </div>
  )

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={increment}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
