import React, { useState, useReducer } from "react";
import { Form, Button, Toast, ToastBody } from "react-bootstrap";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import User from "./User";
const URL_ = " http://6d11d158.ngrok.io "; //use ngrok proxy lib for new ip////"http://69cca652.ngrok.io";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [isSignin, setSignin] = useState(false);
  const [count, setCount] = useState(0);
  const [userData, setData] = useState({});
  const handleRequest = async () => {
    try {
      const response = await axios.post(
        `https://cors-anywhere.herokuapp.com/${URL_}/signin`,
        { email: user, password: pass },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log({ ...response.data });

      try {
        const user = await axios.get(
          `https://cors-anywhere.herokuapp.com/${URL_}/`,
          {
            headers: { Authorization: `Bearer ${response.data.token}` },
          }
        );
        setSignin(true);
        setData(user.data);
        console.log({ ...user.data });
      } catch (error) {
        console.log(error.message);
        setSignin(false);
        setCount(count + 1);
      }
    } catch (error) {
      console.log(error.message);
      setSignin(false);
      setCount(count + 1);
    }
  };

  return (
    <div>
      <Toast show={isSignin} style={{ position: "absolute", left: 620 }}>
        <Toast.Header>
          <p>HEY ! YOU HAVE SUCCESSFULLY SIGNED IN </p>
        </Toast.Header>
        <ToastBody as="div">
          <User data={{ ...userData }} />
        </ToastBody>
        <Button variant="outline-dark" href="/">
          close
        </Button>
      </Toast>
      <Toast
        show={count > 0 && !isSignin ? true : false}
        style={{ position: "absolute", left: 620, top: 350 }}
      >
        <Toast.Header>
          <p>HEY ! YOU HAVE GOT AN ERROR !!! </p>
        </Toast.Header>
        <Button variant="outline-dark" href="/signin">
          Signin Again !
        </Button>
      </Toast>
      <div
        style={{
          marginTop: 100,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(173,216, 230, 0.5)",
          borderRadius: 6,
          marginLeft: 500,
          marginRight: 500,
        }}
      >
        <Form style={{ display: "table", marginLeft: 150, marginRight: 150 }}>
          <Form.Group
            style={{
              flexdirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(name) => {
                return setUser(name.target.value);
              }}
            ></Form.Control>
          </Form.Group>
          <Form.Group
            style={{
              flexdirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(name) => {
                return setPass(name.target.value);
              }}
            ></Form.Control>
          </Form.Group>
          <Button
            style={{ marginBottom: 10, alignSelf: "normal" }}
            className="FormControl"
            variant="primary"
            onClick={() => {
              handleRequest();
            }}
          >
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
