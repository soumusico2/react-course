import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <h1>Fundamentos de React</h1>
        <FirstComponent></FirstComponent>
        <TemplateExpressions></TemplateExpressions>
      </div>
  )
}

export default App
