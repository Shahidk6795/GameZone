import SplashCursor from "@/components/SplashCursor";
import React from "react";
import { useNavigate } from "react-router-dom";

const Activision = () => {
  const navigate = useNavigate();

  const games = [
    { name: "Call of Duty: Modern Warfare (2019)", desc: "Reboot of the Modern Warfare series with cinematic single-player and multiplayer.", img: "/src/assets/cod_mw2019.jpg", path: "/games/cod-mw2019", rating: "9.3/10" },
    { name: "Call of Duty: Black Ops Cold War (2020)", desc: "Cold War era FPS with campaign, multiplayer, and Zombies mode.", img: "/src/assets/cod_bocw.jpg", path: "/games/cod-bocw", rating: "9/10" },
    { name: "Call of Duty: Warzone (2020)", desc: "Free-to-play battle royale experience with massive multiplayer action.", img: "/src/assets/cod_warzone.jpg", path: "/games/cod-warzone", rating: "9.2/10" },
    { name: "Call of Duty: Vanguard (2021)", desc: "WWII setting with epic campaign and multiplayer battles.", img: "/src/assets/cod_vanguard.jpg", path: "/games/cod-vanguard", rating: "8.8/10" },
    { name: "Call of Duty: Modern Warfare III (2023)", desc: "Latest entry in the Modern Warfare series with updated gameplay and graphics.", img: "/src/assets/cod_mw3.webp", path: "/games/cod-mw3", rating: "9.4/10" }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6 space-y-12">
      <SplashCursor />
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-rgbFlow mb-12">
        Call of Duty Games
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

export default Activision;
