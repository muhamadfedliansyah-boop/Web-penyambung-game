import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { games, type Game } from "@/data/games";
import { GameCard } from "@/components/GameCard";
import { GameModal } from "@/components/GameModal";
import heroBg from "@/assets/hero-pixel-bg.jpg";


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [active, setActive] = useState<Game | null>(null);
  const [category, setCategory] = useState<string>("Semua");

  const categories = useMemo(
    () => ["Semua", ...Array.from(new Set(games.map((g) => g.category)))],
    [],
  );
  const filtered = useMemo(
    () => (category === "Semua" ? games : games.filter((g) => g.category === category)),
    [category],
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden border-b-4 border-foreground"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          imageRendering: "pixelated",
        }}
      >
        {/* readability scrim */}
        <div aria-hidden className="absolute inset-0 bg-cream/40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-32 text-center">
          <div className="inline-flex items-center gap-3 pixel-box bg-sage px-5 py-3 mb-8">
            <span className="text-2xl">🎮</span>
            <span className="font-display text-xs sm:text-sm">PASTEL ARCADE</span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl leading-[1.4] drop-shadow-[3px_3px_0_var(--cream)]">
            PRESS START
            <br />
            <span className="text-coral">TO PLAY!</span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-xl sm:text-2xl pixel-box bg-cream/90 px-5 py-3">
            Katalog game online bernuansa pastel + retro.
            Main langsung di browser, no install, no drama.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#games"
              className="pixel-box pixel-box-hover bg-coral px-6 py-3 font-display text-xs"
            >
              ► JELAJAHI GAME
            </a>
            <a
              href="#categories"
              className="pixel-box pixel-box-hover bg-sage-light px-6 py-3 font-display text-xs"
            >
              ◆ KATEGORI
            </a>
          </div>
        </div>
      </section>


      {/* Categories */}
      <section id="categories" className="mx-auto max-w-7xl px-4 sm:px-6 pb-6">
        <div className="flex flex-wrap items-center gap-3 justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`pixel-box pixel-box-hover px-4 py-2 font-display text-[10px] sm:text-xs ${
                category === c ? "bg-coral" : "bg-cream hover:bg-coral"
              }`}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* Game Grid */}
      <section id="games" className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10 text-center">
          <h2 className="font-display text-lg sm:text-2xl">► SELECT YOUR GAME</h2>
          <p className="mt-3 text-xl">
            {filtered.length} game tersedia
            {category !== "Semua" ? ` — ${category}` : ""}.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((g) => (
            <GameCard key={g.id} game={g} onPlay={setActive} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-light border-t-4 border-foreground mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center pixel-box bg-coral text-lg">
              🎮
            </span>
            <span className="font-display text-xs">PASTEL ARCADE</span>
          </div>
          <p className="font-display text-[10px] sm:text-xs">
            © {new Date().getFullYear()} — INSERT COIN TO CONTINUE
          </p>
        </div>
      </footer>

      {active && <GameModal game={active} onClose={() => setActive(null)} />}
    </div>
  );
}
