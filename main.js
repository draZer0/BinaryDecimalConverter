window.onload = function() {

  let binaryInput = document.getElementById("toBinaryInput");
  let binaryString = ""

  let decimalInput = document.getElementById("toDecimalInput");
  let decimalString = ""

  binaryInput.onkeyup = function(event){
    toBinary(this.value);
    binaryString = "";
  }

  decimalInput.onkeyup = function(event){
    decimalString = toDecimal(decimalInput);
    document.getElementById("decimalAnswer").innerHTML = decimalString;
  }

  const toBinary = (binaryInput) => {
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

  const toDecimal = (decimalInput) => {
      let number = 0;
      let result = [];
      let j = 0;
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
