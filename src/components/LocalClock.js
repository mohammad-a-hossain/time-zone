import React, { useEffect } from "react";
import { ClockDisplay } from "./ClockDisplay";
import { ClockAction } from "./ClockAction";
import useClock from "../hooks/useClock";

export const LocalClock = ({ clock, updateClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

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
      {date && (
        <ClockDisplay
          title={"my clock"}
          date={date}
          timezone={timezone}
          offset={offset}
        />
      )}

      <ClockAction 
      local={true}
       clock={clock}
       updateClock={updateClock}/>
    </div>
  );
};
