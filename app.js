// 1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი.

const btn = document.getElementById("bt");
btn.addEventListener("click", () => {
  btn.remove();
});
// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ: https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg სურათის ლინკს და ეს შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით)
function picture() {
  const img = document.createElement("img");
  img.src = "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg";
  document.body.appendChild(img);
}
picture();
// 3.
const users = [
  {
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
    first_name: "john doe",
    remove: "წაშლა",
    info: "ინფო",
  },
  {
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
    first_name: "john doe",
    remove: "წაშლა",
    info: "ინფო",
  },
  {
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
    first_name: "john doe",
    remove: "წაშლა",
    info: "ინფო",
  },
  {
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
    first_name: "john doe",
    remove: "წაშლა",
    info: "ინფო",
  },
];

const renderUsers = () => {
  const userListContainer = document.querySelector("#user-list");
  let userNodeString = "";
  users.forEach((user) => {
    userNodeString += `<div class="user-item">
        <span><img class="pic" src="${user.avatar}" /></span> 
        <p class="name">${user.first_name} </p>
        <section id="icons">
        <button id="remove" type="button">${user.remove}</button> 
        <button id="info" type="button">${user.info}</button> 
        </section>
    
        </div>
        `;
  });
  userListContainer.innerHTML = userNodeString;

  console.log(userNodeString);
};
// mexute davaelba ver gavige ver mivxvdi rogor gameketebina
renderUsers();
const delatelist = document.getElementById("remove");
delatelist.addEventListener("click", () => {
  users.user.remove();
});
// 6.
let candles = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];
function birthdayCakeCandles() {
  let max = Math.max(...candles);
  console.log("max value in array is=" + max);
  let s = 0;
  candles.forEach((user) => {
    if (user == max) {
      s++;
    }
  });
  console.log("The maximum is repeated" + "  " + s + "  " + "times");
}
birthdayCakeCandles();
