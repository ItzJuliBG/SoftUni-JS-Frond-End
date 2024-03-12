function print(product, grams, price){
    let weightInKG = grams/1000
    console.log(`I need $${(weightInKG*price).toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${product}.`);
}