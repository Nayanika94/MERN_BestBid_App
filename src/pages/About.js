import React from "react";
import { Widget } from "react-chat-widget";

const About = () => {
  return (
    <div>
      <div className="m-5">
        <div className="container">
          <div classname="row">
            <div className="col-md-6">
              <h1 className="strong">
                Who we are and
                <br />
                what we do
              </h1>
              <p className="lead">
                This is the world's leading portal for
                <br />
                easy and quick{" "}
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Online auctions have greatly increased the variety of goods and
                services that can be bought and sold using auction mechanisms
                along with expanding the possibilities for the ways auctions can
                be conducted and in general created new uses for auctions. In
                the current web environment there are hundreds, if not
                thousands, of websites dedicated to online auction practices.
              </p>
              <p>
                However, online auctions on websites weren't the first type of
                online auctions. In fact, before them, online auctions took
                place through email and bulletin boards. The auctioneer/seller
                would post a notice on a system bulletin board, describing the
                item for sale and setting a minimum bid and closing time.
                CompuServe was sponsoring such auctions through its classified
                ad system in 1980. But individuals ran their own online auctions
                as early as 1979 on both CompuServe and The Source, which were
                in beta the first part of that year. Such auctions were also run
                on the earliest public BBSes, going back to 1978.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="site-heading text-center w-100">
              <h3>Our Team</h3>
              <p>
                There are many components to becoming a top-performing team, but
                the key is working on highly cooperative relationship and thats
                what our team have done in this project.
              </p>
              <div className="border"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 team-box">
              <div className="team-img thumbnail">
                <img src="" alt="" />
                <div className="team-content">
                  <h3>Philip Freeman</h3>
                  <div class="border-team"></div>
                  <p>
                    I am from Philip ireland. And I have great experiance in IT
                    industry, But to introduce something new to world I have to
                    do something which is never imagined so I introduced idea of
                    bidding site so basically I am the co-founder of this site
                  </p>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/">
                      <i
                        id="social-fb"
                        className="fa fa-facebook-square fa-3x social"
                      ></i>
                    </a>
                    &nbsp;
                    <a href="https://twitter.com/">
                      <i
                        id="social-tw"
                        className="fa fa-twitter-square fa-3x social"
                      ></i>
                    </a>
                    &nbsp;
                    <a href="https://plus.google.com/">
                      <i
                        id="social-gp"
                        className="fa fa-google-plus-square fa-3x social"
                      ></i>
                    </a>
                    &nbsp;
                    <a href="mailto:bootsnipp@gmail.com">
                      <i
                        id="social-em"
                        className="fa fa-envelope-square fa-3x social"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 team-box">
              <div className="team-img thumbnail">
                <img src="" alt="" />
                <div className="team-content">
                  <h3>David Smith</h3>
                  <div className="border-team"></div>
                  <p>
                    I am from america and I have good interest in business but
                    by hearing the idea of Philip I got introduce with something
                    new and I know this gonna be the new world so I supported
                    him as per his need so basically I am the financial manager
                    of this project.
                  </p>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/">
                      <i
                        id="social-fb"
                        className="fa fa-facebook-square fa-3x social"
                      ></i>
                    </a>
                    &nbsp;
                    <a href="https://twitter.com/">
                      <i
                        id="social-tw"
                        className="fa fa-twitter-square fa-3x social"
                      ></i>
                    </a>
                    &nbsp;
                    <a href="https://plus.google.com/">
                      <i
                        id="social-gp"
                        className="fa fa-google-plus-square fa-3x social"
                      ></i>
                    </a>
                    &nbsp;
                    <a href="mailto:bootsnipp@gmail.com">
                      <i
                        id="social-em"
                        className="fa fa-envelope-square fa-3x social"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 team-box">
              <div className="team-img thumbnail">
                <img src="" alt="" />
                <div className="team-content">
                  <h3>Robert D'costa</h3>
                  <div className="border-team"></div>
                  <p>
                    I am Robert and I am from Canada. I have done many projects
                    in IT and it is great to work with philip I have worked on
                    this project as a team member. he Willing and able to adapt
                    to work under pressure and short time lines, as well as work
                    with and possibly manage others
                  </p>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/">
                      <i
                        id="social-fb"
                        className="fa fa-facebook-square fa-3x social"
                      ></i>
                    </a>
                    &nbsp;
                    <a href="https://twitter.com/">
                      <i
                        id="social-tw"
                        className="fa fa-twitter-square fa-3x social"
                      ></i>
                    </a>
                    &nbsp;
                    <a href="https://plus.google.com/">
                      <i
                        id="social-gp"
                        className="fa fa-google-plus-square fa-3x social"
                      ></i>
                    </a>
                    &nbsp;
                    <a href="mailto:bootsnipp@gmail.com">
                      <i
                        id="social-em"
                        className="fa fa-envelope-square fa-3x social"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Widget />
    </div>
  );
};

export default About;
