// creating consts for log out, close and name display
const logOutUser = document.querySelector("#logOutUser");
const overLayName = document.querySelector("#overlayName");
const closeBtnPop = document.querySelector("#closeBtnPop");

const username = localStorage.getItem("username");
const userProfilePage = localStorage.getItem("userProfilePage");
const myId = localStorage.getItem("myId");
const myIdNav = localStorage.getItem("myIdNav");
//  user input name in myId and myIdNav
if (!username) {
  setTimeout(function(){
    document.getElementById("overlayName").style.display = "block";
  }, 50);
} else {
  document.getElementById("userProfilePage").innerHTML = userProfilePage;
  document.getElementById("myId").innerHTML = myId;
  document.getElementById("myIdNav").innerHTML = myId;
}
// close button 
closeBtnPop.addEventListener("click", function() {
  overLayName.style.display = "none";
});


// function to log out user
logOutUser.addEventListener("click", function() {
  localStorage.removeItem("username");
  localStorage.removeItem("userProfilePage");
  localStorage.removeItem("myId");
  localStorage.removeItem("myIdNav");

  setTimeout(function() {
    window.location.href = "index.html";
  }, 0);
});

// function to access the enter key as a click
document.getElementById("userInput").addEventListener("keydown", function(event){
  if(event.key === 'Enter'){
    document.getElementById("btnUserName").click();
  }
});

// function for user input
document.getElementById("btnUserName").addEventListener("click", function(){
  let userInput = document.getElementById("userInput").value;
  // alert if user enters an empty value
  if(userInput === ""){
    alert("Please enter your name.");
  }
  else{
    document.getElementById("userProfilePage").innerHTML = userInput;
    document.getElementById("myId").innerHTML = userInput;
    document.getElementById("myIdNav").innerHTML = userInput;

    localStorage.setItem("username", userInput);
    localStorage.setItem("userProfilePage", userInput);
    localStorage.setItem("myId", userInput);
    localStorage.setItem("myIdNav", userInput);
    document.getElementById("closeBtnPop").click();
  }
});