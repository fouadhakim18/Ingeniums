// Humburger 
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu a");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});



// LEADERS  
let likes = document.querySelectorAll(".team .top > i");
likes.forEach((like) => {
  like.addEventListener("click", ( )=> {
    like.classList.toggle("fa-regular");
    like.classList.toggle("fa-solid");
})
})


// events 
let Imgs = document.querySelectorAll(".events img");
Imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    let img = document.querySelector(".img-box img");
    let overlay = document.querySelector(".overlay");
    overlay.style.display = "block";
    img.src = e.target.src;
    overlay.onclick = function () {
      if (overlay.style.display === "block") {
      }
      overlay.style.display = "none";
    };
    let close = document.querySelector(".img-box span");
    close.onclick = function () {
      overlay.style.display = "none";
    };
  });
});


// loader
function loader() {
  let loaderContainer = document.querySelector(".infinity");
  if (loaderContainer) {
    loaderContainer.classList.add("active");
  }
}
function fadeOut() {
  setTimeout(loader, 5000);
}
fadeOut();


// events animation 

const events = document.querySelectorAll(".row")
window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4
  console.log(triggerBottom)
  events.forEach(event => {
    const eventTop = event.getBoundingClientRect().top 
    if (eventTop < triggerBottom) {
      event.classList.add("show")
    } else {
      event.classList.remove("show")
    }
  })
}
checkBoxes()
