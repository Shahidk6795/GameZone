import SplashCursor from "@/components/SplashCursor";
import React from "react";
import { useNavigate } from "react-router-dom";


import witcher3 from "/src/assets/w3_nextgen.webp";
import cyberpunk2077 from "/src/assets/cyberpunk2077.jpg";
import w3heartsofstone from "/src/assets/w3_heartsofstone.jpg";
import w3bloodandwine from "/src/assets/w3_bloodandwine.jpeg";

const CDProjekt = () => {
  const navigate = useNavigate();

  const games = [
    { name: "The Witcher 3: Wild Hunt Next-Gen Update (2022 2023)", desc: "Remastered version with updated graphics and next-gen improvements.",
       img: witcher3, path: "/games/w3-nextgen", rating: "9.8/10" },
    { name: "Cyberpunk 2077 (2020)", desc: "Open-world futuristic RPG set in Night City with deep story and immersive gameplay.",
       img: cyberpunk2077, path: "/games/cyberpunk2077", rating: "8.9/10" },
    { name: "The Witcher 3: Hearts of Stone (2015)", desc: "Expansion introducing a new story arc with challenging quests and characters.",
       img: w3heartsofstone, path: "/games/w3-heartsofstone", rating: "9.2/10" },
    { name: "The Witcher 3: Blood and Wine (2016)", desc: "Major expansion featuring a new region, storyline, and endgame content.",
       img: w3bloodandwine, path: "/games/w3-bloodandwine", rating: "9.5/10" }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6 space-y-12">
      <SplashCursor />
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-rgbFlow mb-12">
        CD Projekt Games
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

export default CDProjekt;
