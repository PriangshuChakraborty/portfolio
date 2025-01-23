import { BiSolidQuoteRight } from "react-icons/bi";

const TestimonialCard = () => {
    return (
      <div className="bg-[#242424] flex flex-col justify-center items-center rounded-md px-[30px] py-[50px]">
        <div className="h-[80px] w-[80px] rounded-full bg-[#FD6F00] flex justify-center items-center relative mb-[40px]">
          <p className="font-Lato text-[50px] font-black text-[#242424]">R</p>
          <div className="absolute -right-2 bottom-[2px] h-[30px] w-[30px] rounded-full bg-[#999999] flex justify-center items-center">
            <BiSolidQuoteRight className="text-[#3b3b3b] text-[20px]" />
          </div>
        </div>
        <p className="font-Lato font-medium text-[17px] text-[#959595] text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quia fuga assumenda modi voluptates atque alias tempora ipsa, eum minima!
        </p>
        <h4 className="font-Lato font-bold text-[24px] text-[#FD6F00] text-center mt-[50px]">Ramik Mukherjee</h4>
        <p className=" font-Lato font-bold text-[18px] text-[#5d5d5d] ">Fullstack Developer</p>
      </div>
    );
  };
  
  export default TestimonialCard;
  
