import React from "react";
import "./Footer.css"; 

function Footer() {
    return (
        <div>
            <div className="Top">
                <h1 className="contact-me-text">Want to get in touch?</h1>
                <div className="footer-top-sub">
                <a href="https//apple.com" className="link-footer">GitHub</a>
                <a href="https//apple.com" className="link-footer">LinkDen</a>
                <p className="link-footer">Yahyaikrxm@gmail.com</p>
                <p className="link-footer">+1 437-268-1551</p>
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