import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './com/Home';
import Login from './com/Login';
import Register from './com/Register';
import Profile from './com/Profile';
import Admin from './com/Admin';
import EditBook from './com/EditBook';
import Detail from './com/Detail';
import BookList from './com/BookList';


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
            <Route path="/admin" element={<Admin />} />
            <Route path="/edit-book/:id" element={<EditBook />} />
            <Route path="/Detail/:id/:cid" element={<Detail />} />
            <Route path="/bookList" element={<BookList/>} />
          </Routes>
        </div>
     
    </Router>
    </div>
  );
}

export default App;
