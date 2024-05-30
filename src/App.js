
import { BrowserRouter,Routes,Route,Router } from 'react-router-dom';
// import Home from './components/Home';
// import Dogpage from './components/Singledog';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import FavoritesGallery from './components/Card';
// import { FavoritesProvider } from './FavoritesContext';


// function App() {
//   return (
//     <>
//   <FavoritesProvider>
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Home/>}></Route>
//       <Route path='/:name' element={<Dogpage/>}></Route>
//       <Route path='/FavoritesGallery' element={<FavoritesGallery/>}></Route>

//     </Routes>
    
    
    
//     </BrowserRouter>
//     </FavoritesProvider>
//     </>
    

//   );
// }

// export default App;

import Home from './components/Home';
import FavoritesGallery from './components/Card';
import { FavoritesProvider } from './createcontext/FavoritesContext';
import Dogpage from './components/Singledog';

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<FavoritesGallery />} />
          <Route path="/:name" element={<Dogpage />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
