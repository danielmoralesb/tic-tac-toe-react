import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  playerNameChange,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [editing, setEditing] = useState(false);

  function handleEditClick() {
    setEditing((editing) => !editing);

    if (editing) {
      playerNameChange(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (editing) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={handleChange} required />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEditClick()}>
        {editing === true ? "Save" : "Edit"}
      </button>
    </li>
  );
}
