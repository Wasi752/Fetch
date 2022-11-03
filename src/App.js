import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Fetch from './Fetch';
import Words from './Words';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Words/>} />
        <Route path="/fetch" element={<Fetch/>} />
      </Routes>
    </div>
  );
}

export default App;
