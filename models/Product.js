class Product {
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getPrice(){
        return `${this.price} USD`
    }
}

export default Product