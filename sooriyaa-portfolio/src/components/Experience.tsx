import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
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

  const experiences = [
    {
      role: "UI/UX Developer Intern",
      company: "ServiceNow",
      period: "Jun 2025 – Present",
      type: "Current",
      location: "Remote",
      description: "Working on ITSM modules and low-code app building, exploring automation, incident tracking and task management systems.",
      achievements: [
        "Learned ITSM modules and workflow automation",
        "Built low-code applications for business processes",
        "Explored incident tracking and task management",
        "Gained experience in enterprise software development"
      ],
      technologies: ["ServiceNow", "ITSM", "Low-Code Development", "Automation"],
      icon: "🏢"
    },
    {
      role: "MERN Stack Developer Intern",
      company: "Muthayammal Engineering College",
      period: "Jun 2025 – Jul 2025",
      type: "Completed",
      location: "On-site",
      description: "Built a comprehensive Feedback Management System for campus using MERN stack technologies with responsive and secure design.",
      achievements: [
        "Developed full-stack web application from scratch",
        "Implemented secure user authentication system",
        "Created responsive UI with modern design principles",
        "Integrated MongoDB for efficient data management"
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "CSS3"],
      icon: "🎓"
    }
  ];

  const certifications = [
    { name: "Meta – Front-End Developer", issuer: "Meta" },
    { name: "IBM – Front-End Developer", issuer: "IBM" },
    { name: "IBM – Back-End JavaScript Developer", issuer: "IBM" },
    { name: "IBM – Full-Stack JavaScript Developer", issuer: "IBM" },
    { name: "Microsoft – Azure Fundamentals (AZ-900)", issuer: "Microsoft" },
    { name: "Udemy – AI Mastery Bootcamp", issuer: "Udemy" },
    { name: "Udemy – AI Engineering Masterclass", issuer: "Udemy" }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-muted/20 to-background">
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
              Experience & Certifications
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My professional journey through internships and continuous learning through certifications.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-xl">{exp.icon}</span>
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl font-semibold text-foreground mb-2">
                              {exp.role}
                            </CardTitle>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Building className="h-4 w-4" />
                                <span className="font-medium">{exp.company}</span>
                              </div>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  <span>{exp.period}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  <span>{exp.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Badge 
                            variant={exp.type === 'Current' ? 'default' : 'secondary'}
                            className={exp.type === 'Current' ? 'bg-green-500/10 text-green-600 border-green-200' : ''}
                          >
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: i * 0.1 }}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-semibold text-foreground flex items-center justify-center gap-2">
                  <Award className="h-6 w-6" />
                  Professional Certifications
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  Continuous learning and skill development through industry-recognized certifications
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300"
                    >
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground text-sm leading-tight">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          Issued by {cert.issuer}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;