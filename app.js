const product = [
  {
    id: 1,
    img: "./images/item-9.jpeg",
    price: "$10",
    category: "makeup",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnambeatae",
  },
  {
    id: 2,
    img: "./images/item-1.jpeg",
    price: "$10",
    category: "skincare",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnambeatae",
  },
  {
    id: 3,
    img: "./images/item-7.jpeg",
    price: "$8",
    category: "makeup",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnambeatae",
  },
  {
    id: 4,
    img: "./images/item-2.jpeg",
    price: "$10",
    category: "skincare",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnambeatae",
  },
  {
    id: 5,
    img: "./images/item-5.jpeg",
    price: "$18",
    category: "skincare",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnambeatae",
  },
  {
    id: 6,
    img: "./images/item-4.jpeg",
    price: "$20",
    category: "skincare",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnambeatae",
  },
  {
    id: 7,
    img: "./images/item-8.jpeg",
    price: "$12",
    category: "makeup",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnambeatae",
  },
  {
    id: 8,
    img: "./images/item-6.jpeg",
    price: "$15",
    category: "makeup",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnambeatae",
  },
  {
    id: 9,
    img: "./images/item-3.jpeg",
    price: "$10",
    category: "skincare",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnambeatae",
  },
];

// selecting buttons
const container = document.querySelector(".product-container");

const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayProductItem(product);
  filterProductBtn();
});

// display products
function displayProductItem(productItem) {
  let displayProduct = productItem.map(function (item) {
    return `
        <div class="product-item">
          <img src=${item.img} alt="photo" />
          <div class="product text">
            <p><span>Price:</span> ${item.price}</p>
            <p>${item.desc}</p>
          </div>
        </div>`;
  });
  displayProduct = displayProduct.join("");
  container.innerHTML = displayProduct;
}

// making the filter dynamic
function filterProductBtn() {
  const categories = product.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtn = categories
    .map(function (category) {
      return ` <button class="filter-btn" data-id=${category}>${category}</button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtn;

  const filterBtns = document.querySelectorAll(".filter-btn");
  // filter button
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const itemCategory = product.filter(function (productItem) {
        if (productItem.category === category) {
          return productItem;
        }
      });
      if (category === "all") {
        displayProductItem(product);
      } else {
        displayProductItem(itemCategory);
      }
    });
  });
}
