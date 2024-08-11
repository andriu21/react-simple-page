import './styles/Navbar.css'
import { useState } from "react";
import { Button } from "./Button.jsx";
export const Navbar = ()=>{

    const [active,setActive] = useState(false);

    const activeMenu = ()=>{
        setActive(!active);
        
    }
    return(
     <>
        <nav className={`navbar ${active && 'active'}`} id="navbar">
            <a href="#" className="navbar_link ">Home</a>
            <a href="#" className="navbar_link ">program</a>
            <a href="#" className="navbar_link ">About us</a>
            <a href="#" className="navbar_link ">campus</a>
            <a href="#" className="navbar_link ">testimonials</a>
            <Button title={'contact'} color={'white'}/>
            <i className="ri-close-large-fill" id="navbar_close_btn" onClick={()=> activeMenu()}></i>
       </nav>
      <div className="navbar_btns_menu">
        <i className="ri-menu-4-fill" id="navbar_btn" onClick={()=> activeMenu()}></i>
      </div>
     </>   
    )
}