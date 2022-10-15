import React from "react"

export function SearchBar({ onTextChange }) {
	return (
		<input
        onChange={(ev) => onTextChange(ev.target.value)}
        placeholder="Type a character's name"
        className="searchbar"
        type="text"
      ></input>
	)
}
