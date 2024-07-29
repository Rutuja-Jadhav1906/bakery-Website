const sampleCroissants = [
  {
    name: "Classic Butter Croissant",
    filling: "None",
    toppings: "None",
    price: 50,
    image:
      "https://i.pinimg.com/236x/e0/6b/a8/e06ba8c8b8fd2123b856a3a843fa03ef.jpg",
  },
  {
    name: "Chocolate Croissant",
    filling: "Chocolate",
    toppings: "Powdered Sugar",
    price: 70,
    image:
      "https://i.pinimg.com/236x/13/96/9e/13969e3c3076b87709994a8205439905.jpg",
  },
  {
    name: "Almond Croissant",
    filling: "Almond Paste",
    toppings: "Sliced Almonds",
    price: 80,
    image:
      "https://i.pinimg.com/236x/56/95/14/5695149f812500571c098a417906a7e3.jpg",
  },
  {
    name: "Blueberry Cream Cheese Croissant",
    filling: "Blueberry Cream Cheese",
    toppings: "Blueberry Glaze",
    price: 85,
    image:
      "https://i.pinimg.com/236x/74/e8/2a/74e82a58f18df6b3e2aa2423489b2ee1.jpg",
  },
  {
    name: "Raspberry Jam Croissant",
    filling: "Raspberry Jam",
    toppings: "Powdered Sugar",
    price: 70,
    image:
      "https://i.pinimg.com/236x/cc/e4/7b/cce47b6ac9f2eaa7d82052574df3f22b.jpg",
  },
  {
    name: "Spinach and Feta Croissant",
    filling: "Spinach and Feta Cheese",
    toppings: "Sesame Seeds",
    price: 85,
    image:
      "https://i.pinimg.com/236x/75/1b/50/751b504ad93f63f76684012da8d9b31a.jpg",
  },
  {
    name: "Apple Cinnamon Croissant",
    filling: "Apple Cinnamon Compote",
    toppings: "Cinnamon Sugar",
    price: 80,
    image:
      "https://i.pinimg.com/236x/4e/2f/7c/4e2f7c0184586139a4268929736feaea.jpg",
  },
  {
    name: "Nutella Croissant",
    filling: "Nutella",
    toppings: "Chopped Hazelnuts",
    price: 85,
    image:
      "https://i.pinimg.com/236x/30/1e/28/301e283fe3c4b90375c42e776b4e5a04.jpg",
  },

  // {
  //     name: "Blueberry Cream Cheese Croissant",
  //     filling: "Blueberry Cream Cheese",
  //     toppings: "Blueberry Glaze",
  //     price: 85,
  //     image:"https://th.bing.com/th/id/OIG1.eax8m2ctORXii6jDXUQw?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "Hazelnut Praline Croissant",
  //     filling: "Hazelnut Praline Cream",
  //     toppings: "Caramel Drizzle, Crushed Hazelnuts",
  //     price: 80,
  //     image:"https://th.bing.com/th/id/OIG3.1686BAAc8Vuy3UnyDER9?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "Lemon Curd Croissant",
  //     filling: "Lemon Curd",
  //     toppings: "Lemon Glaze, Lemon Zest",
  //     price: 70,
  //     image:"https://th.bing.com/th/id/OIG3.ybYh_JYCqUlZKYrPlVk4?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "Turkey and Swiss Croissant",
  //     filling: "Turkey and Swiss Cheese",
  //     toppings: "Dijon Mustard",
  //     price: 75,
  //     image:"https://th.bing.com/th/id/OIG1.0_SfZLyTdcM7Vfuu0ZkO?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "S'mores Croissant",
  //     filling: "Marshmallow Fluff, Chocolate, Graham Cracker Crumbs",
  //     toppings: "Toasted Marshmallows",
  //     price: 85,
  //     image:"https://th.bing.com/th/id/OIG1.6mIvESzujOV4tXMLcmOc?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "Pesto Chicken Croissant",
  //     filling: "Pesto Chicken Salad",
  //     toppings: "Parmesan Cheese",
  //     price: 80,
  //     image:"https://th.bing.com/th/id/OIG4.PzSW6IE5bIQiAfDTfhkX?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "Coconut Cream Croissant",
  //     filling: "Coconut Cream",
  //     toppings: "Toasted Coconut Flakes",
  //     price: 70,
  //     image:"https://th.bing.com/th/id/OIG4.NrH.dQ0LFcHZ1krJC_zl?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "Prosciutto and Fig Croissant",
  //     filling: "Prosciutto, Fig Jam, Brie Cheese",
  //     toppings: "Fresh Thyme",
  //     price: 80,
  //     image:"https://th.bing.com/th/id/OIG4.Zm3zroFR1Bh_6PCkZp2r?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "Matcha White Chocolate Croissant",
  //     filling: "Matcha White Chocolate Ganache",
  //     toppings: "Matcha Powder, White Chocolate Drizzle",
  //     price: 85,
  //     image:"https://th.bing.com/th/id/OIG3.9HMTns1OnJcxAM2KhQMw?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "Chicken Caesar Croissant",
  //     filling: "Chicken Caesar Salad",
  //     toppings: "Parmesan Cheese, Croutons",
  //     price: 75,
  //     image:"https://th.bing.com/th/id/OIG3.VulVoFbxFtHg72NIMj0v?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "Mango Coconut Croissant",
  //     filling: "Mango Coconut Cream",
  //     toppings: "Toasted Coconut Flakes, Fresh Mango Slices",
  //     price: 90,
  //     image:"https://th.bing.com/th/id/OIG3.bvTqUZuFWabUydzUfCQy?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // }
];

module.exports = { data: sampleCroissants };
