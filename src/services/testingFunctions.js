export const sum = (a,b)=>{
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw new Error ('please insert numbers')
    }
return a+b;
}