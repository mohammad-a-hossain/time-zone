import { useEffect, useState } from "react"
import {addMinutes} from 'date-fns'


const init={
    id:'',
    title:'', 
    timezone:{
        type:'',
        offset:''
     },
     date_utc:null,
     date:null

}

   const TIMEZONE_OFFSET={
    PST: 7 * 60,
    EST: -4 * 60,
    EDT: -4 * 60,
    BST: 1 * 60,
    MST: 6 * 60
 }

const useClock =(timezone, offset=0) =>{
    const [state, setState] = useState({ ...init })
   
    const [utc, setUtc] = useState(null)


 

  // calculating utc first 
    useEffect(()=>{
        let dc = new Date()
        const localOffset = dc.getTimezoneOffset()
        dc = addMinutes(dc, localOffset )
        setUtc(dc)
    },[])


    useEffect(()=>{
   
        
         if(utc !== null &&  timezone){
            // if(timezone === 'PST' || timezone === 'EST' || timezone === 'EDT' || timezone === 'BST'){
            //     offset = TIMEZONE_OFFSET[timezone]
            // }
            offset = TIMEZONE_OFFSET[timezone] ?? offset;
           const newUtc = addMinutes(utc, offset)
            //console.log(label, newUtc.toLocaleTimeString())

            setState({
                ...state,
                date_utc:utc,
                date:newUtc
            })
         }else{
            setState({
                ...state,
                date_utc:utc,
                date:utc
            })
         }
      
    },[utc])

    console.log(utc);
    return{
        clock:state,
    }

}

export default useClock



/* step 1

import { useEffect, useState } from "react"
import {addMinutes} from 'date-fns'


const init={
    id:'',
    title:'', 
    timezone:{
        type:'',
        offset:''
     },
     data_utc:null,
     date:null

}
const TIMEZONE_OFFSETS={
    PST: -7 * 60,
    EST: -4 * 60,
 }
const useClock =(label, timezone,offset=0) =>{
    const [state, setState] = useState({ ...init })

    useEffect(()=>{
         let utc = new Date()
         const localOffset = utc.getTimezoneOffset()
         utc = addMinutes(utc, localOffset )
         if(timezone){
            if(timezone === 'PST' || timezone === 'EST'){
                offset = TIMEZONE_OFFSETS[timezone];
            }
        utc = addMinutes(utc, offset)

         }
        console.log(label, utc.toLocaleString())
      

    },[])

    return{
        clock:state,
    }

}

export default useClock


*/