import { RouterProvider } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import router from "./router"
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
      <RouterProvider router={router} />
    </>
  )
}

export default App
