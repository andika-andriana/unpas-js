alert('Selamat datang di halaman pembelajaran');
var lagi = true;

while(lagi === true){
  var nama = prompt('Mohon masukan nama anda: ');
  alert('Hi '+nama);

  lagi = confirm('Ingin coba lagi? '+nama);
}
alert('Terima kasih telah berkunjung');
