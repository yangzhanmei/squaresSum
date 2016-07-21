'use strict';
const test = require('../main/main.js');

describe('printSquaresSum',()=>{
    let numbers=[];

    beforeEach(()=>{
       numbers=[1,2,3,4,5];
    });

    it('printSquresSum' ,() =>{

        spyOn(console,'log');

        test.printSquaresSum(numbers);

        const expectSquaresSum = 35;

        expect(console.log).toHaveBeenCalledWith(expectSquaresSum);
    })
});