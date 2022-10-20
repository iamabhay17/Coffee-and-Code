import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiHome, BiBookmark, BiLockAlt, BiLockOpenAlt } from "react-icons/bi";
import { FiCoffee } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/userAction";
import { NavDropdown } from "react-bootstrap";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand
          style={{ display: "flex", gap: "1rem", alignItems: "center" }}
          onClick={() => navigate("/")}
        >
          <FiCoffee style={{ fontSize: "2rem", color: "white" }} />
          Coffee & Code
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            {userInfo && (
              <NavDropdown title="New">
                <NavDropdown.Item>
                  <Link
                    to="/addjob"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Post Jobs
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/adduser"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Create Admin
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            )}
            <Nav.Link
              style={{ display: "flex", gap: "0.2rem", alignItems: "center" }}
              onClick={() => navigate("/")}
            >
              <BiHome style={{ fontSize: "1.4rem" }} />
              Home
            </Nav.Link>

            <Nav.Link
              style={{ display: "flex", gap: "0.2rem", alignItems: "center" }}
              onClick={() => navigate("/learn")}
            >
              <BiBookmark style={{ fontSize: "1.4rem" }} />
              Learn
            </Nav.Link>
            <Nav.Link
              style={{ display: "flex", gap: "0.2rem", alignItems: "center" }}
              onClick={() => navigate("/jobs")}
            >
              <MdWorkOutline style={{ fontSize: "1.4rem" }} />
              Jobs
            </Nav.Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name}>
                <NavDropdown.Item onClick={handleLogout}>
                  <BiLockAlt
                    style={{ fontSize: "1.4rem", marginRight: "0.4rem" }}
                  />
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link onClick={() => navigate("/login")}>
                <BiLockOpenAlt
                  style={{ fontSize: "1.4rem", marginRight: "0.4rem" }}
                />
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
