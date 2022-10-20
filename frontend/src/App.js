import Footer from "./components/Footer";
import Header from "./components/Navbar";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Learn from "./pages/Learn";
import Register from "./pages/AddUser";
import PostJobs from "./pages/AddJobs";
import LearnId from "./pages/LearnId";

function App() {
  return (
    <>
      <Header />
      <Container style={{ minHeight: "75vh" }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adduser" element={<Register />} />
          <Route path="/addjob" element={<PostJobs />} />
          <Route path="/learn/:id" element={<LearnId />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
