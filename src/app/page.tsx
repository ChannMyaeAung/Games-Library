import Image from "next/image";

type Game = {
  id: number;
  background_image: string;
  rating: number;
  name: string;
};

const apiKey = "f82eb0c4ac784eeda19594a95d5cbdcc";

const getGames = async (): Promise<Game[]> => {
  const res = await fetch(`https://api.rawg.io/api/games?key=${apiKey}`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await res.json();
  return data.results;
};

export default async function Home() {
  const games = await getGames();
  return (
    <main className="grid grid-cols-4 gap-12 m-10 rounded-md">
      {games.map((game) => (
        <div
          className="col-span-4 p-8 text-black bg-white md:col-span-2"
          key={game.id}
        >
          <h1 className="mb-2">{game.name}</h1>
          <p className="mb-4 font-medium">Rating: {game.rating}</p>
          <div className="relative aspect-video">
            <Image
              src={game.background_image}
              fill
              sizes="100%"
              priority
              className="object-cover rounded-md"
              alt={game.name}
            />
          </div>
        </div>
      ))}
    </main>
  );
}
