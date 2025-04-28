import { useState } from "react";
import { animate, motion, AnimatePresence } from "framer-motion";
import Switch from "react-switch";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      yoyo: Infinity,
      duration: 0.5,
    },
  },
};

// Badge animation
const badgeVariants = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200 },
  },
};

const Subscription = () => {
  const [checked, setChecked] = useState(false);
  const [silver, setSilver] = useState("29");
  const [gold, setGold] = useState("59");
  const [platinum, setPlatinum] = useState("99");
  const [plan, setPlan] = useState("month");

  const navigate = useNavigate();

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  const navigateSubscription = () => {
    navigate("/subscription");
  };
  return (
    <div className="">
      <div className="h-24 text-4xl flex items-center justify-center t-24 flex-col gap-4">
        <h2>Subscription</h2>
        <p className="text-lg">
          Choose the perfect plan to accelerate your Python journey
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 py-2 mb-10">
        <span>Monthly</span>
        <Switch
          onChange={(val) => {
            setChecked(val);
            if (silver == 29 || gold == 59 || platinum == 99) {
              setSilver("279");
              setGold("565");
              setPlatinum("950");
              setPlan("year");
            } else {
              setSilver("29");
              setGold("59");
              setPlatinum("99");
              setPlan("month");
            }
          }}
          checked={checked}
          onColor={"#019f00"}
          uncheckedIcon
          checkedIcon
        ></Switch>
        <p>
          <span>Annually </span>
          <span>Save 20%</span>
        </p>
      </div>
      <motion.section
        className="flex items-center justify-around"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <motion.article
          className="border duration-300 border-white w-3/12 h-full overflow-hidden rounded-lg"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="bg-[#cbd5e0] text-slate-900 flex items-center justify-center flex-col gap-4 py-4">
            <motion.p
              className="text-2xl font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Silver
            </motion.p>
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="font-bold text-4xl">${silver} </span>
              <span className="text-slate-600">/ {plan}</span>
            </motion.p>
            <p>Perfect for beginners</p>
          </div>
          <div className="bg-[#cbd5e0]/20 py-20 backdrop-blur-lg">
            <ul className="flex flex-col gap-4 py-4 px-2 justify-center">
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                ✔️ 5 hours of AI tutoring per month
              </motion.li>
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                ✔️ Basic code review assistance
              </motion.li>
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                ✔️ Access to beginner Python courses
              </motion.li>
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                ✔️ Email support within 48 hours
              </motion.li>
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                ✔️ Monthly progress reports
              </motion.li>
              <motion.button
                onClick={() => {
                  navigateSubscription();
                }}
                className="bg-[#cbd5e0] text-slate-800 mx-4 my-2 w-11/12 px-2 py-2 rounded-lg"
                variants={buttonVariants}
                whileHover="hover"
              >
                Get Started
              </motion.button>
            </ul>
          </div>
        </motion.article>
        <motion.article
          className="border duration-300 border-white w-3/12 h-full overflow-hidden rounded-lg"
          variants={cardVariants}
          whileHover="hover"
          transition={{ delay: 0.1 }}
          initial={{ scale: 1.05, y: -10 }}
        >
          <div className="bg-yellow-200 text-yellow-800 flex items-center justify-center flex-col gap-4 pb-4">
            <motion.span
              className="relative ml-[16rem] items-end bg-blue-700 py-1 mb-0 px-[13px] text-white rounded-bl-lg"
              variants={badgeVariants}
              initial="initial"
              whileInView="animate"
            >
              Most Popular
            </motion.span>
            <motion.p
              className="text-2xl font-bold mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Gold
            </motion.p>
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="font-bold text-4xl">${gold}</span>
              <span className="text-[#53550f]">/ {plan}</span>
            </motion.p>
            <p>For serious learners</p>
          </div>
          <div className="bg-[#cbd5e0]/20 backdrop-blur-lg py-8">
            <ul className="flex flex-col gap-4 py-auto justify-center py-2 px-2">
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                ✔️ 15 hours of AI tutoring per month
              </motion.li>
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                ✔️ Advanced code review with solutions
              </motion.li>
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                ✔️ Access to all Python courses
              </motion.li>
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                ✔️ Chat support within 24 hours
              </motion.li>
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                ✔️ Weekly progress reports
              </motion.li>
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                ✔️ 1 monthly live tutoring session
              </motion.li>
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                ✔️ Project recommendations
              </motion.li>
              <motion.button
                onClick={() => {
                  navigateSubscription();
                }}
                className="bg-yellow-200 text-slate-800 mx-4 my-2 w-11/12 px-2 py-2 rounded-lg"
                variants={buttonVariants}
                whileHover="hover"
              >
                Get Started
              </motion.button>
            </ul>
          </div>
        </motion.article>

        <motion.article
          className="border border-white w-3/12 h-full overflow-hidden rounded-lg duration-300"
          variants={cardVariants}
          whileHover="hover"
          transition={{ delay: 0.2 }}
        >
          <div className="bg-gradient-to-tr from-[#a0aec0] to-[#718096] text-white flex items-center justify-center flex-col gap-4 py-4">
            <motion.p
              className="text-2xl font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Platinum
            </motion.p>
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="font-semibold text-4xl">${platinum} </span>
              <span className="text-white">/ {plan}</span>
            </motion.p>
            <p>For professional development</p>
          </div>
          <div>
            <ul className="flex flex-col gap-4 bg-[#cbd5e0]/20 justify-center py-4 px-2">
              {[
                "Unlimited AI tutoring",
                "Priority code review with detailed analysis",
                "Access to exclusive advanced content",
                "24/7 priority support",
                "Daily progress tracking",
                "4 monthly live tutoring sessions",
                "Custom learning path creation",
                "Career guidance & job preparation",
                "Certificate of completion",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  ✔️ {item}
                </motion.li>
              ))}
              <motion.button
                onClick={() => {
                  navigateSubscription();
                }}
                className="bg-gradient-to-tr from-[#a0aec0] to-[#718096] text-slate-800 mx-4 my-2 w-11/12 px-2 py-2 rounded-lg"
                variants={buttonVariants}
                whileHover="hover"
              >
                Get Started
              </motion.button>
            </ul>
          </div>
        </motion.article>
      </motion.section>
    </div>
  );
};

export default Subscription;
