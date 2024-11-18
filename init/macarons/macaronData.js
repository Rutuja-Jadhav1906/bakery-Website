const sampleMacarons = [
  {
    name: "Classic Vanilla",
    price: 190,
    flavor: "Vanilla",
    filling: "Vanilla buttercream",
    image: {
      url: "https://i.pinimg.com/236x/c0/b4/2e/c0b42e7022e197b301f12277923ad1de.jpg",
      filename: "macaronimage",
    },
  },
  {
    name: "Raspberry Delight",
    price: 210,
    flavor: "Raspberry",
    filling: "Raspberry jam and white chocolate ganache",
    image: {
      url: "https://i.pinimg.com/236x/89/2f/32/892f32e13e3f0dd951bc09c335b0b951.jpg",
      filename: "macaronimage",
    },
  },
  {
    name: "Chocolate Dream",
    price: 250,
    flavor: "Chocolate",
    filling: "Dark chocolate ganache",
    image: {
      url: "https://i.pinimg.com/236x/58/23/d4/5823d444cdf073347ca2f07e064986dc.jpg",
      filename: "macaronimage",
    },
  },
  {
    name: "Lemon Zest",
    price: 150,
    flavor: "Lemon",
    filling: "Lemon curd",
    image: {
      url: "https://i.pinimg.com/236x/4c/23/f8/4c23f858c799596ab0b3c493375188e0.jpg",
      filename: "macaronimage",
    },
  },
  {
    name: "Salted Caramel",
    price: 200,
    flavor: "Caramel",
    filling: "Salted caramel buttercream",
    image: {
      url: "https://i.pinimg.com/236x/d4/62/4e/d4624ec2eba3686d3c8c711b672d0c04.jpg",
      filename: "macaronimage",
    },
  },
  {
    name: "Pistachio Passion",
    price: 230,
    flavor: "Pistachio",
    filling: "Pistachio cream",
    image: {
      url: "https://i.pinimg.com/236x/4a/e1/fc/4ae1fc11395764719896dab443fbce02.jpg",
      filename: "macaronimage",
    },
  },
  {
    name: "Strawberry Bliss",
    price: 270,
    flavor: "Strawberry",
    filling: "Strawberry preserves and whipped cream",
    image: {
      url: "https://i.pinimg.com/236x/81/ea/10/81ea10d5a344fadb63976e1f0d5783fa.jpg",
      filename: "macaronimage",
    },
  },
  {
    name: "Hazelnut Heaven",
    price: 270,
    flavor: "Hazelnut",
    filling: "Hazelnut praline",
    image: {
      url: "https://i.pinimg.com/236x/7f/5f/fd/7f5ffd1df190e94a9179a4260b220c58.jpg",
      filename: "macaronimage",
    },
  },
  {
    name: "Blueberry Burst",
    price: 210,
    flavor: "Blueberry",
    filling: "Blueberry compote and cream cheese filling",
    image: {
      url: "https://i.pinimg.com/236x/68/40/a8/6840a8ef15e275a64c518284a2ea0526.jpg",
      filename: "macaronimage",
    },
  },
  //{
  // name: "Coconut Crush",
  //     price: 220,
  //     flavor: "Coconut",
  //     filling: "Coconut cream",
  //     image:
  //       "https://th.bing.com/th/id/OIG3.Sl9VERy8AUeKQPAHOaRW?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn",
  //   },
  //    {
  //   //     name: "Matcha Madness",
  //     price: 250,
  //     flavor: "Matcha (Green Tea)",
  //     filling: "Matcha-infused white chocolate ganache",
  //     image:"https://th.bing.com/th/id/OIG1.Od5SozicUKxyZVRPARjY?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "Lavender Love",
  //     price: 210,
  //     flavor: "Lavender",
  //     filling: "Lavender-infused buttercream",
  //     image:"https://th.bing.com/th/id/OIG3.DYV6UzmkOU957qKu0nKC?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "Orange Blossom",
  //     price: 220,
  //     flavor: "Orange",
  //     filling: "Orange marmalade and dark chocolate ganache",
  //     image:"https://th.bing.com/th/id/OIG1.l_t41jM67s9avL_72bDE?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "Almond Amore",
  //     price: 260,
  //     flavor: "Almond",
  //     filling: "Almond paste and almond buttercream",
  //     image:"https://th.bing.com/th/id/OIG2.1celfsTy6yFFmiINMT_R?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "Passionfruit Paradise",
  //     price: 260,
  //     flavor: "Passionfruit",
  //     filling: "Passionfruit curd and white chocolate ganache",
  //     image:"https://th.bing.com/th/id/OIG3.jTXketgpAqWzs7KXHMVP?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "Red Velvet Romance",
  //     price: 290,
  //     flavor: "Red Velvet",
  //     filling: "Cream cheese frosting",
  //     image:"https://th.bing.com/th/id/OIG4.7teLpJpcqc0KQMVWERdH?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "Black Forest Beauty",
  //     price: 300,
  //     flavor: "Cherry",
  //     filling: "Cherry compote and whipped cream",
  //     image:"https://th.bing.com/th/id/OIG4.CkhD0tWPMVU2CDRjQohf?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "Mint Marvel",
  //     price: 230,
  //     flavor: "Mint",
  //     filling: "Mint chocolate ganache",
  //     image:"https://th.bing.com/th/id/OIG1.0D5eSHF2dg6YtA86zDs2?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "Earl Grey Elegance",
  //     price: 260,
  //     flavor: "Earl Grey Tea",
  //     filling: "Earl Grey-infused white chocolate ganache",
  //     image:"https://th.bing.com/th/id/OIG4.3Uxk68pauziEvJlnl7Mr?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // },
  // {
  //     name: "Dulce de Leche Delight",
  //     price: 240,
  //     flavor: "Caramel",
  //     filling: "Dulce de leche cream",
  //     image:"https://th.bing.com/th/id/OIG2.ZlqFRMwc88a_rKOww8Q2?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
  // }
];

module.exports = { data: sampleMacarons };
