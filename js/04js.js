// function to log out user
const logOutUser2 = document.querySelector("#logOutUserJs");

logOutUser2.addEventListener("click", function() {
   localStorage.removeItem("username");
   localStorage.removeItem("userProfilePage");
   localStorage.removeItem("myId");
   setTimeout(function() {
     window.location.href = "../index.html";
   }, 0);
 });

// save for later fucntion
let btnSaveForLaters = document.querySelectorAll(".btnSaveForLater");

  btnSaveForLaters.forEach(function(btnSaveForLater) {
    btnSaveForLater.addEventListener("click", function() {
      let btnSaveForLaterBtn = this;
      btnSaveForLaterBtn.style.color = "#42b4d6";
      
      let card = btnSaveForLaterBtn.parentElement;
      let h1 = card.querySelector("h1").innerText;
      let p = card.querySelector(".jsParagraphs").innerText;
      // array to store the items
      let items = [];
      let storedItems = localStorage.getItem("items");
      if (storedItems) {
        items = JSON.parse(storedItems);
      }
      // push h1 and p to local storage
      items.push({h1: h1, p: p});
      localStorage.setItem("items", JSON.stringify(items));

      // alert the number of items in the "userPageSaved"
      alert(`There are currently ${items.length} items in your "Save for later” folder.`);
      location.reload()
    });
  }); 
  

// Js page menu get
// view stored items in side user nav
let storedItems = localStorage.getItem("items");
if (storedItems) {
  let items = JSON.parse(storedItems);
  // This element will be used to display the saved items.
  let userPageSavedJs = document.getElementById("userPageSavedJs");
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
    userPageSavedJs.appendChild(div);
  });
} 