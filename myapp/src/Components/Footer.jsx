import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footermain}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          lineHeight: "0px",
        }}
        className={styles.leftuppperfooter}
      >
        <div>
          <h3>FAQ's</h3>
          <h3>Contacts Us</h3>
          <h3>Shipping {"&"} Return Policy</h3>
          <h3>Terms {"&"} Conditions</h3>
          <h3>Privacy Policy</h3>
        </div>

        <div>
          <h3>Follow us on</h3>
          <div style={{ display: "flex", gap: "10px" }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/fb-icon.png?v=1599571756"
              alt="facebook"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/insta-icon.png?v=1599571756"
              alt="instagram"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/twitter-icon.png?v=1599571756"
              alt="tweeter"
            />
          </div>
        </div>
      </div>
      <br />
      <div
        style={{
          width: "85vw",
          backgroundColor: "gray",
          height: "1px",
          margin: "auto",
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p className={styles.footercopyright}>
          Copyright©2020. All Rights Reserved{" "}
        </p>
        <div style={{
          display: "flex", justifyContent:"center",alignItems:"center"  }} >
          <img
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/ting.png?v=1599565040"
            alt="madeby" width={"100px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
