import React from "react";
import InventoryTable from "../components/Inventory";
import "../styles/InventoryPage.css"


export default function Inventories({inventories}) {

    console.log("Inventory talbes: ", inventories)

    const inventoryArray = [inventories]
    console.log("Test arry",inventoryArray)

    return (
        <div id="InvTable">
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
                        inventories && inventories.map(inventory => <InventoryTable key={inventory._id} inventory={inventory} />)
                    }
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