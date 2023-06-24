import React from "react";
import "./footr.css";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="containeri">
          <div className="rowi">
            <div className="coli">
              <div className="ro1i">
                Explore the rich tapestry of India's diverse landscapes, vibrant
                cultures, and ancient wonders through an unforgettable journey
                of exploration and adventure with our exceptional tour and
                travel experiences.
              </div>
              <div className="footer-icons">
                <i class="twitter">
                  <BsTwitter />
                </i>
                <i class="instagram">
                  <AiFillInstagram />
                </i>
                <i class="linkedin">
                  <BsLinkedin />
                </i>
                <i class="whatsapp">
                  <IoLogoWhatsapp />
                </i>
              </div>
            </div>
            <div className="coli">
              <div className="quick1">Quick Links</div>
              <ul>
                <li className="navi-item">
                  <a className="wq" href="/">
                    About Us
                  </a>
                </li>
                <li className="navi-item">
                  <a className="wq" href="/">
                    Blog
                  </a>
                </li>
                <li className="navi-item">
                  <a className="wq" href="/">
                    Contact Us
                  </a>
                </li>
                <li className="navi-item">
                  <a className="wq" href="/">
                    Services
                  </a>
                </li>
                <li className="navi-item">
                  <a className="wq" href="/">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col1i">
              <div className="quick">Quick Links</div>
              <div className="faso">
                <i class="fa-solid fa-phone-volume"></i>📞76879809
              </div>
              <div className="faso">
                <i class="fa-solid fa-envelope"></i> 📧Codebeat@gmail.com
              </div>
              <div className="faso">
                <i class="fa-solid fa-envelope"></i> 📌Silicon,bbsr
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Design By 😊</p>
      </div>
    </>
  );
};

export default Footer;
