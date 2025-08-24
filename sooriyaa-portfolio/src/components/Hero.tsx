import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Hi, I'm{' '}
              <motion.span 
                className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0%", "100%", "0%"] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                Sooriyaa TN
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium mb-4">
              MERN Stack Developer | UI/UX Enthusiast | AI Explorer
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap justify-center items-center gap-6 text-muted-foreground">
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="h-4 w-4" />
                <span>Dindigul</span>
              </motion.div>
              <motion.a
                href="mailto:tnsooriyaa@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-4 w-4" />
                <span>tnsooriyaa@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+918807607068"
                className="flex items-center gap-2 hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="h-4 w-4" />
                <span>+91 8807607068</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate MERN Stack Developer who loves turning ideas into smooth, 
              interactive, and user-focused digital experiences. I enjoy working on both 
              the frontend and backend, blending creativity with technical problem-solving.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => scrollToSection('about')}
                className="group relative overflow-hidden"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Learn More About Me
                </motion.span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="group"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  View My Projects
                </motion.span>
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex justify-center gap-6">
              <motion.a
                href="https://www.linkedin.com/in/sooriyaatn"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://github.com/sooriyaatn"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;