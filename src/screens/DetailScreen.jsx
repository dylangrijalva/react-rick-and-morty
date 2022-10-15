import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCharacterById } from '../api/index';
import "../styles.css";

export function DetailScreen() {
  const charactedId = useParams().id;
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchCharacterById(charactedId)
    .then(data => {
      setCharacter({ 
        id: data.name,
        name: data.name,
        url: data.image,
      })
    });
  }, []);
  
  return (
  <div className="App">
    <div className="detail-wrapper">
      <div className="detail-image-wrapper">
        <img className="detail-image" src={character.url} alt={character.name} />
      </div>
      <div className="detail-title">{character.name}</div>
    </div>
    <input className="back-button" type="button" value="Back to home page" onClick={() => navigate('/')} />
  </div>
  );
}
