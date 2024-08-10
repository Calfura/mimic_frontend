import React from "react";

export default function WeightCalc(inventories) {

    const inventoryArray = [inventories]

    {Object.values(inventoryArray).map(values => {
        console.log(values, "weight")
        var weightTotal = [];
        for (let i = 0; i < values.length; i++) {
            weightTotal += values[i].weight;
            console.log(values[i].weight, "increase index", weightTotal)
            weightTotal = values[i].weight + i;
        }
        return (
            <td>
                {weightTotal}
            </td>
            )  
    })}
}