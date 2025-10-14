import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GerenciarProjetos from './pages/GerenciarProjetos';
import './styles/style.css';
import './styles/super-classes.css';
import './styles/mobile.css';
import './styles/animate.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gerenciarProjetos" element={<GerenciarProjetos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
