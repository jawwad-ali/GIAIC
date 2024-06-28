// Interface Can only be used with objects

// Wrong. Because I am using interface with variables they are only for object purposes

// interface Teacher  {name:string}
// const myName:Teacher = "Ali"

/******************************************* Nested Objects *******************************************/
interface Product {
    productName: string
    productPrice: number
}

interface Customer {
    customerName: string
    product: Product
}

// Customer Slip
const list: Customer[] = [{
    customerName: "Kohli",
    product: {
        productName: "Bat",
        productPrice: 1500000
    }
},
{
    customerName: "Rohit",
    product: {
        productName: "Bat",
        productPrice: 255500000
    }
},
]

console.log(list[0].customerName);
console.log(list[0].product.productName);
console.log(list[0].product.productPrice);


const filteredCustomer = list.filter((banda) => banda.customerName == "Kohli")
console.log(filteredCustomer);