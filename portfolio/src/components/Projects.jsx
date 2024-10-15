import React, { useState } from "react";
import Card from "./Card";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "To-Do List",
      description:
        "A simple to-do list for day to day activities built using react.js as frontend, node.js and express.js as backend, and MySQL as database.",
      photo:
        "https://tse3.mm.bing.net/th?id=OIP.pRzdZJkqOT8GW9aJJp2mHQHaFj&pid=Api&P=0&h=180",
    },
    {
      title: "Automatic Checkouts",
      description:
        "An AI/ML project wherein the ML model detects the object and automatically generates the bill. I created the API and the user interface.",
      photo:
        "https://static.vecteezy.com/system/resources/thumbnails/016/552/316/original/animated-supermarket-checkout-quine-at-grocery-store-full-body-flat-person-on-white-background-with-alpha-channel-transparency-colorful-cartoon-style-hd-footage-of-character-for-animation-video.jpg",
    },
    {
      title: "Encrypted Datasets",
      description:
        "An entire website for training datasets without knowing about the contents. The datasets are encrypted and can be decrypted only with our library function.",
      photo:
        "https://www.cryptographyworld.com/wp-content/uploads/2017/11/data-encryption1.jpg",
    },
    {
      title: "Portfolio",
      description:
        "A portfolio made with the help of react.js and tailwind CSS which gives information about me, my skills and projects",
      photo:
        "https://tse3.mm.bing.net/th?id=OIP.IXNzh9MZ6I2-vSoXVTWCUgHaE7&pid=Api&P=0&h=180",
    },
    {
      title: "Demo Educational Page",
      description:
        "A one page website for an educational institute with its information and placements statistics. Made with react.js",
      photo:
        "https://tse2.mm.bing.net/th?id=OIP.wey4I4jweyXq3zS43KilewHaEV&pid=Api&P=0&h=180",
    },
  ];

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="relative sm:h-screen w-screen h-[500px] overflow-hidden"
    >
      <img
        src="/assets/projects_bg.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="background"
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
        <h2 className="text-[25px] font-bold text-white p-6 sm:block hidden">
          Projects
        </h2>
        <motion.button
          onClick={handlePrevious}
          className="absolute left-4 bg-purple-800 text-white px-4 py-2 rounded-lg md:left-0 md:ml-52"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaCaretLeft />
        </motion.button>

        <div className="grid grid-cols-3 sm:opacity-100 opacity-0 gap-10">
          {projects
            .slice(currentIndex, currentIndex + 3)
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <Card
                  title={project.title}
                  photo={project.photo}
                  description={project.description}
                />
              </motion.div>
            ))}
        </div>

        <div className="grid grid-cols-1 sm:hidden gap-6 absolute mt-10">
          {projects
            .slice(currentIndex, currentIndex + 1)
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <Card
                  title={project.title}
                  photo={project.photo}
                  description={project.description}
                />
              </motion.div>
            ))}
        </div>

        <motion.button
          onClick={handleNext}
          className="absolute right-4 bg-purple-800 text-white px-4 py-2 rounded-lg md:right-0 md:mr-52"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaCaretRight />
        </motion.button>
      </div>
    </div>
  );
}

export default Projects;
