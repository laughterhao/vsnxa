import React,{useState} from "react";

import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Style from '@/styles/header.module.scss'
export default function Nav() {
    const [click, setClick] = useState(false);

    const toggleNavbar = () => {
      const toggle = !click;
      setClick(toggle);
    };   
    return (
      <>
        <header className={Style["header"]}>
          <a className={Style["logo"]}>VSNX</a>
    
          <label form="" className={Style["nav-icon"]}  >
            <button onClick={toggleNavbar}></button>
            {click ? <IoMdMenu /> : <IoMdClose />}
          </label>
    
          <nav className={Style["navbar"]}  style={{visibility:click ? 'hidden': 'visible'}}>
            <a>基本知識</a>
            <a>插件說明</a>
            <a>服務項目</a>
            <button className={Style['login']}>Login</button>
          </nav>
        </header>
      </>
    );
}