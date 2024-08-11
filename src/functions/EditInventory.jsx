import React from "react";

export default function EditInventory({editForm, handleInventoryUpdate, handleChange }) {
    let {id, item, description, weight} = editForm

    function handleEditForm(event) {
        event.preventDefault();
        fetch(`http://localhost:3000/inventory/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editForm)
        })
            .then(resp => resp.json())
            .then(updatedInventory => {
                handleInventoryUpdate=(updatedInventory)
                console.log("Updater", handleInventoryUpdate)
                console.log("Update", updatedInventory)
            })
    }

    return (
        <div>
            <h4>Edit Item</h4>
            <form onSubmit={handleEditForm}>
                <input type="text" name="item" id="updateItem" value={item} onChange={handleChange} />
                <input type="text" name="description" id="updateDescription" value={description} onChange={handleChange} />
                <input type="number" name="weight" id="updateWeight" value={weight} onChange={handleChange} />
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}