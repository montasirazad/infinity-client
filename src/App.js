import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import OurPartners from './Components/OurPartners/OurPartners';
import Products from './Components/Products/Products';
import Retail from './Components/Retail/Retail';
import Wholesale from './Components/WholeSale/Wholesale';


function App() {


  const router = createBrowserRouter([

    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/products', element: <Products /> },
    { path: '/retail', element: <Retail /> },
    { path: '/wholesale', element: <Wholesale /> },
    {
      path: '/our-partners',
      loader: () => {
        return fetch('ourPartner.json')
      },
      element: <OurPartners />
    },
    { path: '/login', element: <Login /> },

  ])



  return (
    <div >


      <RouterProvider router={router}>

      </RouterProvider>

    </div>
  );
}

export default App;
