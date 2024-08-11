import react from "react";

export default function CharacterTable({character:{user, name}}) {

    return (
        <tr key={user}>
            <td>{name}</td>
            <button> Select</button>
        </tr>
    )
}