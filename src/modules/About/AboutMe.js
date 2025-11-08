"use client";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/components/ui/button";
import {
  FaGamepad,
  FaPalette,
  FaMusic,
  FaGraduationCap,
  FaCode,
  FaBook,
} from "react-icons/fa";

const hobbyVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const hobbies = [
  { icon: FaCode, label: "Coding", color: "from-blue-600 to-violet-600" },
  { icon: FaPalette, label: "Design", color: "from-blue-500 to-teal-500" },
  { icon: FaGamepad, label: "Gaming", color: "from-purple-500 to-pink-500" },
  { icon: FaMusic, label: "Music", color: "from-yellow-500 to-red-500" },
  {
    icon: FaGraduationCap,
    label: "Learning",
    color: "from-green-500 to-emerald-500",
  },
  { icon: FaBook, label: "Reading", color: "from-amber-500 to-red-500" },
];

const downloadVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -3, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const experiences = [
  {
    title: "Software Engineer — Frontend Developer",
    company: "INVEXTECH",
    period: "February 2024 – August 2025",
    description:
      "Focused on building responsive, high-performance web interfaces using React.js, Next.js, and modern UI libraries. Collaborated closely with backend teams for seamless API integrations and contributed to optimizing user experience across multiple enterprise projects.",
  },
];


const AboutMe = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-sky-500  tracking-[.3em] mb-3">
              ABOUT ME
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting{" "}
              <AuroraText className="text-primary">
                Digital Experiences
              </AuroraText>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollAnimation direction="right">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Who I Am
              </h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  I’m <strong>Zeeshan</strong>, a passionate{" "}
                  <strong>Full Stack Developer</strong> with a strong foundation
                  in computer science and modern web technologies. I specialize
                  in building scalable, responsive, and high-performing
                  applications using{" "}
                  <strong>React.js, Next.js, and Node.js</strong>, along with{" "}
                  <strong>MongoDB</strong> and{" "}
                  <strong>cloud-based services</strong> like Firebase, Supabase,
                  and Cloudinary.
                </p>
                <p>
                  With a keen eye for clean UI and optimized backend logic, I
                  focus on delivering seamless digital experiences that combine
                  performance, functionality, and aesthetics.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Vision & Goals
              </h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  My vision is to build meaningful and scalable digital products
                  that make a real-world impact. I aim to bridge the gap between
                  frontend innovation and backend efficiency — creating systems
                  that are both beautiful and powerful.
                </p>
                <p>
                  In the near future, I plan to expand my expertise in{" "}
                  <strong>DevOps, microservices, and cloud deployment</strong>{" "}
                  workflows. Long-term, I aspire to lead full-stack projects and
                  engineering teams that bring cutting-edge technology to life.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" className="lg:col-span-2">
            <div className="space-y-6 mt-8">
              <h3 className="text-2xl font-semibold text-foreground text-center">
                Professional Experience
              </h3>
              <div className="grid grid-cols-1">
                {experiences?.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-sky-500  transition-all duration-500"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 0 20px rgba(var(--neon-primary), 0.2)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {exp.title}
                    </h4>
                    <p className="text-sky-500  font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.period}
                    </p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>{" "}
          <ScrollAnimation direction="up" className="lg:col-span-2">
            <div className="mt-16 space-y-8">
              <h3 className="text-2xl font-semibold text-foreground text-center">
                Hobbies & Interests
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.label}
                    className={`relative overflow-hidden p-6 rounded-xl bg-gradient-to-br ${hobby.color} group`}
                    variants={hobbyVariants}
                    initial="hidden"
                    whileInView="visible"
                    animate={{
                      y: [0, -5, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      },
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <motion.div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex flex-col items-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          transition: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2,
                          },
                        }}
                      >
                        <hobby.icon className="text-3xl mb-3 text-white drop-shadow-glow" />
                      </motion.div>
                      <span className="text-white font-medium text-sm drop-shadow-glow">
                        {hobby.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            direction="up"
            className="lg:col-span-2 flex justify-center"
          >
            <Button
              as="a"
              href="/ZEESHAN CV Mern L.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              className="mt-8 border border-primary/20 hover:bg-primary/5 transition-all duration-300 text-foreground hover:border-primary/50 shadow-lg hover:shadow-primary/20 inline-flex items-center gap-2"
              download
            >
              Download Resume
              <motion.span
                variants={downloadVariants}
                initial="initial"
                animate="animate"
                className="text-primary"
              >
                <MdOutlineFileDownload className="text-xl" />
              </motion.span>
            </Button>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
