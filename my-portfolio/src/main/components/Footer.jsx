import React from "react";
import "./Footer.css"; 

function Footer() {
    return (
        <div>
            <div className="Top">
                <div className="footer-top-1">
                    <h1 className="contact-me-text">Want to get in touch?</h1>
                </div>
                <div className="footer-top-2">
                    <div className="footer-top-links">
                        <div className="links-footer-1">
                        <p className="link-footer">Yahyaikrxm@gmail.com</p>
                        <p className="link-footer">+1 437-268-1551</p>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="links-footer-2">
                        <a href="https//apple.com" className="link-footer">GitHub</a>
                        <a href="https//apple.com" className="link-footer">LinkDen</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Bottom">
                <p className="bottom-footer-text">C Yahya 2025</p>
                <p className="bottom-footer-text">Coded with &lt;3</p>
                <p className="bottom-footer-text">Back to top</p>
            </div>
        </div>
    );
}

export default Footer;