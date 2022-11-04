import React, { useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import loginImg from "../assets/login.jpg";
import { FiLock, FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { login } from "../store/actions/userAction";
import Loader from "../components/Loader";
import Message from "../components/Toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log({ email, password });

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/jobs");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Row className="my-2 ">
      <Col sm={12} md={6}>
        <Image src={loginImg} alt="alt" fluid className="mb-3" />
      </Col>
      <Col
        sm={12}
        md={6}
        className="d-flex align-items-center justify-content-center"
      >
        {loading ? (
          <Loader />
        ) : error ? (
          <Message msg={error} />
        ) : (
          <Form onSubmit={submitHandler}>
 
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label
                style={{
                  fontWeight: 500,
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                }}
                className="mb-3"
              >
                <FiUser style={{ fontSize: "1.2rem" }} />
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                style={{ borderRadius: 0 }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label
                style={{
                  fontWeight: 500,
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                }}
                className="mb-3"
              >
                <FiLock style={{ fontSize: "1.2rem" }} />
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ borderRadius: 0 }}
              />
              <Form.Text className="text-muted">
                Your Password is Secure with us..
              </Form.Text>
            </Form.Group>
            <Button
              variant="dark"
              type="submit"
              style={{ borderRadius: 0, padding: ".5rem 1rem" }}
            >
              Login
            </Button>
          </Form>
        )}
      </Col>
    </Row>
  );
};

export default Login;
