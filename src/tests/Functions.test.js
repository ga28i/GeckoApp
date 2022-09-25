import { sum } from "../services/testingFunctions";


describe ('teste de functionalitate', () =>{

    test ('2+3 = 5', () =>{
        const result = sum(2, 3);
        expect(result).toEqual(5);
    })
    test ('sum between number & string', ()=> {
        expect (() => sum (2, 'test')).toThrow('please insert numbers');
    })
})
 