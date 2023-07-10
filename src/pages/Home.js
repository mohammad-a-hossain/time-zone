import React,{useState,Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Navigation } from '../components/Navigation'

import ClockCard from './../components/Card';


 const Home = () => {
    let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const card= false

  return (
    <div className='container mx-auto bg-slate-50'>
    <Navigation/>
     <section className='container mt-6 box-content h-[100%vh] min-h-fit pb-3 mx-auto bg-indigo-50'>
     <br></br>
     
       <button  onClick={openModal} className='mx-auto  mb-1 hover:bg-indigo-500 hover:text-gray-100 duration-300  border-2
       p-2 rounded-md flex align-middle text-xs font-serif font-medium justify-center'> 
       + create your clock
       </button>
      
    

       <div className='flex-wrap w-12/12 h-screen flex justify-center items-center px-4 mt-5 gap-5'>
      
       { card ? (<><ClockCard/> <ClockCard/> <ClockCard/> <ClockCard/> </> ): (<p> yet to set your clock!!</p>)
      }
       </div>
      
      
    
    
     </section> 
     <footer className='container mx-auto flex justify-center  bg-slate-400 p-3 w-full bottom-0'>
      <span className='text-xs  bottom-0 font-normal'>designed and developed @ M A Hossain @2022</span>
     </footer>

     <Transition appear show={isOpen} as={Fragment}>
     <Dialog as="div" className="relative z-10" onClose={closeModal}>
       <Transition.Child
         as={Fragment}
         enter="ease-out duration-300"
         enterFrom="opacity-0"
         enterTo="opacity-100"
         leave="ease-in duration-200"
         leaveFrom="opacity-100"
         leaveTo="opacity-0"
       >
         <div className="fixed inset-0 bg-black bg-opacity-25" />
       </Transition.Child>

       <div className="fixed inset-0 overflow-y-auto">
         <div className="flex items-center justify-center min-h-full p-2 text-center">
           <Transition.Child
             as={Fragment}
             enter="ease-out duration-300"
             enterFrom="opacity-0 scale-95"
             enterTo="opacity-100 scale-100"
             leave="ease-in duration-200"
             leaveFrom="opacity-100 scale-100"
             leaveTo="opacity-0 scale-95"
           >
             <Dialog.Panel className="w-4/12 h-52 max-w-md p-2 overflow-hidden text-left align-middle transition-all transform bg-indigo-500 shadow-xl rounded-2xl">
              <div className='flex p-1 bg-slate-200 mx-auto'>
              <from className='flex flex-col justify-center'>
              <input placeholder='place' className='m-1'/>
              <input placeholder='place' className='m-1' />
              <input placeholder='place'  className='m-1'/>
               <input placeholder='place' className='m-1' />
               <button type='submit'  value='submit' className='bg-slate-300 text-sm hover:bg-red-400'>create</button>
              </from>

              </div>

               
                 <button
                   type="button"
                   className="top-1 w-4 h-4 right-0 absolute inline-flex justify-center  text-xs font-medium text-blue-900 hover:bg-red-800 bg-blue-100 border border-transparent rounded-md hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                   onClick={closeModal}
                 >
                  X
                 </button>
               
             </Dialog.Panel>
           </Transition.Child>
         </div>
       </div>
     </Dialog>
   </Transition>

    </div>
  )
}
export default Home