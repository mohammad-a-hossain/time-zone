import React,{useState} from 'react'
import logo from '../image/logo.png'

export const Navigation = () => {
    const [showLogbtn,setShowLogbtn] = useState(false)
    const showLogout=()=>{
        setShowLogbtn(!showLogbtn)
    }
    const dark =false
           
  return (
    <div className='container box-content mx-auto shadow-lg'>
    
     <div className='flex items-center justify-between bg-slate-50'>
     
      <div className='flex items-center gap-2 list-none bg-green-300'>
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
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-4">
       <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
       <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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
