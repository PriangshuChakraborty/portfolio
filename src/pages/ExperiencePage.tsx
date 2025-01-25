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
    <div className="w-10/12 mx-auto mt-[150px] select-none" id="experience">
      <h1 className="text-center text-[40px] font-Lato font-bold text-[#FEFEFE] tracking-[2px] mb-[100px]">
        Experiences
      </h1>
      <motion.div
        className="grid grid-cols-3 gap-4"
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
              variants={cardVariants}
              transition={{
                duration: 0.6, // Duration of each animation
                delay: index * 0.2, // Stagger the animation for each card
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
