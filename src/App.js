import './App.css';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Lista from './components/Lista';


function App() {
  return (
    <>
      <p><Link to="/">Főoldal</Link></p>
      <p><Link to="about">About oldalra</Link></p>
      <p><Link to="asd">Semmi - Átirányítás</Link></p>


      <Routes>
        <Route path="/" element={<Lista tartalom="info">Children data</Lista>}/>
        <Route path="about" element="Rövid leírás" />
        <Route path="user" element="Felhasználói adatok" />
        <Route path="other" element="Egyéb dolgok" />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;
