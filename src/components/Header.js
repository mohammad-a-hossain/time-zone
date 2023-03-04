import React from 'react'

export const Header = () => {
  return (
    <div className='flex flex-row py-0 border-b shadow-slate-300'>

    <div className='hidden xs:visible 
    sm:visible sx:w-12/12 sm:w-12/12 md:w-10/12 bg-blue-600'>
    visible invisible header
    </div>


    <div className='sx:w-12/12 sm:w-12/12 md:w-12/12
     sx:invisible md:invisible  md:w-2/12 sm:w-2/12 
    '>logo</div>


    <div className='h-full 
     sx:visible sx:w-12/12
    sm:visible md:w-8/12 sm:w-8/12 text-center 
    align-middle justify-between gap-1
     flex shadow-md
     text-sm py-2 '>

   <span className='text-xs'>abu hossain </span> 

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
  </svg>

   <span className='text-xs'>12:12 am  02-03-3023</span>
   <select className='h-4 bg-red-300 rounded-md text-xs'>
   <option className='text-xs'>bangladesh</option>
   <option>2</option>
   <option>3</option>
   <option>4</option>
   <option>5</option>
 </select>

   <svg className='h-2 w-1 m-1 align-baseline flex justify-end ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
   <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
 </svg>
 
  
    </div>

  <div className='flex align-baseline my-2'>  
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>
  </div>



    <div className='lg:hidden xl:hidden 
    md:invisible sx:visible sm:visible .
    md:w-2/12 sm:w-2/12 text-sx flex justify-end '>
    <button className='text-xs'>
    <svg className='h-2 w-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
</svg>

    </button>
    </div>
  
     </div>
  )
}
