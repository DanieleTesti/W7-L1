const cat = {
  "fur-type": "short",
  "date-of-adoption": "01/01/2023",
};

const rabbit = {
  color: "white",
  eat: function () {
    alert("I'm eating");
  },
  residence: {
    street: "Via roma 1",
    zipcode: "00012",
  },
};

console.log(rabbit.color);
console.log(rabbit.residence.zipcode);

console.log(cat["date-of-adoption"]);
console.log(cat["fur-type"]);
console.log(rabbit["color"]);

rabbit.stefano = true;

console.log(rabbit.stefano);

rabbit.stefano = true;

rabbit.eat();

const student1 = {
  name: "Mario",
  surname: "Rossi",
  age: 25,
  sayYourName: function () {
    return this.name + " " + this.surname;
  },
};

const student2 = {
  name: "Gino",
  surname: "Verdi",
  age: 25,
  sayYourName: function () {
    return this.name + " " + this.surname;
  },
};

console.log(student1.sayYourName());
console.log(student2.sayYourName());
