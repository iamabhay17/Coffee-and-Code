import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import heroImg from "../assets/homepage.jpg";
import { BsBookmarkDash, BsLightningCharge, BsLightbulb } from "react-icons/bs";
import { MdOutlineWorkOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Row
      className="mt-2 d-flex align-items-center justify-content-center home"
      style={{ minHeight: "70vh" }}
    >
      <Col sm={12} lg={5}>
        {/* heading */}
        <div style={{ fontSize: "2rem", fontWeight: 500 }}>
          Upskill Yourself
        </div>
        <div
          style={{ fontSize: "3.2rem", fontWeight: 700 }}
          onClick={() => navigate("/")}
        >
          Coffee <span style={{ color: "#0ea5e9" }}>&</span> Code
        </div>

        {/* list */}
        <ul
          style={{ fontSize: "1.2rem", listStyle: "none", fontWeight: 400 }}
          className="mt-3"
        >
          <li className="m-2">
            <BsBookmarkDash
              style={{ fontSize: "1.2rem", marginRight: "1rem" }}
            />
            Learn Everyday with structured curriculam
          </li>
          <li className="m-2">
            <MdOutlineWorkOutline
              style={{ fontSize: "1.2rem", marginRight: "1rem" }}
            />
            Get notified for the best Dev Jobs
          </li>
          <li className="m-2">
            <BsLightningCharge
              style={{ fontSize: "1.2rem", marginRight: "1rem" }}
            />
            Best Available Roadmap to upskill yourself
          </li>
          <li className="m-2">
            <BsLightbulb style={{ fontSize: "1.2rem", marginRight: "1rem" }} />
            Learn while building Projects
          </li>
        </ul>

        {/* buttons */}
        <Row>
          <Col>
            <Button
              className="my-3 px-4 py-3"
              variant="dark"
              onClick={() => navigate("/jobs")}
            >
              Get Started
            </Button>
            <Button
              className="m-3 px-4 py-3"
              variant="outline-dark"
              onClick={() => navigate("/learn")}
            >
              Learn Now
            </Button>
          </Col>
        </Row>
      </Col>
      <Col sm={12} lg={7}>
        <Image src={heroImg} alt="homepage" fluid />
      </Col>
    </Row>
  );
};

export default Home;
