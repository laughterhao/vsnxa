import React, { useState } from "react";

import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Style from "@/styles/header.module.scss";
export default function Nav() {
  const [click, setClick] = useState(false);

  const toggleNavbar = () => {
    const toggle = !click;
    setClick(toggle);
  };
  return (
    <>
      <header className={Style["header"]}>
        <Link href={'/'} className={Style["logo"]}>VSNX</Link>

        {/* <label form="" className={Style["nav-icon"]}> */}
          <button onClick={toggleNavbar} className={Style["nav-icon"]}>
            {click ? <IoMdMenu /> : <IoMdClose />}
          </button>
        {/* </label> */}

        <div
          className={Style["nbar"]}
          style={{ visibility: click ? "hidden" : "visible" }}
        >
          <Link href={'/basic'}>基本知識</Link>
          <Link href={'/jb'}>插件說明</Link>
          <Link className={Style["different"]} href={'/service'}>服務項目</Link>
          <button className={Style["login"]}>Login</button>
        </div>
      </header>
    </>
  );
}
