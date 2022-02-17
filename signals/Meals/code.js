function solution(cntProducts, quantities, costs, meals) {
    let mealMinCosts = [];
    let stores = [];

    for (let i = 0; i < quantities.length; i++) {
        let products = [];

        for (let j = 0; j < cntProducts; j++) {
            let product = {
                "Quantity": quantities[i][j],
                "Cost": costs[i][j]
            };

            products.push(product);
        }

        let store = {
            "No": i,
            "Products": products
        }

        stores.push(store);
    }

    let storeCombos = stores.flatMap(
        (v, i) => stores.slice(i + 1).map(w => [v, w])
    );

    for (let i = 0; i < meals.length; i++) {
        let mealMinCost = Number.MAX_SAFE_INTEGER;
        let quantities = meals[i];

        for (let j = 0; j < storeCombos.length; j++) {
            let storeCombo = storeCombos[j];
            let mealCost = 0;

            for (let k = 0; k < cntProducts; k++) {
                let quantity = quantities[k];

                let prodCost = getProdCost(storeCombo, k, quantity);

                mealCost += prodCost;
            }

            if (mealCost < mealMinCost) {
                mealMinCost = mealCost;
            }
        }

        mealMinCosts.push(mealMinCost);
    }

    return mealMinCosts;
}

function getProdCost(storeCombo, noProduct, quantity) {
    let prodCost = Number.MAX_SAFE_INTEGER;

    let firstStore = storeCombo[0].Products[noProduct].Cost > storeCombo[1].Products[noProduct].Cost ? 1 : 0;

    if (quantity > storeCombo[firstStore].Products[noProduct].Quantity) {
        if (quantity <= storeCombo[firstStore].Products[noProduct].Quantity + storeCombo[1 - firstStore].Products[noProduct].Quantity)
            prodCost =
            storeCombo[firstStore].Products[noProduct].Quantity * storeCombo[firstStore].Products[noProduct].Cost +
            (quantity - storeCombo[firstStore].Products[noProduct].Quantity) * storeCombo[1 - firstStore].Products[noProduct].Cost;
    } else {
        prodCost = quantity * storeCombo[firstStore].Products[noProduct].Cost;
    }

    return prodCost;
}