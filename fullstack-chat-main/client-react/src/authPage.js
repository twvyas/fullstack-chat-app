import { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

import Card from "react-bootstrap/Card";
import "./index.css";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);




  return (
    <>
      <Navbar className="bg-body-tertiary" bg="light" data-bs-theme="light">
        <Container className="Brand" >
          <Navbar.Brand href="#home"  ><strong>Talkative</strong></Navbar.Brand>
          
             
        </Container>
        <a href="https://github.com/"><FaGithub color="black" size={'1.3em'} ></FaGithub>   </a>&nbsp;&nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/twinkle-vyas-9079731a3/"> <FaLinkedinIn color="black"  size={'1.3em'}  /></a>
      </Navbar>

      <div className="App-Container">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Container>
          <Row>
            <Col md={10} className="mb-10">
              <Card
                className=" bg-primary text-white"
                border="primary"
                style={{ width: "30rem" }}
              >
                <Card.Body className="m-0">
                  <Card.Title className="text-green">World of Talkatives..</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    
                  </Card.Subtitle>
                  <Card.Text>
                   Connecting Minds Across Distances,Bridging Gaps with Words and Weaving a Web of Conversation in Today's Interconnected World
                  </Card.Text>
                  <Card.Link href="#">
                    <Button 
                      onClick={toggleShowA}
                      className="btn btn-primary btn-md center-block"
                      Style="width: 150px;"
                    >
                      <strong>Login here...</strong>
                    </Button>
                  </Card.Link>

                  <Card.Link href="#">
                    <Button 
                      onClick={toggleShowB}
                      className="btn btn-primary btn-md center-block"
                      Style="width: 150px;"
                    >
                      <strong>SignUp here...</strong>
                    </Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Row>
          <Col md={2} className="mb-2">
            <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
               
                <strong className="me-auto">LOGIN</strong>
                <small></small>
              </Toast.Header>
              <Toast.Body>
                <form onSubmit={onLogin}>
                  <div className="LoginDiv"></div>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="password"
                    name="secret"
                    placeholder="Password"
                    minLength="8"
                    onChange={(e) => setSecret(e.target.value) }
                   
                  />
                  <button type="submit">LOG IN</button>
                </form>
              </Toast.Body>
            </Toast>
          </Col>

          <Col md={2} className="mb-2">
            <Toast show={showB} onClose={toggleShowB}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">SignUp</strong>
                <small></small>
              </Toast.Header>
              <Toast.Body>
                <form onSubmit={onSignup}>
                  <div className="title"></div>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="password"
                    name="secret"
                    placeholder="Password"
                    minLength="8"
                    onChange={(e) => setSecret(e.target.value)}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <button  type="submit">SIGN UP</button>
                </form>
              </Toast.Body>
            </Toast>
          </Col>
        </Row>
      </div>

      <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
             

              
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style>{`
      // .login-page { width: 100vw; height: 100vh; padding-top: 6vw; background-color:black }
      // .card { width: 200px; position: relative; left: calc(50vw - 100px); text-align: center; }
      // .title { padding-top: 32px; font-size: 22px; color: white; font-weight: 700; }
      input { width: calc(100% - 16px); margin-top: 12px; padding: 8px; background-color: #e6f7ff; outline: none; border: 1px solid #e6f7ff; }
      button { margin-top: 12px; width: 100%; padding: 8px; }
      .LoginDiv {
        transition: width 2s, height 4s;
      }
      `}</style>
    </>
  );
};

export default AuthPage;
