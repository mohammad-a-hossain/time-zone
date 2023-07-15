import React, { useState } from "react";
import { ClockForm } from "./ClockForm";

export const ClockAction = ({ local = false, clock, updateClock }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const createClock = (value) => {
    console.log(value);
  };
  return (
    <div style={{ color: "black" }}>
      <button onClick={() => setIsEdit(!isEdit)}>edit</button> -
      {local ? (
        <button onClick={() => setIsCreate(!isCreate)}>create</button>
      ) : (
        <button>delete</button>
      )}
      {isEdit && (
        <>
          <p>edit clock optoion</p>
          <ClockForm
            values={clock}
            handleClock={updateClock}
            title={!local}
            edit={true}
          />
        </>
      )}
      {isCreate && (
        <>
          <p>create new clock optoion</p>
          <ClockForm handleClock={createClock} />
        </>
      )}
    </div>
  );
};









// part 1
// import React, { useState } from 'react'

// const default_Offset =[-11.50, -11, -10.50, -10, -9.50, -9, -8.50, 8, 0, 1, 2, 3, 4, 5.5, 6, 6.5]

// export const ClockAction = ({local=false, clock,updateClock}) => {
//   const [isEdit, setIsEdit] = useState(false)

//    const handleChange=(e)=>{
//         let {name, value} = e.target
//         if(name ==='offset'){
//           value = parseInt(value) * 60
//         }
//         updateClock({
//           [name]: value,
//         })
//  }
// return (
//   <div style={{color:'green'}}>
//   <button  onClick={()=> setIsEdit(!isEdit)}>edit</button> -
//   {local ?  <button>create</button> :  <button>delete</button>}

//   { isEdit &&
//     ( <div style={{backgroundColor:'lightsalmon',display:'flex'}}>
//   <input type='text' name='title' onChange={handleChange}  value={clock.title}/>

// <select name='timezone' onChange={handleChange} value={clock.timezone}>
// <option value='GMT'>GMT</option>
// <option value='UTC'>UTC</option>
// <option value='PST'>PST</option>
// <option value='EST'>EST</option>
// <option value='EDT'>EDT</option>
// <option value='BST'>BST</option>
// <option value='MST'>MST</option>
// </select>

//       {
//         // (clock.timezone === 'GMT' || clock.timezone === 'UTC') && (
//           <select name='offset' onChange={handleChange} value={clock.offset / 60}>
//          { default_Offset.map(offset =>(
//            <option key={offset} value={offset}>{offset}</option>
//          ))

//           }

//           </select>
//         // )
//       }

//      </div>)
//      }

//     </div>
//   )
// }
