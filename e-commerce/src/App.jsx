import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NavBar, Footer} from './components'
import { Error404, SignIn, SignUp, Home, WishList, Products, ProductDetails, Account, Cart, Checkout } from './pages';

function App() {

  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/wish-list' element={<WishList />} />
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:id' element={<ProductDetails/>}/>
            <Route path='/account' element={<Account/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
