import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Services from './Components/Services/Services';
import Navbar from './Components/shared/Header/Header';


function App() {


  const router = createBrowserRouter([

    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/products', element: <Products /> },
    { path: '/services', element: <Services /> }

  ])



  return (
    <div >

      
      <RouterProvider router={router}>
      
      </RouterProvider>

    </div>
  );
}

export default App;
