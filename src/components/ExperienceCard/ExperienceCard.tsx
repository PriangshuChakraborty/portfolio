interface IExperienceCard {
  title: string;
  role: string;
  description: string;
  duration: string;
}

import { motion } from "framer-motion";

const ExperienceCard = ({ data }: { data: IExperienceCard }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className=" bg-[#242424] flex flex-col justify-center items-center rounded-md px-[30px] py-[15px]"
    >
      <h1 className=" font-Lato font-extrabold text-[30px] text-[#FD6F00] ">
        {data.title}
      </h1>
      <h4 className=" font-Lato font-bold text-[18px] text-[#454545] mb-[20px]">
        {data.role}
      </h4>
      <p className=" font-Lato font-medium text-[16px] text-[#959595] text-justify">
        {data.description}
      </p>
      <p className=" font-Lato font-bold text-[18px] text-[#FD6F00] mt-[20px]">
        {data.duration}
      </p>
    </motion.div>
  );
};

export default ExperienceCard;
