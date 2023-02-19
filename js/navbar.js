// MAIN SIDE NAV
// open page
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  closeUserPage();
}
// close page
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// USER SIDE MENU 
// open page
function openUserPage() {
  document.getElementById("sideUserPage").style.width = "250px";
  closeNav();
}
// close page
function closeUserPage() {
  document.getElementById("sideUserPage").style.width = "0";
}