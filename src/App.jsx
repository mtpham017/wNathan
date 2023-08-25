import { Routes, Route } from "react-router-dom"
import TripPage from './TripPage.jsx'
import HomePage from './Home.jsx'



function App() {
  return (
    
      <Routes>
        <Route path ="/" element = { <HomePage />} />
        <Route path="/TripPage" element={ <TripPage /> } />
      </Routes>
      
    
  )
}

export default App
