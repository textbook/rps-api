const Opponent = ({ opponent: { name: { first, last }, picture: { thumbnail } }, weapon }) => (
  <div data-testid="opponent">
    <span data-testid="opponent-name">{first} {last}</span>
    <img alt="" data-testid="opponent-avatar" src={thumbnail} />
    {weapon && <span data-testid="opponent-weapon">{weapon}</span>}
  </div>
);

export default Opponent;
