import { useEffect, useState } from "react";
import Characters from "../contexts/CharacterContext";
// import { API_BASE_URL } from "../contexts/variables";


export default function CharacterPage(){

    const [character, setCharacter] = useState([]);
  
    // Fetching character's for user
    // Currently fetching all for testing purposes
    useEffect(() => {
      fetch(`http://localhost:5173/character/all`)
      .then(resp => resp.json())
      .then(data => setCharacter(data.data))
    }, [setCharacter])

    return (
      <div>
        {/* passing data into the Characters component to render character select and create */}
        <Characters characters={character} />
      </div>
    );
}