import React, { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Toast";
import { deleteJob, listJobs } from "../store/actions/jobActions";

const Jobs = () => {
  const dispatch = useDispatch();

  const jobList = useSelector((state) => state.jobList);
  const { jobs, loading, error } = jobList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const jobDelete = useSelector((state) => state.jobDelete);
  const {
    loading: deleteLoading,
    error: deleteError,
    success: deleteSuccess,
  } = jobDelete;

  useEffect(() => {
    dispatch(listJobs());
  }, [dispatch, deleteSuccess]);

  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure ? ")) {
      //delete
      dispatch(deleteJob(id));
    }
  };

  return (
    <>
      {loading || deleteLoading ? (
        <Loader />
      ) : (
        <div className="mt-3">
          {(error || deleteError) && (
            <Message msg={"Unable to delete"} variant={"danger"} />
          )}
          {deleteSuccess && <Message msg={"Job Deleted"} variant={"info"} />}
          {jobs.map((item) => (
            <Card className="m-3">
              <Row>
                <Col
                  sm={12}
                  md={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image src={item.image} alt="alt" fluid />
                </Col>
                <Col sm={12} md={7} className="p-3">
                  <ListGroup variant="flush" style={{ fontWeight: 600 }}>
                    <ListGroupItem>
                      Company :{" "}
                      <span style={{ color: "#0ea5e9" }}>{item.company}</span>
                    </ListGroupItem>
                    <ListGroupItem>
                      Position :{" "}
                      <span style={{ color: "#0ea5e9" }}>{item.position}</span>
                    </ListGroupItem>
                    <ListGroupItem>
                      Location :{" "}
                      <span style={{ color: "#0ea5e9" }}>{item.location}</span>
                    </ListGroupItem>
                    <ListGroupItem>
                      Batch :{" "}
                      <span style={{ color: "#0ea5e9" }}>{item.batch}</span>
                    </ListGroupItem>
                    <ListGroupItem>
                      Package :{" "}
                      <span style={{ color: "#0ea5e9" }}>{item.salary}</span>
                    </ListGroupItem>
                    <ListGroupItem className="my-3">
                      <Button
                        variant="dark"
                        href={item.apply}
                        className="mx-1"
                        style={{ borderRadius: 0, padding: ".5rem 1rem" }}
                      >
                        Apply
                      </Button>
                      {userInfo && (
                        <>
                          <Button
                            className="mx-1"
                            variant="danger"
                            style={{ borderRadius: 0, padding: ".5rem 1rem" }}
                            onClick={() => deleteHandler(item._id)}
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
              <Col sm={12} md={1}></Col>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};
export default Jobs;
