const openSide = document.querySelector(".bar");
const closeSide = document.querySelector(".closebtn");
const sideBar = document.querySelector(".sidber");

openSide.addEventListener ("click", () => {
sideBar.style.left = "0";

})

closeSide.addEventListener ("click", () => {
sideBar.style.left = "-260px";

})

