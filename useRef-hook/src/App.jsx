import { useEffect, useRef, useState } from "react"
import "./App.css"

function App() {
  const [name, setName] = useState("")
  const inputRef = useRef()

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1
  // })

  function focus(){
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} type={name} onChange={(e) => setName(e.target.value)} />
      <h1>My name is {name}</h1>
      <button onClick={focus}>Focus</button>
    </div>
  )
}

export default App
