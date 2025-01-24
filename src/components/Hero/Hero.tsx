import { motion } from "framer-motion";

import { CiLinkedin } from "react-icons/ci";
import heroImg from "../../assets/images/hero.png";
import { VscGithub } from "react-icons/vsc";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className=" w-10/12 mx-auto flex justify-between mt-[100px]">
      <div className="w-[56%] font-Lato">
        <p className=" text-[24px] text-[#575757] font-semibold">Hi I am</p>
        <p className="text-[28px] text-[#959595] font-bold">
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
          className=" text-[70px] font-black bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] text-transparent bg-clip-text"
        />
        <p className=" mt-[20px] text-[20px] text-[#575757] font-semibold">
          Passionate developer bridging frontend and backend expertise, crafting
          seamless full-stack. Learning today's web, Building tomorrow's web.
        </p>
        <div className=" flex items-center space-x-10 mt-[60px]">
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: [0, -8, 0, 8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              type: "tween",
              ease: "linear",
            }}
            className=" flex items-center justify-center h-[70px] w-[70px] rounded-full border-2 border-[#575757] bg-[rgba(255,255,255,0.04)] cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/priangshu-chakraborty-4a94b3256/",
                "_blank"
              )
            }
          >
            <CiLinkedin className=" text-[#BABABA] text-[43px]" />
          </motion.div>
          <motion.div
            initial={{ y: -5 }}
            animate={{
              y: [-8, 0, 8, 0, -8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              type: "tween",
              ease: "linear",
            }}
            className=" flex items-center justify-center h-[70px] w-[70px] rounded-full border-2 border-[#575757] bg-[rgba(255,255,255,0.04)] cursor-pointer"
            onClick={() =>
              window.open("https://github.com/PriangshuChakraborty", "_blank")
            }
          >
            <VscGithub className=" text-[#BABABA] text-[40px]" />
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: [0, -8, 0, 8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              type: "tween",
              ease: "linear",
            }}
            className=" flex items-center justify-center h-[70px] w-[70px] rounded-full border-2 border-[#575757] bg-[rgba(255,255,255,0.04)] cursor-pointer"
            onClick={() => window.open("https://x.com/Pri_code108", "_blank")}
          >
            <FaXTwitter className=" text-[#BABABA] text-[30px]" />
          </motion.div>
          <motion.div
            initial={{ y: -5 }}
            animate={{
              y: [-8, 0, 8, 0, -8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              type: "tween",
              ease: "linear",
            }}
            className=" flex items-center justify-center h-[70px] w-[70px] rounded-full border-2 border-[#575757] bg-[rgba(255,255,255,0.04)] cursor-pointer"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&to=cpriangshu@gmail.com",
                "_blank"
              )
            }
          >
            <BiLogoGmail className=" text-[#BABABA] text-[37px]" />
          </motion.div>
        </div>
      </div>
      <motion.div>
        <img
          src={heroImg}
          alt="hero image"
          className=" object-contain h-[400px]"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
