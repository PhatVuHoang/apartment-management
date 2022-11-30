import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Apartment from './pages/Apartment'
import Request from './pages/Request'
import Unpaid from './pages/Unpaid'
import Unrent from './pages/Unrent'

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Apartment />}/>
        <Route path='/request' element={<Request />}/>
        <Route path='/unpaid' element={<Unpaid />}/>
        <Route path='/unrent' element={<Unrent />}/>
      </Routes>
    </Router>
  )
}

export default App
