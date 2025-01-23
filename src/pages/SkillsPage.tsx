import SkillsCard from "../components/SkillsCard/SkillsCard"
import { skillsData } from "../constant"


const SkillsPage = () => {
  return (
    <div className=" w-10/12 mx-auto mt-[150px]">
        <h1 className=" text-center text-[40px] font-Lato font-bold text-[#FEFEFE] tracking-[2px] mb-[60px] ">Skills</h1>
        <div className=" grid grid-cols-6 gap-4 ">
            {skillsData && skillsData.map((data, index) => (
                <SkillsCard key={index} data={data} />
            ))}
        </div>
    </div>
  )
}

export default SkillsPage