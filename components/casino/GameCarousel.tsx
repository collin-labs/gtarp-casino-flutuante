
export default function GameCarousel({ title, games }) {
  return (
    <div>
      <div className="gold-title text-xl mb-3">{title}</div>
      <div className="flex gap-4 overflow-x-auto hide-scrollbar">
        {games.map((g) => (
          <div key={g.id} className="min-w-[220px] gold-frame casino-panel p-4 card-press">
            <img src={g.thumb} className="h-[110px] w-full object-cover rounded-xl" />
            <div className="gold-title text-base mt-3">{g.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
