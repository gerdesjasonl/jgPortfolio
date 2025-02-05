import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
      <ul class="contact">
        <li href="">EMAIL</li>
        <li href="">WHATSAPP</li>
        <li href="">SLACK</li>
        <li href="">X</li>
      </ul>
    </>
  )
}

export default App
