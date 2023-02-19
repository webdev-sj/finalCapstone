// function to log out user
const logOutUserPage = document.querySelector("#logOutUserPage");

logOutUserPage.addEventListener("click", function() {
  localStorage.removeItem("username");
  localStorage.removeItem("userProfilePage");
  localStorage.removeItem("myId");
    setTimeout(function() {
    window.location.href = "../index.html";
   }, 0);
 });
   

// storing and displaying saved items on to users page 
window.addEventListener("load", function() {
  let storedItems = localStorage.getItem("items");
  if (storedItems) {
  let items = JSON.parse(storedItems);
  let userPageSaved = document.querySelector("#userPageSaved");
  let content = "";
  items.forEach(function(item) {
  content += "<h1>" + item.h1 + "</h1><p>" + item.p + "</p>";
  });
  userPageSaved.innerHTML = content;
  }
  });


// user page menu get
// view stored items in side user nav
let storedItems = localStorage.getItem("items");
if (storedItems) {
  let items = JSON.parse(storedItems);
  // This element will be used to display the saved items.
  let userPageSavedHtml = document.getElementById("userPageSavedNav");
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
    userPageSavedHtml.appendChild(div);
  });
} 