import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Fetch from './fetch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Fetch/>} />
      </Routes>
    </div>
  );
}

export default App;
