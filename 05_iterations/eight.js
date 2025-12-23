//reduce method

const nums = [1,2,3]

// const myTotal = nums.reduce(function (acc, currentValue) {
//     console.log(`acc: ${acc} and currentValue: ${currentValue}`);
//     return acc + currentValue
// }, 0)

const nothing = nums.reduce( (acc, currentValue) => acc + currentValue, 0)
// console.log(nothing);

const myTotal = nums.reduce( (acc, currentValue) => acc + currentValue, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "app dev course",
        price: 6999
    },
    {
        itemName: "data science",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc ,item) => acc + item.price, 0)
console.log(priceToPay);
