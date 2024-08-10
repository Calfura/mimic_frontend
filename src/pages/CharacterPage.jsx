import { useEffect, useState } from "react";
import Characters from "../contexts/CharacterContext";


export default function CharacterPage(){

    const [character, setCharacter] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3000/character/all")
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