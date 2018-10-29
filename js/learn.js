console.info(0);

function sayWelcome() {
  console.info("Salut " + prenume + " bine ai venit");
}
var nume = "Kolozsvari";
var prenume = "Balint";
var owner = "Balint";
var msg1 = "Ai zis Thanos?";
var msg2 = "Nu, am zis Balint";
var template = `text cu gilimele " sau simple'`;

var skills = ["html", "css", "js"];
console.debug("cum te cheama? - " + prenume);
sayWelcome();
prenume = "Thanos";

console.info("toate variabilele au fost initializate");
console.log(nume);
console.debug("cum te cheama? again? - " + prenume);
sayWelcome();

// schimb valutar
var cursEUR = 4.65;
var myEUR = 10;
var myRON = 0;
var friendEUR = 20;
var friendRON = 0;
// operatori + - * /

myRON = myEUR * cursEUR;
console.info("eu am " + myRON + " RON");

friendRON = friendEUR * cursEUR;
console.info("el are " + friendRON + " RON");

function extractFromAtm(ammount) {
  console.info("==== ==== ==== ==== ====");
  console.info("suma extrasa este: " + ammount);
  var comision = ammount * 0.01;
  if (comision < 2.5) {
    comision = 2.5;
    console.warn("comision minim aplicat");
  }
  console.info("comision aplicat: " + comision);
  console.info("==== ==== ==== ==== ====");
}

extractFromAtm(1000);
extractFromAtm(100);
