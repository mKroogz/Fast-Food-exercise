const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    orders: [],
    getOrders: function () {
        return this.orders
    }
}

const chickenComboMeal = {
    sandwichType: "Chicken",
    fries: true,
    drinkSize: "Medium"
}

const kidsComboMeal = {
    sandwichType: "Chicken",
    fries: false,
    drinkSize: "Small"
}

const jumboBurgerComboMeal = {
    sandwichType: "Beef",
    fries: true,
    drinkSize: "Jumbo"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(jumboBurgerComboMeal)

// Invoke the function to return the list of all orders
let myOrders = restaurant.getOrders()

// Output all orders to the console using console.table()
console.table(myOrders)