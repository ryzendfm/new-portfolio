import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const education = [
    {
      degree: "B.E. Computer Science",
      institution: "Muthayammal Engineering College",
      period: "2023 – 2027",
      status: "Currently Pursuing",
      description: "Focusing on software development, algorithms, and modern web technologies. Active in coding competitions and technical projects.",
      icon: "🎓"
    },
    {
      degree: "Higher Secondary (HSC)",
      institution: "Little Flower MHSS",
      period: "2022 – 2023",
      status: "Completed",
      description: "Specialized in Computer Science with strong foundation in mathematics and programming concepts.",
      icon: "📚"
    },
    {
      degree: "Secondary (SSC)",
      institution: "Little Flower MHSS",
      period: "2020 – 2021",
      status: "Completed",
      description: "Completed with excellent grades, developed early interest in technology and problem-solving.",
      icon: "🏫"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background to-muted/20">
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
              Education
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My educational journey and academic achievements that shaped my technical foundation.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  variants={itemVariants}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Content Card */}
                  <div className="ml-20">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                <span className="text-xl">{edu.icon}</span>
                              </div>
                              <div>
                                <CardTitle className="text-xl font-semibold text-foreground mb-1">
                                  {edu.degree}
                                </CardTitle>
                                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                  <GraduationCap className="h-4 w-4" />
                                  <span>{edu.institution}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-2 text-primary text-sm font-medium mb-1">
                                <Calendar className="h-4 w-4" />
                                <span>{edu.period}</span>
                              </div>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                edu.status === 'Currently Pursuing' 
                                  ? 'bg-green-500/10 text-green-600 border border-green-200' 
                                  : 'bg-blue-500/10 text-blue-600 border border-blue-200'
                              }`}>
                                {edu.status}
                              </span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground leading-relaxed">
                            {edu.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Academic Highlights
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🏆</span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Excellence</h4>
                      <p className="text-sm text-muted-foreground">
                        Consistent academic performance with focus on practical learning
                      </p>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">💻</span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Technical Focus</h4>
                      <p className="text-sm text-muted-foreground">
                        Strong emphasis on computer science and programming fundamentals
                      </p>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Goal Oriented</h4>
                      <p className="text-sm text-muted-foreground">
                        Pursuing education with clear career objectives in technology
                      </p>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;