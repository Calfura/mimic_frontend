import React, { createContext, useContext, useState } from "react";
import InventoryTable from "../components/Inventory";
import EditInventory from "../functions/EditInventory";
import "../styles/InventoryPage.css"

const ItemDataContext = createContext(null);
const ItemDispatchContext = createContext(null);

export function useItemData(){
    return useContext(ItemDataContext)
};

export function useItemDispatch(){
    return useContext(ItemDispatchContext);
};

export default function Inventories({inventories, updateInventory}) {

    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({
        id: "",
        item: "",
        description: "",
        weight: ""
    })

    function handleUserUpdate(updatedInventory) {
        setIsEditing(false);
        updateInventory(updatedInventory);
    }

    function handleChange(event) {
        setEditForm({
            ...editForm,
            [event.target._id]: event.target.value
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
        let filtered = inventories.filter
        (inventory => inventory.id === clickedInventory.id)
        setEditForm(filtered[0])
    }

    console.log("Inventory talbes: ", inventories)

    const inventoryArray = [inventories]
    console.log("Test arry",inventoryArray)
    console.log("editForm", editForm)

    return (

        

        <div id="InvTable">
            <div>
            {isEditing?
                (<EditInventory
                    editForm={editForm}
                    handleChange={handleChange}
                    handleUserUpdate={handleUserUpdate}
                />) : null}
            </div>
            <table>
                <thead>
                    <tr>
                        {/* Headers for each collum */}
                        <th>ID</th>
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
                                key={inventory.id}
                                inventory={inventory}
                                captureEdit={captureEdit}
                                changeEditState={changeEditState}
                             />)
                    }
                    <div></div>
                </tbody>
                <tfoot id="InvFoot">
                    <tr>
                        <td id="weightText">Weight:</td>
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
                            )}
                    </tr>
                </tfoot> 
            </table>
        </div>
    )

}
