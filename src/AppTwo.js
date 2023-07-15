 import React, { useState } from "react";
 import './App.css'
 import useClock from './hooks/useClock';
 import { LocalClock } from "./components/LocalClock";
 import { ClockList } from "./components/ClockList";
 
   

 const LOCAL_CLOCK={
          title:'my clock',
          timezone:'',
          offset:0,
          data:null
 }

 function AppTwo(){
          //  const { clock:local }= useClock()
          //  const { clock:est }=  useClock('EST')
          //  const { clock:pst }=  useClock('PST')  
          //  const { clock:pakistan } =useClock('UTC', 5 * 60)
          //  const { clock:edt }=  useClock('EDT')
          //  const { clock:bst }=  useClock('BST')  
          //  const { clock:mst }=  useClock('MST')  

          //  console.log('local utc', local.date);
          //  console.log('EST', est.date);
          //  console.log('PST', pst.date);
          //  console.log('pakistan', pakistan.date);
          //  console.log('EDT', edt.date);
          //  console.log('BST', bst.date);
          //  console.log('MST', mst.date);

         // const { date: localDate, localTimezone, localOffset} = useClock()
       //   console.log(localDate)

           const [localClock, setLocalClock] = useState({...LOCAL_CLOCK})

           const updateLocalClock =(data) =>{
               setLocalClock({
                ...localClock,
                ...data, 
               })
           }

            return (
             <div style={{backgroundColor:'cyan',padding:'10px'}}>
                {
                   <LocalClock clock={localClock} updateClock={updateLocalClock}/>
                }
              

             <ClockList />
             </div>
            );
          }
        
      
 export default AppTwo 

 