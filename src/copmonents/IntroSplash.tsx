"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroSplash() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setVisible(true);
      localStorage.setItem("hasVisited", "true");

      const timer = setTimeout(() => {
        setVisible(false);
      }, 2800);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0b1220] text-white"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest">
              Welcome
            </h1>

            <p className="mt-6 text-2xl md:text-3xl font-bold text-green-300">
              Humaidi Omar
            </p>

            <p className="mt-2 text-sm md:text-base text-gray-400 tracking-wide">
              Transforming Bodies. Building Discipline.
            </p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-10 h-1 bg-green-300 mx-auto rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}