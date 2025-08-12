import { useEffect, useState } from "react";
import { navData } from "../../constant";
import { Link } from "react-scroll";
import { CgMenuLeftAlt } from "react-icons/cg";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <div
      className={` ${
        isScrolled
          ? "bg-gradient-to-b from-[#0f0f0f]/80 to-[#171717]/80 backdrop-blur-md shadow-md"
          : "bg-gradient-to-b from-[#0f0f0f] to-[#171717]"
      }`}
    >
      {/* Desktop View */}
      <div className="w-10/12 mx-auto hidden md:flex justify-between items-center py-5">
        <div className="font-K2D bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-transparent bg-clip-text font-extrabold text-[30px] cursor-pointer">
          PRIANGSHU
        </div>
        <div className="flex space-x-16">
          {navData &&
            navData.map((item, index) => (
              <Link
                className="text-[20px] font-medium font-Lato text-[#959595] cursor-pointer"
                key={index}
                to={item.link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
              >
                {item.title}
              </Link>
            ))}
        </div>
        <button
          className="text-white font-Lato font-bold rounded-[8px] bg-gradient-to-br from-[#FA6E00] to-[#E60026] px-[40px] py-[12px]"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1V0ZUUlvPRXCDIbrF6LMdeVFrvRgwoahk/view",
              "_blank"
            )
          }
        >
          Download CV
        </button>
      </div>

      {/* Mobile View */}
      <div className="w-11/12 mx-auto md:hidden flex justify-between items-center py-4">
        <CgMenuLeftAlt
          className="text-[24px] text-[#959595]"
          onClick={() => setShowMobileMenu(true)}
        />
        <div className="font-K2D bg-gradient-to-r from-[#FA6E00] to-[#E60026] text-transparent bg-clip-text font-bold text-[22px] cursor-pointer">
          PRIANGSHU
        </div>
        <button
          className="text-white font-Lato font-medium text-[14px] rounded-[8px] bg-gradient-to-br from-[#FA6E00] to-[#E60026] px-[8px] py-[8px]"
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
      <AnimatePresence>
        {showMobileMenu && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black/20 z-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 left-0 w-screen h-screen bg-black/70 backdrop-blur-md  z-10">
                <div className=" flex justify-between w-10/12 mx-auto mt-[30px]">
                  <div className=" font-semibold text-[#959595] text-[20px] mb-[10px]">
                    All Menu
                  </div>
                  <div className="bg-[#FA6E00] rounded-sm h-[22px] w-[22px] flex justify-center items-center">
                    <RxCross2
                      className=" text-xl text-white"
                      onClick={() => setShowMobileMenu(false)}
                    />
                  </div>
                </div>
                <div className="flex flex-col my-[20px] mx-[40px]">
                  {navData &&
                    navData.map((item, index) => {
                      return (
                        <Link
                          key={index}
                          to={item.link}
                          className=" mb-[20px] border-b-2 border-[#FA6E00] "
                          onClick={() => setShowMobileMenu(false)}
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={800}
                        >
                          <div className="font-semibold pb-[10px] text-[#787878]">
                            {item.title}
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
