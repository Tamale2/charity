import React from "react";
import Navigation from "../components/Navigation";
import Team from "./Team";

export default function About() {
  return (
    <>
      <Navigation />
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            ABOUT US <span className="title-under"></span>
          </h1>
          <p className="page-description">
            We are a none-profit organisation.
          </p>
        </div>
      </div>

      <div className="main-container">
        <div className="container">
          <div className="row fadeIn animated">
            <div className="col-md-6">
              <img
                src="images/aboutimage.jpg"
                alt=""
                className="img-responsive"
              />
            </div>

            <div className="col-md-6">
              <h2 className="title-style-2">
                ABOUT US <span className="title-under"></span>
              </h2>
              <p>
                We are the
                <strong style={{ color: "green" }}>
                 Muslim Ambassadors Uganda,
                </strong>{" "}
                 a Non-profit organisation.
              </p>
              <p>
                Five years ago, a group of passionate individuals united by a
                common goal established a nonprofit charity organization aimed
                at transforming lives and communities. Fueled by a deep sense of
                empathy and a commitment to social justice, the organization
                embarked on a mission to uplift those in need and address
                pressing social issues. Through innovative programs and
                collaborative efforts, the charity quickly gained momentum and
                began making a tangible difference in the lives of people it
                served.
              </p>

              <p>
                With a focus on empowerment and sustainable change, the
                nonprofit charity implemented a variety of initiatives tailored
                to meet the specific needs of diverse communities. From
                providing access to education and healthcare to offering skills
                training and economic opportunities, each program was designed
                to foster independence and resilience. Through strategic
                partnerships with local businesses, government agencies, and
                other nonprofits, the organization maximized its impact and
                reached even more individuals in need of assistance.
              </p>

              <p>
                Over the past five years, the nonprofit charity has grown
                exponentially, expanding its reach and influence across regions.
                Its dedication to transparency and accountability has earned the
                trust of donors and supporters, enabling it to secure the
                resources needed to continue its vital work. As the organization
                looks to the future, it remains steadfast in its commitment to
                improving lives and creating lasting change, guided by the
                belief that everyone deserves the opportunity to thrive and
                succeed.
              </p>

              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                pariatur, voluptatum molestiae voluptas ducimus tempora numquam
                eligendi quos, quia aut quidem et, odio deleniti amet natus
                accusamus fugit! Temporibus, tenetur.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                voluptatem, ea, quisquam vero ullam nesciunt recusandae expedita
                similique nisi! Ducimus, reiciendis, quia. Explicabo minima
                error excepturi minus, aperiam illum fugit , quia. Explicabo
                minima error excepturi minus, aperiam illum fugit.
              </p> */}
            </div>
          </div>

          <div className="section-home about-us">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="about-us-col">
                  <div className="col-icon-wrapper">
                    <img src="images/icons/our-mission-icon.png" alt="" />
                  </div>
                  <h3 className="col-title">our mission</h3>
                  <div className="col-details">
                    <p>
                      Advocate for the recognision of all human rights of
                      muslims.
                    </p>
                    <p>
                      Advocate for muslim respect and recognition in politics
                    </p>
                    <p>
                      Development and strengthen muslim grassroot organisations
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    {" "}
                    Read more{" "}
                  </a>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="about-us-col">
                  <div className="col-icon-wrapper">
                    <img style={{width:'80px'}} src="images/icons/money.png" alt="" />
                  </div>
                  <h3 className="col-title">Make donations</h3>
                  <div className="col-details">
                    <p>
                      Lorem ipsum dolor sit amet consect adipisscin elit proin
                      vel lectus ut eta esami vera dolor sit amet consect
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    {" "}
                    Read more{" "}
                  </a>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="about-us-col">
                  <div className="col-icon-wrapper">
                    <img src="images/icons/help-icon.png" alt="" />
                  </div>
                  <h3 className="col-title">Help & support</h3>
                  <div className="col-details">
                    <p>
                      Lorem ipsum dolor sit amet consect adipisscin elit proin
                      vel lectus ut eta esami vera dolor sit amet consect
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    {" "}
                    Read more{" "}
                  </a>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="about-us-col">
                  <div className="col-icon-wrapper">
                    <img src="images/icons/programs-icon.png" alt="" />
                  </div>
                  <h3 className="col-title">our programs</h3>
                  <div className="col-details">
                    <p>
                      Lorem ipsum dolor sit amet consect adipisscin elit proin
                      vel lectus ut eta esami vera dolor sit amet consect
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    {" "}
                    Read more{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Team />
      </div>
    </>
  );
}
