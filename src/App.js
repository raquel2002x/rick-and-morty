import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllCharacters from './components/AllCharacters';
import OneCharacter from './components/OneCharacter';
import logoRYM from './logoRYM.png'

function App() {
  return (
    <div className="App">
      <img src= {logoRYM} alt='Logotipo Rick and Morty'/>
      <BrowserRouter>
        <Routes>

          <Route path= '/' element={<AllCharacters/>}></Route>
          <Route path= '/Character/:id' element={<OneCharacter/>}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
