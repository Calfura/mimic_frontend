import axios from "axios";
import React, { useState, useContext } from "react";
// import { useItemDispatch } from "../contexts/InventoryContext";

export function useItemData(){
    return useContext(ItemDataContext)
};

export function useItemDispatch(){
    return useContext(ItemDispatchContext);
};

export default function EditInventory({ editForm, handleChange, handleCustomerUpdate }) {
    const { id, item, description, weight } = editForm;
    
    const [formData, setFormData] = useState({
        id: "",
        item: "",
        description: "",
        weight: ""
    })



    const handleSubmit = async (event) => {
        event.preventDefault()
        formData.id = editForm._id
        console.log(formData)
        let response = await axios.patch(`http://localhost:3000/inventory/${formData.id}`, formData)
        .then(response => console.log(response.data))
        .catch(error => console.error(error))

        console.log("Editing result: " + JSON.stringify(formData));
    }


    return (
        <div id="addItem">
            <h4>Edit Item</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" name="item" id="updateItem" 
                value={formData.item} 
                onChange={(event) => setFormData({...formData, item: event.target.value})} />
                <input type="text" name="description" id="updateDescription" 
                value={formData.description} 
                onChange={(event) => setFormData({...formData, description: event.target.value})} />
                <input type="number" name="weight" id="updateWeight" 
                value={formData.weight} 
                onChange={(event) => setFormData({...formData, weight: event.target.value})} />
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}