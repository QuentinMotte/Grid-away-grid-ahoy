const btn = document.querySelector(".hamburger");
const sideBar = document.querySelector("#side-bar");
const content = document.querySelector("main");

//Add a class active for change the position on side-bar when click on the hamburger
btn.addEventListener("click", () => {
    sideBar.classList.toggle("active");
    console.log(sideBar);
});

//Remove the class active when click on the content
content.addEventListener("click", () => {
    sideBar.classList.remove("active");
});
