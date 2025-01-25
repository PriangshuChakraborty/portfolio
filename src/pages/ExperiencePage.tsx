import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
import { experienceData } from "../constant";

const ExperiencePage = () => {
  // Variants for the individual experience cards (pop-up animation)
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 }, // Initially hidden and below the original position
    visible: { opacity: 1, scale: 1 }, // Visible with normal position
  };

  return (
    <div className="md:w-10/12 w-11/12 mx-auto md:mt-[150px] mt-[40px] select-none" id="experience">
      <h1 className="text-center md:text-[40px] text-[24px] font-Lato font-bold text-[#FEFEFE] tracking-[2px] md:mb-[100px] mb-[50px]">
        Experiences
      </h1>
      <motion.div
        className="grid md:grid-cols-3 grid-cols-1 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is visible
        transition={{
          staggerChildren: 0.5, // Controls the stagger effect (delay between animations of the cards)
        }}
      >
        {experienceData &&
          experienceData.map((data, index) => (
            <motion.div
              key={index}
              variants={cardVariants} // Slight scaling on hover
              transition={{
                duration: 0.6, // Duration of each animation
                delay: index * 0.2, // Stagger the animation for each card // Smooth scaling effect
              }}
              className="flex justify-center"
            >
              <ExperienceCard data={data} />
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default ExperiencePage;
