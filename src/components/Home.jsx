import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const roles = [
  "Full-Stack Developer",
  "Data Scientist",
  "Blockchain Enthusiast",
  "Ethical Software Engineer",
];

function StarryBackground() {
  const canvasRef = useRef(null);

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
        radius: randomRange(0.3, 1.2),
        alpha: randomRange(0.1, 1),
        delta: randomRange(0.002, 0.01),
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#0d1b2a");
      gradient.addColorStop(1, "#1b263b");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta = -star.delta;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha.toFixed(2)})`;
        ctx.shadowColor = "white";
        ctx.shadowBlur = star.radius * 4;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    draw();

    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [speechPlayed, setSpeechPlayed] = useState(false);
  const [voices, setVoices] = useState([]);

  // Load available voices
  useEffect(() => {
    function loadVoices() {
      const available = window.speechSynthesis.getVoices();
      if (available.length) setVoices(available);
    }
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, []);

  // Helper: find voice by language prefix, prefer Google voices
  const getVoice = (langPrefix) =>
    voices.find(
      (v) =>
        v.lang.toLowerCase().startsWith(langPrefix) &&
        v.name.toLowerCase().includes("google")
    ) || voices.find((v) => v.lang.toLowerCase().startsWith(langPrefix));

  // Speak professional intro in English and Kinyarwanda (with voice preference)
  const speakMessages = () => {
    if (!("speechSynthesis" in window)) return false;

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    // English utterances
    const greetingEn = new SpeechSynthesisUtterance(
      "Hey there, I am Jean Aime Iraguha, an Ethical Software Engineer and Full-Stack Developer based in Rwanda."
    );
    greetingEn.lang = "en-US";
    greetingEn.voice = getVoice("en");

    const detailsEn = new SpeechSynthesisUtterance(
      "I specialize in building reliable and secure web applications, data science solutions, and blockchain projects."
    );
    detailsEn.lang = "en-US";
    detailsEn.voice = greetingEn.voice;

    const inviteEn = new SpeechSynthesisUtterance(
      "Feel free to explore my portfolio, check out my projects, and contact me anytime. I look forward to collaborating with you and helping your business grow."
    );
    inviteEn.lang = "en-US";
    inviteEn.voice = greetingEn.voice;

    // // Kinyarwanda utterances
    // const greetingRw = new SpeechSynthesisUtterance(
    //   "Muraho neza, nitwa Jean Aime Iraguha, ndi umukozi w'ikoranabuhanga wubahiriza amahame y'umwuga kandi nkora mu bikorwa byo gukora porogaramu zose zihuza."
    // );
    // greetingRw.lang = "rw-RW";
    // greetingRw.voice = getVoice("rw") || getVoice("fr") || getVoice("en") || null;

    const detailsRw = new SpeechSynthesisUtterance(
      "N specialize mu gukora porogaramu zizewe kandi zifite umutekano, ibisubizo by'ubumenyi bw'ibipimo bya data, ndetse na porogaramu za blockchain."
    );
    detailsRw.lang = "rw-RW";
    detailsRw.voice = greetingRw.voice;

    const inviteRw = new SpeechSynthesisUtterance(
      "Murisanga gusura portfolio yanjye, kureba imishinga yanjye no kunsobanurira igihe cyose. Ntegereje gukorana namwe no gufasha ubucuruzi bwanyu gutera imbere."
    );
    inviteRw.lang = "rw-RW";
    inviteRw.voice = greetingRw.voice;

    // Chain the speech synthesis utterances
    greetingEn.onend = () => window.speechSynthesis.speak(detailsEn);
    detailsEn.onend = () => window.speechSynthesis.speak(inviteEn);
    inviteEn.onend = () => window.speechSynthesis.speak(greetingRw);
    greetingRw.onend = () => window.speechSynthesis.speak(detailsRw);
    detailsRw.onend = () => window.speechSynthesis.speak(inviteRw);

    try {
      window.speechSynthesis.speak(greetingEn);
      setSpeechPlayed(true);
      return true;
    } catch (e) {
      return false;
    }
  };

  // Attempt to autoplay speech on voices loaded
  useEffect(() => {
    if (voices.length === 0) return;
    const played = speakMessages();
    if (!played) {
      setSpeechPlayed(false); // show tap-to-speak button on blocked autoplay
    }
  }, [voices]);

  // Replay speech on tab focus if played once
  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible" && speechPlayed) {
        speakMessages();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [speechPlayed, voices]);

  // Animated typing effect for roles
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!deleting && displayedText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 100);
    } else if (deleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 50);
    } else if (!deleting && displayedText.length === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && displayedText.length === 0) {
      setDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, deleting, currentRoleIndex]);

  const socialLinks = [
    {
      href: "https://github.com/jeanaimeiraguha",
      icon: FaGithub,
      label: "GitHub",
      color: "hover:text-gray-300",
      bgColor: "bg-gray-800",
    },
    {
      href: "https://www.linkedin.com/in/iraguha-jean-aime-77a13b318/",
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "hover:text-blue-500",
      bgColor: "bg-blue-700",
    },
    {
      href: "mailto:iraguha@example.com",
      icon: FaEnvelope,
      label: "Email",
      color: "hover:text-red-500",
      bgColor: "bg-red-700",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-white select-none overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <StarryBackground />

      <motion.div
        className="max-w-5xl text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Hi, I&apos;m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-gradient-x">
            Jean Aime IRAGUHA
          </span>
        </h1>

        <div className="relative text-3xl md:text-4xl font-mono tracking-wide min-h-[56px] mb-12 text-indigo-400 flex justify-center items-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={displayedText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="select-text"
            >
              {displayedText}
            </motion.span>
          </AnimatePresence>
          <motion.span
            className="ml-1 bg-indigo-400 rounded w-1.5 h-8 inline-block"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
            aria-hidden="true"
          />
        </div>

        {/* Show tap button if autoplay blocked */}
        {!speechPlayed && (
          <motion.button
            onClick={() => speakMessages()}
            className="mb-8 px-10 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Tap to hear voice"
          >
            🔊 Tap to hear my voice
          </motion.button>
        )}

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-12 text-5xl md:text-6xl mb-20"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {socialLinks.map(({ href, icon: Icon, label, color, bgColor }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className={`relative group transition-colors duration-300 ${color}`}
              whileHover={{ scale: 1.3, rotate: 15 }}
              whileTap={{ scale: 0.95, rotate: 0 }}
            >
              <Icon className="drop-shadow-lg" />
              <span
                className={`absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 ${bgColor} text-white text-xs font-semibold rounded px-3 py-1 shadow-lg transition-transform origin-bottom`}
              >
                {label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Say Hi Button */}
        <motion.button
          onClick={() =>
            alert(
              "Thanks for visiting! Feel free to explore my projects and get in touch."
            )
          }
          className="px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Say hi button"
        >
          👋 Say Hi!
        </motion.button>
      </motion.div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
