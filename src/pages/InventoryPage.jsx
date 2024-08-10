import { useEffect, useState } from "react";
import Inventories from "../components/Inventories";


export default function InventoryPage() {

    // Settting inventory state
    const [inventory, setInventory] = useState([]);

    // Fetching inventory data from "GET"
    useEffect(() => {
        fetch("http://localhost:3000/inventory/all")
        .then(resp => resp.json())
        .then(data => setInventory(data.data))
    }, [setInventory])

    return (
        <div>
            {/* passing data to thhe Inventories component to create a visable table */}
            <Inventories inventories={inventory} />
        </div>
    );
}