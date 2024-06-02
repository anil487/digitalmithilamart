import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import App from "../App";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import { Navbar } from "react-bootstrap";
import AboutUs from "../Pages/AboutUs";
import SignupForm from "../Pages/SignupForm";
import SignIn from "../Pages/SignIn";
import Products from "./Products";
import Cart from "./Cart";
export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import  Layout from "./layout/Layout"
// import App from "../App"; 
// import Contact from "../Pages/Contact"; 
// import Home from "../Pages/Home"; 
// import AboutUs from "../Pages/AboutUs"; 
// import SignupForm from "../Pages/SignupForm"; 
// import SignIn from "../Pages/SignIn"; 
// import Products from "./Products"; 
// import Cart from "./Cart"; 
// import Navbar from 'react-bootstrap/Navbar'; 

// export const MyRoutes = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<App />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="home" element={<Home />} />
//           <Route path="about" element={<AboutUs />} />
//           <Route path="signin" element={<SignIn />} />
//           <Route path="signup" element={<SignupForm />} />
//           <Route path="cart" element={<Cart />} />
//           <Route path="products" element={<Products />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };
