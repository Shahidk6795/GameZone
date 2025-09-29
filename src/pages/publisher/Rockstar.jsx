import React from "react";
import { useNavigate } from "react-router-dom";

import gtav from "/src/assets/gta5.webp";
import gtavi from "/src/assets/gta6.webp";
import gtas from "/src/assets/gta_sa.jpg";
import rdr2 from "/src/assets/rdr2.jpg";
import rdr1 from "/src/assets/rdr1.webp";
import bully from "/src/assets/bully.jpg";
import SplashCursor from "@/components/SplashCursor";

const Rockstar = () => {
  const navigate = useNavigate();

  const games = [
    { name: "Grand Theft Auto V", desc: "Open-world crime adventure in Los Santos.",
       img: gtav, path: "/games/gta5", rating: "9.5/10" },
    { name: "Grand Theft Auto VI", desc: "The next generation open-world crime experience.",
       img: gtavi, path: "/games/gta6", rating: "9.8/10" },
    { name: "Grand Theft Auto: San Andreas", desc: "Epic crime story across three cities.",
       img: gtas, path: "/games/gta-sa", rating: "9.3/10" },
    { name: "Red Dead Redemption 2", desc: "An epic tale of life as an outlaw in the Wild West.",
       img: rdr2, path: "/games/rdr2", rating: "9.8/10" },
    { name: "Red Dead Redemption", desc: "Classic Wild West adventure and redemption story.",
       img: rdr1, path: "/games/rdr1", rating: "9/10" },
    { name: "Bully", desc: "Step into the shoes of a mischievous student at Bullworth Academy.",
       img: bully, path: "/games/bully", rating: "8.7/10" }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6 space-y-12">
      <SplashCursor />
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-rgbFlow mb-12">
        Rockstar Games
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

export default Rockstar;
