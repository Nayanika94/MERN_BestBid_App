import React from "react";

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#temp">Web design</a>
                </li>
                <li>
                  <a href="#temp">Development</a>
                </li>
                <li>
                  <a href="#temp">Hosting</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#temp">Company</a>
                </li>
                <li>
                  <a href="#temp">Team</a>
                </li>
                <li>
                  <a href="#temp">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Best Bid</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div className="col item social">
              <a href="#temp">
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="#temp">
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="#temp">
                <i className="icon ion-social-snapchat"></i>
              </a>
              <a href="#temp">
                <i className="icon ion-social-instagram"></i>
              </a>
            </div>
          </div>
          <p className="copyright">Best Bid © 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
