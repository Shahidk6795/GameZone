import React from "react";
import { useNavigate } from "react-router-dom";

import wwe23 from "/src/assets/wwe2k23.jpeg";
import wwe24 from "/src/assets/wwe2k24.webp";
import wwe25 from "/src/assets/wwe2k25.jpg";
import mafia1 from "/src/assets/mafia_definitive.jpeg";
import mafia2 from "/src/assets/mafia_old.webp";
import SplashCursor from "@/components/SplashCursor";

const TwoK = () => {
  const navigate = useNavigate();

  const games = [
    { name: "WWE 2K23", desc: "Step into the ring and dominate your opponents.",
       img: wwe23, path: "/games/wwe2k23", rating: "8.5/10" },
    { name: "WWE 2K24", desc: "Enhanced gameplay and new WWE superstars.",
       img: wwe24, path: "/games/wwe2k24", rating: "8.7/10" },
    { name: "WWE 2K25", desc: "The ultimate wrestling experience with realistic graphics and story modes.",
       img: wwe25, path: "/games/wwe2k25", rating: "9/10" },
    { name: "Mafia: Definitive Edition", desc: "Step into the life of a mobster in 1930s America.",
       img: mafia1, path: "/games/mafia-definitive", rating: "9/10" },
    { name: "Mafia: The City of Lost Heaven (Old Country)", desc: "Original Mafia experience for classic gamers.",
       img: mafia2, path: "/games/mafia-old", rating: "8.3/10" }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6 space-y-12">
      <SplashCursor />
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-rgbFlow mb-12">
        2k Games
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

export default TwoK;
