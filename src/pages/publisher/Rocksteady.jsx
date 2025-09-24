import SplashCursor from "@/components/SplashCursor";
import React from "react";
import { useNavigate } from "react-router-dom";

const Rocksteady = () => {
  const navigate = useNavigate();

  const games = [
    {
      name: "Batman: Arkham Asylum (2009)",
      desc: "The groundbreaking superhero game that started it all, set in Gotham's infamous asylum.",
      img: "/src/assets/arkham_asylum.webp",
      path: "/games/arkham-asylum",
      rating: "9.1/10",
    },
    {
      name: "Batman: Arkham City (2011)",
      desc: "A massive open-world Gotham experience with iconic villains and an unforgettable story.",
      img: "/src/assets/arkham_city.jpg",
      path: "/games/arkham-city",
      rating: "9.6/10",
    },
    {
      name: "Batman: Arkham Knight (2015)",
      desc: "The epic finale featuring the Batmobile, stunning visuals, and a darker story.",
      img: "/src/assets/arkham_knight.jpg",
      path: "/games/arkham-knight",
      rating: "9.3/10",
    },
    {
      name: "Suicide Squad: Kill the Justice League (2024)",
      desc: "Step into the shoes of Harley Quinn, Deadshot, Captain Boomerang, and King Shark in an action-packed co-op shooter.",
      img: "/src/assets/suicide_squad.jpg",
      path: "/games/suicide-squad",
      rating: "7.5/10",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center py-16 px-6 space-y-12">
      <SplashCursor />

      <h1 className="relative z-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-rgbFlow mb-12">
        Rocksteady Studios Games
      </h1>

      {games.map((game, i) => (
        <div
          key={i}
          className="relative z-10 w-full max-w-6xl bg-stone-900/50 border border-white/10 rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transform transition-all shadow-xl hover:shadow-[0_0_40px_#facc15]"
          onClick={() => navigate(game.path)}
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 blur-2xl opacity-40 animate-rgbFlow z-0"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-6">
            <img
              src={game.img}
              alt={game.name}
              className="w-full md:w-1/3 h-60 md:h-64 object-cover rounded-xl shadow-lg"
            />
            <div className="flex flex-col justify-center w-full md:w-2/3">
              <h2 className="text-3xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-rgbFlow">
                {game.name}
              </h2>
              <p className="text-white/70 mb-4 text-lg">{game.desc}</p>
              <span className="text-yellow-300 font-semibold text-lg">
                Rating: {game.rating}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rocksteady;
