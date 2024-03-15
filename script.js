const oy = document.getElementById("oy");
const kun = document.getElementById("kun");
const raqam = document.getElementById("raqam");
const yil = document.getElementById("yil");

const date = new Date();
const month = date.getMonth();
oy.innerText = date.toLocaleString("uz", {
    month: "long",
});
kun.innerText = date.toLocaleString("uz", {
    weekday: "long",
});
raqam.innerText = date.getDate();
yil.innerText = date.getFullYear();