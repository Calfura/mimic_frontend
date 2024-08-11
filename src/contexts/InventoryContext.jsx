import React, { useState } from "react";
import InventoryTable from "../components/Inventory";
import EditInventory from "../functions/EditInventory";
import "../styles/InventoryPage.css"


export default function Inventories({inventories}) {

    const [isEditing, setIsEditing] = useState(false);
    
    const [editForm, setEditForm] = useState({
        item: "",
        description: "",
        weight: ""
    })

    function handleUserUpdate(updatedInventory) {
        setIsEditing(false);
        updatedInventory(updatedInventory);
    }

    function handleChange(event) {
        setEditForm({
            ...editForm, [event.target.item]: event.target.value
        })
    }

    function changeEditState(inventory) {
        if (inventory.id === editForm.id) {
            setIsEditing(isEditing => !isEditing)
        } else if (isEditing === false) {
            setIsEditing(isEditing => !isEditing)
        }
    }

    function captureEdit(clickedInventory) {
        let filtered = inventories && inventories.filter
        (inventory => inventory.id === clickedInventory.id)
        setEditForm(filtered[0])
    }

    console.log("Inventory talbes: ", inventories)

    const inventoryArray = [inventories]
    console.log("Test arry",inventoryArray)

    return (
        <div id="InvTable">
            {isEditing?
            (<EditInventory
                editForm={editForm}
                handleChange={handleChange}
                handleUserUpdate={handleUserUpdate}
            />) : null}
            <table>
                <thead>
                    <tr>
                        {/* Headers for each collum */}
                        <th>Name</th>
                        <th>Description</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {/* iterate through the Inventory datatable and renders it */}
                    {
                        inventories && inventories.map(inventory =>
                            <InventoryTable
                            key={inventory._id}
                            inventory={inventory}
                            captureEdit={captureEdit}
                            changeEditState={changeEditState}
                             />)
                    }
                </tbody>
                <tfoot id="InvFoot">
                    <tr>
                        {/* <td id="weightText">Weight:</td>
                        {Object.values(inventoryArray).map(values => {
                            console.log(values, "weight")
                            var weightTotal = 0;
                            for (let i = 0; i < values.length; i++) {
                                weightTotal += values[i].weight;
                                console.log(values[i].weight, "increase index", weightTotal)
                                weightTotal + values[i].weight + i;
                                }
                            return (
                                <td>
                                    {weightTotal}
                                </td>
                                )}
                            )} */}
                    </tr>
                </tfoot> 
            </table>
        </div>
    )
}   