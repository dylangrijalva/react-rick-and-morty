import React, { memo } from "react";
import { CharacterItem } from "./CharacterItem";

function Component({ items, onClick }) {
  console.log('CharacterList render!')
  const map = item => <CharacterItem key={item.id} character={item} onClick={onClick} />
  return <div className="list-wrapper">{items.map(map)}</div>;
}

export const CharacterList = memo(Component);
