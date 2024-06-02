import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
     
    </>
  );
};
export default Layout;


// import React from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from '../layout/Navbar'
// const Layout = () => {
//   return (
//     <>
//       <Navbar>
    
//       </Navbar>
//       <div className="content">
//         <Outlet />
//       </div>
//     </>
//   );
// };

// export default Layout;

