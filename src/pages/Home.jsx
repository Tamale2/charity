import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Navigation />

      <div
        id="homeCarousel"
        className="carousel slide carousel-home"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#homeCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#homeCarousel" data-slide-to="1"></li>
          <li data-target="#homeCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="images/slider/slider0.png" alt="" />

            <div className="container">
              <div className="carousel-caption">
                <h2 style={{color: 'green'}} className="carousel-title bounceInDown animated slow">
                  MUSLIM AMBASSADORS UGANDA
                </h2>
                <h4 style={{color: 'green', textTransform: 'lowercase'}}className="carousel-subtitle bounceInUp animated slow ">
                  "For peace and justice"
                </h4>
                <a
                  href="#"
                  className="btn btn-lg btn-secondary hidden-xs bounceInUp animated slow"
                  data-toggle="modal"
                  data-target="#donateModal"
                >
                  DONATE NOW
                </a>
              </div>
            </div>
          </div>

          <div className="item ">
            <img src="images/slider/home-slider-2.jpg" alt="" />

            <div className="container">
              <div className="carousel-caption">
                <h2 className="carousel-title bounceInDown animated slow">
                  Together we can improve their lives
                </h2>
                <h4 className="carousel-subtitle bounceInUp animated slow">
                  {" "}
                  So let's do it !
                </h4>
                <a
                  href="#"
                  className="btn btn-lg btn-secondary hidden-xs bounceInUp animated"
                  data-toggle="modal"
                  data-target="#donateModal"
                >
                  DONATE NOW
                </a>
              </div>
            </div>
          </div>

          <div className="item ">
            <img src="images/slider/char.jpg" alt="" />

            <div className="container">
              <div className="carousel-caption">
                <h2 className="carousel-title bounceInDown animated slow">
                  A penny is a lot of money, if you have not got a penny.
                </h2>
                <h4 className="carousel-subtitle bounceInUp animated slow">
                  You can make the diffrence !
                </h4>
                <a
                  href="#"
                  className="btn btn-lg btn-secondary hidden-xs bounceInUp animated slow"
                  data-toggle="modal"
                  data-target="#donateModal"
                >
                  DONATE NOW
                </a>
              </div>
            </div>
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#homeCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="fa fa-angle-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a
          className="right carousel-control"
          href="#homeCarousel"
          role="button"
          data-slide="next"
        >
          <span className="fa fa-angle-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="section-home about-us fadeIn animated">
        {/* about us */}
      </div>

      <div className="section-home home-reasons">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="reasons-col animate-onscroll fadeIn">
                <img src="images/reasons/kassim.png" alt="" />

                <div className="reasons-titles">
                  <h3 className="reasons-title">We fight together</h3>
                  <h5 className="reason-subtitle">We are humans</h5>
                </div>

                <div className="on-hover hidden-xs">
                  <p>
                    {" "}
                    Promoting human rights and assisting disadvantaged
                    communities are noble causes that can truly make a
                    difference in people's lives. By advocating for human rights
                    and providing support to those in need,
                    <strong style={{ color: "green" }}>
                      {" "}
                     Muslim Ambassadors Uganda{" "}
                    </strong>
                    Ugandacontributing to a more just and equitable society
                  </p>

                  <p>
                    {" "}
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tenetur praesentium, itaque facilis nesciunt ab omnis cumque
                    similique ipsa veritatis perspiciatis, harum ad at nihil
                    molestias, dignissimos sint consequuntur. Officia, fuga. */}
                  </p>

                  <p> </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="reasons-col animate-onscroll fadeIn">
                <img src="images/reasons/we-care-about.jpg" alt="" />

                <div className="reasons-titles">
                  <h3 className="reasons-title">WE care about others</h3>
                  <h5 className="reason-subtitle">We are humans</h5>
                </div>

                <div className="on-hover hidden-xs">
                  <p>
                    {" "}
                    Children and general community health generally needs
                    instant attention from across the board to give hope to
                    every ugandan citizen
                  </p>

                  <p>
                    {" "}
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tenetur praesentium, itaque facilis nesciunt ab omnis cumque
                    similique ipsa veritatis perspiciatis, harum ad at nihil
                    molestias, dignissimos sint consequuntur. Officia, fuga. */}
                  </p>

                  <p>
                    {" "}
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tenetur praesentium, itaque facilis nesciunt ab omnis cumque
                    similique ipsa veritatis perspiciatis, harum ad at nihil
                    molestias, dignissimos sint consequuntur. Officia, fuga. */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-home our-causes animate-onscroll fadeIn">
        <div className="container">
          <h2 className="title-style-1">
            Our Causes <span className="title-under"></span>
          </h2>

          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="cause">
                <img
                  src="images/causes/cause-hunger.jpg"
                  alt=""
                  className="cause-img"
                />

                <div className="progress cause-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "30%" }}
                  ></div>
                </div>

                <h4 className="cause-title">
                  <a href="#">HUNGER AND POVERTY </a>
                </h4>
                <div className="cause-details">
                  We work to fights poverty and hunger, providing essential
                  resources and support to uplift communities and create a world
                  free from deprivation and ensure everyone has access to
                  nutritious food and opportunities
                </div>

                <div className="btn-holder text-center">
                  {/* <a
                    href="#"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#donateModal"
                  >
                    {" "}
                    DONATE NOW
                  </a> */}
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="cause">
                <img
                  src="images/causes/cause-education.jpg"
                  alt=""
                  className="cause-img"
                />

                <div className="progress cause-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "60%" }}
                  ></div>
                </div>

                <h4 className="cause-title">
                  <a>EDUCATION AND TRAINING</a>
                </h4>
                <div className="cause-details">
                  We champions education and training by providing free
                  resources and training, ensuring accessibility for all
                  learners.Their mission fosters lifelong learning and empowers
                  individuals to reach their full potential and create better
                  future for the less fortunate
                </div>

                <div className="btn-holder text-center">
                  {/* <a
                    href="#"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#donateModal"
                  >
                    {" "}
                    DONATE NOW
                  </a> */}
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="cause">
                <img
                  src="images/causes/cause-rights.jpg"
                  alt=""
                  className="cause-img"
                />

                <div className="progress cause-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "40%" }}
                  ></div>
                </div>

                <h4 className="cause-title">
                  <a href="#">HUMAN RIGHTS</a>
                </h4>
                <div className="cause-details">
                  We ensure everyone has access to nutritious food and
                  opportunities for dignity and equality prevail,we stand as a
                  beacon of hope, working tirelessly to uphold the inherent
                  rights and freedoms of every person. you can join to make a
                  difference
                </div>

                <div className="btn-holder text-center">
                  {/* <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#donateModal"> DONATE NOW</a> */}
                  {/* <Link
                    to={"/Donate"}
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#donateModal"
                  >
                    DONATE NOW
                  </Link> */}
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="cause">
                <img
                  src="images/causes/quran.jpeg"
                  alt=""
                  className="cause-img"
                />

                <div className="progress cause-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "60%" }}
                  ></div>
                </div>

                <h4 className="cause-title">
                  <a href="#">ARTS AND CULTURE </a>
                </h4>
                <div className="cause-details">
                  We promote art, religion, and culture, celebrating diversity
                  and fostering understanding across communities. we cultivate
                  the depth of Islam, and the richness of tradition, uniting
                  hearts and minds in a shared appreciation of our shared
                  humanity.
                </div>

                <div className="btn-holder text-center">
                  {/* <a
                    href="#"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#donateModal"
                  >
                    {" "}
                    DONATE NOW
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="section-home our-sponsors animate-onscroll fadeIn">
        <div className="container">
          <h2 className="title-style-1">
            Our Sponsors <span className="title-under"></span>
          </h2>

          <ul className="owl-carousel list-unstyled list-sponsors"> 
          <li>
              {" "}
              <img src="images/sponsors/bus.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="images/sponsors/wikimedia.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="images/sponsors/one-world.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="images/sponsors/wikiversity.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="images/sponsors/united-nations.png" alt="" />
            </li>

            <li>
              {" "}
              <img src="images/sponsors/bus.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="images/sponsors/wikimedia.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="images/sponsors/one-world.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="images/sponsors/wikiversity.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="images/sponsors/united-nations.png" alt="" />
            </li>
          </ul>
        </div>
      </div> */}
      <div className="section-home our-causes animate-onscroll fadeIn">
        <div className="container">
          <h2 className="title-style-1">
            Events <span className="title-under"></span>
          </h2>
          <a
            href="images/gallery/children-82272_1280.jpg"
            className="col-md-3 col-sm-4 gallery-item lightbox"
          >
            <img src="images/events/event1.jpg" alt="" />

            <span className="on-hover">
              <span className="hover-caption">
                bnmfbfgbmdvnmdlkvajvb jcnvm bhnzm vnbkhwjjbks fmxb
              </span>
            </span>
          </a>
          <a
            href="images/events/event2.jpg"
            className="col-md-3 col-sm-4 gallery-item lightbox"
          >
            <img src="images/events/event2.jpg" alt="" />

            <span className="on-hover">
              <span className="hover-caption">
                bnmfbfgbmdvnmdlkvajvb jcnvm bhnzm vnbkhwjjbks fmxb
              </span>
            </span>
          </a>
          <a
            href="images/events/event3.jpg"
            className="col-md-3 col-sm-4 gallery-item lightbox"
          >
            <img src="images/events/event3.jpg" alt="" />

            <span className="on-hover">
              <span className="hover-caption">
                bnmfbfgbmdvnmdlkvajvb jcnvm bhnzm vnbkhwjjbks fmxb
              </span>
            </span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCvCxFADitwiluRF2_Ol_QdA"
            className="col-md-3 col-sm-4 gallery-item lightbox"
          >
            <img src="images/events/event11.png" alt="" />

            <span className="on-hover">
              <span className="hover-caption">
                bnmfbfgbmdvnmdlkvajvb jcnvm bhnzm vnbkhwjjbks fmxb
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* footer */}

      {/* DONATE */}

      <div
        className="modal fade"
        id="donateModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="donateModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="donateModalLabel">
                DONATE NOW
              </h4>
            </div>
            <div className="modal-body">
              <form className="form-donation">
                <h3 className="title-style-1 text-center">
                  Thank you for your donation{" "}
                  <span className="title-under"></span>{" "}
                </h3>

                <div className="row">
                  <div className="form-group col-md-12 ">
                    <input
                      type="text"
                      className="form-control"
                      id="amount"
                      placeholder="AMOUNT(€)"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      placeholder="First name*"
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      placeholder="Last name*"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="Email*"
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Phone"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      placeholder="Address"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-md-12">
                    <textarea
                      cols="30"
                      rows="4"
                      className="form-control"
                      name="note"
                      placeholder="Additional note"
                    ></textarea>
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-md-12">
                    <button
                      type="submit"
                      className="btn btn-primary pull-right"
                      name="donateNow"
                    >
                      DONATE NOW
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}