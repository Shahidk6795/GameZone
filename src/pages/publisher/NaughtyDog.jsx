import SplashCursor from "@/components/SplashCursor";
import React from "react";
import { useNavigate } from "react-router-dom";

import tl1 from "/src/assets/tlou1.jpg";
import tl2 from "/src/assets/tlou2.jpeg";
import uncharted4 from "/src/assets/uncharted4.jpg";
import unchartedLostLegacy from "/src/assets/uncharted_lostlegacy.jpg";

const NaughtyDog = () => {
  const navigate = useNavigate();

  const games = [
    {
      name: "The Last of Us Part I (2022)",
      desc: "A ground-up remake of the original classic with modern graphics and gameplay enhancements.",
      img: tl1,
      path: "/games/tlou-part1",
      rating: "9.8/10",
    },
    {
      name: "The Last of Us Part II (2020)",
      desc: "A gripping, emotional sequel with groundbreaking storytelling and gameplay.",
      img: tl2,
      path: "/games/tlou-part2",
      rating: "9.7/10",
    },
    {
      name: "Uncharted 4: A Thief's End (2016)",
      desc: "Embark on Nathan Drake's last adventure with breathtaking set-pieces and treasure hunting.",
      img: uncharted4,
      path: "/games/uncharted4",
      rating: "9.5/10",
    },
    {
      name: "Uncharted: The Lost Legacy (2017)",
      desc: "A standalone adventure featuring Chloe Frazer and Nadine Ross in India.",
      img: unchartedLostLegacy,
      path: "/games/uncharted-lostlegacy",
      rating: "9.3/10",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center py-16 px-6 space-y-12">
      <SplashCursor />

      <h1 className="relative z-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-rgbFlow mb-12">
        Naughty Dog Games
      </h1>

      {games.map((game, i) => (
        <div
          key={i}
          className="relative z-10 w-full max-w-6xl bg-stone-900/50 border border-white/10 rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transform transition-all shadow-xl hover:shadow-[0_0_40px_#a855f7]"
          onClick={() => navigate(game.path)}
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 blur-2xl opacity-40 animate-rgbFlow z-0"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-6">
            <img
              src={game.img}
              alt={game.name}
              className="w-full md:w-1/3 h-60 md:h-64 object-cover rounded-xl shadow-lg"
            />
            <div className="flex flex-col justify-center w-full md:w-2/3">
              <h2 className="text-3xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-rgbFlow">
                {game.name}
              </h2>
              <p className="text-white/70 mb-4 text-lg">{game.desc}</p>
              <span className="text-yellow-400 font-semibold text-lg">
                Rating: {game.rating}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NaughtyDog;
