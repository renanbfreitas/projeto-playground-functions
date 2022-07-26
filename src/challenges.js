// Desafio 1
function compareTrue(girafa, macaco) {
  return girafa && macaco;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  const mystr = str.split(' ');
  return mystr;
}

// Desafio 4
function concatName(names) {
  let name = [];
  name.push(names.splice(names.length - 1, 1)[0]);
  name.push(names.splice(0, 1)[0]);
  return name.join(", ");
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(arr) {
  let contador = 1;
  console.log(
    arr.sort(function (a, b) {
      return b - a;
    }),
  );
  for (let i = 1; arr[i - 1] === arr[i]; i += 1) {
    contador += 1;
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Pos = Math.abs(mouse - cat1);
  let cat2Pos = Math.abs(mouse - cat2);
  if (cat1Pos < cat2Pos) {
    return 'cat1';
  } else if (cat1Pos > cat2Pos) {
return 'cat2';
}
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  let arrResult = [];
  for (let value of arr) {
    if (value % 3 === 0 && value % 5 === 0) {
      arrResult.push('fizzBuzz');
    } else if (value % 3 === 0) {
      arrResult.push('fizz');
    } else if (value % 5 === 0) {
      arrResult.push('buzz');
    } else {
      arrResult.push('bug!');
}
}
  return arrResult;
}

// Desafio 9
function encode(arg) {
  let code = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 1; i <= code.length; i += 1) {
    arg = arg.replace(RegExp(code[i - 1], 'g'), i);
  }
  return arg;
}

function decode(arg) {
  let code = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 1; i <= code.length; i += 1) {
    arg = arg.replace(RegExp(i.toString(), 'g'), code[i - 1]);
  }
  return arg;
}

// Desafio 10
function techList(argArray, name) {
  if (argArray.length === 0) {
    return 'Vazio!';
  }

  let resultArray = [];
  argArray.sort();
  for (let NomeTech of argArray) {
    let resultObject = {
      tech: NomeTech,
      name: name
    };
    resultArray.push(resultObject);
  }
  return resultArray;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
