import React from 'react'
import { useState } from 'react';

const ClockCard = () => {

  const [edit,setEdti] = useState(false)

  const showEdit =()=>{
    setEdti(true)
  }
  return (
    <div class="sx:w-4/4 md:4/4 w-2.2/12 h-auto box-border
     bg-red-600 relative
     p-1 rounded-lg shadow-md border border-green-800">
     <div className='flex flex-col text-xs bg-slate-400 '>  
    <p className='bg-slate-400'><span>TITLE :</span>: myclock</p>  
    <p><span>03-03-4009</span></p>  
    <p>location:   banglsad</p>
    <p>set todo title</p>

    <button class="bg-slate-400 rounded text-sx mb-1 font-semibold
      hover:bg-opacity-75">
      set your todo</button>

      <div className='bg-slate-500 py-1 mb-3 rounded-sm'>
       <ul className='flex flex-col my-1'>
       <li className='text-xs'><span className='text-xs'>title todo </span><span className='text-xs'>44.22.02 pm</span> <span className='text-xs'>X</span></li> 
       <li><span>title todo </span><span>44.22.02 pm</span> <span>X</span></li> 
       <li><span>title todo </span><span>44.22.02 pm</span> <span>X</span></li>  
       <li><span>title todo </span><span>44.22.02 pm</span> <span>X</span></li> 
       </ul>
      </div>

      <div className='w-11/12 flex justify-between 
       relative bottom bottom-1 '>
      <button onClick={()=>showEdit(false)}>
        <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>

      </button>

      <button>

        <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

      </button>
      </div>
     </div>

     { edit ?
      (  <div className="w-4/12  bg-red-400 block
        p-2 absolute top-0  left-0 z-40">
         
         
        <svg onClick={()=> setEdti(false)}  className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
  
         <form className='bg-red-300'>
         <p>title: <input /> </p> 
         <p>set time <input /> </p> 
         <p>location <input /> </p> 
         <p>time zonw<input /> </p> 
         <button>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="squire" stroke-linejoin="squire" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
         </button>
         </form>
      
      </div>):''
      }
 
  </div>

  )
}

export default ClockCard 