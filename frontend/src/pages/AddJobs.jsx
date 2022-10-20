import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Toast";
import { postingJob } from "../store/actions/jobActions";

const PostJobs = () => {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [batch, setBatch] = useState("");
  const [location, setLocation] = useState("");
  const [apply, setApply] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createJob = useSelector((state) => state.createJob);
  const { success, loading, error } = createJob;

  useEffect(() => {
    if (success) {
      alert("New Job Posted");
      navigate("/jobs");
    }
  }, [navigate, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      postingJob(position, company, salary, batch, location, apply, image)
    );
  };

  return (
    <>
      <h2 className="my-5">Post Job</h2>

      {loading ? (
        <Loader />
      ) : (
        <Form onSubmit={submitHandler}>
          {error && <Message variant={"danger"} msg={"An Error Occured "} />}
          <Row className="mb-3">
            <Col sm={12} md={6}>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Position</Form.Label>

                <Form.Control
                  style={{ borderRadius: 0, marginTop: "1rem" }}
                  type="text"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder="Enter Role Offered"
                />
              </Form.Group>
            </Col>

            <Col sm={12} md={6}>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  style={{ borderRadius: 0, marginTop: "1rem" }}
                  type="text"
                  placeholder="Company Name"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Package</Form.Label>
            <Form.Control
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              style={{ borderRadius: 0, marginTop: "1rem" }}
              placeholder="CTC offered"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridBatch">
            <Form.Label>Batch</Form.Label>
            <Form.Control
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              style={{ borderRadius: 0, marginTop: "1rem" }}
              placeholder="Enter targeted batch"
            />
          </Form.Group>

          <Row className="mb-3">
            <Col sm={12} md={4}>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{ borderRadius: 0, marginTop: "1rem" }}
                  placeholder="Enter Job location"
                />
              </Form.Group>
            </Col>

            <Col sm={12} md={4}>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Apply</Form.Label>
                <Form.Control
                  value={apply}
                  onChange={(e) => setApply(e.target.value)}
                  style={{ borderRadius: 0, marginTop: "1rem" }}
                  placeholder="Enter job link"
                />
              </Form.Group>
            </Col>

            <Col sm={12} md={4}>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Company logo</Form.Label>
                <Form.Control
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  style={{ borderRadius: 0, marginTop: "1rem" }}
                  placeholder="Enter Logo link"
                />
              </Form.Group>
            </Col>
          </Row>

          <Button
            variant="dark"
            type="submit"
            style={{ borderRadius: 0, padding: ".5rem 1rem", margin: "2rem 0" }}
          >
            Post
          </Button>
        </Form>
      )}
    </>
  );
};

export default PostJobs;
