console.log("===== Object =====");

const parentObject = {
  userName: "Mary",
  age: 50,
  sayHello: function () {
    console.log(`Hello from parent, ${this.userName}`);
  },
};

const childObject = Object.create(parentObject);
childObject.userName = "Jane";
childObject.sayHello = function () {
  console.log(`Hello from child, ${this.userName}`);
};
childObject.sayHello();

console.log("===== Shopping cart =====");

/* items: [], item => name, price, quantity
   totalCost: 0,
   addItem,
   removeItem,
   update
*/
const shoppingCart = {
  items: [], // массив товаров
  totalCost: 0,
  addItem(item) {
    // for (let i = 0; i < this.items.length; i++) {
    //  return  this.items[i].name === item.name ? this.items[i] : undefined;
    // }
    const existingItem = this.items.find(
      (element) => element.name === item.name
    );
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      if(item.name && item.price && item.quantity){
        this.items.push(item);
      }
    }
    this.updateTotalCost();
  },
  removeItem(itemName) {
    const index = this.items.findIndex((i) => i.itemName === itemName);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
    this.updateTotalCost();
  },
  updateTotalCost() {
    this.totalCost = this.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  },
};

// shoppingCart.addItem({name: 'Milk', price: 20, quantity: 2});
// shoppingCart.addItem({name: 'Bread', price: 10, quantity: 3});
// shoppingCart.addItem({name: 'Beef', price: 100, quantity: 14});
// console.log(shoppingCart.totalCost);
// shoppingCart.removeItem('Beef');
// console.log(totalCost);

// const add = document.getElementById('add');

add.onclick = addHandler;
stats.onclick = statsHandler;

// add.addEventListener('click', addHandler);
// add.addEventListener('keydown', (e) => {
//   console.log(e);
// });

const h = document.createElement("h2");
function addHandler() {
  shoppingCart.addItem({
    name: productsName.value.trim(),
    price: +price.value.trim(),
    quantity: +quantity.value.trim(),
  });
  productsList.innerHTML = "";

  h.textContent = "Products list";
  container2.prepend(h);

  shoppingCart.items.forEach((e) => {
    const li = document.createElement("li");
    li.innerHTML = `<b>Products name:</b><span style="color:black;">${e.name}</span>, <b>Product price:</b> ${e.price}, <b>quantity of products:</b> ${e.quantity}`;
    productsList.append(li);
    return;
  });
}

const h1 = document.createElement("h2");
function statsHandler() {
  // quantity of all products
  // total cost of all products
  // quantity of items
  //max price
  // min price
  // average price of products
  if (shoppingCart.items.length) {
    const avgPrice =
      shoppingCart.items.reduce((total, element) => total + element.price, 0) /
      shoppingCart.items.length;
    const minPrice = shoppingCart.items.sort((a, b) => a.price - b.price)[0]
      .price;
    const maxPrice = shoppingCart.items.sort((a, b) => b.price - a.price)[0]
      .price;
    // const maxPrice = shoppingCart.items.sort(
    //   (a, b) => a.price - b.price[shoppingCart.items.length - 1].price
    // );
    const totalQuantity = shoppingCart.items.reduce(
      (total, el) => total + el.quantity,
      0
    );
    const totalPrice = shoppingCart.items.reduce(
      (total, el) => total + el.price * el.quantity,
      0
    );
    const itemsQuantity = shoppingCart.items.length;

    statsOur.innerHTML = "";

    h1.textContent = "Statistics";
    container3.prepend(h1);
    const p = document.getElementById("statsOur");
    p.style.whiteSpace = "pre-line";
    p.textContent = `Average price: ${avgPrice}
    Product min price: ${minPrice}
    Product max price: ${maxPrice}
    Total quantity: ${totalQuantity}
    Total price: ${totalPrice}
    Quantity of items: ${itemsQuantity}`;
    return;
  }
}

console.log("===== Class =====");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = +age;
  }
  sayHello() {
    console.log("Hello from a person");
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }
  sayHello() {
    super.sayHello();
    console.log("Hello from employee");
  }
}

const john = new Employee("John", 30, "Software Engineer");
console.log(john.name); // John
console.log(john.age); // 30
console.log(john.jobTitle); // Software Engineer
john.sayHello(); // Hello from a person // Hello from employee
