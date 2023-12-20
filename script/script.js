const humburger = document.getElementById("humburger");
const overlay = document.getElementById("overlay");
const header = document.getElementById("header");

const bar1 = document.querySelector("#humburger div:nth-child(1)");
const bar2 = document.querySelector("#humburger div:nth-child(2)");
const bar3 = document.querySelector("#humburger div:nth-child(3)");

humburger.addEventListener("click", () => {
  if (header.style.right === "0px") {
    header.style.right = "-210px";
    overlay.style.display = "none";
    bar1.style.transform = "rotate(0deg)";
    bar1.style.top = "0px";
    bar2.style.transform = "rotate(0deg)";
    bar3.style.display = "block";
  } else {
    header.style.right = "0px";
    overlay.style.display = "block";
    bar1.style.transform = "rotate(-45deg)";
    bar1.style.top = "8px";
    bar2.style.transform = "rotate(45deg)";
    bar3.style.display = "none";
  }
});
overlay.addEventListener("click", () => {
  header.style.right = "-210px";
  overlay.style.display = "none";
  bar1.style.transform = "rotate(0deg)";
  bar1.style.top = "0px";
  bar2.style.transform = "rotate(0deg)";
  bar3.style.display = "block";
});

const dropDown = document.querySelector("#header>div>nav>ul>li:nth-child(2)");
const dropDownList = document.querySelector(
  "#header>div>nav>ul>li:nth-child(2)>ul"
);
dropDown.addEventListener("click", () => {
  if (dropDownList.style.display === "block") {
    dropDownList.style.display = "none";
  } else {
    dropDownList.style.display = "block";
  }
});
const dropDownF = document.querySelector("#header>div>nav>ul>li:nth-child(1)");
const dropDownFList = document.querySelector(
  "#header>div>nav>ul>li:nth-child(1)>ul"
);
dropDownF.addEventListener("click", () => {
  if (dropDownFList.style.display === "block") {
    dropDownFList.style.display = "none";
  } else {
    dropDownFList.style.display = "block";
  }
});
