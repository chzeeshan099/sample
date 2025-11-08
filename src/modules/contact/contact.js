'use client';
import { motion } from 'framer-motion';
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { AuroraText } from '@/components/magicui/aurora-text';

const Contact = () => {
  const contactLinks = [
    {
      icon: FiMail,
      label: 'Email',
      href: 'mailto:zeeshanfsdev099@gmail.com',
      color: 'from-[#FF6B6B] to-[#FF4757]'
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/chzeeshan099',
      color: 'from-[#6c5ce7] to-[#a29bfe]'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/muhammad-zeeshan-akram-a4026b381/',
      color: 'from-[#0077B5] to-[#00A0DC]'
    }
  ];

  return (
    <section className="py-20">
      <ScrollAnimation>
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-medium text-sky-500 tracking-[.3em]">Contact Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Let's Build <AuroraText className="text-gradient">Together</AuroraText>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Looking for a dedicated developer to bring your vision to life? I'm just a message away.
          </p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation direction="up" delay={0.3}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-6">
          {contactLinks.map((link, index) => (            <Button
              key={link.label}
              as="link"
              href={link.href}
              target="_blank"
              variant="ghost"
              size="lg"              className={`flex flex-col items-center p-8 rounded-xl border transition-all duration-500 space-y-4 w-full h-full relative
              bg-background/50 backdrop-blur-sm
              before:absolute before:inset-0 before:rounded-xl before:transition-all before:duration-500
              before:bg-gradient-to-r before:opacity-0 ${link.color}
              hover:before:opacity-10 hover:scale-[1.02]
              after:absolute after:inset-0 after:rounded-xl after:transition-all after:duration-500
              after:bg-gradient-to-r ${link.color} after:opacity-0 after:blur-xl
              hover:after:opacity-20 hover:border-transparent
              before:-z-10 after:-z-20`}
            >
              <div className={`p-4 rounded-full bg-gradient-to-r ${link.color} shadow-lg`}>
                <link.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground">{link.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Connect with me</p>
              </div>
            </Button>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Contact;
