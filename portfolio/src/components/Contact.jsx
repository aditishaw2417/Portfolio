import React from "react";

const Contact = () => {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      <div>
        <img
          src="/assets/dark_bg_contact.jpg"
          className="flex top-0 left-0 w-full h-full object-cover"
        ></img>
      </div>
      <div className="absolute flex items-center justify-center">
        <div className="h-[400px] w-[600px] bg-white opacity-45 border rounded-sm absolute"></div>
      </div>
    </div>
  );
};

export default Contact;
