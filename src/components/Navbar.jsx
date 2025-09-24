import React from "react";
import { useNavigate } from "react-router-dom";

const publishers = [
  { name: "Ubisoft", logo: "/src/assets/ubisoft.png", path: "/publisher/ubisoft" },
  { name: "2K", logo: "/src/assets/2kLogo.png", path: "/publisher/2k" },
  { name: "Rockstar", logo: "/src/assets/rockstar.png", path: "/publisher/rockstar" },
  { name: "Santa Monica", logo: "/src/assets/santamonica.png", path: "/publisher/santamonica" },
  { name: "EA Sports", logo: "/src/assets/ea.png", path: "/publisher/ea" },
  { name: "Activision", logo: "/src/assets/activision.png", path: "/publisher/activision" },
  { name: "Valve", logo: "/src/assets/valve.png", path: "/publisher/valve" },
  { name: "Capcom", logo: "/src/assets/capcom.png", path: "/publisher/capcom" },
  { name: "CD Projekt", logo: "/src/assets/cdprojekt.jpeg", path: "/publisher/cdprojekt" },
  { name: "Naughty Dog", logo: "/src/assets/naughtydog.png", path: "/publisher/naughtydog" },
  { name: "Quantic Dream", logo: "/src/assets/quanticdream.png", path: "/publisher/quanticdream" },
  { name: "Rocksteady", logo: "/src/assets/rocksteady.png", path: "/publisher/rocksteady" },
  { name: "Sony", logo: "/src/assets/sony.png", path: "/publisher/sony" },
  { name: "Epic Games", logo: "/src/assets/epicgames.png", path: "/publisher/epicgames" },
];

const Navbar = ({ query, onQuery }) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50">
      <div className="relative backdrop-blur-xl bg-black/40 border-b border-white/10 overflow-hidden pt-4 pb-4">
        <div className="absolute inset-0 animate-rgbFlow bg-[length:400%_400%] bg-gradient-to-r from-purple-800 via-fuchsia-700 to-cyan-500 opacity-60 z-0"></div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="w-1 h-1 bg-pink-500 rounded-full absolute top-10 left-20 animate-pulse-slow opacity-30"></div>
          <div className="w-1 h-1 bg-cyan-500 rounded-full absolute top-32 left-60 animate-pulse-slow opacity-20"></div>
          <div className="w-1 h-1 bg-purple-500 rounded-full absolute top-20 left-80 animate-pulse-slow opacity-25"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div
            className="flex items-center space-x-3 cursor-pointer relative"
            onClick={() => navigate("/")}
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 blur-xl opacity-30 animate-rgbFlow z-0"></div>
            <img
              src="/src/assets/gamezone-logo.png"
              alt="GameZone Logo"
              className="h-24 md:h-28 w-auto relative z-10"
            />
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-rgbFlow">
                GameZone
              </h1>
              <span className="text-base md:text-lg text-white/70">Video Game Catalog</span>
            </div>
          </div>

          <input
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="🔍 Search games, tags, publishers..."
            className="w-full md:w-96 px-4 py-2 rounded-xl 
                       bg-gradient-to-r from-white/10 via-white/5 to-white/10
                       backdrop-blur-lg shadow-lg border border-white/20 placeholder-white/60 text-white
                       focus:bg-white/20 focus:ring-2 focus:ring-fuchsia-500 outline-none transition duration-300
                       hover:backdrop-brightness-125"
          />
        </div>

        <span className="absolute left-0 bottom-0 h-1 w-full rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-rgbFlow"></span>
      </div>

      <div className="relative publisher-ticker overflow-hidden border-b border-white/10 py-2">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0 pointer-events-none rounded-b-lg"></div>
        <span className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black/90 to-transparent z-20 pointer-events-none"></span>
        <span className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black/90 to-transparent z-20 pointer-events-none"></span>

        <div className="flex animate-scrollTicker gap-8 px-6 py-2 min-w-max relative z-10">
          {publishers.concat(publishers).map((p, index) => (
            <button
              key={index}
              onClick={() => navigate(p.path)}
              className="flex flex-col items-center space-y-1 group cursor-pointer"
            >
              <div className="p-2 rounded-xl bg-stone-950 border border-white/10 
                              hover:bg-black/90 transition-transform transform hover:scale-125
                              hover:shadow-[0_0_30px_#a855f7] animate-rgbGlow">
                <img src={p.logo} alt={p.name} className="h-10 w-auto object-contain" />
              </div>
              <span className="text-xs text-white/80 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-500 group-hover:to-yellow-400 transition">
                {p.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;