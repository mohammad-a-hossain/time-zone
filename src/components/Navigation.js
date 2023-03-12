import React,{useState} from 'react'
import logo from '../image/logo.png'

export const Navigation = () => {
    const [showLogbtn,setShowLogbtn] = useState(false)
    const showLogout=()=>{
        setShowLogbtn(!showLogbtn)
    }
  return (
    <div className='container box-content mx-auto shadow-lg'>
    
     <div className='flex items-center justify-between bg-slate-100'>
     
      <div className='flex items-center gap-2 list-none bg-green-300'>
      <li>
       <img src={logo} alt='ima' className='w-6 h-8' />
      </li>
      <li>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
      </li>
      </div>


      
     { /* <div className='sm:static md:flex  md:items-center bg-red-300 md:min-h-fit min-h-[300vh] md:w-auto left-0 top-10 w-full'>*/} 
       <ul className='flex items-center gap-3 text-xs bg-slate-300'>
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
       <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>

       </li>
       <li className='hidden text-xs hover:font-semibold'> <button>signout</button> </li>
       </ul>
      {/* </div> */}


      
       <div className='flex items-center gap-2 list-none bg-yellow-600'>
        <li className=''>
        <img onClick={showLogout} src='https://www.shutterstock.com/image-photo/portrait-bearded-man-looking-camera-600w-1357097612.jpg' className='w-8 h-8 rounded-full' alt='imu' />
        </li>
        
        {showLogbtn ?
        (<li className='absolute z-10 h-6 p-1 mx-auto text-xs text-center text-white border-2 border-white rounded-md cursor-pointer font-black-normal bg-slate-400 hover:bg-slate-600 top-8'>logout</li>):null
        }  
       </div>

       
     </div>
    
    </div>
  )
}
