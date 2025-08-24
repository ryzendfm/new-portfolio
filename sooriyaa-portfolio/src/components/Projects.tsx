import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Bot, Search, Image, MessageSquare } from 'lucide-react';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: "XANDRA – AI Automation Agent",
      description: "An AI-powered assistant that combines multiple tools in one seamless platform. XANDRA revolutionizes how users interact with AI by providing a comprehensive suite of features including web search, image generation, analysis, and intelligent conversation.",
      features: [
        {
          icon: Search,
          title: "Web & Global Search",
          description: "Intelligent web search with real-time results and comprehensive information gathering"
        },
        {
          icon: Image,
          title: "Image Generation & Analysis", 
          description: "AI-powered image creation and advanced image analysis capabilities"
        },
        {
          icon: Bot,
          title: "Image-to-Text Conversion",
          description: "Advanced OCR and image understanding for text extraction and analysis"
        },
        {
          icon: MessageSquare,
          title: "Intelligent Chatbot",
          description: "Seamless conversational AI with context awareness and natural language processing"
        }
      ],
      technologies: ["Python", "AI/ML", "Natural Language Processing", "Computer Vision", "API Integration", "React", "Node.js"],
      category: "AI/ML",
      status: "Featured Project",
      image: "🤖",
      links: {
        demo: "https://www.linkedin.com/in/sooriyaatn",
        github: "#"
      }
    }
  ];

  const additionalProjects = [
    {
      title: "Feedback Management System",
      description: "A comprehensive MERN stack application built for campus feedback collection and management with secure authentication and responsive design.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
      category: "Full-Stack",
      image: "📝"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and ShadCN UI, featuring smooth animations and dark mode support.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      image: "💼"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/20">
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
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Showcase of my technical projects demonstrating full-stack development, AI integration, and modern web technologies.
            </p>
          </motion.div>

          {/* Featured Project - XANDRA */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Column - Project Info */}
                <CardHeader className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="text-3xl">{projects[0].image}</span>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary border-primary/20">
                        {projects[0].status}
                      </Badge>
                      <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground">
                        {projects[0].title}
                      </CardTitle>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    {projects[0].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects[0].technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button asChild className="group">
                      <a href={projects[0].links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        View Project
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="group">
                      <a href={projects[0].links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardHeader>

                {/* Right Column - Features */}
                <CardContent className="p-8 lg:p-12 bg-muted/20">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Key Features</h3>
                  <div className="space-y-6">
                    {projects[0].features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/20 transition-all duration-300"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          {/* Additional Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {additionalProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-xl">{project.image}</span>
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {project.category}
                          </Badge>
                          <CardTitle className="text-lg font-semibold text-foreground">
                            {project.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Interested in My Work?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm always working on new projects and exploring cutting-edge technologies. 
                  Let's connect and discuss potential collaborations or opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="group">
                    <a href="https://www.linkedin.com/in/sooriyaatn" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      View LinkedIn Profile
                    </a>
                  </Button>
                  <Button variant="outline" asChild size="lg" className="group">
                    <a href="mailto:tnsooriyaa@gmail.com">
                      Get In Touch
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;