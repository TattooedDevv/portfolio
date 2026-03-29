import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ChemHealth from './pages/projects/ChemHealth'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/chemhealth" element={<ChemHealth />} />
    </Routes>
  )
}

export default App