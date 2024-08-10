import React from "react";

export default function InventoryFunction({Inventory:{item, description, weight}}) {
    
    return(
        <tr key={id}>
            <td>{item}</td>
            <td>{description}</td>
            <td>{weight}</td>
        </tr>
    )
}