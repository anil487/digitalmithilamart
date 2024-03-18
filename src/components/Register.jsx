import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    
      <div className="w-2/3 p-8 bg-white shadow-md mt-6 mb-6 rounded-lg">
        <h3 className="text-center text-2xl font-semibold mb-6">Register</h3>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fn" className="block text-sm font-bold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="fn"
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div>
              <label htmlFor="ln" className="block text-sm font-bold text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="ln"
                className="form-control"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-bold text-gray-700">
                Gender
              </label>
              <div className="mt-1 space-y-2">
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    className="form-check-input"
                  />
                  <label htmlFor="male" className="ml-2 text-sm text-gray-700">
                    Male
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    className="form-check-input"
                  />
                  <label htmlFor="female" className="ml-2 text-sm text-gray-700">
                    Female
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    className="form-check-input"
                  />
                  <label htmlFor="other" className="ml-2 text-sm text-gray-700">
                    Other
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-bold text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="form-control"
                placeholder="Date of Birth"
              />
            </div>
            <div>
              <label htmlFor="contact" className="block text-sm font-bold text-gray-700">
                Contact Number
              </label>
              <input
                type="text"
                id="contact"
                className="form-control"
                placeholder="Contact Number"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="address" className="block text-sm font-bold text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                rows="3"
                className="form-control"
                placeholder="Address"
              ></textarea>
            </div>
            <div className="col-span-2">
              <label htmlFor="email" className="block text-sm font-bold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="password" className="block text-sm font-bold text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="cpassword" className="block text-sm font-bold text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="cpassword"
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 w-full"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-semibold">
            Login
          </Link>
        </div>
      </div>
    
  );
};

export default Register;
