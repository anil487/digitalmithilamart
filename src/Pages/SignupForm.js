import React from "react";
import { useState } from "react";
import { ImgsigninUp } from "../components/minicomponents/ImgsigninUp";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify"; 
import { NavLink } from "react-router-dom";
import "../components/CSS/Supform.css";

const SignupForm = () => {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    Number: "",
    password: ""
  });

  const [data, setData] = useState([]);

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval((prevInput) => ({
      ...prevInput,
      [name]: value
    }));
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, Number, password } = inpval;

    if (name === "") {
      toast.error("Name field is required!", {
        position: "top-center"
      });
    } else if (email === "") {
      toast.error("Email field is required", {
        position: "top-center"
      });
    } else if (!email.includes("@")) {
      toast.error("Please enter a valid email address", {
        position: "top-center"
      });
    } else if (Number === "") {
      toast.error("Number field is required", {
        position: "top-center"
      });
    } else if (password === "") {
      toast.error("Password field is required", {
        position: "top-center"
      });
    } else if (password.length < 5) {
      toast.error("Password length should be greater than five", {
        position: "top-center"
      });
    } else {
      alert("Data added successfully");
      localStorage.setItem("useranil", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_side mt-4 py-3" style={{ width: "100%" }}>
            <h3
              className="text-center col-lg-6 "
              style={{
                color: "blue",
                fontWeight: "bold",
                fontSize: "24px"
              }}
            >
              Sign Up
            </h3>
            <Form onSubmit={addData}>
              <Form.Group className="mb-3 mt-3 col-lg-6" controlId="formBasicName">
                <Form.Label>Enter Your Name</Form.Label>
                <Form.Control type="text" onChange={getdata} name="name" placeholder="Name" required />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Enter Your Email</Form.Label>
                <Form.Control type="email" onChange={getdata} name="email" placeholder="Email" required />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicDOB">
                <Form.Label>Enter Your Contact Number</Form.Label>
                <Form.Control type="Number" onChange={getdata} name="Number" placeholder="Number" required />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Label>Enter Your Password</Form.Label>
                <Form.Control type="password" onChange={getdata} name="password" placeholder="Password" required />
              </Form.Group>
              <Button variant="primary" type="submit" className="signup-btn">
                Submit
              </Button>
            </Form>
            <p className="mt-3" style={{ fontSize: "18px", fontWeight: "bold" }}>
              Already Have an Account <span> <NavLink to='/signin'>Signin</NavLink></span>
            </p>
          </div>
          <ImgsigninUp />
        </section>
      </div>
    </>
  );
};

export default SignupForm;
