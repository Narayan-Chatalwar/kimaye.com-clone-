import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <div className={styles.uppernotification}>
        <p>Delivering in Mumbai and Delhi | Same day delivery!</p>
      </div>
      <div className={styles.bottomnavbar}>
        <div >
          <a href="#">SHOP</a>
          <a href="#">LEARN</a>
          <a href="#">GROW</a>

       </div>
       <div> <img
          src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204"
          alt="logo" width={"135px"} height={"28px"}
        /></div>
       <div></div>
      </div>
    </div>
  );
};

export default Navbar;










