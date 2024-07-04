import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import BookCart from './pages/BookCart'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<BookCart />} />
     </Routes>
  )
}

export default App

//Made with ♥ by Arpit Kumar Prajapati  MAIL: arpitmp2003@gmail.com
