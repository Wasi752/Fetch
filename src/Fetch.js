import { useEffect, useState } from 'react';

const map = (array, fn) => {
  const secondArray = [];
  const len = array.length;
  let i = 0;
  while (i < len) {
    const w = fn(array[i], i);
    secondArray.push(w);
    i = i + 1;
  }
  return secondArray;
}

function Fetch() {
  const [bangla, setBangla] = useState();
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/Balagha/dhikr/main/public/data/dhikr.json')
    .then((response) => response.json())
    .then((data) => {
      const s = map(data, (x, i) => 
      <div className='flex'>{i + 1} :
        <p className='text-lg text-red-500 mr-10 text-justify-left'>{x.ARABIC}:</p>
        <p className='text-lg mr-10'>({x.BANGLA_UCCHARON})</p>
        <p className='text-lg text-blue-600 mr-10'>{x.BANGLA_ORTHO}</p>
      </div>);
      setBangla(s);
    });
  }, []);
  
  return (

    <div className='flex flex-row w-full h-full'>
      <div className='w-2/12 h-full'></div>
      <div className='w-8/12 h-full '>

        {bangla}

      </div>
      <div className='w-2/12 h-full'></div>
    </div>

  )
}
export default Fetch;