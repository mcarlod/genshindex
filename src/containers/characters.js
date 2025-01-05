import React, { useState, useEffect } from 'react'
import { fetchCharacters } from '../services/api'

export default function Characters() {
  const [characters, setCharacters] = useState('');

  useEffect(() => {
    fetchCharacters()
      .then(data => setCharacters(data))
      .catch(error => console.error('Failed to fetch:', error))
  }, []);

  return (
    <div>
      <h1>Character List</h1>
      <ul>
        {characters.map((char) => (
          <li key={char.id}>{char.name}</li>
        ))}
      </ul>
    </div>
  )
}