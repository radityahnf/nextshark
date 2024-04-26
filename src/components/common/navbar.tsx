'use client'
import { useState } from "react";
import styles from "./Navbar.module.css";
export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <a href="#home" className={`${styles.logo}`}>
            Dev.{" "}
          </a>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                Community Spotlight
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                Resources
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                Newsletter
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                News
              </a>
            </li>
          </ul>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
