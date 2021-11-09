import React from "react";
import "./Footer.css";
import {Button} from "./Button";
import {Link} from "react-router-dom";
import "../App.css"

function Footer(){
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Aventure newsletter to recieve our best vacation deals

                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input 
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="footer-input"
                        />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            TRVL <i className="fab fa-typo3" />

                        </Link>
                    </div>
                    <small className="website-rights">TRVL 2021 </small>

                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="Instagram">
                        <i className="fab fa-facebook-f" />

                        </Link>
                        <Link className="social-icon-link instagram" to="/" target="_blank" aria-label="Facebook">
                        <i className="fab fa-instagram" />

                        </Link>

                       
                        <Link className="social-icon-link youtube" to="/" target="_blank" aria-label="instagram">
                        <i className="fab fa-youtube" />

                        </Link>

                      
                        <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="twitter">
                        <i className="fab fa-twitter" />

                        </Link>

                     
                        <Link className="social-icon-link linkdin" to="/" target="_blank" aria-label="linkdin">
                        <i className="fab fa-linkdin" />

                        </Link>
                    </div>
                </div>
            </section>
        </div>
                    
    )
}

export default Footer