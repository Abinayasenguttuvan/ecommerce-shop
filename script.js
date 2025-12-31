
const images = document.querySelectorAll(".hero-img");
const text = document.getElementById("hero-text");

const captions = [
  "Elevate your everyday style with premium blue-tone essentials.",
  "Modern silhouettes designed for confident urban fashion.",
  "Lifestyle collections crafted for comfort and elegance."
];

let index = 0;

function changeSlide() {
  images.forEach(img => img.classList.remove("active"));
  images[index].classList.add("active");
  text.textContent = captions[index];

  index = (index + 1) % images.length;
}

setInterval(changeSlide, 4000);



function showMen() {
  document.getElementById("modelImage").src = "men-model.webp";
  setActive(0);
}

function showWomen() {
  document.getElementById("modelImage").src = "women-model.webp";
  setActive(1);
}

function setActive(index) {
  const buttons = document.querySelectorAll(".toggle-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  buttons[index].classList.add("active");
}



function showProducts(type) {
  document.querySelectorAll('.product-group').forEach(group => {
    group.classList.remove('active');
  });

  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  document.getElementById(type).classList.add('active');
  event.target.classList.add('active');
}




const productsArea = document.getElementById("productsArea");
const modelImage = document.getElementById("modelImage");
const menBtn = document.getElementById("menBtn");
const womenBtn = document.getElementById("womenBtn");

/* DATA */
const menProducts = [
  { img: "mens glass.webp", title: "Stylish Glasses", text: "Premium UV protected eyewear." },
  { img: "shirt11.webp", title: "Casual Shirt", text: "Comfortable breathable fabric." },
  { img: "shoe11.webp", title: "Running Shoes", text: "Lightweight high performance." },
  { img: "watch11.webp", title: "Smart Watch", text: "Fitness & notification tracking." }
];

const womenProducts = [
  { img: "dress.webp", title: "Designer Dress", text: "Elegant modern styling." },
  { img: "watch.webp", title: "Watch", text: "Stylish sun protection." },
  { img: "sneak.webp", title: "Heels", text: "Comfort meets elegance." },
  { img: "thum1.webp", title: "Handbag", text: "Premium leather finish." }
];

/* RENDER FUNCTION */
function renderProducts(data) {
  productsArea.innerHTML = "";
  data.forEach(item => {
    productsArea.innerHTML += `
      <div class="info-card">
        <div class="card-cover">
          <img src="${item.img}">
          <img src="${item.img}">
          <img src="${item.img}">
          <img src="${item.img}">
        </div>
        <div class="card-content">
          <h4>${item.title}</h4>
          <p>${item.text}</p>
        </div>
      </div>
    `;
  });
}

/* TOGGLE */
menBtn.onclick = () => {
  renderProducts(menProducts);
  modelImage.src = "men.webp";
  menBtn.classList.add("active");
  womenBtn.classList.remove("active");
};

womenBtn.onclick = () => {
  renderProducts(womenProducts);
  modelImage.src = "d1.webp";
  womenBtn.classList.add("active");
  menBtn.classList.remove("active");
};

/* DEFAULT */
renderProducts(menProducts);




