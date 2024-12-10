//EJERCICIO 1
/*
//1.1
console.log(document.querySelector(".showme"));

//1.2
console.log(document.getElementById("pillado"));

//1.3
console.log(document.querySelectorAll("p"));

//1.4
console.log(document.querySelectorAll(".pokemon"));

//1.5
console.log(document.querySelectorAll("[data-function = 'test']"));

//1.6
console.log(document.querySelectorAll("[data-function='testMe']")[2]);
*/

//EJERCICIO 2
/*
//2.1
const emptyDiv = document.createElement("div");

//2.2
let p1 = `<P></P>`;
let div2 = document.createElement("div");
div2.innerHTML = p1;
document.body.appendChild(div2);

//2.3
let div3 = document.createElement("div");
for (let i = 0; i <= 6; i++) {
    const p = document.createElement("p");
    div3.appendChild(p);
}

//2.4
let pDynamic = document.createElement("p");
pDynamic.textContent = "¡Soy dinámico!";
document.body.appendChild(pDynamic);

//2.5
let h2Class = document.querySelector(".fn-insert-here");
h2Class.textContent = ("Wubba Lubba dub dub");

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let rrss = document.createElement("ul");
for (const app of apps) {
    const li = document.createElement("li");
    li.textContent = app;
    rrss.appendChild(li);
}
document.body.appendChild(rrss);

//2.7
const deletetargets = document.querySelectorAll(".fn-remove-me");
for (const target of deletetargets) {
    target.remove();
}

//2.8
const divGlobal = document.querySelectorAll("div");
const midP = document.createElement("p");
midP.textContent = "¡Voy en medio!";
document.body.insertBefore(midP, divGlobal[1]);

//2.9
const insertDiv = document.querySelectorAll("div.fn-insert-here");
for (const div of insertDiv) {
    const newP = document.createElement("p");
    newP.textContent = "¡Voy dentro!";
    div.appendChild(newP);
}

//EJERCICIO 3

//3.1

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul");
for (const country of countries) {
    const li = document.createElement("li");
    li.textContent = country;
    ul.appendChild(li);
}

document.body.appendChild(ul);

//3.2

const classRemove = document.querySelector(".fn-remove-me");
classRemove.remove();

//3.3

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ulCars = document.createElement("ul")

for (const car of cars) {
    const li = document.createElement("li");
    li.textContent = car;
    li.setAttribute("data-function", "printHere");
    ulCars.appendChild(li);
}

document.body.appendChild(ulCars);

//3.4

const photos = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const photo of photos) {
    const frame = document.createElement("div");
    const tittle = document.createElement("h4");
    const img = document.createElement("img");
}
title.textContent = country.title;
img.src = country.imgUrl;
frame.appendChild(title);
frame.appendChild(img);
document.body.appendChild(frame);

//3.5 y 3.6

//No conseguí sacarlos.

//EJERCICIO 4

//4.1
const button = document.createElement("button");
button.id = "btnToClick";

button.addEventListener("click", (e) => console.log(e));
document.body.appendChild(button);

//4.2 y 4.3
//No conseguí sacarlos.


//EJERCICIO 5

const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];

  const ul = document.createElement("ul");
  for (const album of albums) {
    const li = document.createElement("li");
    li.textContent = album;
    ul.appendChild(li);
  }
  document.body.appendChild(ul);

  //EJERCICIO 6

  const removeTarget = document.querySelector(".fn-remove-me");
  removeTarget.remove();
*/

//EJERCICIO 7

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];
const div = document.querySelector("[data-function='printHere']");
const ul = document.createElement("ul");

for (const place of places) {
    const li = document.createElement("li");
    li.textContent = place;
    ul.appendChild(li)
}
div.appendChild(ul);