
import './App.css'

import { RouterProvider } from "react-router-dom"
import ScrollToTop from "react-scroll-to-top";
import { router } from "./Routes/Routes/Routes"
import ReactWhatsapp from 'react-whatsapp';
import { BsWhatsapp } from "react-icons/bs";
function App() {


  return (
    <div>

      <ScrollToTop className='bg-slate-500' smooth />

      <ReactWhatsapp number="+8801827717200" className="whatsapp_float animate-bounce hover:animate-none" message="Hi RackUp IT Solution" title="Contact with RackUp Team"><BsWhatsapp className=' mx-auto' ></BsWhatsapp> </ReactWhatsapp>

      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
