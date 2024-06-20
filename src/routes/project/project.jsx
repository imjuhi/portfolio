import "./project.scss";
import React, { useEffect } from "react";

function ProjectPage() {
  useEffect(() => {
    const videos = document.querySelectorAll(".pp-video");

    const handleMouseEnter = (event) => {
      event.target.pause();
    };
    const handleMouseLeave = (event) => {
      event.target.play();
    };

    videos.forEach((video) => {
      video.play();

      video.addEventListener("mouseenter", handleMouseEnter);
      video.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      videos.forEach((video) => {
        video.removeEventListener("mouseenter", handleMouseEnter);
        video.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
  return (
    <div className="pp-body">
      <div className="pp-container">
        <div className="pp-mains">
          <div className="pp-mains-head">
            <h2>My Recent Work </h2>
            <span>
              Here are a few past projects I've worked on. Want to partner on a
              project?{" "}
              <a href="" className="pp-email">
                Email Me
              </a>
            </span>
          </div>
          <div className="pp-card">
            <video class="pp-video" muted loop>
              <source src="/public/blognest.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="pp-overlay">
              <div className="pp-details">
                <div className="pp-head">
                  <h2>Blog Nest</h2>
                  <a href="" className="pp-social-icon">
                    <img src="/public/github.png" alt="" />
                  </a>
                </div>
                <div className="pp-cpptions">
                  <p>Paint down your thoughts into exciting blogs!!</p>
                </div>

                <div className="pp-tech-used">
                  <span className="pp-tech">HTML</span>
                  <span className="pp-tech">CSS</span>
                  <span className="pp-tech">React</span>
                  <span className="pp-tech">Node.js</span>
                  <span className="pp-tech">JWT</span>
                  <span className="pp-tech">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pp-card">
            <img src="/estate.png" alt="" />
            <div className="pp-overlay">
              <div className="pp-details">
                <div className="pp-head">
                  <h2>Estate Ease</h2>
                  <a href="" className="pp-social-icon">
                    <img src="/public/github.png" alt="" />
                  </a>
                </div>
                <div className="pp-captions">
                  <p>The ultimate Real Estate App, to find your dream home!</p>
                </div>

                <div className="pp-tech-used">
                  <span className="pp-tech">HTML</span>
                  <span className="pp-tech">CSS</span>
                  <span className="pp-tech">React</span>
                  <span className="pp-tech">Node.js</span>
                  <span className="pp-tech">JWT</span>
                  <span className="pp-tech">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pp-others">
          <div className="pp-others-head">
            <h2>Other Projects</h2>
          </div>
          <div className="pp-card-row">
            <div className="pp-other-card">
              {/* <video className="pp-video" muted loop>
                <source src="/public/demo.mp4" type="video/mp4" />
                browser does not support the videooo.
              </video> */}
              <img className="pp-img" src="/public/counternew.jpeg" alt="" />
              <div className="pp-other-overlay">
                <div className="pp-other-details">
                  <div className="pp-other-cpptions">
                    <p>Basic counter app using Redux!</p>
                  </div>

                  <div className="pp-other-tech-used">
                    <span className="pp-other-tech">HTML</span>
                    <span className="pp-other-tech">CSS</span>
                    <span className="pp-other-tech">React</span>
                    <span className="pp-other-tech">Redux</span>
                  </div>
                </div>
              </div>
              <div className="pp-other-head">
                <h2>Counter</h2>
                <a
                  href="https://github.com/imjuhi/Counter"
                  className="pp-other-social-icon"
                >
                  <img src="/public/github.png" alt="" />
                </a>
              </div>
            </div>
            <div className="pp-other-card">
              {/* <video className="pp-video" muted loop>
                <source src="/public/demo.mp4" type="video/mp4" />
                browser does not support the videooo.
              </video> */}
              <img className="pp-img" src="/public/agecalc.jpeg" alt="" />
              <div className="pp-other-overlay">
                <div className="pp-other-details">
                  <div className="pp-other-cpptions">
                    <p>A basic Age Calculator app.</p>
                  </div>

                  <div className="pp-other-tech-used">
                    <span className="pp-other-tech">HTML</span>
                    <span className="pp-other-tech">CSS</span>
                    <span className="pp-other-tech">JS</span>
                  </div>
                </div>
              </div>
              <div className="pp-other-head">
                <h2>Age Calculator</h2>
                <a
                  href="https://github.com/imjuhi/Age_Calculator"
                  className="pp-other-social-icon"
                >
                  <img src="/public/github.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="pp-card-row">
            <div className="pp-other-card">
              {/* <video className="pp-video" muted loop>
                <source src="/public/demo.mp4" type="video/mp4" />
                browser does not support the videooo.
              </video> */}
              <img className="pp-img" src="/public/frendify.png" alt="" />
              <div className="pp-other-overlay">
                <div className="pp-other-details">
                  <div className="pp-other-cpptions">
                    <p>Social Media Application.</p>
                  </div>

                  <div className="pp-other-tech-used">
                    <span className="pp-other-tech">HTML</span>
                    <span className="pp-other-tech">CSS</span>
                    <span className="pp-other-tech">React</span>
                  </div>
                </div>
              </div>
              <div className="pp-other-head">
                <h2>Frendify</h2>
                <a
                  href="https://github.com/imjuhi/Friendify_v.02"
                  className="pp-other-social-icon"
                >
                  <img src="/public/github.png" alt="" />
                </a>
              </div>
            </div>
            <div className="pp-other-card">
              {/* <video className="pp-video" muted loop>
                <source src="/public/demo.mp4" type="video/mp4" />
                browser does not support the videooo.
              </video> */}
              <img className="pp-img" src="/public/url.png" alt="" />
              <div className="pp-other-overlay">
                <div className="pp-other-details">
                  <div className="pp-other-cpptions">
                    <p>Shorten any URL in miliseconds!</p>
                  </div>

                  <div className="pp-other-tech-used">
                    <span className="pp-other-tech">HTML</span>
                    <span className="pp-other-tech">CSS</span>
                    <span className="pp-other-tech">React</span>
                    <span className="pp-other-tech">Node-js</span>
                  </div>
                </div>
              </div>
              <div className="pp-other-head">
                <h2>URL Shortener</h2>
                <a
                  href="https://github.com/imjuhi/URL_Shortener"
                  className="pp-other-social-icon"
                >
                  <img src="/public/github.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="pp-card-row">
            <div className="pp-other-card">
              {/* <video className="pp-video" muted loop>
                <source src="/public/demo.mp4" type="video/mp4" />
                browser does not support the videooo.
              </video> */}
              <img className="pp-img" src="/public/qrgen.jpeg" alt="" />
              <div className="pp-other-overlay">
                <div className="pp-other-details">
                  <div className="pp-other-cpptions">
                    <p>We got you QR for anything and everything!</p>
                  </div>

                  <div className="pp-other-tech-used">
                    <span className="pp-other-tech">HTML</span>
                    <span className="pp-other-tech">CSS</span>
                    <span className="pp-other-tech">JS</span>
                  </div>
                </div>
              </div>
              <div className="pp-other-head">
                <h2>QR Generator</h2>
                <a
                  href="https://github.com/imjuhi/QR_code_generator"
                  className="pp-other-social-icon"
                >
                  <img src="/public/github.png" alt="" />
                </a>
              </div>
            </div>
            <div className="pp-other-card">
              {/* <video className="pp-video" muted loop>
                <source src="/public/demo.mp4" type="video/mp4" />
                browser does not support the videooo.
              </video> */}
              <img className="pp-img" src="/public/randpass.jpeg" alt="" />
              <div className="pp-other-overlay">
                <div className="pp-other-details">
                  <div className="pp-other-cpptions">
                    <p>Generates random passwords for everyone!</p>
                  </div>

                  <div className="pp-other-tech-used">
                    <span className="pp-other-tech">HTML</span>
                    <span className="pp-other-tech">CSS</span>
                    <span className="pp-other-tech">JS</span>
                  </div>
                </div>
              </div>
              <div className="pp-other-head">
                <h2>Random Password Generator</h2>
                <a
                  href="https://github.com/imjuhi/Random_Password_Generator"
                  className="pp-other-social-icon"
                >
                  <img src="/public/github.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pp-end">
          <div className="pp-see-more">
            <div className="pp-see-more-text">Let's go to my resume</div>
            <img src="/public/path.png" className="pp-arrow" />
          </div>
          <div className="pp-social">
            <a
              href="https://www.linkedin.com/in/juhi-dwivedi-80a3a6208/"
              className="pp-social-icon"
            >
              <img src="/public/linkedin.png" alt="" />
            </a>

            <a href="https://github.com/imjuhi" className="pp-social-icon">
              <img src="/public/github.png" alt="" />
            </a>

            <a
              href="https://leetcode.com/u/juhidwivedi1804/"
              className="pp-social-icon"
            >
              <img src="/public/leetcode.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
