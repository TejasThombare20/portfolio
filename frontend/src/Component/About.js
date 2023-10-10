import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl">
          I am a pre-final year student at the Indian Institute of Information
          Technology Gwalior, pursuing an IPG-MBA degree in Information
          Technology. My academic journey has provided me with a strong
          foundation and a drive to delve into the world of technology.
          <br />
          As a Competitive Programmer, I have a keen interest in Web Development
          and Machine Learning. Exploring various tools and techniques to
          enhance my skills and knowledge has always fascinated me. I thrive on
          challenges and consider myself a team player, motivated and eager to
          learn from every experience.
          <br />
          Currently, I am actively seeking opportunities for a Software
          Development Engineer internship to further apply and expand my
          expertise. I am excited to contribute and learn in a professional
          setting, leveraging my passion and skills to make a positive impact.
          <br />
          {/* In addition to my academic pursuits and technical interests, I am
          deeply committed to continuous growth and development. I believe in
          staying updated with the latest advancements in the tech industry,
          attending workshops, and engaging in online courses to broaden my
          horizons. Beyond that, I am also passionate about giving back to the
          community. I envision using my knowledge and skills to contribute to
          meaningful projects that address real-world challenges, making a
          positive difference in people's lives through technology. This
          alignment of purpose drives my ambition and fuels my dedication to
          excel in the field of software development */}

       

        </p>
      </div>
    </div>
  );
};

export default About;
