function setSegitigaKiri(){
  var s = '';
  for(i = 0; i < 10; i++){
    for(j = 0; j <= i; j++){
      s += '*';
    }
    s += '\n';
  }
  console.log(s);
}

function setSegitigaKiri1(){
  var s = '';
  for(i = 10; i > 0; i--){
    for(j = 0; j < i; j++){
      s += '*';
    }
    s += '\n';
  }
  console.log(s);
}

function segitigaKiri(){
  var s = '';

  for(i = 0; i < 10; i++){
    for(j = 0; j <= i; j++){
      s += '*';
    }
    s += '\n';
  }
  for(i = 10; i > 0; i--){
    for(j = 0; j < i; j++){
      s += '*';
    }
    s += '\n';
  }
  console.log(s);
}

function setSegitigaKanan(){
  var s = '';

  for(i = 0; i < 10; i++){
    for(j = i; j < 10; j++){
      s += ' ';
    }
    for(k = 0; k <= i; k++){
      s += '*';
    }
    s += '\n';
  }
  console.log(s);
}

function setSegitigaKanan1(){
  var s = '';

  for(i = 10; i > 0; i--){
    for(j = i; j <= 10; j++){
      s += ' ';
    }
    for(k = 0; k < i; k++){
      s += '*';
    }
    s += '\n';
  }
  console.log(s);
}

function segitigaKanan(){
  var s ='';

  for(i = 0; i < 10; i++){
    for(j = i; j < 10; j++){
      s += ' ';
    }
    for(k = 0; k <= i; k++){
      s += '*';
    }
    s += '\n';
  }
  for(i = 10; i > 0; i--){
      for(j = i; j <= 10; j++){
        s += ' ';
      }
      for(k = 0; k < i; k++){
        s += '*';
      }
    s += '\n';
  }
  console.log(s);
}

function gabungSegitiga(){
  var s = '';

  for(i = 0; i <= 10; i++){
    for(j = i; j <= 10 ; j++){
      s += ' ';
    }
    for(k = 0; k < i; k++){
      s += '*';
    }
    for(l = 0; l < i; l++){
      s += '*';
    }
    s += '\n';
  }
  for(m = 10; m > 0; m--){
    for(n = m; n <= 10; n++){
      s += ' ';
    }
    for(o = 0; o < m; o++){
      s += '*';
    }
    for(p = 0; p < m; p++){
      s += '*';
    }
    s += '\n';
  }
  console.log(s);
}

console.log('');
console.log('Ini adalah setengah segitiga kiri: ');
console.log('');
setSegitigaKiri();
console.log('');
console.log('Ini adalah setengah segitiga kiri (terbalik): ');
console.log('');
setSegitigaKiri1();
console.log('');
console.log('Ini adalah segitiga kiri: ');
console.log('');
segitigaKiri();
console.log('');
console.log('Ini adalah setengah segitiga kanan: ');
console.log('');
setSegitigaKanan();
console.log('');
console.log('Ini adalah setengah segitiga kanan (terbalik): ');
console.log('');
setSegitigaKanan1();
console.log('');
console.log('Ini adalah segitiga kanan: ');
console.log('');
segitigaKanan();
console.log('');
console.log('Ini adalah penggabungan segitiga: ');
console.log('');
gabungSegitiga();
