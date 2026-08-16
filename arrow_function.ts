// const getLargerName = (name1, name2) => {
//     if(name1.lenght > name2.lenght){
//         return name1;
//     }else{
//         return name2;
//     }
// };

const getLargerName = (name1:string, name2:string):string => {
    if(name1.length > name2.length){
        return name1;
    }else{
        return name2;
    }
};
const biggerName = getLargerName('Abdul Hamid', 'Hamza')
console.log(result);