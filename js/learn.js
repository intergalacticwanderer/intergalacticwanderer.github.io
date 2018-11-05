function learnJs() {
  console.info();

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
}

function learnIterators() {
  function countTo(n) {
    console.info("sa numaram pana la " + n);
    // for (init; condition; after)
    for (var i = 1; i <= n; i++) {
      console.info(i);
    }
    var i = n;
    while (i > 0) {
      console.info(i);
      i--;
    }
  }
  countTo(10);
}

learnIterators();

// schimb valutar

var atmFunds = 30000;
var funds = 5000;

function getExtractFee(ammount) {
  var comision = ammount * 0.01;
  if (comision < 2.5) {
    comision = 2.5;
    console.warn("comision minim aplicat");
  }
  return comision;
}

function extractFromAtm(ammount) {
  console.info("==== ==== ==== ==== ====");
  console.info("suma extrasa este: " + ammount);
  var comision = getExtractFee(ammount);

  var totalExtract = ammount + comision;

  if (totalExtract > funds) {
    console.error("insufficient funds");
    return 0;
  }
  if (atmFunds < totalExtract) {
    console.error("bancnote insuficiente");
  }
  funds = funds - totalExtract;
  //atmFunds = atmFunds - ammount;
  atmFunds -= ammount;
  console.info("comision aplicat: " + comision);
  console.info("Sold curent: " + funds);
  console.info("==== ==== ==== ==== ====");
}

// extractFromAtm(1000);
// extractFromAtm(100000); //fonduri insuficiente
// extractFromAtm(3000);
// extractFromAtm(3000);
// extractFromAtm(100);
// extractFromAtm(999999);
// extractFromAtm(0);
