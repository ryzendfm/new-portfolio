import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"],
      color: "bg-green-500/10 text-green-600 border-green-200"
    },
    {
      title: "Database",
      skills: ["MongoDB", "SQL"],
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    },
    {
      title: "Programming Languages",
      skills: ["Java", "C", "C++", "Python"],
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Data Science", "REST APIs", "Microsoft Azure"],
      color: "bg-pink-500/10 text-pink-600 border-pink-200"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/20 to-background">
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
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1) 
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: [0, -1, 1, 0],
                            transition: { duration: 0.3 }
                          }}
                          viewport={{ once: true }}
                        >
                          <Badge 
                            variant="secondary" 
                            className={`${category.color} hover:shadow-md transition-all duration-200 cursor-default`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Skills Showcase */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    What I Bring to the Table
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    A combination of technical expertise, creative problem-solving, and a passion for learning new technologies.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-primary">🚀</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Fast Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Quick to adapt and learn new technologies as they emerge
                    </p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-primary">💡</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Problem Solving</h4>
                    <p className="text-sm text-muted-foreground">
                      Analytical thinking and creative solutions to complex challenges
                    </p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-primary">🎯</span>
                    </div>
                    <h4 className="font-semibold text-foreground">Detail Oriented</h4>
                    <p className="text-sm text-muted-foreground">
                      Attention to detail ensuring high-quality, polished results
                    </p>
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

export default Skills;