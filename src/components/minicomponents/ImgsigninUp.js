import React from "react";
import signup from "../../Assets/signup.jpg";

export const ImgsigninUp = () => {
  return (
    <>
      <div className="right_side  py-3 mt-4" style={{ width: "100%" }}>
        <div className="create_aimg mt-4">
          <img src={signup} style={{ maxWidth: 400 }} alt="createaimg" />
        </div>
      </div>
    </>
  );
};
