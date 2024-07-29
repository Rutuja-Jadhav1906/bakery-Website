const sampleDonuts = [
  {
    name: "Classic Glazed Donut",
    flavor: "Vanilla",
    filling: "None",
    topping: "Glaze",
    price: 30,
    image:
      "https://i.pinimg.com/236x/a3/38/90/a338902414641524c0899708b162f285.jpg",
  },
  {
    name: "Chocolate Frosted Donut",
    flavor: "Chocolate",
    filling: "None",
    topping: "Chocolate Frosting",
    price: 35,
    image:
      "https://i.pinimg.com/236x/92/8c/7f/928c7fa4e996e190e42412d34f80456f.jpg",
  },
  {
    name: "Boston Cream Donut",
    flavor: "Vanilla",
    filling: "Bavarian Cream",
    topping: "Chocolate Ganache",
    price: 30,
    image:
      "https://i.pinimg.com/236x/79/9e/49/799e494defb7f0e8a34fe8ab599b0c5f.jpg",
  },
  {
    name: "Strawberry Jelly Donut",
    flavor: "Strawberry",
    filling: "Strawberry Jelly",
    topping: "Powdered Sugar",
    price: 25,
    image:
      "https://i.pinimg.com/236x/c7/10/32/c7103229b6d12e84754f9a017af2bf95.jpg",
  },
  {
    name: "Maple Bacon Donut",
    flavor: "Maple",
    filling: "None",
    topping: "Maple Glaze, Bacon Bits",
    price: 25,
    image:
      "https://i.pinimg.com/236x/4d/6c/3d/4d6c3d6d5bba69dab313c3f512d3e0ed.jpg",
  },
  {
    name: "Blueberry Cake Donut",
    flavor: "Blueberry",
    filling: "None",
    topping: "None (Cake style)",
    price: 30,
    image:
      "https://i.pinimg.com/236x/50/c5/a5/50c5a52f35ff8ab9d10c84cf05bdeaee.jpg",
  },
  {
    name: "Cinnamon Sugar Twist Donut",
    flavor: "Cinnamon",
    filling: "None",
    topping: "Cinnamon Sugar",
    price: 20,
    image:
      "https://i.pinimg.com/236x/f1/1f/ea/f11fea82ec346a6bef47282811833ad0.jpg",
  },
  {
    name: "Peanut Butter Filled Donut",
    flavor: "Peanut Butter",
    filling: "Peanut Butter Cream",
    topping: "Chocolate Drizzle",
    price: 20,
    image:
      "https://i.pinimg.com/236x/eb/c4/04/ebc404e743558d7346ebfbbb76cf8198.jpg",
  },
  {
    name: "Lemon Cream Donut",
    flavor: "Lemon",
    filling: "Lemon Cream",
    topping: "Lemon Glaze",
    price: 15,
    image:
      "https://i.pinimg.com/236x/d2/3f/79/d23f791dc857434df7c64ac4b33b977d.jpg",
  },
  // {
  //     name:"Red Velvet Donut",
  //     flavor: "Red Velvet",
  //     filling: "None",
  //     topping: "Cream Cheese Frosting",
  //     price: 35,
  //     image:"https://th.bing.com/th/id/OIG1.8wTE1nu7zr8jc7UTKRZ3?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name:"Raspberry-filled Donut",
  //     flavor: "Raspberry",
  //     filling: "Raspberry Jam",
  //     topping: "Powdered Sugar",
  //     price: 25,
  //     image:"https://th.bing.com/th/id/OIG4.S1_SLcgO1_K1Khbq.XK9?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name:"Coffee Glazed Donut",
  //     flavor: "Coffee",
  //     filling: "None",
  //     topping: "Coffee Glaze",
  //     price: 25,
  //     image:"https://th.bing.com/th/id/OIG2.Avwao3E0T5A2Mw6_YVFg?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name:"Coconut Cream Donut",
  //     flavor: "Coconut",
  //     filling: "Coconut Cream",
  //     topping: "Shredded Coconut",
  //     price: 20,
  //     image:"https://th.bing.com/th/id/OIG2.IRorEzWKeieF0cXvkq1O?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name:"Salted Caramel Donut",
  //     flavor: "Caramel",
  //     filling: "Caramel Sauce",
  //     topping: "Sea Salt Sprinkles",
  //     price: 22,
  //     image:"https://th.bing.com/th/id/OIG2.bTVNBWRdGv0LYXbowiCr?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name:"Pistachio Glazed Donut",
  //     flavor: "Pistachio",
  //     filling: "None",
  //     topping: "Pistachio Glaze",
  //     price: 23,
  //     image:"https://th.bing.com/th/id/OIG2.rei_htJ_fPwc3roKr.Wl?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name:"Apple Crisp Donut",
  //     flavor: "Apple Cinnamon",
  //     filling: "Apple Pie filling",
  //     topping: "Cinnamon Crumble",
  //     price: 20,
  //     image:"https://th.bing.com/th/id/OIG3.vwxVuoB_Zc7SnUn3yhCx?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name:"Cookies and Cream Donut",
  //     flavor: "Vanilla",
  //     filling: "Oreo Cookie Crumbles",
  //     topping: "Vanilla Glaze, Oreo Pieces",
  //     price: 25,
  //     image:"https://th.bing.com/th/id/OIG3.5UFLOnafTjgv1_hHTGe4?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name:"Key Lime Pie Donut",
  //     flavor: "Key Lime",
  //     filling: "Key Lime Custard",
  //     topping: "Graham Cracker Crumbs",
  //     price: 20,
  //     image:"https://th.bing.com/th/id/OIG3.pSxU9wZP1ou6fUYVvbtq?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name:"Banana Nut Donut",
  //     flavor: "Banana",
  //     filling: "Banana Nut Cream",
  //     topping: "Chopped Nuts",
  //     price: 20,
  //     image:"https://th.bing.com/th/id/OIG4.RyQzBkJs88TkEbWtbD3O?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name:"S'mores Donut",
  //     flavor: "Chocolate",
  //     filling: "Marshmallow Cream",
  //     topping: "Chocolate Glaze, Graham Cracker Crumbs",
  //     price: 25,
  //     image:"https://th.bing.com/th/id/OIG3.vsKf1bkcGAsjRItjbqTL?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // }
];

module.exports = { data: sampleDonuts };
