'use client';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { AuroraText } from '@/components/magicui/aurora-text';

const frontendSkills = [
  { name: 'HTML', color: 'bg-rose-500', level: 95 },
  { name: 'CSS', color: 'bg-blue-500', level: 90 },
  { name: 'JavaScript', color: 'bg-yellow-400', level: 90 },
  { name: 'TypeScript', color: 'bg-indigo-500', level: 85 },
  { name: 'React', color: 'bg-cyan-400', level: 92 },
  { name: 'Next.js', color: 'bg-purple-600', level: 88 },
  { name: 'Vue.js', color: 'bg-emerald-500', level: 80 },
  { name: 'TailwindCSS', color: 'bg-teal-400', level: 95 },
  { name: 'Material UI', color: 'bg-sky-500', level: 85 },
  { name: 'Chakra UI', color: 'bg-fuchsia-500', level: 82 },
  { name: 'Redux', color: 'bg-violet-500', level: 85 },
  { name: 'Zustand', color: 'bg-lime-500', level: 80 },
  { name: 'Framer Motion', color: 'bg-pink-500', level: 80 },
  { name: 'Rizzui', color: 'bg-orange-500', level: 85 },
  { name: 'Aceternity UI', color: 'bg-amber-500', level: 80 },
  { name: 'Bootstrap', color: 'bg-green-500', level: 85 },
  { name: 'SASS / SCSS', color: 'bg-red-400', level: 85 },
  { name: 'GSAP', color: 'bg-indigo-400', level: 78 },
];


const backendSkills = [
  { name: 'Node.js', color: 'bg-green-500' },
  { name: 'Express.js', color: 'bg-gray-600' },
  { name: 'MongoDB', color: 'bg-emerald-500' },
  { name: 'Mongoose', color: 'bg-lime-600' },
  { name: 'REST API', color: 'bg-red-500' },
  { name: 'Firebase', color: 'bg-amber-500' },
  { name: 'Supabase', color: 'bg-cyan-600' },
  { name: 'Cloudinary', color: 'bg-sky-500' },
  { name: 'JWT Auth', color: 'bg-purple-600' },
  { name: 'Bcrypt.js', color: 'bg-blue-700' },
  { name: 'Postman', color: 'bg-orange-500' },
  { name: 'Git', color: 'bg-rose-600' },
  { name: 'GitHub', color: 'bg-gray-800' },
  { name: 'Figma', color: 'bg-pink-500' },
  { name: 'Render / Vercel', color: 'bg-teal-500' },
  { name: 'Redux Toolkit', color: 'bg-violet-500' },
];


const Skills = () => {
	return (
		<section className="w-full py-20 overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
			<ScrollAnimation>
				<div className="text-center mb-16 space-y-4">
					<p className="text-sm font-medium text-sky-500  tracking-[.3em]">
						TECHNICAL EXPERTISE
					</p>
					<h2 className="text-4xl md:text-5xl font-bold text-foreground">
						My Digital{' '}
						<AuroraText className="text-gradient ">Toolkit</AuroraText>
					</h2>
					<div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						A curated collection of technologies and tools I use to deliver
						robust, scalable, and impactful digital solutions.
					</p>
				</div>
			</ScrollAnimation>

			<ScrollAnimation delay={0.3}>
				<Marquee
					speed={30}
					gradient={true}
					gradientColor={[0, 0, 0]}
					className="overflow-hidden"
				>
					{frontendSkills.map((skill, index) => (
						<motion.div
							key={`frontend-${index}`}
							className="flex items-center gap-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-2 mx-2 hover:border-primary/50 transition-all duration-200"
							whileHover={{ scale: 1.02 }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: index * 0.05, duration: 0.2 }}
						>
							<div className={`w-2.5 h-2.5 rounded-full ${skill.color}`} />
							<span className="text-foreground font-medium">{skill.name}</span>
						</motion.div>
					))}
				</Marquee>
			</ScrollAnimation>

			<ScrollAnimation delay={0.6}>
				<Marquee
					speed={40}
					direction="right"
					gradient={true}
					gradientColor={[0, 0, 0]}
					className="overflow-hidden mt-8"
				>
					{backendSkills.map((skill, index) => (
						<motion.div
							key={`backend-${index}`}
							className="flex items-center gap-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-2 mx-2 hover:border-primary/50 transition-all duration-300"
							whileHover={{ scale: 1.05, y: -2 }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: index * 0.1 }}
						>
							<div className={`w-2.5 h-2.5 rounded-full ${skill.color}`} />
							<span className="text-foreground font-medium">{skill.name}</span>
						</motion.div>
					))}
				</Marquee>
			</ScrollAnimation>
		</section>
	);
};

export default Skills;
