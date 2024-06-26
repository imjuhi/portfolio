import "./navbar.scss";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg  mynav">
      <div className="mynavleft">
        <img src="/juhi.png" alt="" />
      </div>
      <div class="container-fluid mynavright">
        <a class="navbar-brand" href="/">
          Home
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="/project">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Resume
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link " aria-disabled="true">
                Switch theme
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
