var jmlAngkot = 10,
    angkotBeroperasi = 6,
    angkotLembur = 8;

for(noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){

  if(noAngkot <= angkotBeroperasi){
    console.log('Angkot No. '+noAngkot+' beroperasi dengan baik');
  }else if(noAngkot === angkotLembur){
     console.log('Angkot No. '+noAngkot+' sedang lembur');
  }else{
    console.log('Angkot No. '+noAngkot+' sedang tidak beroperasi');
  }

}
