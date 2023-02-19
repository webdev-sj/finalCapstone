// fetch quotes and display in div
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let updateQuote = function() {
      let randomIndex = Math.floor(Math.random() * data.length);
      let quote = data[randomIndex];
      let quoteText = quote.text;
      let quoteAuthor = quote.author;

      document.getElementById("quoteChange").innerHTML = quoteText;
      document.getElementById("fig").innerHTML = quoteAuthor;
    }
    // update the quote every 5 seconds
    setInterval(updateQuote, 5000); 
    // update the quote immediately on page load
    updateQuote(); 
  });

//-----Comments & Reviews --------///
const hardcodedCommentsDiv = document.getElementById("hardcodedComments");
const commentsAddedDiv = document.getElementById("CommentsAdded");
const commentBtn = document.getElementById("commentBtn");
const userCommentInput = document.getElementById("userComment");
const userCommentNameInput = document.getElementById("userCommentName");

let comments = [];

// Load existing comments from local storage
const storedComments = window.localStorage.getItem("comments");
if (storedComments) {
  comments = JSON.parse(storedComments);
}

// Display hardcoded comments
let comments2 = [
  { comment: "A fantastic organisation! Great cutomer support from beginning to end of the process. I would recommend them unreservedly.", name: "Jane Doe" },
  { comment: "Great service, efficient communication and with lots of help and support", name: "Joe Bloggs" },
  { comment: "First Class Customer Service.", name: "Juan Perez" },
  { comment: "I did their tech degree and found it ok, its understandable as CCWM are a relatively new company", name: "Sarah Miles" }
];
for (let i = 0; i < comments2.length; i++) {
  const comment = comments2[i];
  hardcodedCommentsDiv.innerHTML += `<p><strong>${comment.name}:</strong> ${comment.comment}</p>`;
}
for (let i = 0; i < comments.length; i++) {
  const comment = comments[i];
  hardcodedCommentsDiv.innerHTML += `<p><strong>${comment.name}:</strong> ${comment.comment}</p>`;
}
// add event listner so that "enter" key works like a click
commentBtn.addEventListener("click", addComment);
userCommentInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addComment();
 }
});
// add comment 
function addComment() {
  const userComment = userCommentInput.value;
  const userCommentName = userCommentNameInput.value;

 // Check if either field is empty
 if (!userComment || !userCommentName) {
  alert("Please enter a comment and name.");
  return;
 }
// Add new comment and display it
const newComment = { comment: userComment, name: userCommentName };
comments.push(newComment);
commentsAddedDiv.innerHTML += `<p><strong>${userCommentName}:</strong> ${userComment}</p>`;

// Save to local storage
window.localStorage.setItem("comments", JSON.stringify(comments));

// Clear input fields
userCommentInput.value = "";
userCommentNameInput.value = "";
};

// using JSON method is used to convert the string data into a JSON object.
let storedItems = localStorage.getItem("items");
if (storedItems) {
  let items = JSON.parse(storedItems);
  // This element will be used to display the saved items.
  let userPageSavedIndex = document.getElementById("userPageSavedIndex");
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
    userPageSavedIndex.appendChild(div);
  });
} 
