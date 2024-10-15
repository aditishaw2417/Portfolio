import React, { useState } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const experience = [
    {
      title: "Full-stack Web Development Intern",
      description:
        " Developed and optimized the VIT-AP website using Next.js, JavaScript, and Strapi. Improved user experience, performance, and streamlined backend processes for efficient updates and maintenance.",
      photo: "/assets/image.png",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center sm:h-screen w-screen h-[500px] overflow-hidden bg-gray-900"
    >
      <img
        src="/assets/ex_bg.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        alt="background"
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-6xl mx-auto px-4">
          <div className="text-left sm:w-1/2 p-6">
            <h2 className="text-4xl font-bold text-white mb-4">
              My Experience
            </h2>
            <p className="text-lg text-gray-300">
              Here is a brief overview of my experience in web development. I
              have worked on various projects involving different technologies
              and frameworks. Each project has helped me grow and enhance my
              skills, allowing me to tackle new challenges with confidence.
            </p>
          </div>
          <div className="sm:w-1/2 flex items-center justify-center mt-6 sm:mt-0">
            {experience.map((ex, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <Card
                  title={ex.title}
                  photo={ex.photo}
                  description={ex.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
