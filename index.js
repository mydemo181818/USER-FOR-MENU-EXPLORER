const menuData = [
  {
    "name": "Refreshing Watermelon Splash",
    "price": "Rs.500",
    "image": "images/j1.jpg",
    "category": "JUICES"
  },
  {
    "name": "Tangy Pineapple Breeze",
    "price": "Rs.500",
    "image": "images/j2.jpg",
    "category": "JUICES"
  },
  {
    "name": "Zesty Orange Sunrise",
    "price": "Rs.500",
    "image": "images/j3.jpg",
    "category": "JUICES"
  },
  {
    "name": "Exotic Mango Medley",
    "price": "Rs.500",
    "image": "images/j4.jpg",
    "category": "JUICES"
  },
  {
    "name": "Berry Blast Fusion",
    "price": "Rs.500",
    "image": "images/j5.jpg",
    "category": "JUICES"
  },
  {
    "name": "Luscious Strawberry Dream",
    "price": "Rs.500",
    "image": "images/j6.jpg",
    "category": "JUICES"
  },
  {
    "name": "Smoky BBQ Ribs",
    "price": "Rs.750",
    "image": "images/g1.jpg",
    "category": "GRILL"
  },
  {
    "name": "Flame-Grilled Shrimp",
    "price": "Rs.750",
    "image": "images/g2.jpg",
    "category": "GRILL"
  },
  {
    "name": "Savory Grilled Chicken",
    "price": "Rs.750",
    "image": "images/g3.jpg",
    "category": "GRILL"
  },
  {
    "name": "Spicy Grilled Sausages",
    "price": "Rs.750",
    "image": "images/g4.jpg",
    "category": "GRILL"
  },
  {
    "name": "Grilled Vegetable Medley",
    "price": "Rs.750",
    "image": "images/g5.jpg",
    "category": "GRILL"
  },
  {
    "name": "Honey Glazed Grilled Pork",
    "price": "Rs.750",
    "image": "images/g6.jpg",
    "category": "GRILL"
  }
]


const juicesMenuContainer = document.getElementById("juices-menu-container");
const grillMenuContainer = document.getElementById("grill-menu-container");

function createMenuItem(item, container) {
  const menuBox = document.createElement("div");
  menuBox.classList.add("menu-box");

  const menuImage = document.createElement("div");
  menuImage.classList.add("menu-image");
  menuImage.style.backgroundImage = `url(${item.image})`;

  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  menuItem.innerHTML = `
    <p>${item.name}</p>
    <p>${item.price}</p>
  `;

  menuBox.appendChild(menuImage);
  menuBox.appendChild(menuItem);
  container.appendChild(menuBox);
}

menuData.forEach(item => {
  if (item.category === "JUICES") {
    createMenuItem(item, juicesMenuContainer);
  } else if (item.category === "GRILL") {
    createMenuItem(item, grillMenuContainer);
  }
});
