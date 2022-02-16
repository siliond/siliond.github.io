function solution(cntProducts, quantities, costs, meals) {
    let mealMinCosts = [];

    for (let i = 0; i < meals.length; i++) {
        // // All Stores
        // let [mealMinCost, prodMinCostStores] = getMealMinCost(cntProducts, meals, i, quantities, costs);

        //Pairs of stores
        // if (prodMinCostStores.length > 2) {
        mealMinCost = Number.MAX_SAFE_INTEGER;

        let stores = Array.from(Array(quantities.length).keys());

        let prodMinCostStoreCombos = stores.flatMap(
            (v, i) => stores.slice(i + 1).map(w => [v, w])
        );

        for (let j = 0; j < prodMinCostStoreCombos.length; j++) {
            const storeTuple = prodMinCostStoreCombos[j];

            let [mealCost, prodCostStores] = getMealMinCost(cntProducts, meals, i, quantities, costs, storeTuple);

            if (mealCost < mealMinCost) {
                mealMinCost = mealCost;
            }
        }
        // }

        mealMinCosts.push(mealMinCost);
    }

    return mealMinCosts;
}

function getMealMinCost(cntProducts, meals, noMeal, quantities, costs, stores) {
    let mealMinCost = 0;
    let prodMinCostStores = [];

    for (let j = 0; j < cntProducts; j++) {
        let quantityProduct = meals[noMeal][j];

        let [prodMinCost, noStore, prevStore] = getProdMinCost(j, quantityProduct, quantities, costs, stores);

        mealMinCost += prodMinCost;

        if (prodMinCostStores.indexOf(noStore) < 0)
            prodMinCostStores.push(noStore);
        if (prevStore >= 0 && prodMinCostStores.indexOf(prevStore) < 0)
            prodMinCostStores.push(prevStore);
    }

    return [mealMinCost, prodMinCostStores];
}

function getProdMinCost(noProduct, quantityProduct, quantities, costs, stores) {
    let minTotalCost, minCost = Number.MAX_SAFE_INTEGER;
    let remainingQuantity = quantityProduct;
    let noStore;
    let prevStore = -1;

    if (!stores)
        stores = Array.from(Array(quantities.length).keys());

    for (let i = 0; i < stores.length; i++) {
        let iStore = stores[i];

        let [quantity, cost] = [quantities[iStore][noProduct], costs[iStore][noProduct]];

        if (cost < minCost) {
            if (remainingQuantity != quantityProduct) {
                remainingQuantity = quantityProduct;
                prevStore = iStore;
            }

            if (remainingQuantity > quantity) {
                remainingQuantity -= quantity;

                if (prevStore >= 0) {
                    remainingQuantity = 0;
                }
            } else {
                remainingQuantity = 0;
                prevStore = -1;
            }

            minCost = cost;
            noStore = iStore;
        }
    }

    let [quantity, cost] = [quantities[noStore][noProduct], costs[noStore][noProduct]];

    if (prevStore >= 0) {
        let [prevQuantity, prevCost] = [quantities[prevStore][noProduct], costs[prevStore][noProduct]];

        minTotalCost = quantity * cost + (quantityProduct - quantity) * prevCost;
    } else {
        minTotalCost = quantityProduct * cost;
    }

    return [minTotalCost, noStore, prevStore];
}