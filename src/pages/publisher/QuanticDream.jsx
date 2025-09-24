import SplashCursor from "@/components/SplashCursor";
import React from "react";
import { useNavigate } from "react-router-dom";

const QuanticDream = () => {
  const navigate = useNavigate();

  const games = [
    {
      name: "Detroit: Become Human (2018)",
      desc: "Play as three androids in a branching, choice-driven narrative set in a near-future Detroit.",
      img: "/src/assets/detroit.jpg",
      path: "/games/detroit",
      rating: "9.6/10",
    },
    {
      name: "Beyond: Two Souls (2013)",
      desc: "Experience Jodie Holmes’ life linked to a mysterious entity, starring Ellen Page and Willem Dafoe.",
      img: "/src/assets/beyond.jpeg",
      path: "/games/beyond",
      rating: "9.2/10",
    },
    {
      name: "Heavy Rain (2010)",
      desc: "A tense psychological thriller following four characters hunting the Origami Killer.",
      img: "/src/assets/heavyrain.jpg",
      path: "/games/heavy-rain",
      rating: "9.0/10",
    },
    {
      name: "Fahrenheit / Indigo Prophecy (Remastered)",
      desc: "A supernatural murder mystery adventure blending cinematic action and interactive drama.",
      img: "/src/assets/fahrenheit.jpg",
      path: "/games/fahrenheit",
      rating: "8.8/10",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center py-16 px-6 space-y-12">
      <SplashCursor />

      <h1 className="relative z-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 animate-rgbFlow mb-12">
        Quantic Dream Games
      </h1>

      {games.map((game, i) => (
        <div
          key={i}
          className="relative z-10 w-full max-w-6xl bg-stone-900/50 border border-white/10 rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transform transition-all shadow-xl hover:shadow-[0_0_40px_#3b82f6]"
          onClick={() => navigate(game.path)}
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 blur-2xl opacity-40 animate-rgbFlow z-0"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-6">
            <img
              src={game.img}
              alt={game.name}
              className="w-full md:w-1/3 h-60 md:h-64 object-cover rounded-xl shadow-lg"
            />
            <div className="flex flex-col justify-center w-full md:w-2/3">
              <h2 className="text-3xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 animate-rgbFlow">
                {game.name}
              </h2>
              <p className="text-white/70 mb-4 text-lg">{game.desc}</p>
              <span className="text-blue-300 font-semibold text-lg">
                Rating: {game.rating}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuanticDream;
