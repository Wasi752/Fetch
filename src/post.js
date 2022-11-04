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

function Posts() {
  const [bangla, setBangla] = useState();
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => {
      const s = map(posts, (x, i) => 
      <div className='flex'>
        <p className='text-lg text-red-500 mr-10 text-justify-left'>{x.userId}:</p>
        <p className='text-lg mr-10'>{x.id}</p>
        <p className='text-lg text-blue-600 mr-10'>{x.title}</p>
        <p className='text-lg text-blue-600 mr-10'>{x.body}</p>
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
export default Posts;