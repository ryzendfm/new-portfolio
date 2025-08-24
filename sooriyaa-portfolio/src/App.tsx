import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(systemPrefersDark);
    }

    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Loading screen component
  const LoadingScreen = () => (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full mx-auto mb-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground"
        >
          Loading portfolio...
        </motion.p>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Header */}
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            
            {/* Main Content */}
            <main className="relative">
              {/* Hero Section */}
              <Hero />
              
              {/* About Section */}
              <About />
              
              {/* Skills Section */}
              <Skills />
              
              {/* Education Section */}
              <Education />
              
              {/* Experience Section */}
              <Experience />
              
              {/* Projects Section */}
              <Projects />
            </main>

            {/* Footer */}
            <motion.footer
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-muted/20 py-12 border-t border-border"
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mb-4"
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Sooriyaa TN
                    </h3>
                    <p className="text-muted-foreground">
                      MERN Stack Developer | UI/UX Enthusiast | AI Explorer
                    </p>
                  </motion.div>
                  
                  <div className="flex justify-center gap-6 mb-6">
                    {[
                      { href: "mailto:tnsooriyaa@gmail.com", label: "Email" },
                      { href: "tel:+918807607068", label: "Phone" },
                      { href: "https://www.linkedin.com/in/sooriyaatn", label: "LinkedIn" },
                    ].map((link, index) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <p className="text-sm text-muted-foreground">
                      © 2025 Sooriyaa TN. Built with React, TypeScript, and Tailwind CSS.
                    </p>
                  </div>
                </div>
              </div>
            </motion.footer>

            {/* Scroll to Top Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <motion.svg
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="18,15 12,9 6,15"></polyline>
              </motion.svg>
            </motion.button>

            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
