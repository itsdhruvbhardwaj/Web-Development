
import './App.css'
//1:import brouse routes
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Cources from './components/Cources';
import MockTest from './components/MockTest';
import Report from './components/Report';
import NotFound from './components/NotFound';
//2:create routes
const router = createBrowserRouter(
  [
    {
      path:"/",
      //iss path pr jo page render krana chatey hai uske lye add element
      element:
        <div>
          <Navbar></Navbar>
          <Home></Home>
        </div>
    },
    {
      path:"/about",
      element:
        <div>
          <Navbar></Navbar>
          <About></About>
        </div>
    },
    {
      path:"/dashboard",
      element:
        <div>
          <Navbar></Navbar>
          <Dashboard></Dashboard>
        </div>,
        children:[
          {
            path:"cources",
            element:<Cources></Cources>
          },
          {
            path:"mock-test",
            element:<MockTest></MockTest>
          },
          {
            path:"reports",
            element:<Report></Report>
          },
        ]
    },
    {
      path:"/student/:id",
      element:
        <div>
          <Navbar></Navbar>
          <ParamComp></ParamComp>
        </div>
    },
    {
      path:"*", // waki path k siva kuch bhi aaya to error nhi aayga
      element:<NotFound></NotFound>
    }
  ]
);

function App() {

  //routes jo create kiye the vo router provider ko provide kr diye
  return (
    <div>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  )
}

export default App
