import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import callCenterImage from './pp.jpg';
import pp1 from './pp1.jpg';
import pp2 from './pp2.jpg';
import pp3 from './pp3.png';
import pp4 from './pp4.png';
import pp5 from './pp5.png';
import pp6 from './pp6.png';
import pp7 from './pp7.png';
import pp8 from './pp8.png';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to get different background colors for project cards
// First, update the getProjectCardColor function to use lighter colors
const getProjectCardColor = (index) => {
    const colors = [
      'bg-blue-200',  // Light blue
      'bg-purple-200', // Light purple
      'bg-green-200',  // Light green
      'bg-red-200',    // Light red
      'bg-indigo-200', // Light indigo
      'bg-pink-200',   // Light pink
      'bg-teal-200',   // Light teal
      'bg-orange-200'  // Light orange
    ];
    return colors[index % colors.length];
  };

  // Add custom animation
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-1 {
        0% { transform: translate(0, 0) scale(1); }
        25% { transform: translate(40vw, -30vh) scale(1.1); }
        50% { transform: translate(60vw, 20vh) scale(0.9); }
        75% { transform: translate(20vw, 40vh) scale(1.2); }
        100% { transform: translate(0, 0) scale(1); }
      }
      @keyframes float-2 {
        0% { transform: translate(0, 0) scale(1.1); }
        25% { transform: translate(-30vw, 40vh) scale(0.9); }
        50% { transform: translate(-50vw, -20vh) scale(1.2); }
        75% { transform: translate(-20vw, -40vh) scale(0.8); }
        100% { transform: translate(0, 0) scale(1.1); }
      }
      @keyframes float-3 {
        0% { transform: translate(0, 0) scale(0.9); }
        33% { transform: translate(45vw, 35vh) scale(1.1); }
        66% { transform: translate(-35vw, -30vh) scale(1.2); }
        100% { transform: translate(0, 0) scale(0.9); }
      }
      @keyframes float-4 {
        0% { transform: translate(0, 0) scale(1.2); }
        33% { transform: translate(-40vw, 25vh) scale(0.8); }
        66% { transform: translate(30vw, -35vh) scale(1.1); }
        100% { transform: translate(0, 0) scale(1.2); }
      }
      @keyframes float-5 {
        0% { transform: translate(0, 0) scale(0.8); }
        33% { transform: translate(25vw, -20vh) scale(1.2); }
        66% { transform: translate(-20vw, 25vh) scale(0.9); }
        100% { transform: translate(0, 0) scale(0.8); }
      }
      .animate-float-1 { animation: float-1 20s ease-in-out infinite; }
      .animate-float-2 { animation: float-2 25s ease-in-out infinite; }
      .animate-float-3 { animation: float-3 22s ease-in-out infinite; }
      .animate-float-4 { animation: float-4 28s ease-in-out infinite; }
      .animate-float-5 { animation: float-5 18s ease-in-out infinite; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Sample data
  const portfolioData = {
    name: "Bala K",
    title: "AI & Machine Learning Enthusiast | Python developer",
    about: "Master's graduate in Computer Science from Texas A&M University (2024), specializing in Machine Learning Engineering and AI development. Currently contributing to AI innovations at American Red Cross, where I develop intelligent automation systems and chatbots. My expertise spans across emotional analysis, video processing, and natural language processing, having led projects in mental health analytics and automated trading insights. Proficient in designing RAG models, LLM applications, and implementing cloud-based solutions using AWS and Azure. Passionate about creating AI solutions that make a meaningful impact, with a proven track record of developing innovative tools for emotion detection, video analysis, and automated content generation",
    projects: [
        {
          title: "Emotional analysis using AI",
          description: "Designed and implemented an AI tool for emotion analysis, providing detailed emotional statuses and diagnostic recommendations based on mental health assessments.",
          technologies: ["React", "Node.js", "MongoDB", "Hume AI", "Cohere AI"],
           imageUrl: pp3,
        },
        {
          title: "Campus companion",
          description: "Developed Campus Companion an AI-driven course recommendation platform for college students",
          technologies: ["MongoDB", "Java","Android studio","Open AI", "XML"],
          imageUrl: pp2,
        },
        {
          title: "Closet Mart",
          description: "Crafted a user-friendly app interface to promote the try now, pay later feature, boosting user engagement and building a social media presence on Instagram and Facebook.",
          technologies: ["Android Studio", "Java", "Firebase","XML"],
          imageUrl: pp1,
        },
        {
          title: "Video Analysis",
          description: "Developed an AI-driven video analysis tool that interprets content, identifies scenes and locations, and detects the number of individuals present.",
          technologies: ["Python", "Pytorch", "yolo", "whisper", "llama"],
          imageUrl: pp5,
        },
        {
          title: "PPT generator",
          description: "Developed an AI tool using AI agents that converts YouTube videos into PowerPoint slides and extracts existing slides from videos, significantly boosting productivity by automating slide creation.",
          technologies: ["Open AI", "Google AI Vision and Video Analysis", "Lang Chain", "Crew AI", "Python"],
          imageUrl: pp4,

        },
        {
          title: "Retrieval-Augmented Generation",
          description: "Crafted a RAG model using GPT-3.5 with FASSI vector database for high accuracy and implemented security guardrails to prevent prompt injection and model evasion attacks on LLMs, enhancing protection against red teaming efforts.",
          technologies: ["Open AI", "APIs", "Lang Chain", "Python"],
          imageUrl: pp6,
        },
        {
          title: "",
          description: "Fine-tuned GPT-3.5 for sentiment analysis of news headlines using a synthetic dataset, achieving high accuracy; enhanced data quality through cleaning and normalization to improve accuracy; and integrated the model into a real-time streaming pipeline with rigorous data quality checks.",
          technologies: ["GPT-3.5", "Python"],
          imageUrl: pp7,
        },
        {
          title: "JSONL structure for fine tunning",
          description: "Designed a website that transforms user input into JSONL formats for single and multi-chat interactions, optimizing AI model fine-tuning.",
          technologies: ["React", "JavaScript", "CSS"],
          imageUrl: pp8,          
        }
      ],
    skills: [
        "Python", 
        "C++", 
        "JavaScript", 
        "MongoDB", 
        "SQL",
        "Large Learning Models",  
        "Lang Chain", 
        "AWS",
        "Docker"
      ],
      
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">{portfolioData.name}</h1>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#about" className="px-3 py-2 hover:text-blue-600">About</a>
              <a href="#projects" className="px-3 py-2 hover:text-blue-600">Projects</a>
              <a href="#skills" className="px-3 py-2 hover:text-blue-600">Skills</a>
              <a href="#contact" className="px-3 py-2 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 hover:bg-gray-50">About</a>
              <a href="#projects" className="block px-3 py-2 hover:bg-gray-50">Projects</a>
              <a href="#skills" className="block px-3 py-2 hover:bg-gray-50">Skills</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-gray-50">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Bubbles */}
      <section className="bg-white relative overflow-hidden" style={{ minHeight: '40vh' }}>
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center relative z-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 relative">
              {portfolioData.name}
            </h1>
            <p className="text-xl text-gray-600">{portfolioData.title}</p>
          </div>
        </div>
        
        
        {/* Animated Bubbles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-40 h-40 bg-blue-500 rounded-full opacity-30 animate-float-1" 
               style={{ top: '10%', left: '70%' }} />
          <div className="absolute w-32 h-32 bg-green-500 rounded-full opacity-30 animate-float-2" 
               style={{ top: '70%', left: '20%' }} />
          <div className="absolute w-36 h-36 bg-yellow-500 rounded-full opacity-30 animate-float-3" 
               style={{ top: '30%', left: '15%' }} />
          <div className="absolute w-44 h-44 bg-red-500 rounded-full opacity-30 animate-float-4" 
               style={{ top: '60%', left: '75%' }} />
          {/* Additional small bubbles */}
          <div className="absolute w-16 h-16 bg-purple-500 rounded-full opacity-30 animate-float-5" 
               style={{ top: '25%', left: '45%' }} />
          <div className="absolute w-12 h-12 bg-pink-500 rounded-full opacity-30 animate-float-6" 
               style={{ top: '55%', left: '35%' }} />
          <div className="absolute w-8 h-8 bg-indigo-500 rounded-full opacity-30 animate-float-7" 
               style={{ top: '40%', left: '85%' }} />
          <div className="absolute w-10 h-10 bg-teal-500 rounded-full opacity-30 animate-float-8" 
               style={{ top: '75%', left: '60%' }} />
          <div className="absolute w-6 h-6 bg-orange-500 rounded-full opacity-30 animate-float-9" 
               style={{ top: '15%', left: '25%' }} />
          <div className="absolute w-14 h-14 bg-cyan-500 rounded-full opacity-30 animate-float-10" 
               style={{ top: '85%', left: '40%' }} />
        </div>
      </section>

      {/* About Section */}
      {/* <section id="about" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-700">{portfolioData.about}</p>
        </div>
      </section> */}

{/* About Section */}
        <section id="about" className="bg-gray-100">
         <div className="max-w-6xl mx-auto px-4 py-16">
           <h2 className="text-3xl font-bold mb-8">About Me</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
             <div>
               <p className="text-lg text-gray-700">{portfolioData.about}</p>
             </div>
             <div className="flex justify-center">
               <img 
                src={callCenterImage} 
                alt="Call center professional" 
                className="rounded-lg shadow-lg w-full max-w-md"
               />
             </div>
           </div>
          </div>
        </section>
      {/* Projects Section */}
      {/* <section id="projects" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

{/* Projects Section */}
{/* Projects Section */}
<section id="projects" className="bg-white relative">
  <div className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold mb-8">Projects</h2>
    <div className="relative">
      {/* Container for horizontal scrolling */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * (100/3)}%)` }}
        >
          {portfolioData.projects.map((project, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-full md:w-1/3 p-4" 
            >
              <div 
                className={`rounded-2xl shadow-lg overflow-hidden h-full 
                           transform transition-all duration-300 
                           hover:scale-105 hover:shadow-xl 
                           cursor-pointer ${
                  index % 8 === 0 ? 'bg-blue-100' :
                  index % 8 === 1 ? 'bg-purple-100' :
                  index % 8 === 2 ? 'bg-green-100' :
                  index % 8 === 3 ? 'bg-red-100' :
                  index % 8 === 4 ? 'bg-blue-100' :
                  index % 8 === 5 ? 'bg-pink-100' :
                  index % 8 === 6 ? 'bg-green-100' :
                  'bg-orange-100'
                }`}
              >
                {/* Project Image Section */}
                <div className="w-full h-48 overflow-hidden bg-gray-200">
                  <img 
                    // src={`/api/placeholder/600/400`}
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = '/api/placeholder/600/400';  // Fallback to placeholder if image fails to load
                    }}
                  />



                </div>


                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-4 py-2 bg-white/60 rounded-full text-sm text-gray-700
                                 transition-colors duration-300 hover:bg-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-8 gap-4">
        <button 
          onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2
                   transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentSlide === 0}
        >
          Previous
        </button>
        <button 
          onClick={() => setCurrentSlide(Math.min(portfolioData.projects.length - 3, currentSlide + 1))}
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2
                   transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentSlide >= portfolioData.projects.length - 3}
        >
          Next
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      {/* <section id="skills" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {portfolioData.skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-white shadow-sm rounded-full text-gray-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section> */}
      {/* Skills Section */}
<section id="skills" className="bg-gray-100">
  <div className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold mb-8">Skills</h2>
    <div className="flex flex-wrap gap-4">
      {portfolioData.skills.map((skill, index) => {
        // Define color classes for different skills
        const getSkillColor = () => {
          switch(skill) {
            case 'Python':
              return 'hover:bg-blue-100 hover:text-blue-600 hover:border-blue-300';
            case 'JavaScript':
              return 'hover:bg-yellow-100 hover:text-yellow-600 hover:border-yellow-300';
            case   'C++':
              return 'hover:bg-green-100 hover:text-green-600 hover:border-green-300';
            case 'MongoDB':
              return 'hover:bg-indigo-100 hover:text-indigo-600 hover:border-indigo-300';
            case 'SQL':
              return 'hover:bg-orange-100 hover:text-orange-600 hover:border-orange-300';
            case 'AWS':
              return 'hover:bg-purple-100 hover:text-purple-600 hover:border-purple-300';
            case 'Git':
              return 'hover:bg-red-100 hover:text-red-600 hover:border-red-300';
            case 'Docker':
              return 'hover:bg-cyan-100 hover:text-cyan-600 hover:border-cyan-300'; 
            case 'Lang Chain':
               return 'hover:bg-violet-100 hover:text-violet-600 hover:border-violet-300';
            default:
              return 'hover:bg-gray-100 hover:text-gray-600 hover:border-gray-300';
          }
        };

        return (
          <span 
            key={index} 
            className={`px-6 py-3 bg-white rounded-full text-gray-700 
                       shadow-sm border border-transparent
                       transform transition-all duration-300
                       hover:scale-110 hover:shadow-md cursor-pointer
                       ${getSkillColor()}`}
          >
            {skill}
          </span>
        );
      })}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/balakrishna-24" className="text-gray-600 hover:text-gray-900">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/bala-k-571907244/" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={24} />
            </a>
            <a href="mailto:klrbalakrishna@gmail.com" className="text-gray-600 hover:text-gray-900">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;