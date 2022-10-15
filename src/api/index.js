export async function fetchCharacters() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  return await response.json();
}

export async function fetchCharacterById(characterId) {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
  return await response.json();
}
