var jmlAngkot = 10,
    angkotBeroperasi = 6;

for(noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){

  if(noAngkot <= angkotBeroperasi && noAngkot !== 5){
    console.log('Angkot No: '+noAngkot+' Beroperasi');
  }else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log('Angkot No: '+noAngkot+' Lembur');
  }else{
    console.log('Angkot No: '+noAngkot+' Tidak Beroperasi');
  }
  /*
    && = AND (True && True = True);(True && False = False);
    || = OR (True || False = True);(False || True = True);
    != = NOT (True != True = False);(False != True = True);
  */
}
