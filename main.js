window.onload = function() {

  let binaryInput = document.getElementById("toBinaryInput");
  let binaryString = ""

  //let decimalInput = document.getElementById("toDecimalInput");
  //let decimalString = ""

  binaryInput.onkeyup = function(event){
    toBinary(this.value);
    binaryString = "";
  }

  //decimalInput.onkeyup = function(event){
  //  toDecimal(this.value);
  //  decimalString = "";
//  }

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

    //const toDecimal = (decimalInput) => {
      //console.log( parseInt((decimalInput + '').replace(/[^01]/gi, ''), 2));

      //document.getElementById("decimalAnswer").innerHTML = decimalString;
      //}
}
