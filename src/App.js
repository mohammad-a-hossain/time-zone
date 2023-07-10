
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import { Signup } from './pages/Signup';

function App() {


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
