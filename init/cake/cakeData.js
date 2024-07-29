const sampleProducts = [
  {
    name: "Chocolate Fudge Cake",
    price: 250,
    serving_size_guide: "10-12 slices",
    dimensions: "9 inches diameter, 2.5 inches height",
    cake_size: "Large",
    cake_flavor: "Rich chocolate",
    weight: 1.5,
    toppings: "Chocolate shavings",
    cake_color: "Deep brown",
    piping_color: "White",
    msg_color: "Gold",
    image:
      "https://i.pinimg.com/564x/bb/7e/15/bb7e15a2f55b6857fe94cd8ff4afaaee.jpg",
  },
  {
    name: "Vanilla Bean Cake",
    price: 185,
    serving_size_guide: "8-10 slices",
    dimensions: "8 inches diameter, 3 inches height",
    cake_size: "Medium",
    cake_flavor: "Classic vanilla",
    weight: 1,
    toppings: "Fresh vanilla bean pods",
    cake_color: "Creamy white",
    piping_color: "Light yellow",
    msg_color: "Blue",
    image:
      "https://i.pinimg.com/236x/a4/e2/fb/a4e2fb9e303533b0a21454c0ef2e5a4d.jpg",
  },
  {
    name: "Red Velvet Cake",
    price: 300,
    serving_size_guide: "12-14 slices",
    dimensions: "10 inches diameter, 3 inches height",
    cake_size: "Large",
    cake_flavor: "Red velvet",
    weight: 1.8,
    toppings: "Cream cheese frosting swirls",
    cake_color: "Deep red",
    piping_color: "White",
    msg_color: "Red",
    image:
      "https://i.pinimg.com/236x/1e/5f/43/1e5f4354b2d14cfdd152bc0d3c3fe5c5.jpg",
  },
  {
    name: "Lemon Drizzle Cake",
    price: 250,
    serving_size_guide: "8-10 slices",
    dimensions: "7 inches diameter, 2 inches height",
    cake_size: "Small",
    cake_flavor: "Zesty lemon",
    weight: 0.8,
    toppings: "Lemon glaze",
    cake_color: "Yellow",
    piping_color: "Light green",
    msg_color: "Yellow",
    image:
      "https://i.pinimg.com/236x/c2/5b/8e/c25b8e78762973a8cb88eedae69f5abb.jpg",
  },
  {
    name: "Carrot Walnut Cake",
    price: 300,
    serving_size_guide: "10-12 slices",
    dimensions: "9 inches diameter, 3.5 inches height",
    cake_size: "Large",
    cake_flavor: "Carrot with walnuts",
    weight: 1.6,
    toppings: "Cream cheese frosting, chopped walnuts",
    cake_color: "Orange",
    piping_color: "Cream",
    msg_color: "Orange",
    image:
      "https://i.pinimg.com/236x/65/b3/f4/65b3f4a2651da2b54834664a9e220357.jpg",
  },
  {
    name: "Strawberry Shortcake",
    price: 225,
    serving_size_guide: "8-10 slices",
    dimensions: "8 inches diameter, 2.5 inches height",
    cake_size: "Medium",
    cake_flavor: "Fresh strawberries",
    weight: 1.2,
    toppings: "Sliced strawberries, whipped cream",
    cake_color: "Light pink",
    piping_color: "White",
    msg_color: "Pink",
    image:
      "https://i.pinimg.com/236x/9c/6a/d1/9c6ad116b972dfd327c5c499335a09cf.jpg",
  },
  {
    name: "Black Forest Cake",
    price: 350,
    serving_size_guide: "10-12 slices",
    dimensions: "9 inches diameter, 3 inches height",
    cake_size: "Large",
    cake_flavor: "Chocolate with cherries",
    weight: 1.5,
    toppings: "Cherry compote, chocolate curls",
    cake_color: "Dark brown",
    piping_color: "White",
    msg_color: "Red",
    image:
      "https://i.pinimg.com/236x/41/f0/aa/41f0aac4ebe0bb50a353f686d28dcbc4.jpg",
  },
  {
    name: "Coconut Pineapple Cake",
    price: 250,
    serving_size_guide: "12-14 slices",
    dimensions: "10 inches diameter, 4 inches height",
    cake_size: "Large",
    cake_flavor: "Coconut with pineapple filling",
    weight: 1.8,
    toppings: "Toasted coconut flakes, pineapple slices",
    cake_color: "White",
    piping_color: "Light blue",
    msg_color: "Yellow",
    image:
      "https://i.pinimg.com/236x/4a/1b/c4/4a1bc42ea34fabad68c77529e88c7c00.jpg",
  },
  {
    name: "Hazelnut Crunch Cake",
    price: 370,
    serving_size_guide: "12-14 slices",
    dimensions: "9 inches diameter, 3.5 inches height",
    cake_size: "Large",
    cake_flavor: "Hazelnut with chocolate crunch",
    weight: 1.7,
    toppings: "Chocolate ganache drizzle, crushed hazelnuts",
    cake_color: "Brown",
    piping_color: "Gold",
    msg_color: "Brown",
    image:
      "https://i.pinimg.com/236x/6f/57/93/6f57936bb2cfa41a84d95e326e20911c.jpg",
  },
  {
    name: "Marble Swirl Cheesecake",
    price: 400,
    serving_size_guide: "12-14 slices",
    dimensions: "10 inches diameter, 3 inches height",
    cake_size: "Large",
    cake_flavor: "Marble swirl (chocolate and vanilla)",
    weight: 1.9,
    toppings: "Chocolate and vanilla swirls",
    cake_color: "Marble pattern",
    piping_color: "White",
    msg_color: "Silver",
    image:
      "https://i.pinimg.com/236x/6e/e6/01/6ee6017044856361da33435badbc4747.jpg",
  },
  {
    name: "Mocha Espresso Cake",
    price: 350,
    serving_size_guide: "10-12 slices",
    dimensions: "9 inches diameter, 3 inches height",
    cake_size: "Large",
    cake_flavor: "Mocha espresso",
    weight: 1.6,
    toppings: "Espresso buttercream, chocolate-covered espresso beans",
    cake_color: "Dark brown",
    piping_color: "Cream",
    msg_color: "Brown",
    image:
      "https://i.pinimg.com/236x/18/55/29/18552916fd67d7ef971bf6b570259baa.jpg",
  },
  {
    name: "Caramel Apple Spice Cake",
    price: 280,
    serving_size_guide: "8-10 slices",
    dimensions: "8 inches diameter, 2.5 inches height",
    cake_size: "Medium",
    cake_flavor: "Caramel apple spice",
    weight: 1.2,
    toppings: "Caramel drizzle, apple slices",
    cake_color: "Light brown with apple chunks",
    piping_color: "Caramel",
    msg_color: "Green",
    image:
      "https://i.pinimg.com/236x/32/18/78/321878d9ae4967eb0b88fd35a794ea03.jpg",
  },
  {
    name: "Almond Raspberry Cake",
    price: 280,
    serving_size_guide: "12-14 slices",
    dimensions: "10 inches diameter, 3 inches height",
    cake_size: "Large",
    cake_flavor: "Almond with raspberry filling",
    weight: 1.7,
    toppings: "Fresh raspberries, sliced almonds",
    cake_color: "Light pink with almond flakes",
    piping_color: "White",
    msg_color: "Red",
    image:
      "https://i.pinimg.com/236x/f6/df/63/f6df63a8025de66ef633efc35b1e5d15.jpg",
  },
  {
    name: "Cookies and Cream Cake",
    price: 300,
    serving_size_guide: "10-12 slices",
    dimensions: "9 inches diameter, 2.5 inches height",
    cake_size: "Large",
    cake_flavor: "Cookies and cream",
    weight: 1.4,
    toppings: "Crushed Oreo cookies, whipped cream",
    cake_color: "White with black cookie crumbs",
    piping_color: "Black",
    msg_color: "White",
    image:
      "https://i.pinimg.com/236x/62/6d/3b/626d3b65aa64ddd6f534565f46f612e8.jpg",
  },
  {
    name: "Pistachio Rose Cake",
    price: 320,
    serving_size_guide: "12-14 slices",
    dimensions: "10 inches diameter, 3.5 inches height",
    cake_size: "Large",
    cake_flavor: "Pistachio with rosewater infusion",
    weight: 1.9,
    toppings: "Chopped pistachios, edible rose petals",
    cake_color: "Light green with pink rose swirls",
    piping_color: "Pink",
    msg_color: "Green",
    image:
      "https://i.pinimg.com/236x/82/99/e9/8299e9de9c2d3db1fdf0e7e3f4fb1053.jpg",
  },
  {
    name: "Cherry Chocolate Chip Cake",
    price: 350,
    serving_size_guide: "10-12 slices",
    dimensions: "9 inches diameter, 3 inches height",
    cake_size: "Large",
    cake_flavor: "Chocolate with cherry chunks",
    weight: 1.5,
    toppings: "Maraschino cherries, chocolate chips",
    cake_color: "Dark brown with red cherries",
    piping_color: "Red",
    msg_color: "White",
    image:
      "https://i.pinimg.com/236x/f5/e5/fb/f5e5fb1f46d56a7656ae951a0a29dacd.jpg",
  },
  {
    name: "Lavender Honey Cake",
    price: 360,
    serving_size_guide: "12-14 slices",
    dimensions: "10 inches diameter, 4 inches height",
    cake_size: "Large",
    cake_flavor: "Lavender-infused honey",
    weight: 2,
    toppings: "Fresh lavender sprigs, honey drizzle",
    cake_color: "Light purple with golden honey swirls",
    piping_color: "Gold",
    msg_color: "Purple",
    image:
      "https://i.pinimg.com/236x/d7/b5/8d/d7b58d2ef8ab663bc1b451fc24d4c097.jpg",
  },
  {
    name: "Salted Caramel Chocolate Cake",
    price: 400,
    serving_size_guide: "10-12 slices",
    dimensions: "9 inches diameter, 3 inches height",
    cake_size: "Large",
    cake_flavor: "Chocolate with salted caramel",
    weight: 1.6,
    toppings: "Salted caramel sauce, sea salt flakes",
    cake_color: "Dark brown with caramel swirls",
    piping_color: "Caramel",
    msg_color: "White",
    image:
      "https://i.pinimg.com/236x/a6/25/f6/a625f631047521dfff2f4d02c5d55d44.jpg",
  },
  {
    name: "Matcha Green Tea Cake",
    price: 400,
    serving_size_guide: "10-12 slices",
    dimensions: "9 inches diameter, 2.5 inches height",
    cake_size: "Large",
    cake_flavor: "Matcha green tea",
    weight: 1.4,
    toppings: "Matcha powder dusting, white chocolate drizzle",
    cake_color: "Green",
    piping_color: "White",
    msg_color: "Green",
    image:
      "https://i.pinimg.com/236x/45/42/e1/4542e1e0ef68a732079842b1516603cd.jpg",
  },
  {
    name: "Orange Creamsicle Cake",
    price: 300,
    serving_size_guide: "8-10 slices",
    dimensions: "8 inches diameter, 3 inches height",
    cake_size: "Medium",
    cake_flavor: "Orange creamsicle",
    weight: 1.1,
    toppings: "Candied orange slices, whipped cream",
    cake_color: "Orange and white swirls",
    piping_color: "Orange",
    msg_color: "White",
    image:
      "https://i.pinimg.com/236x/de/a0/96/dea0960d295b4919815f720452195d61.jpg",
  },
];

module.exports = { data: sampleProducts };