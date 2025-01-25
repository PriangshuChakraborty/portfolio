import { BiLogoGmail } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";

const ContactPage = () => {
  return (
    <div
      className=" md:w-10/12 w-11/12 mx-auto md:mt-[150px] mt-[60px] select-none"
      id="contact"
    >
      <button
        className=" text-white text-[14px] md:text-[16px] font-Lato font-bold rounded-[8px] bg-gradient-to-br from-[#FA6E00] to-[#E60026] md:px-[40px] md:py-[12px] px-[16px] py-[8px]"
        onClick={() =>
          window.open(
            "https://mail.google.com/mail/?view=cm&to=cpriangshu@gmail.com",
            "_blank"
          )
        }
      >
        Compose Mail
      </button>
      <div className=" flex items-center space-x-3 mt-[15px]">
        <div
          className=" flex items-center justify-center h-[50px] w-[50px] rounded-full border-2 border-[#575757] bg-[rgba(255,255,255,0.04)] cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/priangshu-chakraborty-4a94b3256/",
              "_blank"
            )
          }
        >
          <CiLinkedin className=" text-[#BABABA] text-[33px]" />
        </div>
        <div
          className=" flex items-center justify-center h-[50px] w-[50px] rounded-full border-2 border-[#575757] bg-[rgba(255,255,255,0.04)] cursor-pointer"
          onClick={() =>
            window.open("https://github.com/PriangshuChakraborty", "_blank")
          }
        >
          <VscGithub className=" text-[#BABABA] text-[30px]" />
        </div>
        <div
          className=" flex items-center justify-center h-[50px] w-[50px] rounded-full border-2 border-[#575757] bg-[rgba(255,255,255,0.04)] cursor-pointer"
          onClick={() => window.open("https://x.com/Pri_code108", "_blank")}
        >
          <FaXTwitter className=" text-[#BABABA] text-[20px]" />
        </div>
        <div
          className=" flex items-center justify-center h-[50px] w-[50px] rounded-full border-2 border-[#575757] bg-[rgba(255,255,255,0.04)] cursor-pointer"
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&to=cpriangshu@gmail.com",
              "_blank"
            )
          }
        >
          <BiLogoGmail className=" text-[#BABABA] text-[27px]" />
        </div>
      </div>
      <h1 className=" font-Lato font-black md:text-[50px] text-[25px] text-[#FA6E00] mt-[16px] md:mt-[30px]">
        Reach out for
      </h1>
      <h1 className=" font-Lato font-black md:text-[50px] text-[25px] text-[#FA6E00]">
        Something extraordinary
      </h1>
      <p className=" font-Lato font-bold md:text-[20px] text-[16px] text-justify text-[#5d5d5d] md:mt-[20px] mt-[12px] ">
        I strive to break creative boundaries, crafting immersive, intuitive,
        and unforgettable interactive experiences that captivate and engage
        users.
      </p>
      <p className=" font-Lato font-bold md:text-[20px] text-[16px] text-[#cc6e27] md:mt-[30px] mt-[16px]">
        cpriangshu@gmail.com
      </p>
      <p className=" font-Lato font-bold md:text-[20px] text-[16px] text-[#cc6e27] ">
        +91-7810808600
      </p>
    </div>
  );
};

export default ContactPage;
