import ExperienceCard from "../components/ExperienceCard/ExperienceCard";

const ExperiencePage = () => {
  return (
    <div className=" w-10/12 mx-auto mt-[150px]">
      <h1 className=" text-center text-[40px] font-Lato font-bold text-[#FEFEFE] tracking-[2px] mb-[100px]">
        Experience
      </h1>
      <div className=" grid grid-cols-3 gap-4 ">
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
      </div>
    </div>
  );
};

export default ExperiencePage;
