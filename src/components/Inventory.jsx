import React from "react";
import "../styles/InventoryTable.css"


export default function InventoryTable(
    {inventory, inventory:{id, item, description, weight}, captureEdit, changeEditState}
) {

    return (
        // Render table data for each avaiable data set
            <tr key={id}>
                <td>{item}</td>
                <td>{description}</td>
                <td>{weight}</td>
                <td>
                    <button
                        onClick={() => {
                            captureEdit(inventory);
                            changeEditState(inventory);
                }}>Edit</button>
                </td>
            </tr>
    )
}