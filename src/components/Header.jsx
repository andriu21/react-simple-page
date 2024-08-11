import { useEffect, useState } from "react";
import "./styles/Header.css";
import { Navbar } from "./Navbar.jsx";

export const Header = ({ title, icons }) => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    const readerScroll = () => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY);
        scroll > 10 ? setActive(true) : setActive(false);
      });
    };

    return readerScroll();
  }, [scroll]);

  return (
    <>
      <header className={active ? "header active" : "header"} id="header">
        <a href="#home" className="header_title">
          <i className={icons}></i> {title}
        </a>
        <Navbar></Navbar>
      </header>
    </>
  );
};
