import { useEffect, useState } from "react";
import { navData } from "../../constant";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full sticky top-0 left-0 right-0 z-50 ${
        isScrolled
          ? "bg-gradient-to-b from-[#0f0f0f]/80 to-[#171717]/80 backdrop-blur-md shadow-md"
          : "bg-gradient-to-b from-[#0f0f0f] to-[#171717]"
      }`}
    >
      <div className=" w-10/12 mx-auto flex justify-between items-center py-5">
        <div className="font-K2D bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-transparent bg-clip-text font-extrabold text-[30px] cursor-pointer">
          PRIANGSHU
        </div>
        <div className="flex space-x-16">
          {navData &&
            navData.map((item, index) => (
              <Link
                className="text-[20px] font-medium font-Lato text-[#959595] cursor-pointer"
                key={index}
                to={item.link} // Match this with the ID of the section
                spy={true}
                smooth={true}
                offset={-80} // Adjust offset if needed
                duration={800} // Scroll duration in ms
              >
                {item.title}
              </Link>
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
