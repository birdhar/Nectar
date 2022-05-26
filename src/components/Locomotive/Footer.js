import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer" data-scroll-section>
      {/* <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      /> */}
      {/*---- Include the above in your HEAD tag --------*/}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
      />
      <footer id="dk-footer" className="dk-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4 d-flex align-items-center flex-column">
              <img
                style={{ width: "200px", height: "107px" }}
                src="/images/datingNew/logoNew.png"
              />
              <img
                style={{ width: "200px", height: "107px" }}
                src="/images/datingNew/logotext.png"
              />
            </div>
            {/* End Col */}
            <div className="col-md-12 col-lg-8">
              {/* End Contact Row */}
              <div className="row">
                <div className="col-md-12 col-lg-6 d-flex justify-content-center">
                  <div className="footer-widget footer-left-widget p-0">
                    <div className="section-heading">
                      <h3>Useful Links</h3>
                      <span className="animate-border border-black" />
                    </div>
                    <ul className="">
                      <li className="d-flex justify-content-lg-start justify-content-center">
                        <a href="#">About us</a>
                      </li>
                      <li className="d-flex justify-content-lg-start justify-content-center">
                        <a href="#">Services</a>
                      </li>
                      <li className="d-flex justify-content-lg-start justify-content-center">
                        <a href="#">Projects</a>
                      </li>
                      <li className="d-flex justify-content-lg-start justify-content-center">
                        <a href="#">Our Team</a>
                      </li>
                    </ul>
                  </div>
                  {/* End Footer Widget */}
                </div>
                {/* End col */}
                <div className="col-md-12 col-lg-6 d-md-flex justify-content-md-center">
                  <div className="footer-widget">
                    <div className="section-heading">
                      <h3>Follow us</h3>
                      <span className="animate-border border-black" />
                    </div>

                    <div className="footer-social-link">
                      <ul className="d-flex justify-content-center gap-3">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>

                    <form action="#">
                      <div className="form-row">
                        <div className="col dk-footer-form">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                          />
                          <button type="submit">
                            <img
                              style={{ height: "12px" }}
                              src="/images/datingNew/email.png"
                            />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* End footer widget */}
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
