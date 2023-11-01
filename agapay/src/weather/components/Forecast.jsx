import React from 'react'
import { iconUrlFromCode } from '../services/weatherServices'

function Forecast({title,items}) {
  return (
    <div>
        <div className='flex items-center justify-start '>
            <p className='text-white font-bold mt-3 uppercase font-inter leading-relaxed '>{title}</p>

        </div>
      <hr className='my-2 text-white'></hr> 
       <div className='flex flex-row items-center justify-between text-white'>
        {items.map(item => (

<div className='flex flex-col items-center justify-center'>
<p className='font-light text-sm'>
   {item.title}
</p>
<img
 src={iconUrlFromCode(item.icon)}
 className='' 
 alt=""
   />
<p className='font-medium'>{`${item.temp.toFixed()}°`}</p>

</div>

        ))}
       
       
       </div>
      
    </div>
  )
}

export default Forecast
