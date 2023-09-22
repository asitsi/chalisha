import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Hanumaan from './Hanumaan/Hanumaan';
import Shani from './Shani/Shani';
import AllMantra from './Mantra/AllMantra';
import SunderKaand from './Hanumaan/SunderKaand';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/chalisha/hanumaan' element={<Hanumaan />}/>
        <Route path='/chalisha/sunderkaand' element={<SunderKaand />}/>
        <Route path='/chalisha/shani' element={<Shani />}/>
        <Route path='chalisha/sani' element={<Shani />}/>
        <Route path='/mantra/all' element={<AllMantra />}/>
        <Route path='mantra/all' element={<AllMantra />}/>
        <Route path='*' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
