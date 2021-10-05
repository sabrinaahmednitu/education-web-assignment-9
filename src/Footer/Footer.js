import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="pt-5 text-center footer ">
                    <footer>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-3 footer-col ">
                            <h4>University</h4>
                            <ul>
                              <li><a href="#">about us</a></li>
                              <li><a href="#">our services</a></li>
                              <li><a href="#">privacy policy</a></li>
                              <li><a href="#">affiliate program</a></li>
                            </ul>
                          </div>
                          
                          <div className="col-md-3 footer-col ">
                            <h4>get help</h4>
                            <ul>
                              <li><a href="#">FAQ</a></li>
                              <li><a href="#">support</a></li>
                              <li><a href="#">admission process</a></li>
                              <li><a href="#">payment options</a></li>
                              
                            </ul>
                          </div>
                         
                          <div className="col-md-3 footer-col">
                            <h4>online course</h4>
                            <ul>
                              <li><a href="#">3D animation</a></li>
                              <li><a href="#">UI design</a></li>
                              <li><a href="#">html basic</a></li>
                              <li><a href="#">buisness competition</a></li>
                            </ul>
                          </div>
                         
                          <div className="col-md-3 footer-col">
                            <h4>follow us</h4>
                            <div className="social-links" >
                              <a href="#"><i className="fab fa-facebook-f"></i></a>
                              <a href="#"><i className="fab fa-twitter"></i></a>
                              <a href="#"><i className="fab fa-instagram"></i></a>
                              <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                          </div>
                        
                        </div>
                      </div>
                      <div>
                        <p className="footerp" >©️2021 All rights reserved by Farjana ahmed nitu.</p>
                      </div>
                    </footer>
                    
            </div>
        </div>
    );
};

export default Footer;


        