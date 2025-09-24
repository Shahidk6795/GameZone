import React from "react";
import { useNavigate } from "react-router-dom";

import acm from "/src/assets/ac_mirage.jpg";
import aco from "/src/assets/ac_odyssey.jpeg";
import acv from "/src/assets/ac_valhalla.jpg";
import acor from "/src/assets/ac_origins.jpg";
const Ubisoft = () => {
  const navigate = useNavigate();

  const games = [
    { name: "Assassin's Creed Mirage", desc: "Stealth and parkour in ancient Baghdad.",
       img: acm, path: "/games/ac-mirage", rating: "9/10" },
    { name: "Assassin's Creed Odyssey", desc: "Explore Ancient Greece as a mercenary.",
       img: aco, path: "/games/ac-odyssey", rating: "9.2/10" },
    { name: "Assassin's Creed Valhalla", desc: "Lead your clan as a Viking raider across England.",
       img: acv, path: "/games/ac-valhalla", rating: "8.8/10" },
    { name: "Assassin's Creed Origins", desc: "Uncover the secrets of Ancient Egypt.",
       img: acor, path: "/games/ac-origins", rating: "9/10" },

    { name: "Far Cry Primal", desc: "Experience survival in the Stone Age.", img: "/src/assets/farcryprimal.jpg", path: "/games/farcryprimal", rating: "8.4/10" },

    { name: "Watch Dogs", desc: "Hack the city and uncover hidden secrets.", img: "/src/assets/watchdogs1.jpg", path: "/games/watchdogs1", rating: "8.3/10" },
    { name: "Watch Dogs 2", desc: "Join DedSec to fight corrupt corporations in San Francisco.", img: "/src/assets/watchdogs2.jpg", path: "/games/watchdogs2", rating: "8.7/10" },
    { name: "Watch Dogs: Legion", desc: "Recruit anyone to fight back in a dystopian London.", img: "/src/assets/watchdogslegion.jpg", path: "/games/watchdogslegion", rating: "8.5/10" }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6 space-y-12">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-rgbFlow mb-12">
        Ubisoft Games
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

export default Ubisoft;
