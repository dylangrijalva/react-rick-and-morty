import React, { useEffect, useState } from "react";
import { fetchCharacters } from '../api';
import { CharacterList } from "../components/CharacterList";
import { SearchBar } from "../components/SearchBar";
import { useNavigate } from 'react-router-dom';
import "../styles.css";

export function MainScreen() {
  const [originalItems, setOriginalItems] = useState([]);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  
  // const list = useRef([])
  const onItemClick = (item) => {
    navigate(`/${item.id}`);  
  };

  useEffect(() => {
    fetchCharacters().then(({ results }) => {
      const characters = results.map((character) => {
        return {
          name: character.name,
          url: character.image,
          id: character.id
        };
      });
      // list.current = characters; 
      setItems(characters);
      setOriginalItems(characters);
    });
  }, []);

  useEffect(() => {
    if(!query) {
      setItems(originalItems);
      return;
    }

    const filteredCharacters = originalItems.filter(character => {
      if(!query) return character;
      else return character.name.toLowerCase().includes(query.toLocaleLowerCase());
    });
    setItems(filteredCharacters);
  }, [query]);

  return (
    <div className="App">
      <div className="title">Rick & Morty App</div>
      <SearchBar onTextChange={(text) => setQuery(text)}/>
      <CharacterList items={items} onClick={onItemClick} />
    </div>
  );
}
