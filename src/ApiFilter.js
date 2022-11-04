
import { useEffect, useState } from 'react';

function ApiFilter() {
  const [bangla, setBangla] = useState();
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Balagha/dhikr/main/public/data/dhikr.json')
      .then((response) => response.json())
      .then((data) => {
        const s = data.filter(sub => data.length < 220)
        .map((x, i) =>
          <div className='flex'>{i + 1} :
            <p className='text-lg text-red-500 mr-10 text-justify-left'>{data[i].ARABIC}:</p>
            <p className='text-lg mr-10'>({data[i].BANGLA_UCCHARON})</p>
            <p className='text-lg text-blue-600 mr-10'>{data[i].BANGLA_ORTHO}</p>
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
export default ApiFilter;