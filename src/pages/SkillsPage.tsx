import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import SkillsCard from "../components/SkillsCard/SkillsCard";
import { skillsData } from "../constant";

const SkillsPage = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  return (
    <div className=" md:w-10/12 w-11/12 mx-auto md:mt-[150px] mt-[40px] select-none" id="skill">
      <h1 className=" text-center md:text-[40px] text-[24px] font-Lato font-bold text-[#FEFEFE] tracking-[2px] md:mb-[60px] mb-[50px] ">
        Skills
      </h1>
      <div ref={sectionRef} className="grid md:grid-cols-6 md:gap-4 grid-cols-3 gap-2">
  {skillsData &&
    skillsData.map((data, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        whileHover={{ scale: 1.05 }}
        transition={{
          duration: 0.5,
          delay: index * 0.2, // Staggered animation
          scale: { duration: 0.2 },
        }}
        style={{ display: "inline-block" }}
      >
        <motion.div
          animate={{
            rotate: [0, 4, -4, 0],
          }}
          transition={{
            duration: 1.2, // Duration of one cycle
            repeat: Infinity, // Loop infinitely
            ease: "easeInOut", // Smooth effect
            delay: index * 0.3, // Staggered animation
          }}
        >
          <SkillsCard data={data} />
        </motion.div>
      </motion.div>
    ))}
</div>
    </div>
  );
};

export default SkillsPage;
