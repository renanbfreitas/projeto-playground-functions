// Desafio 11
function generatePhoneNumber() {
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if( ((lineA + lineB > lineC) &&(Math.abs(lineA-lineB) < lineC)) && ((lineA + lineC > lineB) &&(Math.abs(lineA-lineC) < lineB))  && ((lineC + lineB > lineA) &&(Math.abs(lineC-lineB) < lineA))){
    return true;
}else {
    return false;
}
}

// Desafio 13
function hydrate(txt) {
  let numb = txt.match(/\d/g);
  let total = 0;
  for(i=0;i<numb.length;i+=1){
      total += parseInt(numb[i]);
  }
  if(total == 1){
    return total + " copo de água";
  }else{
    return total + " copos de água";
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
