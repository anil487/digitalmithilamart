import React from "react";

const Contact = () => {
  return (
    <div className="container mt-4" id="contact-us">
      <h2 className="text-center mb-4 font-bold">Contact Us</h2>
      <div className="flex flex-wrap justify-center">
        {/* Left side for contact form */}
        <div className="w-full lg:w-1/3 px-4 mb-4">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
        {/* Right side for map */}
        <div className="w-full lg:w-1/2 px-4 mb-4">
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <h3 className="text-center mb-4 font-bold align-middle">
              Our Location
            </h3>
            {/* {maps for company location} */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28468.11514741362!2d86.13361682139121!3d26.887165383168433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec1b0ab753a33f%3A0xda5ee1f3ca1b7040!2sBandipur%2C%20Badharamal%2056500!5e0!3m2!1sen!2snp!4v1710699145279!5m2!1sen!2snp"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="location-map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
