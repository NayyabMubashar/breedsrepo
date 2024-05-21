
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Dogpage from './components/Singledog';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/:name' element={<Dogpage/>}></Route>
    </Routes>
    
    
    
    </BrowserRouter>
  
    </>
    

  );
}

export default App;
