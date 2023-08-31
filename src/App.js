import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Hanumaan from './Hanumaan/Hanumaan';
import Shani from './Shani/Shani';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/chalisha/hanumaan' element={<Hanumaan />}/>
        <Route path='/chalisha/shani' element={<Shani />}/>
        <Route path='chalisha/sani' element={<Shani />}/>
        <Route path='*' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
