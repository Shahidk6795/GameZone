import SplashCursor from "@/components/SplashCursor";
import React from "react";
import { useNavigate } from "react-router-dom";

import got from "/src/assets/ghost_tsushima.jpg";
import horizonwest from "/src/assets/horizon_fw.webp";
import spiderman2 from "/src/assets/spiderman2.webp";
import spiderman1 from "/src/assets/spiderman1.jpg";
import horizon from "/src/assets/horizon_zerodawn.jpg";
import forza5 from "/src/assets/forza_horizon5.jpg";

const PlayStation = () => {
  const navigate = useNavigate();

  const games = [
    {
      name: "Ghost of Tsushima Director's Cut (2021)",
      desc: "Open-world samurai adventure with stunning visuals and Iki Island expansion.",
      img: got,
      path: "/games/ghost-tsushima",
      rating: "9.5/10",
    },
    {
      name: "Horizon Forbidden West (2022)",
      desc: "Aloy's journey continues across a vast and vibrant post-apocalyptic world.",
      img: horizonwest,
      path: "/games/horizon-forbidden-west",
      rating: "9.3/10",
    },
    {
      name: "Marvel's Spider-Man 2 (2023)",
      desc: "Swing across New York as Peter Parker and Miles Morales in this blockbuster sequel.",
      img: spiderman2,
      path: "/games/spiderman2",
      rating: "9.4/10",
    },
    {
      name: "Marvel's Spider-Man (2018)",
      desc: "The award-winning open-world adventure where you fight crime as the original Spider-Man.",
      img: spiderman1,
      path: "/games/spiderman1",
      rating: "9.2/10",
    },
    {
      name: "Horizon Zero Dawn (2017)",
      desc: "Aloy's original adventure in a post-apocalyptic world ruled by machines.",
      img: horizon,
      path: "/games/horizon-zero-dawn",
      rating: "9.1/10",
    },
    {
      name: "Forza Horizon 5 (2021)",
      desc: "Drive across Mexico in the latest entry of the open-world racing franchise.",
      img: forza5,
      path: "/games/forza-horizon5",
      rating: "9.5/10",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center py-16 px-6 space-y-12">
      <SplashCursor />

      <h1 className="relative z-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-rgbFlow mb-12">
        PlayStation Studios + Horizon & Forza
      </h1>

      {games.map((game, i) => (
        <div
          key={i}
          className="relative z-10 w-full max-w-6xl bg-stone-900/50 border border-white/10 rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transform transition-all shadow-xl hover:shadow-[0_0_40px_#60a5fa]"
          onClick={() => navigate(game.path)}
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 blur-2xl opacity-40 animate-rgbFlow z-0"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-6">
            <img
              src={game.img}
              alt={game.name}
              className="w-full md:w-1/3 h-60 md:h-64 object-cover rounded-xl shadow-lg"
            />
            <div className="flex flex-col justify-center w-full md:w-2/3">
              <h2 className="text-3xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-rgbFlow">
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

export default PlayStation;
