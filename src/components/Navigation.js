import React,{useState,Fragment} from 'react'
import logo from '../image/logo.png'
import { Dialog, Transition } from '@headlessui/react'


export const Navigation = () => {
    const [showLogbtn,setShowLogbtn] = useState(false)
    const showLogout=()=>{
        setShowLogbtn(!showLogbtn)
    }
    const dark =false
    

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openEditModal() {
      setIsOpen(true)
    }
           
  return (
    <div className='container fixed top-0  box-content mx-auto bg-indigo-50 drop-shadow-xl'>
    
     <div className='flex items-center justify-between'>
     
      <div className='flex items-center gap-2 list-none'>
      <li>
       <img src={logo} alt='ima' className='w-6 h-8' />
      </li>
      <li>
      { 
        dark ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>): <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
      }
     

  

      </li>
  
      </div>


      
     { /* <div className='sm:static md:flex  md:items-center bg-red-300 md:min-h-fit min-h-[300vh] md:w-auto left-0 top-10 w-full'>*/} 
       <ul className='flex items-center gap-3 text-xs'>
       <li className='text-xs'> 
       mohammad abu hossain
       </li>
       <li>
       04:22:05 am 
       </li>
       <li>
       <select>
        <option>bangladesh</option>
        <option>bangladesh</option>
        <option>bangladesh</option>
        <option>bangladesh</option>
       </select>
       </li>
       <li>
       <svg  onClick={openEditModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 cursor-pointer hover:bg-indigo-400">
       <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
     </svg>
     
     

       </li>
       <li className='hidden text-xs hover:font-semibold'> <button>signout</button> </li>
       </ul>
      {/* </div> */}


      
       <div className='flex items-center gap-2 list-none border-2 p-1 rounded-full'>
        <li className=''>
        <img onClick={showLogout} src='https://www.shutterstock.com/image-photo/portrait-bearded-man-looking-camera-600w-1357097612.jpg' className='w-8 h-8 rounded-full' alt='imu' />
        </li>
        
        {showLogbtn ?
        (<li className='absolute z-10 h-6 p-1 mx-auto text-xs text-center text-white border-2 border-white rounded-md cursor-pointer font-black-normal bg-slate-400 hover:bg-slate-600 top-8'>logout</li>):null
        }  
       </div>

       
     </div>

     <Transition appear show={isOpen} as={Fragment}>
     <Dialog as="div" className="relative z-20" onClose={closeModal}>
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
               <button type='submit' className='bg-slate-300 text-sm hover:bg-green-400'>update</button>
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
