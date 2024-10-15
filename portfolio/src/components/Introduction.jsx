import React, { useState, useEffect } from "react";

const Introduction = () => {
  const sentences = ["Hi, I am Aditi Shaw", "I am a Web Developer"];
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isTyping) {
        setDisplayedText((prevText) => {
          const nextChar = sentences[currentSentenceIndex][prevText.length];
          if (nextChar) {
            return prevText + nextChar;
          } else {
            setIsTyping(false);
            setTimeout(() => setIsTyping(true), 4000);
            return prevText;
          }
        });
      } else {
        setDisplayedText((prevText) => {
          if (prevText.length > 0) {
            return prevText.slice(0, -1);
          } else {
            setCurrentSentenceIndex(
              (prevIndex) => (prevIndex + 1) % sentences.length
            );
            setIsTyping(true);
            return "";
          }
        });
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [currentSentenceIndex, isTyping, sentences]);

  return (
    <div className="relative flex flex-col items-center justify-center sm:h-screen bg-black text-white">
      <video
        src="/assets/bgvid.mp4"
        autoPlay
        muted
        loop
        className="absolute sm:w-full sm:h-full sm:object-cover sm:block hidden"
      />
      <div className="relative z-10 flex flex-col items-center sm:mt-[50px] mt-[120px]">
        <img
          src="/assets/dp.jpg"
          className="rounded-full sm:w-[155px] sm:h-[155px] w-[100px] h-[100px] border-2 border-white"
        />
        <div className="text-center p-4 sm:text-[20px] text-[15px] h-[40px]">
          {displayedText}
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center sm:flex-row sm:items-start sm:gap-6 sm:p-8 mx-[50px]">
        <div className="flex-shrink-0">
          <img
            src="/assets/intro_img.jpeg"
            alt="Introduction"
            className="sm:w-auto h-[300px] rounded-lg shadow-lg sm:block hidden mt-[20px]"
          />
        </div>
        <p className="text-[20px] text-center font-bold sm:hidden">About Me</p>
        <div className="mt-4 sm:mt-0 leading-relaxed text-center flex sm:flex-row flex-col sm:gap-6 gap-2 sm:h-[340px] h-full">
          <div className="bg-gray-800 sm:bg-gray-900 bg-opacity-80 p-4 rounded-lg shadow-lg text-[15px] hover:scale-105">
            <h3 className="font-bold underline">
              Introduction and Passion for Web development
            </h3>
            👋 I am <i>Aditi Shaw</i>. I am a final year student, pursuing{" "}
            <strong>
              B.Tech in Computer Science and Engineering with specialization in
              Software Engineering
            </strong>{" "}
            from <strong>VIT-AP University.</strong> I have a keen interest in
            🌐
            <i>web development</i> and I like to keep learning and exploring new
            technologies in this field, so I can stay updated with the current
            trends. My enthusiasm for web development is not merely academic; it
            is a genuine fascination that fuels my commitment to continuous
            learning.
          </div>
          <div className="bg-gray-800 sm:bg-gray-900 bg-opacity-80 p-4 rounded-lg shadow-lg text-[15px] hover:scale-105">
            <h3 className="font-bold underline">
              Practical Experience and Skill Development
            </h3>
            Beyond the structured curriculum, I am deeply engaged in{" "}
            <i>independent projects</i> and hands-on experiences, allowing me to
            apply theoretical concepts in practical scenarios. This practical
            exposure not only sharpens my technical proficiency but also
            cultivates a <i>problem-solving mindset</i>. I am a team player with
            good communication and collaborative skills. I also have good
            leadership qualities and I like to take risks and go out of my
            comfort zone to try new things. Technology fascinates me and I
            strive to become better at what I do.
          </div>
          <div className="bg-gray-800 sm:bg-gray-900 bg-opacity-80 p-4 rounded-lg shadow-lg text-[15px] hover:scale-105">
            <h3 className="font-bold underline">
              Future Aspirations in Technology
            </h3>
            In the ever-evolving landscape of technology, I am driven by a
            resolute desire to become an adept and versatile professional. My
            journey is not just about acquiring knowledge but also about
            contributing meaningfully to the tech community. With a firm belief
            in the transformative power of technology 💻, I am excited about the
            endless possibilities it presents and aspire to make a positive
            impact 🌟 in this dynamic field.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
