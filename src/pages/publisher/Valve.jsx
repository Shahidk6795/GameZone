import React from "react";
import { useNavigate } from "react-router-dom";

const Valve = () => {
  const navigate = useNavigate();

  const games = [
    { name: "Dota 2 (2013)", desc: "Valve’s flagship MOBA with a huge competitive esports scene.", img: "/src/assets/dota2.webp", path: "/games/dota2", rating: "9.5/10" },
    { name: "Counter-Strike: Global Offensive (2012)", desc: "Tactical team-based FPS still massively popular worldwide.", img: "/src/assets/csgo.jpg", path: "/games/csgo", rating: "9.3/10" },
    { name: "Half-Life: Alyx (2020)", desc: "The latest VR entry in the Half-Life series with immersive gameplay.", img: "/src/assets/hl_alyx.jpg", path: "/games/hl-alyx", rating: "9.6/10" },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6 space-y-12">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-rgbFlow mb-12">
        Valve Games
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

export default Valve;
