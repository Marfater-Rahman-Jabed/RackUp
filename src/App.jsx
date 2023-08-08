
import './App.css'

import { RouterProvider } from "react-router-dom"
import ScrollToTop from "react-scroll-to-top";
import { router } from "./Routes/Routes/Routes"
import ReactWhatsapp from 'react-whatsapp';
import { BsWhatsapp } from "react-icons/bs";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
    <div className='w-full overflow-x-clip '>

      <ScrollToTop className='bg-slate-500' smooth />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <ReactWhatsapp number="+8801537167147" className="whatsapp_float animate-bounce hover:animate-none" message="Hi RackUp IT Solution" title="Contact with RackUp Team"><BsWhatsapp className=' mx-auto' ></BsWhatsapp> </ReactWhatsapp>

      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
