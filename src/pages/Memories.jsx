import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";
import photo6 from "../assets/images/photo6.jpg";
import photo7 from "../assets/images/photo7.jpg";
import photo8 from "../assets/images/photo8.jpg";
import photo9 from "../assets/images/photo9.jpg";

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
];

// Random positions for balloons
const balloonPositions = Array.from({ length: 9 }, () => ({
  left: `${Math.random() * 85}%`,
  duration: 15 + Math.random() * 10,
  delay: Math.random() * 5,
}));

function Memories() {
  const [popped, setPopped] = useState([]);

  const popBalloon = (index) => {
    if (!popped.includes(index)) {
      setPopped((prev) => [...prev, index]);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-200 via-rose-100 to-pink-50 overflow-hidden p-6">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-700 mb-10 relative z-20">
        Pop the Balloons for Memories 🎈
      </h1>

      {/* Floating Balloons */}
      <div className="absolute inset-0 z-10">
        {photos.map((_, index) =>
          !popped.includes(index) ? (
            <AnimatePresence key={index}>
              <motion.div
                className="absolute cursor-pointer select-none"
                initial={{
                  y: "110vh",
                  x: balloonPositions[index].left,
                  opacity: 1,
                }}
                animate={{
                  y: "-20vh",
                }}
                transition={{
                  duration: balloonPositions[index].duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: balloonPositions[index].delay,
                }}
                exit={{
                  scale: 2,
                  opacity: 0,
                  transition: { duration: 0.3 },
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => popBalloon(index)}
              >
                <div className="text-7xl md:text-8xl">
                  🎈
                </div>
              </motion.div>
            </AnimatePresence>
          ) : null
        )}
      </div>

      {/* Revealed Photos */}
      <div className="relative z-20 grid grid-cols-2 md:grid-cols-3 gap-4 mt-24 justify-items-center">
        {popped.map((index) => (
          <motion.img
            key={index}
            src={photos[index]}
            alt={`Memory ${index + 1}`}
            className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-2xl shadow-xl border-4 border-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>

      {/* Final Button */}
      {popped.length === photos.length && (
        <motion.div
          className="flex justify-center mt-12 relative z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link
            to="/letter"
            className="px-8 py-4 bg-pink-600 text-white rounded-full text-xl md:text-2xl hover:bg-pink-700 transition shadow-2xl"
          >
            Read My Letter 💌
          </Link>
        </motion.div>
      )}
    </div>
  );
}

export default Memories;