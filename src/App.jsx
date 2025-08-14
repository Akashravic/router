
import './App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Content from './Pages/Content'
import Home from './Pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {Link} from 'react-router-dom'
function App() {
 

  return (
    <>
    <BrowserRouter>
    {/* Hyperlinks that displaying */}
    <nav>
      <ul>
        <li><Link to="About/">About</Link></li>
        <li><Link to="/Content">Content</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/content" element={<Content/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
