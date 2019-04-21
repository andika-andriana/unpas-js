// Mohon di jalankan pada browser karena (prompt, alert)
var item = prompt('Masukan Nama Makanan: \n (contoh: Nasi, Daging dan Hamburger)');

switch (item) {

  case 'Nasi':
  case 'Daging':
    alert('Makanan Sehat!');
    break;
  case 'Hamburger':
    alert('Masakan tidak Sehat!');
    break;
  default:
    alert('Makanan tidak ada');
    break;

}
