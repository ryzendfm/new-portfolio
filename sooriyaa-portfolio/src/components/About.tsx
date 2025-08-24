import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Palette, Brain, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const features = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Expertise in MERN stack with a focus on creating scalable and maintainable applications."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Passionate about creating intuitive and beautiful user interfaces that enhance user experience."
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Exploring AI technologies and integrating them into modern web applications."
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Love tackling complex challenges and finding innovative solutions to technical problems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get to know more about my journey, passions, and what drives me in the world of technology.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    My Story
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm a passionate MERN Stack Developer who loves turning ideas into smooth, 
                      interactive, and user-focused digital experiences. My journey in technology 
                      began with curiosity about how things work behind the scenes.
                    </p>
                    <p>
                      I enjoy working on both the frontend and backend, blending creativity with 
                      technical problem-solving. This dual perspective allows me to create 
                      holistic solutions that not only function well but also provide exceptional 
                      user experiences.
                    </p>
                    <p>
                      Always curious about AI, automation, and modern web technologies, I thrive 
                      on building projects that make life easier and more exciting. I believe 
                      technology should be accessible, intuitive, and impactful.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Features Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">2+</div>
                    <div className="text-sm text-muted-foreground">Years Learning</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Projects Built</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">7+</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">2</div>
                    <div className="text-sm text-muted-foreground">Internships</div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;