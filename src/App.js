import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './com/Home';
import Login from './com/Login';
import Register from './com/Register';
import Profile from './com/Profile';



function App() {
  return (
    <div className="App">

      <Router>    
      <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
     
    </Router>
    </div>
  );
}

export default App;
