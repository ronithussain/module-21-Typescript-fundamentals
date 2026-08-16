const calculateTax = (amount:number | string, taxRate:number):number => {
    if(typeof amount === 'string'){
        amount = parseFloat(amount);
    }
    return amount * taxRate;
}
const myTax = calculateTax(100, 0.15);
// console.log(myTax);

// null

// undefine

// any

// unknown

// never