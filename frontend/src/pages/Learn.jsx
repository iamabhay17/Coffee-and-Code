import React from "react";
import { Image } from "react-bootstrap";
import { courses } from "../data/courses";
import "../index.css";
import { platform } from "../data/platforms";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";

const Learn = () => {
  const navigate = useNavigate();
  return (
    <>
      <Slider />
      {/* courses */}

      <h4 className="my-4 pb-3" style={{ fontWeight: 600 }}>
        Courses
      </h4>
      <div className="course-container">
        {courses.map((item) => (
          <div
            key={item._id}
            className="m-4 course-container-items"
            onClick={() => navigate(`/learn/${item._id}`)}
          >
            <Image src={item.icon} alt="alt" style={{ width: "120px" }} />
          </div>
        ))}
      </div>
      {/* platform */}
      <h4 className="my-4 pb-3" style={{ fontWeight: 600 }}>
        Coding Platforms
      </h4>
      <div className="platform-container">
        {platform.map((item) => (
          <div key={item._id} className="m-4 platform-container-items">
            <a href={item.site} target="_blank" rel="noreferrer">
              <Image src={item.icon} alt="alt" style={{ width: "120px" }} />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Learn;
