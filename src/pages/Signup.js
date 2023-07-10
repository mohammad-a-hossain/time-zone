import React from 'react'
import fb from '../image/fb.png'
import twiter from '../image/twiter.png'
import google from '../image/google.png'

export const Signup = () => {
  return (
  
    <div class="flex w-12/12 justify-center items-center mx-auto top-8">
            <div class="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%]  m-2">
            <div class="w-4/12 md:w-3/4 bg-slate-400 min-h-fit ">
            <div class="w-12/12 mx-auto h-auto text-xl cursor-pointer flex flex-col justify-center items-center bg-slate-300  py-5">

                <h1 class="font-semibold text-xl md:text-xl text-gray-600 m-2">Online login</h1>
                <h1 class="text-sm font-medium text-gray-600 m-2">Login using Social accounts</h1>
                <div class="text-lg flex lg:text-xl text-center space-x-5 m-2">

                    <a href="@#">
                        <img alt='fb' src={fb} className="w-8 h-8  rounded-full border border-spacing-1 hover:border-red-400 "/>
                    </a>
                    <a href="#@">
                    <img alt='fb' src={twiter} className="w-8 h-8  rounded-full  "/>
                    </a>
                    <a href="@#">
                    <img alt='fb' src={google} className="w-8 h-8  rounded-full  "/>
                     </a>
                </div>
                

            </div>
         
         

            </div>
          

            </div>
            </div>

                                     
  
  )
}
