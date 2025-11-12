import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Download, ExternalLink, Award, Briefcase, GraduationCap, Code, Terminal, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { personalInfo, socialLinks, education, experience, projects, skills, achievements, extracurriculars } from '../data/mock';

const Home = () => {
  const { toast } = useToast();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleDownloadResume = () => {
    toast({
      title: "Downloading Resume",
      description: "Your download will begin shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="text-xl font-semibold tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            {personalInfo.name.split(' ')[0]}
          </motion.div>
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">About</a>
            <a href="#experience" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Experience</a>
            <a href="#projects" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center px-6 pt-20"
        style={{ opacity, scale }}
      >
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-600"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for opportunities
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
                {personalInfo.name}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                {personalInfo.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Button 
                  onClick={handleDownloadResume}
                  className="rounded-full px-8 py-6 text-base font-medium bg-black hover:bg-gray-800 transition-all"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  className="rounded-full px-8 py-6 text-base font-medium border-gray-300 hover:border-black transition-all"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Get in Touch
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="flex gap-4 pt-4">
                <motion.a 
                  href={socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right: Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <motion.img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">About Me</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              {personalInfo.bio}
            </p>

            {/* Education */}
            <div className="space-y-6 mb-16">
              <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <GraduationCap className="w-8 h-8" />
                Education
              </h3>
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-xl font-semibold">{edu.degree}</h4>
                          <p className="text-gray-600">{edu.institution}</p>
                        </div>
                        <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">{edu.period}</span>
                      </div>
                      {edu.gpa && <p className="text-sm font-medium text-gray-800 mb-2">CGPA: {edu.gpa}</p>}
                      <p className="text-gray-600">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <Award className="w-8 h-8" />
                Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-none shadow-sm hover:shadow-xl transition-all h-full overflow-hidden group cursor-pointer">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <Award className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold text-lg mb-1">{achievement.title}</h4>
                            <p className="text-sm text-gray-600">{achievement.event}</p>
                            <p className="text-xs text-gray-500 mt-2">{achievement.year}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-12 flex items-center gap-4">
              <Briefcase className="w-12 h-12" />
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-none shadow-sm hover:shadow-lg transition-all">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
                          <p className="text-lg text-gray-600">{exp.company} • {exp.location}</p>
                        </div>
                        <span className="text-sm font-medium bg-gray-100 px-4 py-2 rounded-full whitespace-nowrap">{exp.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <ChevronRight className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-12 flex items-center gap-4">
              <Terminal className="w-12 h-12" />
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-none shadow-sm hover:shadow-xl transition-all h-full group">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <Code className="w-8 h-8 text-gray-700" />
                        {project.link && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            whileHover={{ scale: 1.1 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>
                      <h3 className="text-2xl font-semibold mb-3 group-hover:text-gray-700 transition-colors">{project.name}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-12">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Technical</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, idx) => (
                    <motion.span 
                      key={idx} 
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors cursor-default"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">AI/ML</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.aiml.map((skill, idx) => (
                    <motion.span 
                      key={idx} 
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors cursor-default"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.cloud.map((skill, idx) => (
                    <motion.span 
                      key={idx} 
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors cursor-default"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Tools & Design</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, idx) => (
                    <motion.span 
                      key={idx} 
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors cursor-default"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Extracurriculars */}
            <div className="mt-16">
              <h3 className="text-3xl font-semibold mb-6">Beyond Work</h3>
              <div className="space-y-4">
                {extracurriculars.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2">{activity.title}</h4>
                        <p className="text-gray-600">{activity.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-400 mb-12">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 rounded-xl py-6"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 rounded-xl py-6"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 rounded-xl"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-white text-black hover:bg-gray-200 rounded-full py-6 text-base font-medium transition-all"
              >
                Send Message
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <div className="flex items-center justify-center gap-4 mt-12">
              <Mail className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400">{personalInfo.email}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-gray-800 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400">
            © 2025 {personalInfo.name}. Crafted with precision.
          </p>
          <div className="flex gap-6">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
