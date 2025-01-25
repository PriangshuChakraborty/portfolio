import React from "react";

interface ISkillsCard {
  title: string;
  icon: React.ElementType;
}

const SkillsCard = ({ data }:{ data: ISkillsCard }) => {
  return (
    <div className=" bg-[#242424] flex flex-col justify-center items-center md:h-[150px] md:py-0 py-[10px] rounded-md ">
      <data.icon className=" text-[#FD6F00] md:text-[50px] text-[25px] md:mb-2 mb-1" />
      <h1 className=" text-[#575757] font-Lato font-bold md:text-[20px] text-[14px] ">
        {data.title}
      </h1>
    </div>
  );
};

export default SkillsCard;
