
//import './App.css';


import ClockCard from "./components/Card";
import { Header } from "./components/Header";



function App() {
  return (
    <div className="h-full
     sm:bg-cyan-300
      lg:bg-slate-900 px-2">
     <Header/>
     <div className="flex flex-auto justify-center">
      <button >create</button></div>
    
    <div className="w-full p-3 flex gap-5 justify-center flex-wrap bg-green-200 border">
    <ClockCard />
    <ClockCard />
    <ClockCard />
    <ClockCard />

    <ClockCard />
    <ClockCard />
    <ClockCard />
    <ClockCard />
    
    </div>

      




 
    
    </div>
  );
}

export default App;
