const calcWeightIndex = require("./calcWeightIndex");

/*
1. Given weight in kg and height in metr.
2. Return (weight / height * height) round to 2.
3. If given invalid data throw error with correct message.

90, 1.9 => 24.93
1.9, 90 => error 'weight must be first argument and height - second'
() => error 'weight and height require'
'90', '1.9' => error 'wight and height must be number'
*/ 

describe("test calcWeightIndex function", ()=> {
    test("90, 1.9 => 24.93", ()=> {
        const result = calcWeightIndex(90, 1.9);
        expect(result).toBe(24.93);
        /*
        const expect = result => {
            return {
                result,
                toBe(value) {
                    return this.result === value;
                }
            }
        }
        */
    })

    test("1.9, 90 => error 'weight must be first argument and height - second'", ()=>{
        expect(() => calcWeightIndex(1.9, 90)).toThrow('weight must be first argument and height - second');
    })

    test("() => error 'weight and height require'", ()=>{
        expect(() => calcWeightIndex()).toThrow('weight and height require');
    })

    it("'90', '1.9' => error 'wight and height must be number'", ()=>{
        expect(() => calcWeightIndex('90', '1.9')).toThrow('wight and height must be number');
    })
})