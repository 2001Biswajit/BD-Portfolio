import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"



const Root = () => {
  return (
    <div>

        <Navbar />
        <div className="overflow-hidden">
           <Outlet></Outlet>
         </div>  
        <Footer />
    </div>
  )
}

export default Root
