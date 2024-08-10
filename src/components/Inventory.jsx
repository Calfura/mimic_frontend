import React from "react";

export default function InventoryTable({inventory:{character, item, description, weight} }) {

    return (
        // Render table data for each avaiable data set
        <tr key={character}>
            <td>{item}</td>
            <td>{description}</td>
            <td>{weight}</td>
            <td><button>Edit</button></td>
        </tr>
    )
}