import { useState } from 'react';

function Fetch(){
const [arabic, setArabic] = useState();
const [banglao, setBanglao] = useState();
const [bangla, setBangla] = useState();

  fetch('https://raw.githubusercontent.com/Balagha/dhikr/main/public/data/dhikr.json')
.then((response) => response.json())
.then((data) => {
  const s = data.map((x, i) => i+1 + data[i].ARABIC + data[i].BANGLA_UCCHARON + data[i].BANGLA_ORTHO + "");
  setArabic, setBanglao, setBangla("" + s + "");
}); 
return (
<div className='w-full h-full'>
  <div className='flex flex-row w-full h-full'>
     <div className='w-2/12 h-full'></div>   
     <div className='w-8/12 h-full'>{arabic} {banglao} {bangla}</div>
     <div className='w-2/12 h-full'></div>
    </div>
</div>
)
}
export default Fetch;