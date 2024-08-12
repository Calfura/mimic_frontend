import { useEffect, useState } from "react";
import Inventories from "../contexts/InventoryContext";
import { API_BASE_URL } from "../contexts/variables";


export default function InventoryPage() {

    // Settting inventory state
    const [inventories, setInventories] = useState([]);


    // Fetching inventory data from "GET"
    useEffect(() => {
        fetch(`${API_BASE_URL}/inventory/all`)
        .then(resp => resp.json())
        .then((data) => setInventories(data.data))
    }, [])

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