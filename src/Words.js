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

function Words() {
const [english, setEnglish] = useState();
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/Balagha/dhikr/main/public/data/words.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      const s = map(data, (x, i) => 
      <div className='flex'>{i + 1} :
        <p className='text-lg text-red-500 mr-10 text-left pl-5'>{x[0]}:</p>
        <p className='text-lg mr-10 text-justify'>({x[1]})</p>
        
      </div>);
      setEnglish(s);
    });
  }, []);
  
  return (

    <div className='flex flex-row w-full h-full'>
      <div className='w-2/12 h-full'></div>
      <div className='w-8/12 h-full '>

        {english}

      </div>
      <div className='w-2/12 h-full'></div>
    </div>

  )
}
export default Words;