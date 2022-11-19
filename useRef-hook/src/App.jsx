import { useEffect, useRef, useState } from "react"
import "./App.css"

function App() {
  const [name, setName] = useState("")
  const renderCount = useRef(1)

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  return (
    <div>
      <input type={name} onChange={(e) => setName(e.target.value)} />
      <h1>My name is {name}</h1>
      <h1>I rendered {renderCount.current} times</h1>
    </div>
  )
}

export default App
