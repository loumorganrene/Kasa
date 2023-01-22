import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '@fontsource/montserrat'
import './styles/normalize.css'
import './styles/index.css'
import Home from './pages/Home'
import Error from './components/Error'
import About from './pages/About'
import Housing from './pages/Housing'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
    return (
        <div className="page--container">
            <div className="content--container">
                <Router>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/housing/:housingId" element={<Housing />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Router>
            </div>
            <Footer />
        </div>
    )
}

export default App
