import { useEffect } from "react";
import type { Game } from "@/data/games";

export function GameModal({ game, onClose }: { game: Game; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Bermain ${game.title}`}
    >
      <div
        className="pixel-box relative w-full max-w-5xl h-[85vh] bg-cream overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 bg-sage border-b-[3px] border-foreground">
          <div className="min-w-0">
            <h3 className="font-display text-xs sm:text-sm truncate">{game.title.toUpperCase()}</h3>
            <p className="font-display text-[9px] mt-1 opacity-70 truncate">{game.category.toUpperCase()}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={game.url}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex pixel-box pixel-box-hover bg-cream px-3 py-2 font-display text-[10px] hover:bg-coral"
            >
              OPEN ↗
            </a>
            <button
              onClick={onClose}
              aria-label="Tutup"
              className="pixel-box pixel-box-hover inline-flex h-10 w-10 items-center justify-center bg-coral font-display text-xs"
            >
              X
            </button>
          </div>
        </div>
        <iframe
          src={game.url}
          title={game.title}
          className="flex-1 w-full bg-white"
          allow="fullscreen; autoplay; gamepad"
        />
      </div>
    </div>
  );
}
