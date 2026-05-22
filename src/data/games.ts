export type Game = {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  /** URL game. Bisa langsung di-iframe ATAU dibuka di tab baru. */
  url: string;
  /** "iframe" = main di modal, "external" = buka tab baru */
  mode: "iframe" | "external";
  badge?: "Hot" | "New";
};

/**
 * 👇 EDIT BAGIAN INI untuk menambah / mengganti game.
 * - Ganti `url` dengan link game-mu.
 * - Set `mode: "iframe"` jika game-nya bisa di-embed.
 * - Set `mode: "external"` jika harus buka tab baru.
 */
export const games: Game[] = [
  {
    id: "Maze Quizz",
    title: "Maze Quizz",
    description: "Tantang dirimu di labirin dan jawab pertanyaan untuk menang.",
    category: "Puzzle",
    thumbnail: "https://i.ibb.co.com/8DSbrtyW/Maze-quiz.png",
    url: "https://game-edukasi-maze-quiz.vercel.app/",
    mode: "iframe",
    badge: "Hot",
  },
  {
    id: "chess",
    title: "Catur Online",
    description: "Tantang dirimu di papan catur klasik melawan pemain lain.",
    category: "Strategi",
    thumbnail: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=800&q=80",
    url: "https://www.chess.com/play/computer",
    mode: "external",
  },
  {
    id: "tetris",
    title: "Tetris Klasik",
    description: "Susun balok jatuh dan lengkapi baris sebanyak mungkin.",
    category: "Arcade",
    thumbnail: "https://images.unsplash.com/photo-1640955014216-75201056c829?w=800&q=80",
    url: "https://tetris.com/play-tetris",
    mode: "external",
    badge: "New",
  },
  {
    id: "sudoku",
    title: "Sudoku",
    description: "Asah logika dengan teka-teki angka favorit semua orang.",
    category: "Puzzle",
    thumbnail: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=800&q=80",
    url: "https://sudoku.com/",
    mode: "external",
  },
  {
    id: "snake",
    title: "Snake Retro",
    description: "Kendalikan ular, makan apel, dan jangan tabrak ekormu.",
    category: "Arcade",
    thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    url: "https://playsnake.org/",
    mode: "iframe",
  },
  {
    id: "wordle",
    title: "Wordle",
    description: "Tebak kata 5 huruf dalam 6 percobaan. Seberapa cepat kamu?",
    category: "Kata",
    thumbnail: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=800&q=80",
    url: "https://www.nytimes.com/games/wordle/index.html",
    mode: "external",
    badge: "Hot",
  },
];
