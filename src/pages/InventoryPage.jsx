import { useEffect, useState } from "react";
import Inventories from "../contexts/InventoryContext";
// import { API_BASE_URL } from "../contexts/variables";


export default function InventoryPage() {

    // Settting inventory state
    const [inventories, setInventories] = useState([]);


    // Fetching inventory data from "GET"
    useEffect(() => {
        fetch(`http://localhost:3000/inventory/all`)
        .then(resp => resp.json())
        .then((data) => setInventories(data.data))
    }, [])

    // Checking that inventory ID is exact match for updating.
    function updateInventory(updatedInventory) {
        const updatedInventories = inventories.map(
            inventory => {
                if (inventory.id === updatedInventory.id) {
                    console.log("updatedInventory")
                    return updatedInventory
                } else {
                    console.log("updateInventory Else")
                    return inventory}
        })
        setInventories(updatedInventories)
    }

    return (
        <div>
            {/* passing data to thhe Inventories component to create a visable table */}
            <Inventories inventories={inventories}
            updateInventory={updateInventory} />
        </div>
    );
}