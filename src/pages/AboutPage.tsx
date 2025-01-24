import { motion } from "framer-motion";
import aboutImg from "../assets/images/about.png";

const AboutPage = () => {
  return (
    <div className=" w-10/12 mx-auto mt-[100px] select-none">
      <h1 className=" text-center text-[40px] font-Lato font-bold text-[#FEFEFE] tracking-[2px] mb-[100px] ">
        About Me
      </h1>
      <div className=" flex justify-between items-center">
        <motion.img
          src={aboutImg}
          alt="about image"
          className=" object-contain h-[400px]"
          animate={{
            x: [0, -10, 0, 10, 0],
            scale: [1, 1.05, 1], // Scale effect
          }}
          transition={{
            duration: 4, // Duration of the floating animation cycle
            repeat: Infinity, // Repeats forever
            ease: "linear", // Smooth easing for floating
            style: "spring", // Spring animation
          }}
        />
        <motion.div className="font-Lato font-medium text-[20px] text-[#959595] text-justify pl-[150px] space-y-[16px]">
          <motion.p
            whileHover={{ scale: 1.02 }} // Slight scaling on hover
            transition={{ duration: 0.3 }}
          >
            I am a passionate student pursuing a{" "}
            <motion.span
              initial={{ color: "#FD6F00" }}
              whileHover={{ color: "#959595" }} // Text color change on hover
              transition={{ duration: 0.3 }}
            >
              Bachelor of Technology in Computer Science and Engineering
            </motion.span>
            . My journey into the world of web development began in the middle
            of 2021, and since then, I’ve been deeply immersed in honing my
            skills and exploring the vast possibilities within the field.
          </motion.p>

          <motion.p
            whileHover={{ scale: 1.02 }} // Slight scaling on hover
            transition={{ duration: 0.3 }}
          >
            As a{" "}
            <motion.span
              initial={{ color: "#FD6F00" }}
              whileHover={{ color: "#959595" }} // Text color change on hover
              transition={{ duration: 0.3 }}
            >
              full-stack developer
            </motion.span>{" "}
            with a keen interest in pushing boundaries and expanding my
            horizons, I thrive on turning ideas into functional, impactful
            solutions. I enjoy the challenge of building dynamic user
            experiences on the frontend while crafting efficient and scalable
            systems on the backend. For me,{" "}
            <motion.span
              initial={{ color: "#FD6F00" }}
              whileHover={{ color: "#959595" }} // Text color change on hover
              transition={{ duration: 0.3 }}
            >
              web development isn’t just a career—it’s a passion
            </motion.span>{" "}
            that drives me to innovate and leave a meaningful impact.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
