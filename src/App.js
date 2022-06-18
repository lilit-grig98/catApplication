import './App.scss';
import Header from './components/Header';
import CatDetails from './components/CatDetails/CatDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/Conatiner/Container';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Container />}></Route>
          <Route path='/category/:id' element={<CatDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
