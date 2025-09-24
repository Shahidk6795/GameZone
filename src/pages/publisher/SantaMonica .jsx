import React from "react";
import { useNavigate } from "react-router-dom";

const SantaMonica = () => {
  const navigate = useNavigate();

  const games = [
    { name: "God of War (2005)", desc: "The original PS2 classic that started Kratos’ epic journey.", img: "/src/assets/gow1.jpg", path: "/games/gow1", rating: "9.5/10" },
    { name: "God of War II (2007)", desc: "Expanded story, improved combat, and epic boss battles.", img: "/src/assets/gow2.webp", path: "/games/gow2", rating: "9.7/10" },
    { name: "God of War III (2010)", desc: "Epic conclusion to the original Greek mythology trilogy.", img: "/src/assets/gow3.jpg", path: "/games/gow3", rating: "9.8/10" },
    { name: "God of War: Ascension (2013)", desc: "Prequel exploring Kratos’ early struggles and revenge.", img: "/src/assets/gow_ascension.jpg", path: "/games/gow-ascension", rating: "8.9/10" },
    { name: "God of War (2018)", desc: "Reboot/sequel set in Norse mythology with deep storytelling.", img: "/src/assets/gow2018.webp", path: "/games/gow2018", rating: "9.9/10" },
    { name: "God of War Ragnarök (2022)", desc: "Latest entry with massive world, epic combat, and cinematic storytelling.", img: "/src/assets/gow_ragnarok.jpg", path: "/games/gow-ragnarok", rating: "10/10" }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6 space-y-12">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-rgbFlow mb-12">
        Santa Monica Studio Games
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

export default SantaMonica;
