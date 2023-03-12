import React from 'react'
import { useState } from 'react';

const ClockCard = () => {
  const [text,setText] = useState(false)
  const [edit,setEdti] = useState(false)
  const [todo,setTodo] =useState(false)

  const showEdit =()=>{
    setEdti(true)
  }

 const showTodoForm =()=>{
      setTodo(!todo)
 }



  return (
    <div class="sx:w-4/4 md:4/4 w-2.2/12 h-auto box-border border border-indigo-600
     relative p-1 rounded-lg shadow-2xl  ">

      <span onClick={()=>alert('edit')} className='w-4 h-5 absolute bg-slate-50 cursor-pointer hover:bg-indigo-900  top-0 right-0 mr-1 mt-1'><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
       </svg>
       </span>
      
     <div className='flex relative flex-col py-1 text-xs text-start duration:100 ease-in'>  
    <p className='flex gap-1 font-serif'><span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 bg-indigo-200 rounded-xl">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  
  </span>myclock</p>  
    <p className='flex gap-1 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-4 h-4 bg-indigo-200 rounded-xl">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
   <span>03-03-4009</span></p>  
    <p className='flex gap-1 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 bg-indigo-200 rounded-xl">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
   <span>banglsad</span></p>
    <p className='flex gap-1 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-4 h-4 bg-indigo-200 rounded-xl">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
  </svg>
   <span >time differ: 4.44 hr </span> </p>

    <button onClick={showTodoForm} class="bg-slate-200 items-center rounded text-sx mb-1 mt-1 hover:font-semibold flex mx-auto
      hover:bg-opacity-75">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
    </svg>
    
       todo</button>
{ todo ?
       ( <div className='bg-slate-100 sx:w-3/4 md:3/4 w-2/12 h-auto'>
        <form className='flex flex-col flex-wrap px-2'>
         <input placeholder='todo' />
         <input type='time' />
         <button type='submit' value='submit' className='hover:text-indigo-600 hover:bg-slate-400'>submit
       </button>
        </form>

        </div>):null
      
      }

       

      <div className='bg-slate-100  mb-1 rounded-sm'>
       <ul className='flex flex-col gap-1'>
       <li className='text-xs bg-slate-200 px-2'><span className='text-xs'>title todo </span><span className='text-xs'>44.22.02 pm</span> <span onClick={()=>alert('x')} className='text-xs text-red-700 cursor-pointer'>X</span></li> 
      
       </ul>
      </div>
      <span className='text-xs text-red-800 mx-auto'>no todo set</span>


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