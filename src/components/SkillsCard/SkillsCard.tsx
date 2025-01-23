import React from "react";

interface SkillsCardProps {
  title: string;
  icon: React.ElementType;
}

const SkillsCard = ({ data }:{ data: SkillsCardProps }) => {
  return (
    <div className=" bg-[#242424] flex flex-col justify-center items-center h-[150px] w-[200px] rounded-md ">
      <data.icon className=" text-[#FD6F00] text-[50px] mb-2" />
      <h1 className=" text-[#575757] font-Lato font-bold text-[20px] ">
        {data.title}
      </h1>
    </div>
  );
};

export default SkillsCard;
