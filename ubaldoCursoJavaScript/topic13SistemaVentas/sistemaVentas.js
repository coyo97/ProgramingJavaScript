
class Product{
    static counterProducts = 0;

    constructor(name, price){
        this._idProduct = ++Product.counterProducts;
        this._name = name;
        this._price = price;
    }

    get idProduct(){
        return this._idProduct;
    }
    set name(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set price(price){
        this._price = price;
    }
    get price(){
        return this._price;
    }
    toString(){
        return `idProduct: ${this._idProduct}, name: ${this._name}, preci: $${this._price}`//for line break "\n", this can  be used in "temple String"
    }
}
class Order{//the relathionship is not inheritance but one  of  aggretagation
    static counterOrder = 0;

    static get MAX_PRODUCTS(){
        return 5;
    }

    constructor(){
        this._idOrder = ++Order.counterOrder;
        this._products = [];
        this._counterProductsAdd = 0;
    }
    get idOrder(){
        return this._idOrder;
    }
    addProduct(product){
        if(this._products.length < Order.MAX_PRODUCTS){
            this._products.push(product);
            //other form---->this._products[this._counterProductsAdd++] = product;
        }
        else{
            console.log('No more products can be added.');
        }
    }
    calculateTotal(){
        let totalSale = 0;

        for(let product of this._products){
            totalSale += product.price;//equivalent totalSale = totalSAle + product.price;
        }
        return totalSale;
    }
    showOrder(){
        let productOrder = '';
        for(let product of this._products){
            productOrder += '\n' + product.toString() + ' ';
        }
        console.log(`Order: ${this._idOrder} Total: $${this.calculateTotal()}, Products: ${productOrder} `);
    }
}

let product1 = new Product('Panton', 200);
let product2 = new Product('Camisa', 100);
console.log(product1.toString());
console.log(product2.toString());

//For order
let order1 = new Order();
order1.addProduct(product1);//here is the aggregation relation
order1.addProduct(product2);
order1.showOrder();

let order2 = new  Order();
let product3 = new Product('cintoron', 50);
order2.addProduct(product3);
order2.addProduct(product1);
order2.addProduct(product2);
order2.showOrder();
