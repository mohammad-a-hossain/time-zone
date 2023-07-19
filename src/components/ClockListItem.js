import React from 'react'
import ClockDisplay from './ClockDisplay'
import useClock from './../hooks/useClock';
import { ClockAction } from './ClockAction';
//import { formatDistance } from 'date-fns';

import { formatDistance, addSeconds } from 'date-fns';
import useTimer from '../hooks/useTimer';


export const ClockListItem = ({clock, updateClock, deleteClock,localClock }) => {
    const {date}  = useClock(clock.timezone, clock.offset)
    const timer = useTimer(date)
    if(!date || !timer) return null
  
   const distance = localClock.getTime() - date.getTime();

   console.log('localclock', localClock);
   console.log('clock', clock);
    console.log(distance.toLocaleString())


   const secondsToTime=(distance)=>{
  const hours = Math.floor(distance / (60 * 60));

    const divisor_for_minutes = distance % (60 * 60);
    const minutes = Math.floor(divisor_for_minutes / 60);

    const divisor_for_seconds = divisor_for_minutes % 60;
    const seconds = Math.ceil(divisor_for_seconds);
   
    console.log('h'-hours, 'M'-minutes, 's'-seconds)

    return [{'h':hours}, {'M':minutes}, {'s':seconds}]
    }
    

  return (
    <div>
    <ClockDisplay
     date={timer}
     title={clock.title}
      timezone={clock.timezone}
      offset={clock.offset} />

        <h4>time distance : {secondsToTime().map((t) =>(
          <p> {t.h}- {t.M}- {t.s}</p>
        ))  }</h4>  
        <h3>{formatDistance(localClock, timer)}</h3>
    
       <ClockAction
        clock={clock}
        updateClock={updateClock} 
        deleteClock ={deleteClock }/>
    </div>
  )
}






// import React from 'react'
// import { ClockDisplay } from './ClockDisplay'
// import useClock from './../hooks/useClock';
// import { ClockAction } from './ClockAction';
// //import { formatDistance } from 'date-fns';
// import { formatDistance } from "date-fns";


// export const ClockListItem = ({clock, updateClock, deleteClock,localClock }) => {
//     const {date}  = useClock(clock.timezone, clock.offset)
//     if(!date) return null
//    // const distance = formatDistance(formatDistance(date, localClock, {addSuffix: true }));
//    // console.log (distance.substring (distance.indexOf (distance.match (/d+/g))));
//    const distance = localClock.getTime() - date.getTime();

//    console.log('localclock', localClock);
//    console.log('clock', clock);
//     console.log(distance.toLocaleString())


//    const secondsToTime=(distance)=>{
//   const hours = Math.floor(distance / (60 * 60));

//     const divisor_for_minutes = distance % (60 * 60);
//     const minutes = Math.floor(divisor_for_minutes / 60);

//     const divisor_for_seconds = divisor_for_minutes % 60;
//     const seconds = Math.ceil(divisor_for_seconds);
   
//     console.log('h'-hours, 'M'-minutes, 's'-seconds)

//     return [{'h':hours}, {'M':minutes}, {'s':seconds}]
//     }
    

//   return (
//     <div>
//     <ClockDisplay
//      date={date}
//      title={clock.title}
//       timezone={clock.timezone}
//       offset={clock.offset} />

//         <h4>time distance : {secondsToTime().map((t) =>(
//           <p> {t.h}- {t.M}- {t.s}</p>
//         ))  }</h4>  
    
//        <ClockAction
//         clock={clock}
//         updateClock={updateClock} 
//         deleteClock ={deleteClock }/>
//     </div>
//   )
// }
