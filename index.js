const app = new Vue({
  el: "#app",
  data: {
    selected: null,
    sortedItems: [],
    items: [
      {
        id: 1,
        name: "Product10",
        price: 1,
      },
      {
        id: 2,
        name: "Product9",
        price: 2,
      },
      {
        id: 3,
        name: "Product8",
        price: 3,
      },
      {
        id: 4,
        name: "Product7",
        price: 4,
      },
      {
        id: 5,
        name: "Product6",
        price: 5,
      },
      {
        id: 6,
        name: "Product5",
        price: 6,
      },
      {
        id: 7,
        name: "Product4",
        price: 7,
      },
      {
        id: 8,
        name: "Product3",
        price: 8,
      },
      {
        id: 9,
        name: "Product2",
        price: 9,
      },
      {
        id: 10,
        name: "Product1",
        price: 10,
      },
    ],
  },
methods: {
  sortChange() {
    const sortFunctions = {
      max: (a, b) => b.price - a.price,
      min: (a, b) => a.price - b.price
    };

    if (sortFunctions[this.selected]) {
      this.items.sort(sortFunctions[this.selected]);
    }
  },
}

});
