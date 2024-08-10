import React from "react";
import CharacterTable from "../components/Characters";

export default function Characters({characters}) {

    console.log("Character table: ", characters)

    const characterArray = [characters]
    console.log("Checking characterArray: ", characterArray)

    return (
        <div id="CharTable">
            <table>
                <thead>
                    <tr>
                        <th>Character Selection</th>
                    </tr>
                </thead>
                <tbody>
                    {/* iterate through the character datatable and render it */}
                    <button>
                    {
                        characters && characters.map(character =>
                            <CharacterTable key={character._id}
                            character={character} />
                        )
                    }
                    </button>
                </tbody>
            </table>
        </div>
    )
}