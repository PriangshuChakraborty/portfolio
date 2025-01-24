import { BiLogoGmail } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";

const ContactPage = () => {
  return (
    <div className=" w-10/12 mx-auto mt-[150px]">
      <button className=" text-white font-Lato font-bold rounded-[8px] bg-gradient-to-br from-[#FA6E00] to-[#E60026] px-[40px] py-[12px]">
        Compose Mail
      </button>
      <div className=" flex items-center space-x-3 mt-[15px]">
        <div className=" flex items-center justify-center h-[50px] w-[50px] rounded-full border-2 border-[#575757] bg-[rgba(255,255,255,0.04)] cursor-pointer">
          <CiLinkedin className=" text-[#BABABA] text-[33px]" />
        </div>
        <div className=" flex items-center justify-center h-[50px] w-[50px] rounded-full border-2 border-[#575757] bg-[rgba(255,255,255,0.04)] cursor-pointer">
          <VscGithub className=" text-[#BABABA] text-[30px]" />
        </div>
        <div className=" flex items-center justify-center h-[50px] w-[50px] rounded-full border-2 border-[#575757] bg-[rgba(255,255,255,0.04)] cursor-pointer">
          <FaXTwitter className=" text-[#BABABA] text-[20px]" />
        </div>
        <div className=" flex items-center justify-center h-[50px] w-[50px] rounded-full border-2 border-[#575757] bg-[rgba(255,255,255,0.04)] cursor-pointer">
          <BiLogoGmail className=" text-[#BABABA] text-[27px]" />
        </div>
      </div>
      <h1 className=" font-Lato font-black text-[50px] text-[#FA6E00] mt-[30px]">
        Let's talk for
      </h1>
      <h1 className=" font-Lato font-black text-[50px] text-[#FA6E00]">
        Something special
      </h1>
      <p className=" font-Lato font-bold text-[20px] text-[#5d5d5d] mt-[20px] ">
        I seek to push the limits of creativity to create high-engaging,
        user-friendly, and memorable interactive experiences.
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
