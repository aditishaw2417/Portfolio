import React from "react";

const Card = ({ title, description, photo }) => {
  return (
    <div className="bg-white p-6 rounded-lg w-[300px] h-[400px] flex flex-col justify-between hover:scale-105 shadow-lg shadow-slate-50 opacity-75 transition-transform duration-300">
      <h3 className="text-2xl font-extrabold mb-4 text-gray-600">{title}</h3>
      <img
        src={photo}
        className="w-[240px] h-[290px] object-cover rounded-md mb-4"
      />
      <p className="text-md text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
