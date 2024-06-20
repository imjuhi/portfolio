import "./contact.scss";

function ContactPage() {
  return (
    <div className="cp-body">
      <div className="cp-container">
        <div className="cp-head">
          <h2>Contact.</h2>
          <span>
            Get in touch or shoot me an email directly on
            juhidwivedi1804@gmail.com
          </span>
        </div>
        <div className="cp-content">
          <form className="cp-form">
            <div className="cp-name">
              <img src="/name.png" alt="" />
              <input type="text" placeholder="Name" className="cp-input" />
            </div>
            <div className="cp-mail">
              <img src="/mail.png" alt="" />
              <input type="text" placeholder="Email" className="cp-input" />
            </div>
            <div className="cp-message">
              <img src="/message.png" alt="" />
              <input type="text" placeholder="Message" className="cp-input" />
            </div>
          </form>
          <button className="cp-button">Send Message</button>
        </div>
        <div className="cp-end">
          <div className="cp-see-more">
            <div className="cp-see-more-text">Go back to home</div>
            <img src="/public/path.png" className="cp-arrow" />
          </div>
          <div className="cp-social">
            <a
              href="https://www.linkedin.com/in/juhi-dwivedi-80a3a6208/"
              className="cp-social-icon"
            >
              <img src="/public/linkedin.png" alt="" />
            </a>

            <a href="https://github.com/imjuhi" className="cp-social-icon">
              <img src="/public/github.png" alt="" />
            </a>

            <a
              href="https://leetcode.com/u/juhidwivedi1804/"
              className="cp-social-icon"
            >
              <img src="/public/leetcode.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
