let newName = document.getElementById("name");
let newSurname = document.getElementById("surname");
let newDateOfBirth = document.getElementById("DateOfBirth");
let newButton = document.getElementById("myButton");
let myTable = document.getElementById("myTable");

const Utente = function () {
  this.name = "";
  this.surname = "";
  this.DateOfBirth = "";
};

let currentUser = new Utente();

newButton.onclick = function () {
  if (newName.value === "") {
    alert("non hai inserito qualcosa");
  } else if (newSurname.value === "") {
    alert("non hai inserito qualcosa");
  } else if (newDateOfBirth.value === "") {
    alert("non hai inserito qualcosa");
  } else {
    currentUser.name = newName.value;
    currentUser.surname = newSurname.value;
    currentUser.DateOfBirth = newDateOfBirth.value;
    let newTdody = document.createElement("tbody");
    newTdody.innerHTML = `<tr>
        <td>${currentUser.name}</td>
        <td>${currentUser.surname}</td>
        <td>${currentUser.DateOfBirth}</td>
    </tr>
    `;
    myTable.appendChild(newTdody);
  }
};
