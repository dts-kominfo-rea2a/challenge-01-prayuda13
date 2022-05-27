// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
const bento1 = 'Bento';
const bento2 = 'Bento';
const bento3 = 'Bento';
const sushi1 = 'Sushi';
const sushi2 = 'Sushi';
const sushi3 = 'Sushi';
const sushi4 = 'Sushi';
const pancake1 = 'Pancake';
const pancake2 = 'Pancake';
const pancake3 = 'Pancake';
const eggy1 = 'Eggy';
const eggy2 = 'Eggy';
const eggy3 = 'Eggy';
const tempura1 = 'Tempura';
const tempura2 = 'Tempura';
const padang1 = 'Padang';
const padang2 = 'Padang';
const tteok = 'Tteok';
const katsu = 'Katsu';
const geprek = 'Geprek';

let restaurant1 = [];
restaurant1.push(bento1);
restaurant1.push(sushi1);
restaurant1.push(pancake1);
restaurant1.push(eggy1);
restaurant1.push(tempura1);
restaurant1.push(bento2);
restaurant1.push(eggy2);
restaurant1.push(padang1);
restaurant1.push(tteok);
restaurant1.push(sushi2);
restaurant1.push(sushi3);

let restaurant2 = [];
restaurant2.push(tempura2);
restaurant2.push(bento3);
restaurant2.push(sushi4);
restaurant2.push(pancake2);
restaurant2.push(padang2);
restaurant2.push(katsu);
restaurant2.push(geprek);
restaurant2.push(pancake3);
restaurant2.push(eggy3);

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
  favoriteRestaurant: [...restaurant1],
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
  favoriteRestaurant: [...restaurant2],
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
