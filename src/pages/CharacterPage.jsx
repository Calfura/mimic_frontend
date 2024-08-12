import { useEffect, useState } from "react";
import Characters from "../contexts/CharacterContext";
import { API_BASE_URL } from "../contexts/variables";


export default function CharacterPage(){

    const [character, setCharacter] = useState([]);
  
    useEffect(() => {
      fetch(`${API_BASE_URL}/character/all`)
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