import SplashCursor from "@/components/SplashCursor";
import React from "react";
import { useNavigate } from "react-router-dom";

const EpicGames = () => {
  const navigate = useNavigate();

  const games = [
    {
      name: "Fortnite (2017)",
      desc: "Battle Royale phenomenon with evolving seasons, creative mode, and crossovers.",
      img: "/src/assets/fortnite.jpg",
      path: "/games/fortnite",
      rating: "9.5/10",
    },
    {
      name: "Unreal Tournament 3: Black (2007)",
      desc: "Fast-paced arena shooter running on Unreal Engine 3.",
      img: "/src/assets/unrealtournament3.jpg",
      path: "/games/unreal-tournament-3",
      rating: "8.9/10",
    },
    {
      name: "The Matrix Awakens: UE5 Experience (2021)",
      desc: "A free tech demo showing off Unreal Engine 5 in a city-scale environment.",
      img: "/src/assets/matrix_awaken.jpg",
      path: "/games/matrix-awakens",
      rating: "9.0/10",
    },
    {
      name: "Fall Guys: Ultimate Knockout (2020)",
      desc: "Chaotic party game with obstacle courses; acquired by Epic in 2021.",
      img: "/src/assets/fallguys.webp",
      path: "/games/fall-guys",
      rating: "9.2/10",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center py-16 px-6 space-y-12">
      <SplashCursor />

      <h1 className="relative z-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-rgbFlow mb-12">
        Epic Games – Hall of Fame
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

export default EpicGames;
