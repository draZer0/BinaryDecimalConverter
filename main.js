window.onload = function() {

  let binaryInput = document.getElementById("toBinaryInput");
  let binaryString = ""

  let decimalInput = document.getElementById("toDecimalInput");
  let decimalString = ""

  binaryInput.onkeyup = function(event){
  // const binaryInput.onkeyup = (event) => {
    if(binaryInput.value > 0){
      toBinary(this.value);
      binaryString = "";
    }
    else if (binaryInput.value < 0) {
      binaryString = toBinaryTwoComplement(binaryInput);
      document.getElementById("binaryAnswer").innerHTML = binaryString;
    }
    else {
      document.getElementById("binaryAnswer").innerHTML = "Vul getal in";
    }
    //toBinary(this.value);
    //binaryString = "";
  }

  decimalInput.onkeyup = function(event){
  // const decimalInput.onkeyup = (event) => {
    if(decimalInput.value > 0) {
      decimalString = toDecimal(decimalInput);
      document.getElementById("decimalAnswer").innerHTML = decimalString;
    }
    else {
      document.getElementById("decimalAnswer").innerHTML = "Vul binair in";
    }
    //decimalString = toDecimal(decimalInput);
    //document.getElementById("decimalAnswer").innerHTML = decimalString;
  }

  const toBinary = (binaryInput) => {
      let twoComplements = false;
      let binaryString = "";
      let array = [];

      if (binaryInput >= 128) {
        binaryString += "1";
        binaryInput = binaryInput - 128;
      }
      else {
        binaryString = binaryString + "0";
      }
      if (binaryInput >= 64) {
        binaryString += "1";
        binaryInput = binaryInput - 64;
      }
      else {
        binaryString = binaryString + "0";
      }
      if (binaryInput >= 32) {
        binaryString += "1";
        binaryInput = binaryInput - 32;
      }
      else {
        binaryString = binaryString + "0";
      }
      if (binaryInput >= 16) {
        binaryString += "1";
        binaryInput = binaryInput - 16;
      }
      else {
        binaryString = binaryString + "0";
      }
      if (binaryInput >= 8) {
        binaryString += "1";
        binaryInput = binaryInput - 8;
      }
      else {
        binaryString = binaryString + "0";
      }
      if (binaryInput >= 4) {
        binaryString += "1";
        binaryInput = binaryInput - 4;
      }
      else {
        binaryString = binaryString + "0";
      }
      if (binaryInput >= 2) {
        binaryString += "1";
        binaryInput = binaryInput - 2;
      }
      else {
        binaryString = binaryString + "0";
      }
      if (binaryInput >= 1) {
        binaryString += "1";
        binaryInput = binaryInput - 1;
      }
      else {
        binaryString = binaryString + "0";
      }
      document.getElementById("binaryAnswer").innerHTML = binaryString;
    }

  const toBinaryTwoComplement = (getal) => {
    let twoComplements = [];
    getal =  getal.value;
    getal = getal * -1;

    for (var i = 7; i > -1; i--) {
      if (getal >= Math.pow(2,i)) {
          getal -=  Math.pow(2,i);
          twoComplements[i] = 1;
      }
      else {
         twoComplements[i] = 0;
      }
    }

    for(i = 0; i < twoComplements.length; i++) {
      if (twoComplements[i] == 0){
        twoComplements[i] = 1;
      }
      else {
        twoComplements[i] = 0;
      }
    }

    twoComplements.reverse();
    for(i = twoComplements.length - 1; i >= 0; i--) {
      if (twoComplements[i] == 0) {
        twoComplements[i] = 1;
        break;
      }
      twoComplements[i] = 0;
    }

    resultBinary = twoComplements.join("");
    return resultBinary;

  }

  const toDecimal = (decimalInput) => {
      let number = 0;
      let result = [];
      let j = 0;
      // let number = 0;
      // let result = [];
      // let j = 0;

      decimalInput = decimalInput.value;
      result = decimalInput.split("");

      for(i = result.length - 1; i >= 0; i--) {
        if (result[i] == 1) {
          result[i] = result[i] * Math.pow(2,j);
        }
        else {
           result[i] =  result[i] * Math.pow(2,j);
        }
        j++;
      }

      for (var i = 0; i < result.length; i++) {
       number +=  result[i];
      }
      return number;
    }
}
