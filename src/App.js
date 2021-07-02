import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer'
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column overflow-hidden min-vh-100 vh-100">
        
        <Navigation />
        <Container fluid className="flex-grow-1 overflow-auto">
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Container>

        <Footer />

      </div>  
    </Router>
  );
}

export default App;
