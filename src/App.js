import {  Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Homepage';
import Aboutme from './components/Aboutme';

function App() {
  return (
    <>
    <Nav/>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<Aboutme />}/>
    </Routes>
    </>
  );
}

export default App;
