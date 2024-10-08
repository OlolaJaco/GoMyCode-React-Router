import MoviesList from './components/MoviesList'
import MovieCard from './components/movieCard'

import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import MovieDescription from './components/MovieDescription'

function App() {


  return (
    <BrowserRouter>
    
    
      <Routes>
        <Route path='/' element={<MovieCard movies={MoviesList} />} />
        <Route path='/movies/:id' element={<MovieDescription movies={MoviesList} />} />
      </Routes>
    
    </BrowserRouter>


    
  )
}

export default App
