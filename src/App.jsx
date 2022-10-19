import './App.css';
import Navbar from './components/Navbar';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CommentsPage from './pages/CommentsPage';

function App() {
   
  return (
    <div className='bg-light'>
      <BrowserRouter>
      <Navbar />
      <div className="container mt-5 py-5" style={{minHeight: '100vh'}}>   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/comments' element={<CommentsPage />} />
      </Routes>
      </div>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
