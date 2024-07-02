"use strict";
// Interface Can only be used with objects
// Customer Slip
const list = [{
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
];
console.log(list[0].customerName);
console.log(list[0].product.productName);
console.log(list[0].product.productPrice);
const filteredCustomer = list.filter((banda) => banda.customerName == "Kohli");
console.log(filteredCustomer);
