// Step 1 -> Generate  a Random Color through COlor Code(Random HEx Value)
// console.log(Math.floor(Math.random()*16)); // Random Number Between 0-16

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor());
let intervalID;
const ChangeBgColor = function () {
  intervalID = setInterval(changeBg, 500);
  function changeBg() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingBgColor = function () {
  clearInterval(intervalID);
  document.body.style.backgroundColor = "#ffffff";
  intervalID = null;

};
document.querySelector("#start").addEventListener("click", ChangeBgColor);
document.querySelector("#stop").addEventListener("click", stopChangingBgColor);
