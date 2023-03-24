import React from "react";
import Link from "next/link";
import NavStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={NavStyles.nav}>
      <ul className={NavStyles.nav}>
        <li className={NavStyles.nav}>
          <Link href="/">Blogs</Link>
        </li>
        <li className={NavStyles.nav}>
          <Link href="/photos">Photos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
