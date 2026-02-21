"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroSplash({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setVisible(true);
      localStorage.setItem("hasVisited", "true");

      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          onFinish();
        }, 800);
      }, 2500);

      return () => clearTimeout(timer);
    } else {
      onFinish();
    }
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0b1220] text-white"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest">
              Welcome
            </h1>

            <p className="mt-6 text-2xl md:text-3xl font-bold text-green-300">
              Humaidi Omar
            </p>

            <p className="mt-2 text-sm md:text-base text-gray-300">
              Transforming Bodies. Building Discipline.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}