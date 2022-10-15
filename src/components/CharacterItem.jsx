import React from "react";
import "../styles.css";

export function CharacterItem({ character, onClick }) {
  return (
    <div className="list-item" onClick={() => onClick(character)}>
      <img className="list-item-image" src={character.url} alt={character.name} />
      <div className="list-item-title">{character.name}</div>
    </div>
  );
}
