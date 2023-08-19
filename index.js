const menuData = [
  {
    name: "Spicy Chicken",
    price: "Rs.500",
    image: "images/j1.jpg"
  },
  {
    name: "Grilled Salmon",
    price: "Rs.750",
    image: "images/j2.jpg"
  },
  {
    name: "Spicy Chicken",
    price: "Rs.500",
    image: "images/j1.jpg"
  },
  {
    name: "Mushroom Risotto",
    price: "Rs.400",
    image: "images/j3.jpg"
  },
  {
    name: "Spicy Chicken",
    price: "Rs.500",
    image: "images/j1.jpg"
  },
  {
    name: "Spicy Chicken",
    price: "Rs.500",
    image: "images/j1.jpg"
  }
];

const menuContainers = document.querySelectorAll(".menu-container");

menuContainers.forEach(menuContainer => {
  menuData.forEach(item => {
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
    menuContainer.appendChild(menuBox);
  });
});
