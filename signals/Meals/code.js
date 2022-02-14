function solution(cntProducts, quantities, costs, meals) {
    let mealMinCosts = [];

    for (let i=0;i<meals.length; i++) {
        for (let j=0; j<cntProducts; j++) {
            let cntProduct = meals[i][j];

            let mealMinCost = getMealMinCost(j, cntProduct, quantities, costs);
        }
    }

    return mealMinCosts;
}

function getMealMinCost(noProduct, cntProduct, quantities, costs) {
    let mealMinCost = 0;

    for (let i=0;i<quantities.length; i++) {
        let [quantity, cost] = [quantities[i][noProduct], costs[i][noProduct]];
    }

    return mealMinCost;
}