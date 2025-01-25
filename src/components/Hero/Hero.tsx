import { motion } from "framer-motion";

import { CiLinkedin } from "react-icons/ci";
import heroImg from "../../assets/images/hero.png";
import { VscGithub } from "react-icons/vsc";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className=" md:w-10/12 w-11/12 mx-auto md:flex justify-between md:mt-[100px] mt-[20px]">
      <div className="md:w-[56%] font-Lato md:text-start text-center">
        <p className=" md:text-[24px] text-[16px] text-[#575757] font-semibold">Hi I am</p>
        <p className="md:text-[28px] text-[20px] text-[#959595] font-bold">
          Priangshu Chakraborty
        </p>
        {/* <div className=" text-[70px] font-black bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-transparent bg-clip-text">
          FullStack Developer
        </div> */}
        <TypeAnimation
          sequence={[
            "FullStack Developer",
            1000,
            "Backend Developer",
            1000,
            "Frontend Developer",
            1000,
          ]}
          speed={40}
          repeat={Infinity}
          className=" md:text-[70px] text-[30px] font-black bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-transparent bg-clip-text"
        />
        <p className=" mt-[20px] md:text-[20px] text-[16px] text-[#575757] font-semibold">
          Passionate developer bridging frontend and backend expertise, crafting
          seamless full-stack. Learning today's web, Building tomorrow's web.
        </p>
        <div className=" flex items-center md:justify-start justify-center md:space-x-10 space-x-6 md:mt-[60px] mt-[30px]">
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: [0, -8, 0, 8, 0],
            }}
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              type: "tween",
              ease: "linear",
              scale: { duration: 0.2 },
            }}
            className=" flex items-center justify-center md:h-[70px] md:w-[70px] h-[50px] w-[50px] rounded-full border-2 border-[#575757] bg-[rgba(255,255,255,0.04)] cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/priangshu-chakraborty-4a94b3256/",
                "_blank"
              )
            }
          >
            <CiLinkedin className=" text-[#BABABA] md:text-[43px] text-[33px]" />
          </motion.div>
          <motion.div
            initial={{ y: -5 }}
            animate={{
              y: [-8, 0, 8, 0, -8],
            }}
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              type: "tween",
              ease: "linear",
              scale: { duration: 0.2 },
            }}
            className=" flex items-center justify-center md:h-[70px] md:w-[70px] h-[50px] w-[50px] rounded-full border-2 border-[#575757] bg-[rgba(255,255,255,0.04)] cursor-pointer"
            onClick={() =>
              window.open("https://github.com/PriangshuChakraborty", "_blank")
            }
          >
            <VscGithub className=" text-[#BABABA] md:text-[40px] text-[30px]" />
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: [0, -8, 0, 8, 0],
            }}
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              type: "tween",
              ease: "linear",
              scale: { duration: 0.2 },
            }}
            className=" flex items-center justify-center md:h-[70px] md:w-[70px] h-[50px] w-[50px] rounded-full border-2 border-[#575757] bg-[rgba(255,255,255,0.04)] cursor-pointer"
            onClick={() => window.open("https://x.com/Pri_code108", "_blank")}
          >
            <FaXTwitter className=" text-[#BABABA] md:text-[30px] text-[20px]" />
          </motion.div>
          <motion.div
            initial={{ y: -5 }}
            animate={{
              y: [-8, 0, 8, 0, -8],
            }}
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              type: "tween",
              ease: "linear",
              scale: { duration: 0.2 },
            }}
            className=" flex items-center justify-center md:h-[70px] md:w-[70px] h-[50px] w-[50px] rounded-full border-2 border-[#575757] bg-[rgba(255,255,255,0.04)] cursor-pointer"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&to=cpriangshu@gmail.com",
                "_blank"
              )
            }
          >
            <BiLogoGmail className=" text-[#BABABA] md:text-[37px] text-[27px] " />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        // style={{ display: "inline-block" }}
        className="md:block md:w-auto w-full flex justify-center items-center"
      >
        <motion.img
          src={heroImg}
          alt="hero image"
          className="object-contain md:h-[400px] h-[250px] mt-[25px] md:mt-0"
          animate={{
            y: [0, -10, 0, 10, 0],
            scale: [1, 1.05, 1], // Continuous floating effect
          }}
          transition={{
            duration: 4, // Duration of the floating animation cycle
            repeat: Infinity, // Repeats forever
            ease: "linear", // Smooth easing for floating
          }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
