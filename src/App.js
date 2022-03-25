import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/HomeHeader'
import Footer from './components/HomeFooter'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <Routes>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
