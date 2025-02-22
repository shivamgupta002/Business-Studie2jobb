"use client";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="loader-wrapper">
      <motion.div
        className="dot"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0,
        }}
      />
      <motion.div
        className="dot"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      />
      <motion.div
        className="dot"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      />
    </div>
  );
};

export default Loading;
