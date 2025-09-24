import SplashCursor from "@/components/SplashCursor";
import React from "react";

const publishersSummary = [
  { name: "Rocksteady", logo: "/src/assets/rocksteady.png", summary: "Creators of the iconic Arkham series. Explore Gotham like never before with thrilling gameplay and story.", highlight: true },
  { name: "Ubisoft", logo: "/src/assets/ubisoft.png", summary: "Home to Assassin's Creed, Far Cry, and Watch Dogs franchises." },
  { name: "2K", logo: "/src/assets/2kLogo.png", summary: "Known for NBA 2K, Borderlands, and Bioshock series." },
  { name: "Santa Monica", logo: "/src/assets/santamonica.png", summary: "Creators of the God of War series, bringing epic adventures to life." },
  { name: "EA Sports", logo: "/src/assets/ea.png", summary: "Famous for FIFA, Madden NFL, and other sports simulations." },
  { name: "Activision", logo: "/src/assets/activision.png", summary: "Publisher of Call of Duty series and other blockbuster games." },
  { name: "Valve", logo: "/src/assets/valve.png", summary: "Creators of Half-Life, Portal, and Steam platform." },
  { name: "Capcom", logo: "/src/assets/capcom.png", summary: "Famous for Resident Evil, Street Fighter, and Monster Hunter." },
  { name: "CD Projekt", logo: "/src/assets/cdprojekt.jpeg", summary: "Creators of The Witcher series and Cyberpunk 2077." },
  { name: "Naughty Dog", logo: "/src/assets/naughtydog.png", summary: "Developers of Uncharted and The Last of Us series." },
  { name: "Quantic Dream", logo: "/src/assets/quanticdream.png", summary: "Known for interactive dramas like Detroit: Become Human." },
  { name: "Sony", logo: "/src/assets/sony.png", summary: "Creators of PlayStation exclusives and iconic franchises." },
  { name: "Epic Games", logo: "/src/assets/epicgames.png", summary: "Famous for Fortnite and Unreal Engine." },
  { name: "More Publishers", logo: "/src/assets/more.png", summary: "Explore many more publishers and discover amazing games." },
];

function Home() {
  return (
    <div className="relative bg-gradient-to-b from-black via-stone-900 to-black text-white overflow-hidden">

      <SplashCursor />

      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="orb"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              animationDelay: `${Math.random() * 10}s`,
              width: `${200 + Math.random() * 200}px`,
              height: `${200 + Math.random() * 200}px`,
            }}
          />
        ))}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-rgbFlow drop-shadow-[0_0_20px_#a855f7]">
          Welcome to GameZone
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl animate-fadeIn">
          Your one-stop destination for all things gaming. Explore, discover, and play with the latest games and publishers.
        </p>
        <button className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 rounded-full text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_25px_#a855f7] transition-transform animate-rgbGlow">
          Explore Games
        </button>
      </div>

      <div className="relative z-10 py-20 px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 drop-shadow-[0_0_15px_#a855f7]">
          Featured Highlights
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-fuchsia-500/30 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2 text-fuchsia-400">Latest Releases</h3>
            <p className="text-white/70">Discover the newest games with real-time updates, trailers and ratings.</p>
          </div>
          <div className="p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-purple-500/30 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2 text-purple-400">Top Publishers</h3>
            <p className="text-white/70">Explore major publishers and their iconic franchises all in one place.</p>
          </div>
          <div className="p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-pink-500/30 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2 text-pink-400">Community Hub</h3>
            <p className="text-white/70">Connect with fellow gamers, share reviews, and join exclusive events.</p>
          </div>
        </div>
      </div>

      {/* Top Publishers */}
      <div className="relative z-10 py-20 px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 drop-shadow-[0_0_15px_#a855f7]">
          Top Publishers
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {publishersSummary.map((p, i) => {
            const baseClasses = "p-6 rounded-2xl border transition-transform cursor-pointer animate-rgbGlow";
            const highlightClasses = p.highlight
              ? "col-span-3 bg-black/60 border-yellow-400 shadow-[0_0_25px_#facc15] hover:shadow-[0_0_35px_#facc15]"
              : "bg-black/40 border-fuchsia-500/30 backdrop-blur-sm hover:shadow-[0_0_15px_#a855f7]";
            return (
              <div key={i} className={`${baseClasses} ${highlightClasses}`}>
                <div className="flex items-center mb-4">
                  <img src={p.logo} alt={p.name} className="h-12 w-auto mr-4" />
                  <h3 className={`text-xl font-semibold ${p.highlight ? "text-yellow-400" : "text-white"}`}>
                    {p.name}
                  </h3>
                </div>
                <p className="text-white/70">{p.summary}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Join Now Section */}
      <div className="relative z-10 py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 mb-6">
          Ready to start your journey?
        </h3>
        <button className="px-10 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 rounded-full text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_25px_#a855f7] transition-transform">
          Join Now
        </button>
      </div>
    </div>
  );
}

export default Home;
