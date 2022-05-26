// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat

let restaurant1 = new Set();
restaurant1.add('bento');
restaurant1.add('sushi');
restaurant1.add('pancake');
restaurant1.add('eggy');
restaurant1.add('tempura');
restaurant1.add('bento');
restaurant1.add('eggy');
restaurant1.add('padang');
restaurant1.add('tteok');
restaurant1.add('sushi');
restaurant1.add('sushi');

let restaurant2 = new Set();
restaurant2.add('tempura');
restaurant2.add('bento');
restaurant2.add('sushi');
restaurant2.add('pancake');
restaurant2.add('padang');
restaurant2.add('katsu');
restaurant2.add('geprek');
restaurant2.add('pancake');
restaurant2.add('eggy');
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
  name: 'Monica',
  gender: 'Female',
  age: 17,
  email: 'monica@dingdong.com',
  favoriteColor: ['Yellow', 'Pink', 'White', 'Purple'],
  isHavePet: 'Yes',
  education: [
    { name: 'SD 01', city: 'Jakarta', graduate: '2016' },
    { name: 'SMP 02', city: 'Jakarta', graduate: '2019' },
    { name: 'SMA 03', city: 'Tangerang' },
  ],
  favoriteRestaurant: restaurant1,
};
const secondUser = {
  name: 'Wendy',
  gender: 'Male',
  age: 23,
  email: 'wendy@dingdong.com',
  favoriteColor: ['Blue', 'Black', 'Gray'],
  isHavePet: 'No',
  education: [
    { name: 'SD 02', city: 'Jakarta', graduate: '2010' },
    { name: 'SMP 03', city: 'Bogor', graduate: '2013' },
    { name: 'SMA 01', city: 'Surabaya', graduate: '2016' },
    { name: 'Universitas Maju', city: 'Tangerang' },
  ],
  favoriteRestaurant: restaurant2,
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
