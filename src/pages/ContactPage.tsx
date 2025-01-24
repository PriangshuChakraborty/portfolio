import { BiLogoGmail } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";

const ContactPage = () => {
  return (
    <div className=" w-10/12 mx-auto mt-[150px] select-none">
      <button
        className=" text-white font-Lato font-bold rounded-[8px] bg-gradient-to-br from-[#FA6E00] to-[#E60026] px-[40px] py-[12px]"
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
      <h1 className=" font-Lato font-black text-[50px] text-[#FA6E00] mt-[30px]">
        Reach out for
      </h1>
      <h1 className=" font-Lato font-black text-[50px] text-[#FA6E00]">
        Something extraordinary
      </h1>
      <p className=" font-Lato font-bold text-[20px] text-[#5d5d5d] mt-[20px] ">
        I strive to break creative boundaries, crafting immersive, intuitive,
        and unforgettable interactive experiences that captivate and engage
        users.
      </p>
      <p className=" font-Lato font-bold text-[20px] text-[#cc6e27] mt-[30px]">
        cpriangshu@gmail.com
      </p>
      <p className=" font-Lato font-bold text-[20px] text-[#cc6e27] ">
        +91-7810808600
      </p>
    </div>
  );
};

export default ContactPage;
