
import { format } from 'date-fns';
//import classes from './index.module.css';
const ClockDisplay = ({ date, title, timezone, offset }) => {
	const offsetHr = offset / 60;
	return (
		<div style={{backgroundColor:'lightgray'}}>
			<h1>Title: {title}</h1>
			<h3>{format(date, "yyyy-MM-dd hh:mm:ss aaaaa'm'")}</h3>
			<p>
				{timezone}
				{offsetHr > 0
					? `+${Math.abs(offsetHr)}`
					: `-${Math.abs(offsetHr)}`}
			</p>
		</div>
	);
};

export default ClockDisplay;







// import React from 'react'
// import { format } from 'date-fns'

// export const ClockDisplay = ({date,title,timezone,offset}) => {
//     const offsetHr= offset / 60 ;
//   return (

//     <div style={{backgroundColor:'lightgray'}}>
//          display clock
//         <h1>title: {title}</h1>
//         <h2>{date.toString()}</h2>
//        {/*  <h2>{ format(date, "yyyy-mm-dd hh:mm:ss aaaaa'm'")}</h2> */}
        
//         <p>{timezone} { offsetHr > 0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}`}</p>
     
//     </div>
//   )
// }
/* 
 <h2>{ format(date, "yyyy-mm-dd hh:mm:ss aaaaa'm'")}</h2>
 "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 <h2>{date.toString()}</h2>
 */


