import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Manufacturer from './Components/Manufacturer/Manufacturer';
import Products from './Components/Products/Products';
import Retail from './Components/Reatail/Retail';
import Services from './Components/Services/Services';
import Navbar from './Components/shared/Header/Header';


function App() {


  const router = createBrowserRouter([

    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/products', element: <Products /> },
    { path: '/retail', element: <Retail /> },
    { path: '/manufacturer', element: <Manufacturer /> },

  ])



  return (
    <div >


      <RouterProvider router={router}>

      </RouterProvider>

    </div>
  );
}

export default App;
