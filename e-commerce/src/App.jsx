import './App.css';
import { BrowserRouter as Router} from "react-router-dom"
import { NavBar} from './components'
import Footer from './components/Footer/Footer';

function App() {

  return (
    <Router>
        <NavBar />
        <Footer />
    </Router>
  )
}

export default App
