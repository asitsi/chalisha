import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Hanumaan from './Hanumaan/Hanumaan';
import Shani from './Shani/Shani';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hanumaan />}/>
        <Route path='/shani' element={<Shani />}/>
        <Route path='/sani' element={<Shani />}/>
        <Route path='*' element={<Hanumaan />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
