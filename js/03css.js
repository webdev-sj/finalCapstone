
// function to log out user
const logOutUser4 = document.querySelector("#logOutUserCss");
logOutUser4.addEventListener("click", function() {
  localStorage.removeItem("username");
  localStorage.removeItem("userProfilePage");
  localStorage.removeItem("myId");
  setTimeout(function() {
    window.location.href = "../index.html";
  }, 0);
});

// pop up that appears 3 seconds after user landing on page
const overLay = document.querySelector("#overlay");
const closeBtn = document.querySelector("#closeBtn");

setTimeout(function(){
  document.getElementById("overlay").style.display = "block";
}, 3000);

closeBtn.addEventListener("click", function() {
  overLay.style.display = "none";
});

// view stored items in side user nav
let storedItems = localStorage.getItem("items");
if (storedItems) {
  let items = JSON.parse(storedItems);
  // This element will be used to display the saved items.
  let userPageSavedCss = document.getElementById("userPageSavedCss");
  items.forEach(function(item) {
    //creates a new h1 element using the document.createElement()
    let h1 = document.createElement("h1");
    h1.innerText = item.h1;
    // creates a new p element using the document.createElement()
    let p = document.createElement("p");
    p.innerText = item.p;
    // append the h1 and p elements to the div elements using the Node.appendChild method
    let div = document.createElement("div");
    div.appendChild(h1);
    div.appendChild(p);
    userPageSavedCss.appendChild(div);
  });
} 