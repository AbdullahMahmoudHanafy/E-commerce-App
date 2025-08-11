import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NavBar, Footer} from './components'
import { Error404, SignIn, SignUp, Home, WishList } from './pages';

function App() {

  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/404' element={<Error404 />} />
            <Route path='/wish-list' element={<WishList />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
