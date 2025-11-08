'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
import { AuroraText } from "@/components/magicui/aurora-text";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { featuredProjects } from './projectsData';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const ref = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: () => (
      <div className="w-2 h-2 rounded-full bg-primary/50 hover:bg-primary transition-colors" />
    ),
  };

  if (!featuredProjects?.length) {
    return null;
  }

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background via-background to-primary/5">
      <div className="max-w-6xl mx-auto px-2 md:px-6">
        <ScrollAnimation>
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm font-medium text-sky-500  tracking-[.3em]">FEATURED PROJECTS</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Recent <AuroraText className="text-primary">Work</AuroraText>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my expertise in building modern web applications using cutting-edge technologies.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 gap-16">
          {featuredProjects.map((project, index) => (
            <ScrollAnimation key={project.title || index} direction={index % 2 === 0 ? "right" : "left"}>
              <motion.div
                className="flex flex-col lg:flex-row gap-8 items-center bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 p-3 lg:p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(var(--neon-primary),0.2)] group"
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-300">
                    <Slider {...sliderSettings}>
                      {project?.images?.map((image, imgIndex) => (
                        <div key={imgIndex} className="relative aspect-video">
                          <Image
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            fill
                            className=" transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </Slider>
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex gap-4 md:flex-row flex-col md:items-center">
                    {project.logo && (
                      <div className="relative w-24 h-12 bg-gray-100/70 rounded-xl  overflow-hidden">
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          fill
                          className="object-contain p-0"
                        />
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}                        className="px-3 py-1 text-sm bg-sky-500/5 text-sky-500  rounded-full border border-primary/10 group-hover:border-primary/30 transition-all duration-200"
                        whileHover={{ scale: 1.03 }}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * techIndex, duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>                  {project.liveLink && (
                    <Button
                      as="link"
                      href={project.liveLink}
                      target="_blank"
                      variant="default"
                      size="lg"
                      className="relative group bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-primary/20 transition-all duration-300"
                    >
                      <span className="mr-2">Visit Project</span>
                      <GoArrowUpRight className="text-lg" />
                    </Button>
                  )}
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


