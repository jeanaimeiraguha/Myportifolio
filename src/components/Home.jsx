import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const roles = [
  "Full-Stack Developer",
  "Data Scientist",
  "Blockchain Enthusiast",
  "Ethical Software Engineer",
];

// Interactive Starry Background with parallax and connecting lines
function StarryInteractiveBackground() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const stars = [];
    const numStars = 150;

    function randomRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: randomRange(0.5, 1.5),
        alpha: randomRange(0.1, 1),
        delta: randomRange(0.002, 0.01),
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Background gradient with animated hue rotation
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      const time = Date.now() * 0.0005;
      gradient.addColorStop(0, `hsl(${Math.sin(time) * 360}, 30%, 10%)`);
      gradient.addColorStop(0.5, `hsl(${Math.sin(time + 1) * 360}, 40%, 15%)`);
      gradient.addColorStop(1, `hsl(${Math.sin(time + 2) * 360}, 50%, 20%)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw stars
      stars.forEach((star) => {
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta = -star.delta;

        const dx = (mouse.current.x - width / 2 || 0) * 0.002;
        const dy = (mouse.current.y - height / 2 || 0) * 0.002;

        ctx.beginPath();
        ctx.arc(star.x + dx * star.radius * 5, star.y + dy * star.radius * 5, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha.toFixed(2)})`;
        ctx.shadowColor = "white";
        ctx.shadowBlur = star.radius * 4;
        ctx.fill();
      });

      // Connect nearby stars with lines
      for (let i = 0; i < numStars; i++) {
        for (let j = i + 1; j < numStars; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(200,200,255,${1 - dist / 120})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    draw();

    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function handleMouseMove(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" aria-hidden="true" />;
}

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [speechPlayed, setSpeechPlayed] = useState(false);
  const [voices, setVoices] = useState([]);

  // Load voices
  useEffect(() => {
    function loadVoices() {
      const available = window.speechSynthesis.getVoices();
      if (available.length) setVoices(available);
    }
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
  }, []);

  const getVoice = (langPrefix) =>
    voices.find((v) => v.lang.toLowerCase().startsWith(langPrefix) && v.name.toLowerCase().includes("google")) ||
    voices.find((v) => v.lang.toLowerCase().startsWith(langPrefix));

  const speakMessages = () => {
    if (!("speechSynthesis" in window)) return false;
    if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();

    const greeting = new SpeechSynthesisUtterance(
      "Hey there, I am Jean Aime Iraguha, an Ethical Software Engineer and Full-Stack Developer based in Rwanda."
    );
    greeting.lang = "en-US";
    greeting.voice = getVoice("en");

    const details = new SpeechSynthesisUtterance(
      "I specialize in building reliable and secure web applications, data science solutions, and blockchain projects."
    );
    details.lang = "en-US";
    details.voice = greeting.voice;

    const invite = new SpeechSynthesisUtterance(
      "Feel free to explore my portfolio, check out my projects, and contact me anytime. I look forward to collaborating with you and helping your business grow."
    );
    invite.lang = "en-US";
    invite.voice = greeting.voice;

    greeting.onend = () => window.speechSynthesis.speak(details);
    details.onend = () => window.speechSynthesis.speak(invite);

    try {
      window.speechSynthesis.speak(greeting);
      setSpeechPlayed(true);
      return true;
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    if (voices.length === 0) return;
    const onLoad = () => speakMessages();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, [voices]);

  // Animated typing for roles
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!deleting && displayedText.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayedText(currentRole.slice(0, displayedText.length + 1)), 100);
    } else if (deleting && displayedText.length > 0) {
      timeout = setTimeout(() => setDisplayedText(currentRole.slice(0, displayedText.length - 1)), 50);
    } else if (!deleting && displayedText.length === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && displayedText.length === 0) {
      setDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, deleting, currentRoleIndex]);

  const socialLinks = [
    { href: "https://github.com/jeanaimeiraguha", icon: FaGithub, label: "GitHub", color: "hover:text-gray-300", bgColor: "bg-gray-800" },
    { href: "https://www.linkedin.com/in/iraguha-jean-aime-77a13b318/", icon: FaLinkedin, label: "LinkedIn", color: "hover:text-blue-500", bgColor: "bg-blue-700" },
    { href: "mailto:iraguha@example.com", icon: FaEnvelope, label: "Email", color: "hover:text-red-500", bgColor: "bg-red-700" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-white select-none overflow-hidden">
      <StarryInteractiveBackground />

      <motion.div className="max-w-5xl text-center relative z-10" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Hi, I&apos;m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-gradient-x">
            Jean Aime IRAGUHA
          </span>
        </h1>

        <div className="relative text-3xl md:text-4xl font-mono tracking-wide min-h-[56px] mb-12 text-indigo-400 flex justify-center items-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={displayedText} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="select-text">
              {displayedText}
            </motion.span>
          </AnimatePresence>
          <motion.span className="ml-1 bg-indigo-400 rounded w-1.5 h-8 inline-block" animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }} aria-hidden="true" />
        </div>

        {!speechPlayed && (
          <motion.button onClick={() => speakMessages()} className="mb-8 px-10 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            🔊 Tap to hear my voice
          </motion.button>
        )}

        <motion.div className="flex justify-center gap-12 text-5xl md:text-6xl mb-20" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
          {socialLinks.map(({ href, icon: Icon, label, color, bgColor }) => (
            <motion.a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className={`relative group transition-colors duration-300 ${color}`} whileHover={{ scale: 1.3, rotate: 15 }} whileTap={{ scale: 0.95, rotate: 0 }}>
              <Icon className="drop-shadow-lg" />
              <span className={`absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 ${bgColor} text-white text-xs font-semibold rounded px-3 py-1 shadow-lg transition-transform origin-bottom`}>
                {label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.button onClick={() => alert("Thanks for visiting! Feel free to explore my projects and get in touch.")} className="px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          👋 Say Hi!
        </motion.button>
      </motion.div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
