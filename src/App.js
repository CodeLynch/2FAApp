import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return(
    <Router>
      <Routes>
         <Route path="/" element={<div className='App-content'><Login /></div>} />
         <Route path="/register" element={<div className='App-content'><Register /></div>} />
      </Routes>
    </Router>
  );
  
  /*return (
    <div className="App">
      <div className="App-content">
        <Register />
      </div>
    </div>
  );*/
}

export default App;
