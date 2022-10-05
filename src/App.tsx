import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './routes/LandingPage/LandingPage';
import Navigbar from './components/navigation/Navbar';
import Art from './routes/Art/Art';
import About from './routes/About/About';
import ErrorPage from './routes/ErrorPage/ErrorPage';
import { Routes, Route } from 'react-router-dom';
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