// Task 1 Creating a Product Class

class Product {
    constructor(name, id, price, stock) {
    this.name = name; // Product name
    this.id = id; // Product ID
    this.price = price; // Product Price
    this.stock = stock; // Product Stock
}
getDetails() {
    return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
}; // Returning Formatted Product Details

updateStock(quantity){
    this.stock -= quantity; // Decreasing of stock bases on quantity ordered
        
    }
    // Task 5 Modifications
    restock(quantity){
        this.stock += quantity; // Increase Stock by restock Quantity
    }
}


const prod1 = new Product("Laptop", 101, 1200, 10); // Declaring a new product

console.log(prod1.getDetails());  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3); // Decrease the Amount of Stock by 3

console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"


// Task 2 Creating an Order Class

class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId; // Order ID
        this.product = product; // Product being ordered
        this.quantity = quantity; // Quantity of product Ordered
        this.totalPrice = product.price * quantity; // Total price for the order
        this.product.updateStock(quantity); // Reduce stock based on quantity ordered
    }
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`
    }; // Return Formatted Order Details
}

const order1 = new Order(501, prod1, 2); // Declaring a new order

console.log(order1.getOrderDetails()); // Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)
