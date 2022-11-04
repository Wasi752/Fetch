import { useEffect, useState } from 'react';

function Pagination() {
  const [bangla, setBangla] = useState();
  const [pageNo, setPageNo] = useState(1);
  const [serial, setSerial] = useState(1)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Balagha/dhikr/main/public/data/dhikr.json')
      .then((response) => response.json())
      .then((data) => {
        const s = data
          .filter((len, i) => i < (10 * pageNo) && i >= (10 * (pageNo - 1)))
          .map((x, i) =>
            <div className='flex'>{i + 1 + (10 * (pageNo - 1))} :
              <p className='text-lg text-red-500 mr-10 text-justify-left'>{x.ARABIC}:</p>
              <p className='text-lg mr-10'>({x.BANGLA_UCCHARON})</p>
              <p className='text-lg text-blue-600 mr-10'>{x.BANGLA_ORTHO}</p>
            </div>);
        setBangla(s);
      });
  }, [pageNo]);

  return (
    <div className='w-full h-full'>
      <div className='flex flex-row w-full h-full'>
        <div className='w-2/12 h-full'></div>
        <div className='w-8/12 h-full '>

          {bangla}

        </div>
      </div>
      <div className='w-10/12 h-full flex'>

        <button className='w-4/12 h-full rounded rounded-full bg-yellow-500 m-40 p-5 text-2xl'
          onClick={() => setPageNo(pageNo - 1)} >
          Back
        </button>


        <button className='w-4/12 h-full rounded rounded-full bg-blue-500 m-40 p-5 text-2xl'
          onClick={() => setPageNo(pageNo + 1)} >
          Next
        </button>
      </div>
      <div className='flex ml-40'>
        <button className='w-1/12 h-full rounded rounded-full bg-red-500 m-10 p-5 text-2xl'
          onClick={() => setSerial(serial[pageNo + 1])} >
          5
        </button>

        <button className='w-1/12 h-full rounded rounded-full bg-pink-500 m-10 p-5 text-2xl'
          onClick={() => setPageNo(pageNo + 1)} >
          10
        </button>

        <button className='w-1/12 h-full rounded rounded-full bg-green-500 m-10 p-5 text-2xl'
          onClick={() => setPageNo(pageNo + 1)} >
          20
        </button>


      </div>
    </div>

  )
}
export default Pagination;