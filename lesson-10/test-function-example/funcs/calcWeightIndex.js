const calcWeightIndex = (weight, height)=> {
    if(weight === undefined || height === undefined) {
        throw new Error('weight and height require')
    }

    if(typeof weight !== "number" || typeof height !== "number") {
        throw new Error('wight and height must be number');
    }

    if(weight < height) {
        throw new Error('weight must be first argument and height - second')
    }

    const result = (weight / (height ** 2)).toFixed(2);
    return Number(result);
}

module.exports = calcWeightIndex;