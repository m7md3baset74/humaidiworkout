"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { IoLaptopOutline, IoPhonePortraitOutline } from "react-icons/io5";

export default function IntroSplash({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    const ONE_HOUR = 60 * 60 * 1000;

    if (!lastVisit || now - Number(lastVisit) > ONE_HOUR) {
      setVisible(true);
      localStorage.setItem("lastVisit", now.toString());

      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          onFinish();
        }, 500);
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
              <br />
              to
            </h1>

            <p className="flex flex-col mt-6 text-2xl md:text-3xl font-bold text-green-300">
              Humaidi Omar
              <span className="text-sm font-medium">website</span>
              <span className="text-4xl font-extralight flex items-center justify-center text-white/40 mt-1">
                <IoPhonePortraitOutline />
                <IoLaptopOutline />
              </span>
            </p>

            <p className="mt-2 text-sm md:text-base text-gray-300">
              Transforming Bodies. Building Discipline.
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-10 h-1 bg-green-400 mx-auto rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
