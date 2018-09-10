const left = document.querySelector(".left");

const left2 = document.querySelector(".left2");
const centrum = document.querySelector(".centrum");
const right2 = document.querySelector(".right2");


const right = document.querySelector(".right");
const container = document.querySelector(".container");
const button1=document.querySelector(".button1");
const button2=document.querySelector(".button2");
const button3=document.querySelector(".button3");
const button4=document.querySelector(".button4");
const button5=document.querySelector(".button5");
const h3=document.querySelector(".h3");
left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
  left2.classList.add("przesunięcie");
  centrum.classList.add("przesunięcie2");
  right2.classList.add("przesunięcie3");
  right.classList.add("przesunięcie4");
  button1.classList.remove("ukryjPrzycisk");
  h3.classList.remove("ukryjTekst");

});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
  left2.classList.remove("przesunięcie");
  centrum.classList.remove("przesunięcie2");
  right2.classList.remove("przesunięcie3");
  right.classList.remove("przesunięcie4");
  button1.classList.add("ukryjPrzycisk");
  h3.classList.add("ukryjTekst");
});


left2.addEventListener("mouseenter", () => {
  container.classList.add("hover-left2");
  centrum.classList.add("przesunięcie2");
  right2.classList.add("przesunięcie3");
  right.classList.add("przesunięcie4");
  button2.classList.remove("ukryjPrzycisk");
});

left2.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left2");
  centrum.classList.remove("przesunięcie2");
  right2.classList.remove("przesunięcie3");
  right.classList.remove("przesunięcie4");
  button2.classList.add("ukryjPrzycisk");
});



centrum.addEventListener("mouseenter", () => {
  container.classList.add("hover-centrum");
  right2.classList.add("przesunięcie3");
  right.classList.add("przesunięcie4");
  button3.classList.remove("ukryjPrzycisk");
});

centrum.addEventListener("mouseleave", () => {
  container.classList.remove("hover-centrum");
  right2.classList.remove("przesunięcie3");
  right.classList.remove("przesunięcie4");
  button3.classList.add("ukryjPrzycisk");
});



right2.addEventListener("mouseenter", () => {
  container.classList.add("hover-right2");
  right.classList.add("przesunięcie4");
  button4.classList.remove("ukryjPrzycisk")
});

right2.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right2");
    right.classList.remove("przesunięcie4");
    button4.classList.add("ukryjPrzycisk");
});



right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
  button5.classList.remove("ukryjPrzycisk");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
  button5.classList.add("ukryjPrzycisk");
});
