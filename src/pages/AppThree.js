import React from 'react'
import { Card2 } from '../components/Card2'
import { Navigation } from '../components/Navigation'

import ClockCard from './../components/Card';


 const AppThree = () => {
  return (
    <>
    <Navigation/>
     <section className='container box-content h-[100%vh] min-h-fit pb-3 mx-auto bg-indigo-50'>
     <br></br>
     
       <button className='mx-auto  mb-3 hover:bg-indigo-500 hover:text-gray-100 duration-300 bg-indigo-300 
       p-2 rounded-md flex align-middle text-xs font-serif font-medium justify-center'> + create your clock</button>
      
     
       <div className='flex-wrap w-12/12 flex justify-center items-center px-4 mt-5 gap-5'>
       <ClockCard/>
       </div>
      
      
    
    
     </section> 
     <footer className='container mx-auto flex justify-center  bg-slate-400 p-3 w-full bottom-0'>
      <span className='text-xs  bottom-0 font-normal'>designed and developed @ M A Hossain @2022</span>
     </footer>

    </>
  )
}
export default AppThree