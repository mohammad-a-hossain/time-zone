
//import './App.css';


import { useState } from "react";
import ClockCard from "./components/Card";
import { Header } from "./components/Header";



function App() {
  const [show, setShow] = useState(false)
 
  const showModal=()=>{
     setShow(true)
    
  }

  return (
    <div className="h-full px-2 sx:px-3">
     <Header/>

     <div className="relative flex justify-center flex-auto gap-4 m-2">
     <span className="text-xs">create your timezone</span>

      <button onClick={()=> showModal()} >
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="squire" stroke-linejoin="squire" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
       </button>

      </div>
    
    <div className="flex flex-wrap justify-center w-full gap-5 p-3 bg-green-200 border">
    <ClockCard />
    <ClockCard />  <ClockCard />  <ClockCard />
    <ClockCard />  <ClockCard />
    
    </div>



    { show ?
    (  <div className="absolute z-20 block w-4/12 p-4 bg-slate-200 top-20 left-20">
       
       
      <svg onClick={()=> setShow(false)} className='w-3 h-3' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

       <form>
       <p>title: <input /> </p> 
       <p>set time <input /> </p> 
       <p>location <input /> </p> 
       <p>time zonw<input /> </p> 
       <button>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="squire" stroke-linejoin="squire" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
       </button>
       </form>
    
    </div>):''
    }
    </div>
  );
}

export default App;
