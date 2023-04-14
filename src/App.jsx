// import useState hook
import {useState, useEffect} from 'react'

// App component that gets exported to main.jsx
function App() {
  // Keeps track of state and updates using setCounter. The default value upon rendering is the locally stored value, else 0.
  const [counter, setCounter] = useState(() => {
    const localValue = localStorage.getItem("COUNT")
    if (localValue == null) {
      return 0
    } else {
      return JSON.parse(localValue)
    }
  })

  let handleClick = () => {
    setCounter((counter) => counter+1)
  }

  // Whenever counter gets updated, set locally stored value to new counter value
  useEffect(() => {
    localStorage.setItem("COUNT", JSON.stringify(counter))
  }, [counter])

  return(
    <>
      {/* passing a function to setCounter because we want to +1 to the current state each time*/}
      <button onClick={() => handleClick()}>Click me!</button>
      <h1>I've been clicked {counter} times</h1>
    </>
  )
}

export default App
















// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
