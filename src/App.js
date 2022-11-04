import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Fetch from './Fetch';
import Words from './Words';
import ApiFilter from './ApiFilter';
import Posts from './post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Words/>} />
        <Route path="/fetch" element={<Fetch/>} />
        <Route path="/filter" element={<ApiFilter/>} />
        <Route path="/posts" element={<Posts/>} />
      </Routes>
    </div>
  );
}

export default App;
