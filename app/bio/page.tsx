"use client";

import Tilt from "react-parallax-tilt";
import {
  db,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  increment,
} from "../../lib/firebase";
import { useState, useEffect } from "react";
import { Press_Start_2P } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  MessageCircle,
  Gamepad2,
  SkipBack,
  SkipForward,
  Pause,
} from "lucide-react";

const minecraft = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export default function BioPage() {
  const [entered, setEntered] = useState(false);
  const [views, setViews] = useState(0);
  useEffect(() => {
  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      setEntered(true);
    }
  };

  window.addEventListener("keydown", handleEnter);

  return () => {
    window.removeEventListener("keydown", handleEnter);
  };
}, []);
useEffect(() => {

  const updateViews = async () => {

    const ref = doc(db, "stats", "views");

    const snap = await getDoc(ref);

    if (!snap.exists()) {

      await setDoc(ref, {
        count: 1,
      });

      setViews(1);

    } else {

      await updateDoc(ref, {
        count: increment(1),
      });

      setViews(snap.data().count + 1);
    }
  };

  updateViews();

}, []);
  return (
<>
  <AnimatePresence>

    {!entered && (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        onClick={() => setEntered(true)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-2xl cursor-pointer"
      >

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1 }}
          className="text-center space-y-6 pointer-events-none"
        >

          <h1 className="text-2xl text-purple-200 tracking-[0.2em]">
            Bienvenido a mi Biografía jiji
          </h1>

          <p className="text-sm text-purple-300/70 animate-pulse">
            click o enter
          </p>

        </motion.div>

      </motion.div>
    )}

  </AnimatePresence>
    <main
      className={`${minecraft.className} relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-10 bg-black text-white`}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* purple glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#9333ea55,transparent_70%)]" />
      </div>

{/* MAIN CONTAINER */}
<Tilt
  glareEnable={true}
  glareMaxOpacity={0.15}
  scale={1.01}
  tiltMaxAngleX={6}
  tiltMaxAngleY={6}
  transitionSpeed={2500}
>
<motion.div
  initial={{ opacity: 0, y: 80 }}
  animate={{
    opacity: entered ? 1 : 0,
    y: entered ? 0 : 80,
  }}
  transition={{
    duration: 1.2,
    ease: "easeOut",
  }}
  className="relative w-full max-w-2xl space-y-6"
>

{/* PROFILE CARD */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.5 }}
    className="overflow-hidden rounded-2xl border-[2px] border-black bg-[#3b1f63]/90 shadow-[0_0_40px_rgba(147,51,234,0.4)]"
  >

          {/* BANNER */}
          <div className="relative h-44">
            <img
              src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1974&auto=format&fit=crop"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-purple-900/20" />
          </div>

          {/* AVATAR */}
          <div className="relative flex justify-center">
            <img
              src="/logo.png"
              className="absolute -top-20 w-32 h-32 rounded-full border-[4px] border-black object-cover shadow-[0_0_25px_rgba(168,85,247,0.8)]"
            />
          </div>
          {/* CONTENT */}
          <div className="pt-24 pb-8 px-6 text-center relative">

            {/* views */}
            <div className="absolute left-5 top-5 text-[10px] text-purple-200">
              👁 {views}
            </div>

            {/* NAME */}
            <h1 className="text-3xl text-purple-100 tracking-[0.15em]">
              ByMist
            </h1>

            {/* SUBTITLE */}
            <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-purple-300">
              Staff Experience
            </p>

            {/* SOCIALS */}
            <div className="flex justify-center gap-4 mt-8">

              <a
                href="#"
                className="w-14 h-14 rounded-xl border-[2px] border-black bg-[#5b2c91] flex items-center justify-center hover:bg-[#6d34b0] transition"
              >
                <Gamepad2 size={20} />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-xl border-[2px] border-black bg-[#5b2c91] flex items-center justify-center hover:bg-[#6d34b0] transition"
              >
                <MessageCircle size={20} />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-xl border-[2px] border-black bg-[#5b2c91] flex items-center justify-center hover:bg-[#6d34b0] transition"
              >
                <Globe size={20} />
              </a>

            </div>
          </div>
      </motion.div>
        {/* PORTFOLIO CARD */}
        <a
          href="#"
          className="flex items-center justify-between rounded-2xl border-[2px] border-black bg-[#3b1f63]/90 p-5 hover:bg-[#4b2678] transition shadow-[0_0_25px_rgba(147,51,234,0.3)]"
        >
          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-xl border-[2px] border-black bg-[#5b2c91] flex items-center justify-center">
              👤
            </div>

            <div>
              <p className="text-[10px] uppercase text-purple-200 tracking-[0.2em]">
                Portfolio
              </p>

              <p className="text-[9px] text-purple-100 mt-2">
                https://bymist.dev
              </p>
            </div>
          </div>

          <div className="text-xl text-purple-200">
            →
          </div>
        </a>

        {/* MUSIC CARD */}
        <div className="rounded-2xl border-[2px] border-black bg-[#3b1f63]/90 p-6 shadow-[0_0_25px_rgba(147,51,234,0.3)]">

          {/* TITLE */}
          <div className="flex items-center gap-3 mb-6 text-purple-200 text-[10px] uppercase tracking-[0.2em]">
            🔊 Now Playing
          </div>

          {/* SONG */}
          <div className="text-center">
            <h2 className="text-lg text-purple-100 tracking-wider">
              STAR WALKIN'
            </h2>

            <p className="text-[9px] text-purple-300 mt-4">
              Lil Nas X
            </p>
          </div>

          {/* PROGRESS BAR */}
          <div className="flex items-center gap-3 mt-8">

            <span className="text-[8px] text-purple-200">
              00:42
            </span>

            <div className="flex-1 h-3 rounded-full bg-black border-[2px] border-black overflow-hidden">
              <div className="w-1/3 h-full bg-purple-400" />
            </div>

            <span className="text-[8px] text-purple-200">
              03:12
            </span>
          </div>

          {/* CONTROLS */}
          <div className="flex justify-center items-center gap-6 mt-8">

            <button className="text-purple-200">
              <SkipBack size={24} />
            </button>

            <button className="w-16 h-16 rounded-full border-[2px] border-black bg-[#5b2c91] flex items-center justify-center hover:bg-[#6d34b0] transition">
              <Pause size={26} />
            </button>

            <button className="text-purple-200">
              <SkipForward size={24} />
            </button>

          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center text-[8px] text-purple-300 tracking-[0.2em] pt-2">
          © 2026 BYMIST
        </div>

      </motion.div>
      </Tilt>
    </main>
    </>
  );
}