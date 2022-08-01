import './App.css';
import LandingPage from './routes/LandingPage.js';
import Navigbar from './routes/Navbar.js';
import About from './routes/About';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './routes/ErrorPage';
import Art from './routes/Art';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <div className="App">
      <div className="App-body">
      <Container >
        <div className="App-navbar">
          <Navigbar />
        </div>
        <Routes>
          <Route path="/works/:category" element={<Art />}>
            <Route path='/works/:category/:photoId' element={<Art />}/>
          </Route>
          <Route path="/" element={<LandingPage />}>
            <Route path=':photoId' element={<LandingPage />}/>
          </Route>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </Container>
      </div>
    </div>
  );
}

export default App;