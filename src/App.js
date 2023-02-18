import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Menu from './components/Menu'
import Coffee from './components/Coffee/Coffee'
import Food from './components/food/Food'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/coffee' element={<Coffee />} />
          <Route path='/food' element={<Food />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
