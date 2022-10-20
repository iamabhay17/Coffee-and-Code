import { useState } from "react";
import { Image, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import Accordion from "react-bootstrap/Accordion";
import Message from "../components/Toast";
import ComingSoon from "../components/ComingSoon";

const LearnId = () => {
  const params = useParams();
  const id = params.id;

  const [learn] = useState(courses[id - 1]);

  return (
    <>
      {learn.comingSoon ? (
        <ComingSoon />
      ) : (
        <div>
          <Row>
            <div className="my-5 d-flex align-items-center gap-3">
              <Image src={learn.icon} alt="alt" style={{ width: "80px" }} />
              <div className="d-flex flex-column">
                <h6>Course : {learn.course}</h6>
                <h6>Duration : {learn.duration}</h6>
              </div>
            </div>
          </Row>
          <Row>
            <Accordion defaultActiveKey="1">
              {learn.weeks.map((item) => (
                <Accordion.Item eventKey={item.week}>
                  <Accordion.Header>Week {item.week}</Accordion.Header>
                  <Accordion.Body>
                    <Table
                      striped
                      bordered
                      hover
                      responsive
                      className="table-sm"
                    >
                      <thead>
                        <tr>
                          <td></td>
                          <td>Topic</td>
                        </tr>
                      </thead>
                      <tbody>
                        {item.lectures.map((e) => (
                          <tr>
                            <td>Day {e.day}</td>
                            <td>
                              <a
                                href={e.link}
                                target="_blank"
                                rel="noreferrer"
                                style={{ textDecoration: "none" }}
                              >
                                {" "}
                                {e.topic}{" "}
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <div>
                      Project for Week {item.week} :{" "}
                      <a
                        href={item.project.link}
                        style={{ textDecoration: "none" }}
                      >
                        {item.project.name}
                      </a>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Row>
          <Row className="mt-5">
            <Message
              variant={"success"}
              msg={"Congratulation for Completing this Course"}
            />
          </Row>
        </div>
      )}
    </>
  );
};

export default LearnId;
