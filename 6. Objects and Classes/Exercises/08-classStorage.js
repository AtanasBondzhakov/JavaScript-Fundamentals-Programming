class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        this.totalCost += product.price * product.quantity;
    }

    getProducts() {
        const result = []
        this.storage.forEach(el => {
            result.push(JSON.stringify(el))
        });
        return result.join('\n')
    }
}
