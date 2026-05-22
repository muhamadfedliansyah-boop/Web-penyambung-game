import type { Game } from "@/data/games";

export function GameCard({ game, onPlay }: { game: Game; onPlay: (g: Game) => void }) {
  const handlePlay = () => {
    if (game.mode === "external") {
      window.open(game.url, "_blank", "noopener,noreferrer");
    } else {
      onPlay(game);
    }
  };

  return (
    <article className="pixel-box pixel-box-hover bg-rose flex flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-sage-light border-b-[3px] border-foreground">
        <img
          src={game.thumbnail}
          alt={`Thumbnail ${game.title}`}
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ imageRendering: "pixelated" }}
        />
        {game.badge && (
          <span className="absolute top-3 left-3 pixel-box bg-coral px-2 py-1 font-display text-[10px]">
            {game.badge.toUpperCase()}
          </span>
        )}
        <span className="absolute top-3 right-3 pixel-box bg-cream px-2 py-1 font-display text-[10px]">
          {game.category.toUpperCase()}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 bg-cream">
        <h3 className="font-display text-sm leading-snug">{game.title.toUpperCase()}</h3>
        <p className="text-lg flex-1">{game.description}</p>
        <button
          onClick={handlePlay}
          className="pixel-box pixel-box-hover mt-2 bg-sage hover:bg-coral px-4 py-3 font-display text-[10px]"
        >
          ► MAINKAN SEKARANG
        </button>
      </div>
    </article>
  );
}
