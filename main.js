window.onload = function() {

  let binaryInput = document.getElementById("toBinaryInput");
  let binaryString = ""

  let decimalInput = document.getElementById("toDecimalInput");
  let decimalString = ""

  var binGetal = document.getElementById("forminputBinair");
  var outputDecimal = document.getElementById('b2selfBinair');
  var button2 = document.getElementById('toDecimal2');

  binaryInput.onkeyup = function(event){
    toBinary(this.value);
    binaryString = "";
  }

  decimalInput.onkeyup = function(event){
    toDecimal(this.value);
    decimalString = "";
  }

  button2.onclick = function(){
    binaryString = toDecimal(binGetal);
    outputDecimal.value = binaryString;
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

    const toDecimal = (inputgetral) => {

      inputgetral = inputgetral.value;

      //inputgetral = 0011;



        let number = 0;
        let result = [];
        result = inputgetral.split("");

        //result[] = [0,0,1,1];

        let j = 0;

        for(i = result.length - 1; i >= 0; i--) {

          if(result[i] == 1){
            result[i] = result[i] * Math.pow(2,j);
          }else{
             result[i] =  result[i] * Math.pow(2,j);
          }
          j++;
        }

        //result[] = [0,0,2,1];




        for (var i = 0; i < result.length; i++) {
         number +=  result[i];
        }

        //number = 3;

        return number;


    }

}
    //const toDecimal = (decimalInput) => {
      //console.log( parseInt((decimalInput + '').replace(/[^01]/gi, ''), 2));
        //document.getElementById("decimalAnswer").innerHTML = decimalString;
      //}
