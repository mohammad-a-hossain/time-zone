
//import './App.css';



function App() {
  return (
    <div className="h-screen
     sm:bg-cyan-300
      lg:bg-slate-900 px-2">
     
    <div class="flex w-full h-8
     bg-blue-300">
    <div class="bg-green-400 text-xs">
      time-zone logo
    </div>

    <div className="p-2 max-w-sm mx-auto
     bg-white squire-xl 
     shadow-md 
     flex items-center 
      ">
    <span className='font-thin text-xs inline-block'>user name</span>
    <span><input placeholder="text" 
     className="p-1 shadow-md inline-block
     w-20 border-1 bg-gray-200" /></span>
     <button class="py-2 mx-2
      bg-blue-500
       text-white text-xs
        font-semibold
         rounded-sm shadow-md
          hover:bg-blue-700
           focus:outline-none
            focus:ring-2
             focus:ring-blue-400 
             focus:ring-opacity-75">
     create
   </button>
    </div>

    <div class="flex-none">
      03
    </div>
  </div>

  <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
  
  <div className="px-2 py-2">
    <div className="font-bold text-xs mb-2">Mountain</div>
  
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>


<div class="bg-white p-2 rounded-lg shadow-md">
   
    <h3 class="text-xs uppercase">Current lesson:</h3>
   
    <button class="bg-orange-400 py-2
     px-3 mt-4 rounded text-sm font-semibold
      hover:bg-opacity-75">Go to lesson</button>
  </div>




 
    
    </div>
  );
}

export default App;
