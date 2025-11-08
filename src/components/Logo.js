import React from "react";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div
      className="flex items-center space-x-3"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-10 h-10 relative">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Neon Glow Shadow Layer */}
          <motion.path
            d="M15 20 H85 L15 80 H85"
            stroke="hsl(var(--neon-primary))"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
            opacity="0.35"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Main “Z” Shape */}
          <motion.path
            d="M15 20 H85 L15 80 H85"
            stroke="hsl(var(--neon-primary))"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Bottom Accent Line */}
          <motion.line
            x1="25"
            y1="85"
            x2="75"
            y2="85"
            stroke="hsl(var(--neon-cool))"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* SVG filter for glow effect */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      <motion.span
        className="text-3xl font-extrabold tracking-wide drop-shadow-[0_0_3px_hsl(var(--neon-primary))]"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          color: "hsl(var(--neon-primary))",
        }}
        animate={{
          textShadow: [
            "0 0 2px hsl(var(--neon-primary))",
            "0 0 6px hsl(var(--neon-primary))",
            "0 0 2px hsl(var(--neon-primary))",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        ZEESHAN
      </motion.span>
    </motion.div>
  );
};
