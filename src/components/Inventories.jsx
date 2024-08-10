import React from "react";
import InventoryTable from "./Inventory";
import "../styles/InventoryPage.css"


export default function Inventories({inventories}) {

    console.log("Inventory talbes: ", inventories)

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
                        <td>Test</td>
                        <td>testtwo</td>
                    </tr>
                </tfoot> 
            </table>
        </div>
    )
}   