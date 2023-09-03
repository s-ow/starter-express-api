"use strict";
  window.addEventListener("scroll", () => {
    const clientY = Math.floor(window.scrollY);
    const arrow = document.querySelector('.arrowToUp');
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const classnone = document.querySelector('.listnone');
  if (clientY <= 10) {
    arrow.style.display = 'none'
  } else {
    arrow.style.display = 'block'
  }
  if (hamburger.classList.contains('active') == true && clientY >= 30) {
    hamburger.classList.toggle('active')
    navbar.classList.toggle('active')
    classnone.classList.toggle('active')
  }
    console.log("Position Y du client :", clientY);
  });

  window.addEventListener("resize", () => {
    const clientX = Math.floor(window.innerWidth);
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const classnone = document.querySelector('.listnone');
    if (clientX >= 750) {
      if (hamburger.classList.contains('active') == true) {
      hamburger.classList.toggle('active')
      }
      if (navbar.classList.contains('active') == true) {
        navbar.classList.toggle('active')
      }
      if (classnone.classList.contains('active') == true) {
        classnone.classList.toggle('active')
      }
    }
  })

const biographie = document.getElementById('biobio');
const tools = document.getElementById('tootoo');
const contact = document.getElementById('con');



const arrow = document.querySelector('.arrowToUp');

arrow.addEventListener("click", () => {
window.scrollTo({
  top: 0,
  behavior: "smooth"
});
})

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const classnone = document.querySelector('.listnone');
hamburger.addEventListener('click', e => {
  e.target.classList.toggle('active');
  navbar.classList.toggle('active');
  classnone.classList.toggle('active');
})
function openai() {
  const dis = document.querySelector('.disabled');
  const avai = document.querySelector('.avai');
  const waves = document.querySelector('.item');
  const openai = document.querySelector('.openai');
  dis.style.display = "block";
  avai.style.display = "none";
  waves.style.display = "none";
  openai.style.display = "none";
}