import React from 'react'
import { ClockListItem } from './ClockListItem';

export const ClockList = ({ clocks ,updateClock,deleteClock,localClock }) => {
  console.log('lists page',clocks);
  return (
    <div>
    <h3>ClockList</h3> 
    <hr/>
    {
      clocks.length === 0 ? (
        <h1>there is no clock creted</h1>
      ):(
      <ul>
    {clocks.map((clock) =>(

      <ClockListItem
       key={clock.id} 
       clock={clock} 
      updateClock={updateClock}
       deleteClock ={deleteClock }
      localClock={localClock}
      />
      
    ))}
      </ul>
      )
    }
    

    </div>
  )
}
