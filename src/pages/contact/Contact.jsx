import "./Contact.css";
// import React from 'react'

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-card">
            <h2>Reach us at</h2>
        <div>
            <span>support@kicksup.com</span>
            <span>for any technical support</span>
        </div>
        <div>
            <span>info@kicksup.com</span>
            <span>for more information</span>
        </div>
        <div>
            <span>feedback@kicksup.com</span>
            <span>to send your feedback</span>
        </div>
        <div>
            <span>jobs@kicksup.com</span>
            <span>to work with us</span>
        </div>
        
        <section id="socials">
            <span>Stay in touch</span>
            <div>
                <img src="/assets/twitter.png" alt="twitter" />
                <img src="/assets/insta.png" alt="instagram" />
                <img src="/assets/facebook.png" alt="facebook" />
            </div>
        </section>

        </div>
      </div>

    </section>
  );
}
