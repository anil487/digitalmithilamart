import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { ImgsigninUp } from "../components/minicomponents/ImgsigninUp";

const SignIn = () => {
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("useranil");

    const { email, password } = inpval;

    if (email === "") {
      toast.error("Email field is required", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("Please enter a valid email address", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("Password field is required", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("Password length should be greater than five", {
        position: "top-center",
      });
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("Invalid Details, Please SignIn with Correct details");
        } else {
          console.log("user login successfully");

          localStorage.setItem("currentUser", JSON.stringify(userlogin[0]));

          navigate("/products");
        }
      }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_side mt-4 py-3" style={{ width: "100%" }}>
            <h3
              className="text-center col-lg-6 mt-3"
              style={{
                color: "blue",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              Sign in
            </h3>
            <Form onSubmit={addData}>
              <Form.Group className="mb-3 col-lg-6 mt-3" controlId="formBasicEmail">
                <Form.Label>Enter Your Email</Form.Label>
                <Form.Control
                  type="email"
                  onChange={getdata}
                  name="email"
                  placeholder="Email"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Label>Enter Your Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={getdata}
                  name="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="signup-btn">
                Submit
              </Button>
            </Form>
            <p className="mt-3" style={{fontSize:"18px", fontWeight:"bold"}}>
              Don't Have an Account?
              <span>
                <NavLink to="/signup"> Sign Up</NavLink>{" "}
              </span>
            </p>
          </div>
          <ImgsigninUp />
        </section>
      </div>
    </>
  );
};

export default SignIn;
