import { useState } from 'react'
import Home from '../Home'

import './reset.css'
import './App.css'


function App() {
  const [atualPage, setAtualPage] = useState('home')

  return (
    <div className="App">
      {atualPage === 'home' 
        ? <Home setAtualPage={setAtualPage} />
        : <h1>Recall</h1>
      }

    </div>
  )
}

export default App
