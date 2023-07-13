
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import { Signup } from './pages/Signup';
//import useClock from './hooks/useClock';



function App() {
  //useClock(new Date())

  return (
    <div className='bg-slate-50'>
    <BrowserRouter>
   <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/signup' element={<Signup/>} />

  </Routes>

</BrowserRouter>
   

    </div>
  );
}

export default App;
