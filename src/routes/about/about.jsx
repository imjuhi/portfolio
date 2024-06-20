import "./about.scss";

function AboutPage() {
  return (
    <div className="ap-body">
      <div className="ap-about">
        <h2 className="ap-about-head">About Me.</h2>
        <div className="ap-about-content">
          <div className="ap-about-img">
            <img src="/avatar.png" alt="" />
          </div>
          <div className="ap-about-text">
            <p>
              I am Juhi Dwivedi, an undergraduate final year student at the
              National Institute of Technology, Raipur. I enjoy creating and
              developing websites. I love what I do!
            </p>{" "}
            <p>
              Throughout my journey as a web developer, I have accumulated
              various skills and experimented with multiple libraries,
              frameworks, and languages. I value thoughtful interactions. Let's
              chat over coffee—my treat!
            </p>
          </div>
        </div>
      </div>

      <div className="ap-skills">
        <div className="ap-skills-head">My Skills.</div>
        <div className="ap-skill-content">
          <div className="ap-skill">
            <img src="/html.png" alt="" />
            <span>HTML</span>
          </div>
          <div className="ap-skill">
            <img src="/css-3.png" alt="" />
            <span>CSS</span>
          </div>
          <div className="ap-skill">
            <img src="/js.png" alt="" />
            <span>JS</span>
          </div>
          <div className="ap-skill">
            <img src="/react.png" alt="" />
            <span>REACT</span>
          </div>
          <div className="ap-skill">
            <img src="/node-js.png" alt="" />
            <span>NODE</span>
          </div>
          <div className="ap-skill">
            <img src="/visual-studio.png" alt="" />
            <span>VS CODE</span>
          </div>
          <div className="ap-skill">
            <img src="/git.png" alt="" />
            <span>GIT</span>
          </div>
        </div>
      </div>

      <div className="ap-end">
        <div className="ap-see-more">
          <div className="ap-see-more-text">See my resume</div>
          <img src="/public/path.png" className="ap-arrow" />
        </div>
        <div className="ap-social">
          <a
            href="https://www.linkedin.com/in/juhi-dwivedi-80a3a6208/"
            className="ap-social-icon"
          >
            <img src="/public/linkedin.png" alt="" />
          </a>

          <a href="https://github.com/imjuhi" className="ap-social-icon">
            <img src="/public/github.png" alt="" />
          </a>

          <a
            href="https://leetcode.com/u/juhidwivedi1804/"
            className="ap-social-icon"
          >
            <img src="/public/leetcode.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
