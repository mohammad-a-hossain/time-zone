import React, { useEffect } from "react";
import  ClockDisplay  from "./ClockDisplay";
import { ClockAction } from "./ClockAction";
import useClock from "../hooks/useClock";
import useTimer from "../hooks/useTimer";

export const LocalClock = ({ clock, updateClock, createClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);
  const timer = useTimer(date);

 console.log('tz',timezone, 'ofs',offset)


  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  return (
    <div style={{ backgroundColor: "lightcoral" }}>
      <h3>LocalClock</h3>

      {timer && (
				<ClockDisplay
					date={timer}
					title={clock.title}
					timezone={timezone}
					offset={offset}
				/>
			)}


      <ClockAction 
       local={true}
       clock={clock}
       updateClock={updateClock} 
       createClock={createClock}/>
    </div>
  );
};



// import React, { useEffect } from "react";
// import { ClockDisplay } from "./ClockDisplay";
// import { ClockAction } from "./ClockAction";
// import useClock from "../hooks/useClock";
// import useTimer from "../hooks/useTimer";

// export const LocalClock = ({ clock, updateClock, createClock }) => {
//   const { date, timezone, offset } = useClock(clock.timezone, clock.offset);
//  console.log('tz',timezone, 'ofs',offset)
//   useEffect(() => {
//     updateClock({
//       date,
//       timezone,
//       offset,
//     });
//   }, [date]);

//   return (
//     <div style={{ backgroundColor: "lightcoral" }}>
//       <h3>LocalClock</h3>
//       {date && (
//         <ClockDisplay
//           title={"my clock"}
//           date={date}
//           timezone={timezone}
//           offset={offset}
//         />
//       )}

//       <ClockAction 
//        local={true}
//        clock={clock}
//        updateClock={updateClock} 
//        createClock={createClock}/>
//     </div>
//   );
// };

