import SplashCursor from "@/components/SplashCursor";
import React from "react";
import { useNavigate } from "react-router-dom";

import Re2 from "/src/assets/re2.jpg";
import Re3 from "/src/assets/re3.webp";
import Revillage from "/src/assets/revillage.webp";
import Re4 from "/src/assets/re4.jpg";

const Capcom = () => {
  const navigate = useNavigate();

  const games = [
    { name: "Resident Evil 2 Remake (2019)", desc: "Modern survival horror remake with updated graphics and mechanics.",
       img: Re2, path: "/games/re2", rating: "9.5/10" },
    { name: "Resident Evil 3 Remake (2020)", desc: "Reimagined survival horror featuring Jill Valentine.",
       img: Re3, path: "/games/re3", rating: "9/10" },
    { name: "Resident Evil Village (2021)", desc: "Latest mainline entry with first-person perspective and horror action.",
       img: Revillage, path: "/games/revillage", rating: "9.3/10" },
    { name: "Resident Evil 4 Remake (2023)", desc: "Critically acclaimed modern remake of the classic survival horror.",
       img: Re4, path: "/games/re4", rating: "9.8/10" }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6 space-y-12">
      <SplashCursor />
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-rgbFlow mb-12">
        Capcom Games 
      </h1>

      {games.map((game, i) => (
        <div
          key={i}
          className="w-full max-w-6xl bg-stone-900/50 border border-white/10 rounded-2xl overflow-hidden relative group cursor-pointer hover:scale-105 transform transition-all shadow-xl hover:shadow-[0_0_40px_#a855f7]"
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
              <span className="text-yellow-400 font-semibold text-lg">Rating: {game.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Capcom;
