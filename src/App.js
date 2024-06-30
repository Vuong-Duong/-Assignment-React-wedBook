import './App.css';
import Footer from './com/Footer';
import Home from './com/Home';
import CustomNavbar from './com/Navbar';

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
