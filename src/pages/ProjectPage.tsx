import { projectData } from "../constant";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProjectPage = () => {
  return (
    <div className=" w-10/12 mx-auto mt-[100px] select-none">
      <h1 className=" text-center text-[40px] font-Lato font-bold text-[#FEFEFE] tracking-[2px] pb-[120px]">
        Projects
      </h1>
      <div className="space-y-[100px]">
      {projectData &&
        projectData.map((data, index) => {
          const ref = useRef(null); // Reference for viewport tracking
          const isInView = useInView(ref, { once: true }); // Trigger animation once

          return data.id % 2 !== 0 ? (
            <>
              <motion.div
                key={index}
                ref={ref}
                className="flex justify-between items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8}}
              >
                <div className="mr-[60px]">
                  <p className="font-K2D font-black text-[#FD6F00] text-[40px]">
                    {data.id < 10 ? `0${data.id}` : data.id}
                  </p>
                  <p className="font-Lato font-bold text-[30px] text-[#575757] mb-2">
                    {data.title}
                  </p>
                  <p className="font-Lato font-medium text-[20px] text-[#959595] text-justify">
                    {data.description} <span>Build using -</span>{" "}
                    <span className="text-[#FD6F00]">{data.techStack}</span>
                  </p>
                  <div className="flex space-x-[20px] mt-[20px]">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="text-white font-Lato font-bold rounded-[8px] bg-gradient-to-br from-[#FA6E00] to-[#E60026] px-[40px] py-[12px]"
                      onClick={() => window.open(data.websiteLink, "_blank")}
                    >
                      Demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="text-white font-Lato font-bold rounded-[8px] bg-gradient-to-br from-[#FA6E00] to-[#E60026] px-[40px] py-[12px]"
                      onClick={() => window.open(data.githubLink, "_blank")}
                    >
                      Source
                    </motion.button>
                  </div>
                </div>
                <motion.img
                  src={data.image}
                  alt="project image"
                  className="object-contain h-[300px] rounded-xl border-4 border-[#575757]"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
              {index !== projectData.length - 1 && (
                <motion.hr
                  className="w-48 h-px bg-[#575757] border-0 rounded mx-auto"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                />
              )}
            </>
          ) : (
            <>
              <motion.div
                key={index}
                ref={ref}
                className="flex justify-between items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <motion.img
                  src={data.image}
                  alt="project image"
                  className="object-contain h-[300px] rounded-xl border-4 border-[#575757]"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="ml-[60px]">
                  <p className="font-K2D font-black text-[#FD6F00] text-[40px]">
                    {data.id < 10 ? `0${data.id}` : data.id}
                  </p>
                  <p className="font-Lato font-bold text-[30px] text-[#575757] mb-2">
                    {data.title}
                  </p>
                  <p className="font-Lato font-medium text-[20px] text-[#959595] text-justify">
                    {data.description} <span>Build using -</span>{" "}
                    <span className="text-[#FD6F00]">{data.techStack}</span>
                  </p>
                  <div className="flex space-x-[20px] mt-[20px]">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="text-white font-Lato font-bold rounded-[8px] bg-gradient-to-br from-[#FA6E00] to-[#E60026] px-[40px] py-[12px]"
                      onClick={() => window.open(data.websiteLink, "_blank")}
                    >
                      Demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="text-white font-Lato font-bold rounded-[8px] bg-gradient-to-br from-[#FA6E00] to-[#E60026] px-[40px] py-[12px]"
                      onClick={() => window.open(data.githubLink, "_blank")}
                    >
                      Source
                    </motion.button>
                  </div>
                </div>
              </motion.div>
              {index !== projectData.length - 1 && (
                <motion.hr
                  className="w-48 h-px bg-[#575757] border-0 rounded mx-auto"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                />
              )}
            </>
          );
        })}
    </div>
    </div>
  );
};

export default ProjectPage;
