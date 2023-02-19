// function to log out user
const logOutUser3 = document.querySelector("#logOutUserHtml");
logOutUser3.addEventListener("click", function() {
  localStorage.removeItem("username");
  localStorage.removeItem("userProfilePage");
  localStorage.removeItem("myId");
  setTimeout(function() {
    window.location.href = "../index.html";
  }, 0);
});

// toggle display function // read more text
function toggleDisplay(dotsId, moreTextId, btnTextId) {
var dots = document.getElementById(dotsId);
var moreText = document.getElementById(moreTextId);
var btnText = document.getElementById(btnTextId);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

document.getElementById("dots").style.display = "inline";
document.getElementById("more").style.display = "none";

function myShowFunction() {
  toggleDisplay("dots", "more", "myBtn");
}

document.getElementById("dots2").style.display = "inline";
document.getElementById("more2").style.display = "none";

function myShowFunction2() {
  toggleDisplay("dots2", "more2", "myBtn2");
}

document.getElementById("dots3").style.display = "inline";
document.getElementById("more3").style.display = "none";

function myShowFunction3() {
  toggleDisplay("dots3", "more3", "myBtn3");
}

document.getElementById("dots4").style.display = "inline";
document.getElementById("more4").style.display = "none";

function myShowFunction4() {
  toggleDisplay("dots4", "more4", "myBtn4");
}

document.getElementById("dots5").style.display = "inline";
document.getElementById("more5").style.display = "none";

function myShowFunction5() {
  toggleDisplay("dots5", "more5", "myBtn5");
}

document.getElementById("dots6").style.display = "inline";
document.getElementById("more6").style.display = "none";


function myShowFunction6() {
  toggleDisplay("dots6", "more6", "myBtn6");
}

document.getElementById("dots7").style.display = "inline";
document.getElementById("more7").style.display = "none";


function myShowFunction7() {
  toggleDisplay("dots7", "more7", "myBtn7");
}

document.getElementById("dots8").style.display = "inline";
document.getElementById("more8").style.display = "none";

function myShowFunction8() {
  toggleDisplay("dots8", "more8", "myBtn8");

}

// HTML page menu get
// view stored items in side user nav
let storedItems = localStorage.getItem("items");
if (storedItems) {
  let items = JSON.parse(storedItems);
  // This element will be used to display the saved items.
  let userPageSavedHtml = document.getElementById("userPageSavedHtml");
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

// toggle heart button on or off
const heartBtns = document.querySelectorAll('.heartBtn');

heartBtns.forEach(heartBtn => {
  const color = localStorage.getItem(heartBtn.id) || 'rgb(238, 177, 177)';
  heartBtn.style.color = color;
  
  // value will be saved by using local storage
  heartBtn.addEventListener('click', function() {
    if (color === 'rgb(238, 177, 177)') {
      this.style.color = 'red';
      localStorage.setItem(this.id, 'red');
    } else {
      this.style.color = 'rgb(238, 177, 177)';
      localStorage.setItem(this.id, 'rgb(238, 177, 177)');
    }
    location.reload();
  });
});