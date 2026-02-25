
export default function GameRow({ title, games }) {
  return (
    <div>
      <div className="gold-title text-xl mb-3">{title}</div>
      <div className="grid grid-cols-4 gap-5">
        {games.map((g) => (
          <div key={g.id} className="gold-frame casino-panel p-4 card-press">
            <img src={g.thumb} className="h-[120px] w-full object-cover rounded-xl" />
            <div className="gold-title text-lg mt-3">{g.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
