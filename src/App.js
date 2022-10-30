import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [arabic, setArabic] = useState();
  fetch('https://raw.githubusercontent.com/Balagha/dhikr/main/public/data/dhikr.json')
.then((response) => response.json())
.then((data) => {
  const s = data.map(x => x.ARABIC);
  setArabic(s);
});
  return (
    <div className="App">
      {arabic}
    </div>
  );
}

export default App;
