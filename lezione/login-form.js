let userInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let btnInput = document.getElementById("login-btn");
let block1 = document.getElementById("block1");
let block2 = document.getElementById("block2");

const User = function () {
  this.name = "";
  this.privilegeLevel = -1; //-1 non registrato, user diventa 0 e admin 1
};

User.prototype.userType = null; //valore di default

const Admin = function () {
  this.id = "ADMIN";
  this.access = "unlimited";
};

//creazione nuovo utente
let currentUser = new User();
console.log("utente iniziale " + currentUser);

btnInput.onclick = function () {
  //LOGIN USER
  if (userInput.value === "user" && passwordInput.value === "123") {
    //applichiamo l'utente di default
    currentUser.privilegeLevel = 0;
    currentUser.userType = null; //ri-azzero la proprieta userType
  }
  //LOGIN ADMIN
  else if (userInput.value === "admin" && passwordInput.value === "123") {
    currentUser.privilegeLevel = 1;
    currentUser.userType = new Admin(); //popola l'oggetto con id e access che si trovano in admin
  }
  //CREDENZIALI SBAGLIATE
  else {
    currentUser.privilegeLevel = -1; //nessun privilegio
    currentUser.userType = null;
  }
  console.log(currentUser);
};

currentUser.name = userInput.value;

if (currentUser.privilegeLevel > -1) {
  block1.innerHTML = "<h2>Benvenuto " + currentUser.name + "!</h2>";
  block2.innerHTML = "";
} else {
  block1.innerHTML = "<h2>username e/o password errate";
  block2.innerHTML = "";
}

if (currentUser.userType) {
  block2.innerHTML = "<h2>ruolo admin</h2>";
}
