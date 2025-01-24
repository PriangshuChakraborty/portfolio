import { navData } from "../../constant";

const Navbar = () => {
  return (
    <div className=" w-full bg-gradient-to-b from-[#0f0f0f] to-[#171717]">
      <div className=" w-10/12 mx-auto flex justify-between items-center py-5">
        <div className="font-K2D bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-transparent bg-clip-text font-extrabold text-[30px]">
          PRIANGSHU
        </div>
        <div className="flex space-x-16">
          {navData &&
            navData.map((item, index) => (
              <div
                key={index}
                className=" text-[20px] font-medium font-Lato text-[#959595]"
              >
                {item}
              </div>
            ))}
        </div>
        <button
          className=" text-white font-Lato font-bold rounded-[8px] bg-gradient-to-br from-[#FA6E00] to-[#E60026] px-[40px] py-[12px]"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1kemqPGiiXlb8GUtWbQvN8v21WuS5J_k_/view?usp=sharing",
              "_blank"
            )
          }
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Navbar;
