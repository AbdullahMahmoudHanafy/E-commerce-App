import './App.css';
import { BrowserRouter as Router} from "react-router-dom"
import { NavBar, Footer} from './components'
import { Error404 } from './pages';

function App() {

  return (
    <Router>
        <NavBar />
        <Error404 />
        <Footer />
    </Router>
  )
}

export default App
