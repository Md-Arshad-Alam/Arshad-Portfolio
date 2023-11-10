import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-end Developer"
            subTitle="Triumph Education and Publishing - (2022 - 2023)"
            result="Delhi"
            des="About Triumph IAS
            Civil Services Examinations should not only be viewed as a challenge, but also as an opportunity. To make this opportunity available and accessible to a large number of Civil Services Aspirants at affordable cost Triumph IAS has been formed and run under expert Guidance of Vikash Ranjan Sir. The aim is to counsel and coach students for the various Civil Services Examinations. The task is to bring about the right fit between the student and CSE. Our activities are designed to ensure that the right scores are obtained and emphasize on matching the Knowledge profile of the student with that of the Knowledge tested in CSE."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
