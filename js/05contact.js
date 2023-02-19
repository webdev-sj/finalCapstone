// function to log out user
const logOutUser5 = document.querySelector("#logOutUserContact");

logOutUser5.addEventListener("click", function() {
   localStorage.removeItem("username");
   localStorage.removeItem("userProfilePage");
   localStorage.removeItem("myId");
   setTimeout(function() {
     window.location.href = "../index.html";
   }, 0);
 });  

 // form validation function, needs all values to be filled out before submiting 
 function validateForm() {
   var name = document.forms["contactForm"]["name"].value;
   var email = document.forms["contactForm"]["email"].value;
   var comment = document.forms["contactForm"]["comment"].value;
   if (name == "" || email == "" || comment == "") {
     alert("All fields must be filled out");
     return false;
    }
    // alert when form is submited
    alert("Form submitted successfully");
    // refresh the value to empty
    document.forms["contactForm"]["name"].value = "";
    document.forms["contactForm"]["email"].value = "";
    document.forms["contactForm"]["comment"].value = "";
    return true;
  }
  

// contact page menu get
// view stored items in side user nav
let storedItems = localStorage.getItem("items");
if (storedItems) {
  let items = JSON.parse(storedItems);
  // This element will be used to display the saved items.
  let userPageSaved = document.getElementById("userPageSaved");
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
    userPageSaved.appendChild(div);
  });
} 