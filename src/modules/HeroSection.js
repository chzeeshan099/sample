"use client";

import { IconCloudDemo } from "@/components/cloud";
import { AuroraText } from "@/components/magicui/aurora-text";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const mouseX = useMotionTemplate`${50}%`;
  const mouseY = useMotionTemplate`${50}%`;

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const offset = 80;
      const elementPosition =
        projectsSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  const floatVariants = {
    animate: {
      y: [-5, 5],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const arrowVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const nameGradientColors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"];

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20">
      <motion.div
        className="absolute inset-0 opacity-0 mix-blend-soft-light pointer-events-none"
        animate={{
          opacity: [0, 0.5, 0],
          background: [
            "radial-gradient(600px circle at 0% 0%, rgba(var(--neon-primary), 0.15), transparent 40%)",
            "radial-gradient(600px circle at 100% 100%, rgba(var(--neon-primary), 0.15), transparent 40%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full md:w-1/2 space-y-6 sm:space-y-8 px-4 sm:px-6 mt-8 md:mt-0"
      >
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="space-y-4 sm:space-y-6"
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-medium"
          >
         Hi, I&apos;m{" "}
            <AuroraText
              colors={nameGradientColors}
              speed={0.5}
              className="font-bold text-3xl sm:text-4xl "
            >
              ZEESHAN!
            </AuroraText>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl  font-bold"
          >
            <span className="mr-3 text-foreground inline">Full Stack</span>
            <AuroraText className="text-primary  mt-2 sm:mt-0">
              Developer
            </AuroraText>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            I’m a passionate Full Stack Developer specializing in building
            modern web and mobile applications. I create scalable and efficient
            solutions using React, Next.js, Vue, Node.js, Express, and MongoDB,
            with experience in Firebase, Supabase, and Cloudinary. My goal is to
            deliver seamless user experiences and robust backend architectures
            for innovative projects.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button
            onClick={scrollToProjects}
            variant="default"
            size="lg"
            className="relative group w-full sm:w-auto  text-white bg-primary/90 shadow-lg hover:shadow-primary/20 transition-all duration-300 overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="mr-2">View My Work</span>
            <motion.span
              variants={arrowVariants}
              initial="initial"
              animate="animate"
              className="inline-flex items-center"
            >
              <FaArrowDown className="h-4 w-4" />
            </motion.span>
          </Button>

          <Button
            as="a"
            href="/ZEESHAN CV Mern L.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border border-primary/20 hover:bg-primary/5 bg-primary/10 backdrop-blur-sm transition-all duration-300 text-foreground hover:border-primary/50 shadow-lg hover:shadow-primary/20"
          >
            Download Resume
          </Button>
        </motion.div>
      </motion.div>{" "}
      <motion.div className="w-full md:w-1/2 flex justify-center items-center p-4 sm:p-6 md:p-8">
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="relative w-full max-w-[400px] aspect-square"
        >
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="w-full h-full">
            <IconCloudDemo />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
