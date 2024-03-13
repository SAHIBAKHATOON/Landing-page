import './App.css';
import About from './components/About';
import Course from './components/Course';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route  path='/' element={<Home />} />
      <Route path='/about' element={<About /> }/>
      <Route path='/course' element={<Course /> }/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
