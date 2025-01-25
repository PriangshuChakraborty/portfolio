import { projectData } from "../constant";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

import React, { useRef } from "react";

const ProjectPage = () => {
  return (
    <div
      className=" md:w-10/12 w-11/12 mx-auto md:mt-[100px] mt-[40px] select-none"
      id="project"
    >
      <h1 className=" text-center md:text-[40px] text-[24px] font-Lato font-bold text-[#FEFEFE] tracking-[2px] md:pb-[120px] pb-[60px]">
        Projects
      </h1>
      <div className="space-y-[100px]">
        {projectData &&
          projectData.map((data, index) => {
            const ref = useRef(null); // Reference for viewport tracking
            const isInView = useInView(ref, { once: true }); // Trigger animation once

            return (
              <React.Fragment key={index}>
                {data.id % 2 !== 0 ? (
                  <motion.div
                    ref={ref}
                    className="flex md:flex-row flex-col-reverse justify-between items-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="md:mr-[60px] mt-[20px] md:mt-0">
                      <p className="font-K2D font-black text-[#FD6F00] md:text-[40px] text-[28px]">
                        {data.id < 10 ? `0${data.id}` : data.id}
                      </p>
                      <p className="font-Lato font-bold md:text-[30px] text-[20px] text-[#575757] mb-2">
                        {data.title}
                      </p>
                      <p className="font-Lato font-medium md:text-[20px] text-[16px] text-[#959595] text-justify">
                        {data.description} <span>Build using -</span>{" "}
                        <span className="text-[#FD6F00]">{data.techStack}</span>
                      </p>
                      <div className="flex justify-center md:justify-start space-x-[20px] mt-[20px]">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="text-white font-Lato text-[14px] md:text-[16px] font-bold rounded-[8px] bg-gradient-to-br from-[#FA6E00] to-[#E60026] md:px-[40px] px-[18px] md:py-[12px] py-[8px]"
                          onClick={() =>
                            window.open(data.websiteLink, "_blank")
                          }
                        >
                          Demo
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="text-white font-Lato text-[14px] md:text-[16px] font-bold rounded-[8px] bg-gradient-to-br from-[#FA6E00] to-[#E60026] md:px-[40px] px-[18px] md:py-[12px] py-[8px]"
                          onClick={() => window.open(data.githubLink, "_blank")}
                        >
                          Source
                        </motion.button>
                      </div>
                    </div>
                    <motion.img
                      src={data.image}
                      alt="project image"
                      className="md:object-contain object-cover md:h-[300px] h-[200px] rounded-xl border-4 border-[#575757]"
                      whileHover={{ scale: 1.05 }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    ref={ref}
                    className="flex md:flex-row flex-col justify-between items-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.img
                      src={data.image}
                      alt="project image"
                      className="md:object-contain object-cover md:h-[300px] h-[200px] rounded-xl border-4 border-[#575757]"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="md:ml-[60px] mt-[20px] md:mt-0">
                      <p className="font-K2D font-black text-[#FD6F00] md:text-[40px] text-[28px]">
                        {data.id < 10 ? `0${data.id}` : data.id}
                      </p>
                      <p className="font-Lato font-bold md:text-[30px] text-[20px] text-[#575757] mb-2">
                        {data.title}
                      </p>
                      <p className="font-Lato font-medium md:text-[20px] text-[16px] text-[#959595] text-justify">
                        {data.description} <span>Build using -</span>{" "}
                        <span className="text-[#FD6F00]">{data.techStack}</span>
                      </p>
                      <div className="flex space-x-[20px] justify-center md:justify-start mt-[20px]">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="text-white font-Lato text-[14px] md:text-[16px] font-bold rounded-[8px] bg-gradient-to-br from-[#FA6E00] to-[#E60026] md:px-[40px] px-[18px] md:py-[12px] py-[8px]"
                          onClick={() =>
                            window.open(data.websiteLink, "_blank")
                          }
                        >
                          Demo
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="text-white font-Lato text-[14px] md:text-[16px] font-bold rounded-[8px] bg-gradient-to-br from-[#FA6E00] to-[#E60026] md:px-[40px] px-[18px] md:py-[12px] py-[8px]"
                          onClick={() => window.open(data.githubLink, "_blank")}
                        >
                          Source
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
                {/* Add the <hr> after every item except the last */}
                {index !== projectData.length - 1 && (
                  <motion.hr
                    className="md:w-48 w-full h-px bg-[#575757] border-0 rounded mx-auto my-[50px]"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  />
                )}
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectPage;
