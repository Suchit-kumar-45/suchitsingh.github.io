import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, GraduationCap, Briefcase, Award, Trophy, Terminal, Code2, ArrowRight } from 'lucide-react';

// --- ANIMATION COMPONENT (Scroll Reveal) ---
const RevealOnScroll = ({ children, className = "", direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const transforms = {
    up: "translate-y-10",
    left: "-translate-x-10",
    right: "translate-x-10",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${transforms[direction]}`
      }`}
    >
      {children}
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- ⚠️ UPDATE THESE WITH YOUR REAL USERNAMES ---
  const usernames = {
    leetcode: "suchit-7654",    
    codeforces: "suchit_Kumar",  
    gfg: "suchit7k1b9"          
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-100">
      
      {/* Dark Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl tracking-tight text-white flex items-center gap-2 group cursor-pointer">
              <div className="p-1.5 bg-blue-600 rounded-lg group-hover:rotate-12 transition-transform">
                <Terminal size={18} className="text-white" /> 
              </div>
              Suchit Kumar
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Profiles', 'Experience', 'Projects', 'Certifications', 'Education'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-400 hover:text-white font-medium transition-colors text-sm tracking-wide"
                >
                  {item}
                </button>
              ))}
              <a href="mailto:suchit844118@gmail.com" className="px-5 py-2 bg-white text-gray-900 rounded-full text-sm font-bold hover:bg-blue-50 transition-all transform hover:scale-105">
                Hire Me
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Profiles', 'Experience', 'Projects', 'Certifications', 'Education'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-3 text-gray-300 hover:bg-gray-800 hover:text-white font-medium border-b border-gray-800 last:border-0"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
<section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gray-900 text-white min-h-[90vh] flex items-center">
  <div className="absolute inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px]"></div>
    <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-[128px] opacity-20 animate-pulse delay-700"></div>
  </div>

  <div className="max-w-5xl mx-auto text-center relative z-10">
    
    <RevealOnScroll direction="up">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-blue-300 text-sm font-medium mb-8 hover:bg-gray-800 transition-colors cursor-default">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Open to Opportunities • 2026
      </div>
    </RevealOnScroll>
    
    {/* ✅ UPDATED HEADING */}
    <RevealOnScroll direction="up">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
        Code. Build. Innovate. <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Repeat.
        </span>
      </h1>
    </RevealOnScroll>
    
    {/* ✅ UPDATED DESCRIPTION */}
    <RevealOnScroll direction="up">
      <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
        I’m a developer who loves transforming complex challenges into simple, elegant solutions. 
        Focused on creating efficient systems and impactful user experiences.
      </p>
    </RevealOnScroll>

    <RevealOnScroll direction="up">
      <div className="flex flex-col sm:flex-row justify-center gap-4">
         <button onClick={() => scrollToSection('projects')} className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-900/50 flex items-center justify-center gap-2">
           View My Work <ArrowRight size={18} />
         </button>
         <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-gray-800 text-white rounded-full font-bold hover:bg-gray-700 transition-all border border-gray-700 flex items-center justify-center gap-2">
           Let's Talk
         </button>
      </div>
    </RevealOnScroll>
  </div>
  
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
      <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-gray-50"></path>
      </svg>
  </div>
</section>

      {/* Coding Profiles */}
      <section id="profiles" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <RevealOnScroll direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Coding Stats</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Consistency is my superpower. Here is a live look at my problem-solving journey across various platforms.</p>
            </div>
          </RevealOnScroll>
          
          <div className="grid md:grid-cols-3 gap-8">
            <RevealOnScroll direction="up">
              <a href={`https://leetcode.com/${usernames.leetcode}`} target="_blank" className="block group bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-50 rounded-xl">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg">LeetCode</h3>
                  </div>
                  <ExternalLink size={18} className="text-gray-300 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="overflow-hidden rounded-xl border border-gray-100">
                   <img src={`https://leetcard.jacoblin.cool/${usernames.leetcode}?theme=light&font=Inter&ext=heatmap`} alt="LeetCode Stats" className="w-full scale-105" />
                </div>
              </a>
            </RevealOnScroll>

            <RevealOnScroll direction="up">
              <a href={`https://codeforces.com/profile/${usernames.codeforces}`} target="_blank" className="block group bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-50 rounded-xl">
                      <img src="https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png" alt="CodeForces" className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg">CodeForces</h3>
                  </div>
                  <ExternalLink size={18} className="text-gray-300 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 h-[160px] flex flex-col justify-center">
                   <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">Max Rating</p>
                   <p className="text-4xl font-black text-gray-900">1200+</p>
                   <p className="text-xs text-green-600 mt-2 font-bold bg-green-50 inline-block px-3 py-1 rounded-full mx-auto">Active Participant</p>
                </div>
              </a>
            </RevealOnScroll>

            <RevealOnScroll direction="up">
              <a href={`https://auth.geeksforgeeks.org/user/${usernames.gfg}`} target="_blank" className="block group bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 rounded-xl">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" alt="GFG" className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg">GeeksForGeeks</h3>
                  </div>
                  <ExternalLink size={18} className="text-gray-300 group-hover:text-blue-600 transition-colors" />
                </div>
                 <div className="bg-green-50 rounded-2xl p-6 border border-green-100 h-[160px] flex flex-col justify-center">
                   <div className="flex justify-between items-end mb-4">
                      <span className="text-sm font-medium text-gray-600">Current Streak</span>
                      <span className="text-3xl font-black text-green-700">160<span className="text-lg text-green-600 font-bold ml-1">Days</span></span>
                   </div>
                   <div className="w-full bg-green-200 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-green-600 h-full rounded-full w-full animate-pulse"></div>
                   </div>
                   <p className="text-xs text-left mt-3 text-gray-500 font-medium">Problem of the Day Challenge</p>
                </div>
              </a>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative">
          <RevealOnScroll direction="up">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
              <p className="text-gray-500">My journey through virtual internships.</p>
            </div>
          </RevealOnScroll>

          {/* Vertical Path Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-100 rounded-full hidden md:block top-24"></div>

          <div className="space-y-12 md:space-y-0">
            
            

            {/* Timeline Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
               <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-red-500 shadow shrink-0 md:order-1 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10"></div>
               <div className="w-full md:w-[calc(50%-2rem)] md:mr-auto">
                  <RevealOnScroll direction="left">
                    <div className="p-6 rounded-3xl bg-gray-50 hover:bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 shadow-sm">
                           <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">AI-ML Virtual Intern</h3>
                          <p className="text-blue-600 text-xs font-bold uppercase">Jan 2025 - Mar 2025</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Explored AI frontiers. Implemented ML algorithms for predictive analysis using TensorFlow and Python.
                      </p>
                    </div>
                  </RevealOnScroll>
               </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
               <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-blue-600 shadow shrink-0 md:order-1 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10"></div>
               <div className="w-full md:w-[calc(50%-2rem)] md:ml-auto">
                 <RevealOnScroll direction="right">
                    <div className="p-6 rounded-3xl bg-gray-50 hover:bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 shadow-sm">
                           <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">AWS Cloud Intern</h3>
                          <p className="text-blue-600 text-xs font-bold uppercase">Jan 2026 - Mar 2026</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Mastered Core AWS services: EC2, S3, RDS. Architected secure cloud solutions and deployed apps using Elastic Beanstalk.
                      </p>
                    </div>
                 </RevealOnScroll>
               </div>
            </div>

            
          </div>
        </div>
      </section>

{/* Projects Section */}
<section id="projects" className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <RevealOnScroll direction="up">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-500">Transforming ideas into deployed applications.</p>
      </div>
    </RevealOnScroll>
    
    <div className="grid md:grid-cols-2 gap-8">
      
      {/* 🟢 FitFusion-AI */}
      <RevealOnScroll direction="left">
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 border border-gray-100 flex flex-col h-full">
          
          <div className="h-48 bg-gradient-to-br from-lime-400 via-green-500 to-emerald-700 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            <Trophy size={64} className="text-white/10 group-hover:text-white/30 absolute -bottom-4 -right-4 rotate-12 transition-all duration-500" />
            <h3 className="text-3xl font-black text-white tracking-tighter relative z-10">
              FitFusion-AI
            </h3>
          </div>

          <div className="p-8 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full">
                Fitness Platform
              </span>
              <div>
              <a href="https://github.com/Suchit-kumar-45/FitFusion-AI" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Github size={20} className="text-gray-600" />
              </a>
              <a href="https://fit-fusion-ai-tau.vercel.app/" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <ExternalLink size={20} className="text-gray-600" />
                </a>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed flex-1">
              FitFusion-AI is an AI-powered fitness platform that provides personalized workout plans, diet recommendations, real-time fitness guidance through an AI chatbot, BMI and calorie tracking, progress monitoring, workout history, and secure user authentication.
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {['React.js', 'Node.js', 'Express', 'MongoDB', 'Gemini API'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg border border-gray-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* 🟣 Personal Expense Analytics */}
      <RevealOnScroll direction="right">
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-gray-100 flex flex-col h-full">
          
          <div className="h-48 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <Code2 size={64} className="text-white/10 group-hover:text-white/30 absolute -bottom-4 -right-4 rotate-12 transition-all duration-500" />
            <h3 className="text-3xl font-black text-white tracking-tighter relative z-10">
              Personal-Expense-Analytics
            </h3>
          </div>

          <div className="p-8 flex-1 flex flex-col">
            
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider rounded-full">
                Finance Tracker
              </span>

              <div className="flex gap-2">
                <a href="https://github.com/Suchit-kumar-45/Personal-Expense-Analytics" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Github size={20} className="text-gray-600" />
                </a>
                <a href="https://expenselytics.tech/" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <ExternalLink size={20} className="text-gray-600" />
                </a>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed flex-1">
              Smart expense tracking application that helps users manage daily spending, 
              analyze financial patterns, and visualize insights through interactive charts. 
              Improves budgeting efficiency with category-wise expense breakdown and real-time updates.
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {['React.js', 'Node.js', 'MongoDB', 'Chart.js'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg border border-gray-200">
                  {tech}
                </span>
              ))}
            </div>

          </div>
        </div>
      </RevealOnScroll>

    </div>
  </div>
</section>

      {/* Certifications (UPDATED LOGOS) */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <RevealOnScroll direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
               <p className="text-gray-500">Continuous learning validated by industry leaders.</p>
            </div>
          </RevealOnScroll>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AWS Cloud Foundation", org: "AICTE & AWS Academy", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", color: "hover:border-orange-200" },
              { title: "Programming in modern c++", org: "NPTEL", logo: "https://www.vectorlogo.zone/logos/nptel/nptel-ar21.svg", color: "hover:border-blue-900" },
              
              { title: "Intro to MongoDB", org: "MongoDB University", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", color: "hover:border-green-200" },
              { title: "Git & GitHub", org: "Udemy", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg", color: "hover:border-purple-200" },
              { title: "JavaScript Essentials 1", org: "Cisco Networking Academy", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg", color: "hover:border-blue-200" },
              { title: "Introduction to Cybersecurity", org: "Cisco Networking Academy", logo:"https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg", textLogo: "ZSCALER", color: "hover:border-blue-400" },
              { title: "CCNA:Introduction to Networks", org: "Cisco Networking Academy", logo:"https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg", textLogo: "ZSCALER", color: "hover:border-blue-400" },
              { title: "C++ Programming", org: "Udemy", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg", color: "hover:border-gray-300" }
            ].map((cert, index) => (
              <RevealOnScroll key={index} direction="up">
                <div className={`p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 bg-white group ${cert.color} h-full`}>
                  <div className="h-12 mb-6 flex items-center">
                    {cert.logo ? (
                       <img src={cert.logo} alt={cert.org} className="h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                    ) : (
                       <span className="text-xl font-black text-blue-700">{cert.textLogo}</span>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 leading-tight">{cert.title}</h3>
                  <p className="text-xs text-gray-500 mt-2 font-medium">{cert.org}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
           <RevealOnScroll direction="up">
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Education</h2>
          </RevealOnScroll>
          
          <RevealOnScroll direction="up">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
               <div className="w-32 h-32 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center p-4 shadow-inner shrink-0">
                 <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/G._L._Bajaj_Institute_of_Technology_and_Management_logo.png/220px-G._L._Bajaj_Institute_of_Technology_and_Management_logo.png" alt="GL Bajaj" className="w-full h-full object-contain mix-blend-multiply" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}} />
                 <GraduationCap size={48} className="text-blue-200 hidden" />
               </div>
               
               <div className="flex-1">
                 <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">B.Tech in Computer Science(AIML)</h3>
                 <p className="text-lg text-blue-600 font-medium mb-4">G. L. Bajaj Institute of Technology and Management</p>
                 <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold">
                   2023 - 2027
                 </div>
                 <p className="text-gray-500 mt-6 text-sm leading-relaxed">
                   Specializing in Full Stack Development and Data Structures. Active member of the college coding club and technical society.
                 </p>
               </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* New Compact Footer */}
      <footer className="bg-gray-900 text-white py-12" id="contact">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          <RevealOnScroll direction="up">
            <h2 className="text-3xl font-bold mb-8">Ready to Collaborate?</h2>
          </RevealOnScroll>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
             <a href="mailto:suchit844118@gmail.com" className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all hover:scale-105">
                <Mail size={20} className="text-red-400" />
                <span className="font-medium">suchit844118@gmail.com</span>
             </a>
             
             <a href="https://www.linkedin.com/in/suchit-kumar45/" target="_blank" className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all hover:scale-105">
                <Linkedin size={20} className="text-blue-400" />
                <span className="font-medium">LinkedIn</span>
             </a>

             <a href="https://github.com/Suchit-kumar-45" target="_blank" className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all hover:scale-105">
                <Github size={20} className="text-gray-300" />
                <span className="font-medium">GitHub</span>
             </a>
          </div>

          <div className="text-gray-500 text-sm border-t border-gray-800 pt-8">
            <p>© 2026 Suchit Kumar</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
