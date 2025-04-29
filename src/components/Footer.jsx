import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Here you would normally send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    "Learning Resources": [
      { name: "Python Fundamentals", href: "#" },
      { name: "Advanced Python", href: "#" },
      { name: "Data Science with Python", href: "#" },
      { name: "Web Development", href: "#" },
      { name: "Machine Learning", href: "#" },
    ],
    Platform: [
      { name: "How It Works", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "AI Tutor Features", href: "#" },
      { name: "For Teams", href: "#" },
      { name: "Student Testimonials", href: "#" },
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Press Kit", href: "#" },
    ],
    Legal: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Security", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: "twitter.svg", href: "#" },
    { name: "LinkedIn", icon: "linkedin.svg", href: "#" },
    { name: "GitHub", icon: "github.svg", href: "#" },
    { name: "YouTube", icon: "youtube.svg", href: "#" },
    { name: "Discord", icon: "discord.svg", href: "#" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.footer
      className=" text-gray-300 pt-16 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo and description */}
          <motion.div
            className="col-span-1 md:col-span-2"
            variants={itemVariants}
          >
            <h2 className="text-xl font-bold text-white flex items-center">
              <span className="text-blue-400 mr-2">{"{ }"}</span>
              PythonTutor.AI
            </h2>
            <p className="mt-4 text-gray-400 max-w-md">
              Your AI-powered Python programming companion. Learn to code at
              your own pace with personalized tutoring, code reviews, and
              interactive exercises.
            </p>

            {/* Newsletter subscription */}
            <div className="mt-8">
              <h3 className="text-white font-medium mb-2">
                Stay updated with our newsletter
              </h3>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col lg:flex-row gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white flex-grow"
                  required
                />
                <motion.button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
              {isSubscribed && (
                <motion.p
                  className="text-green-400 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Thanks for subscribing!
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              className="col-span-1"
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-white font-medium mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition duration-200"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social links & copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                {/* Sample icon representation */}
                <span className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                  {social.name.charAt(0)}
                </span>
              </motion.a>
            ))}
          </div>

          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} PythonTutor.AI. All rights reserved.
          </div>
        </motion.div>

        {/* Extra features badge */}
        <motion.div
          className="mt-8 text-center text-sm text-gray-500"
          variants={itemVariants}
        >
          Powered by advanced AI tutoring technology. Available 24/7 for Python
          learners worldwide.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
