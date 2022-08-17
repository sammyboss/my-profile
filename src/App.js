import Header from './components/Header';
import { BrowserRouter, Routes, Route } 
 from 'react-router-dom';
import Profile from './pages/Profile';
import logo from './logo.svg';
import './App.css';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header logo={logo} />
      <Routes>
        <Route path='/' element={<Profile userName='sammyboss' />}/>
        <Route path='/projects' element={<Projects userName='sammyboss' />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
