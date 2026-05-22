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
    id: "Game tanya perjuangan",
    title: "game Perjuangan",
    description: "Tantang dirimu di papan catur klasik melawan pemain lain.",
    category: "Strategi",
    thumbnail: "https://i.ibb.co.com/xSHfWVSV/Screenshot-2026-05-22-104400.png",
    url: "https://game-perjuangan-indonesia.vercel.app/",
    mode: "external",
  },
  {
    id: "tetris",
    title: "Teka teki silang",
    description: "",
    category: "Arcade",
    thumbnail: "https://i.ibb.co.com/sJKcDKsJ/Screenshot-2026-05-22-123208.png",
    url: "https://gametts-mu.vercel.app/",
    mode: "external",
    badge: "New",
  },
  {
    id: "bohlam pintar",
    title: "Bohlam Pintar",
    description: "Terbang tinggi dengan ide-idemu dan taklukkan tantangan industri masa depan!",
    category: "Puzzle",
    thumbnail: "https://i.ibb.co.com/wNrsFM7W/Screenshot-2026-05-22-130123.png",
    url: "https://game-bohlam-pintar.vercel.app/",
    mode: "external",
  },
  {
    id: "snake",
    title: "Snake Retro",
    description: "Kendalikan ular, makan apel, dan jangan tabrak ekormu.",
    category: "Arcade",
    thumbnail: "https://i.ibb.co.com/cKdtybsB/Screenshot-2026-05-22-130547.png",
    url: "https://playsnake.org/#google_vignette",
    mode: "iframe",
  },
  {
    id: "wordle",
    title: "Wordle",
    description: "Tebak kata 5 huruf dalam 6 percobaan. Seberapa cepat kamu?",
    category: "Kata",
    thumbnail: "https://i.ibb.co.com/fYFfWMHh/Screenshot-2026-05-22-135136.png",
    url: "https://game-tebak-kata-sigma.vercel.app/",
    mode: "external",
    badge: "Hot",
  },
];
