import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Vadym</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces and web application using JavaScript
          </p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}

      <div className="absolute top-[60%] xs:top-[55%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] green-pink-gradient p-[1px] rounded-[20px] shadow-card overflow-hidden">
        <a href="https://drive.google.com/file/d/1XC5NbB7En5Mr4eSDVUikpsqSem98GDEq/view?usp=sharing" target='_blank' className="bg-tertiary rounded-[20px] inline-block font-bold px-7 py-2 text-[20px] hover:text-[#915eff] transition duration-500 ease-in-out">
          CV
        </a>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
