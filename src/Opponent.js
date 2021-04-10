const Opponent = ({ opponent: { name: { first, last }, picture: { thumbnail } } }) => (
  <div data-testid="opponent">
    <span data-testid="opponent-name">{first} {last}</span>
    <img alt="" data-testid="opponent-avatar" src={thumbnail} />
  </div>
);

export default Opponent;
