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
        let quantities = meals[i];

        for (let k = 0; k < cntProducts; k++) {
            let productStore0 = storeCombos[0].Products[k];
            let productStore1 = storeCombos[1].Products[k];

            if (productStore0.Cost > productStore1.Cost) {

            }
        }

        for (let j = 0; j < storeCombos.length; j++) {
            let store = storeCombos[j];


        }
    }

    return mealMinCosts;
}