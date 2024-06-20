import "./frontpage.scss";

function FrontPage() {
  return (
    <div className="fp-body">
      <div className="fp-container">
        <div className="fp-heading">
          <h2 className="fp-hello">Hello,</h2>
          <h2 className="fp-text" data-text="I'M JUHI DWIVEDI">
            {" "}
            I'M JUHI DWIVEDI
          </h2>
        </div>

        <div className="fp-content">
          <p className="fp-content-text">
            Your friendly neighborhood software developer, from National
            Institute of Technology Raipur. I spend my days (and often nights)
            painting the Internet canvas with{" "}
            <a href="/projects" className="fp-boldit">
              PROJECTS
            </a>{" "}
            and lines of code, turning zeroes and ones into immersive,
            interactive experiences,
          </p>
          <p className="fp-content-text">
            When I'm not crafting beautiful web experiences, you can find me
            reading Arcticles or swaying to the rhythm of Pop Music & Jazz,
            losing myself in the captivating flow of melodies. anyways you can{" "}
            <a href="/projects" className="fp-boldit">
              CONTACT ME
            </a>{" "}
            !
          </p>
        </div>
        <div className="fp-see-more">
          <div className="fp-see-more-text">See more about me</div>
          <img src="/public/path.png" className="fp-arrow" />
        </div>
        <div className="fp-social">
          <a
            href="https://www.linkedin.com/in/juhi-dwivedi-80a3a6208/"
            className="fp-social-icon"
          >
            <img src="/public/linkedin.png" alt="" />
          </a>

          <a href="https://github.com/imjuhi" className="fp-social-icon">
            <img src="/public/github.png" alt="" />
          </a>

          <a
            href="https://leetcode.com/u/juhidwivedi1804/"
            className="fp-social-icon"
          >
            <img src="/public/leetcode.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
