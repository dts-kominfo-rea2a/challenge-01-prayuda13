// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// name: String
// gender: String
// age: Number
// email: String
// favoriteColor: Array
// isHavePet: String
// education: Array
// favoriteRestaurant: Array
let favoriteRestaurant = new Set();

let restaurant1 = { 1: 'Bento', 2: 'Sushi', 3: 'Pancake', 4: 'Eggy', 5: 'Tempura', 6: 'Bento', 7: 'Eggy', 8: 'Padang', 9: 'Tteok', 10: 'Sushi', 11: 'Sushi' };
let restaurant2 = { 1: 'Tempura', 2: 'Bento', 3: 'Sushi', 4: 'Pancake', 5: 'Padang', 6: 'Katsu', 7: 'Geprek', 8: 'Pancake', 9: 'Eggy' };
favoriteRestaurant.add(restaurant1);
favoriteRestaurant.add(restaurant2);

// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
  name: 'Monica',
  gender: 'Female',
  age: 17,
  email: 'monica@dingdong.com',
  favoriteColor: ['Yellow', 'Pink', 'White', 'Purple'],
  isHavePet: 'Yes',
  education: [
    ['name: SD 01', 'city: Jakarta', 'graduate: 2016'],
    ['name: SMP 02', 'city: Jakarta', 'graduate: 2019'],
    ['name: SMA 03', 'city: Tanggerang'],
  ],
  favoriteRestaurant,
};
const secondUser = {
  name: 'Wendy',
  gender: 'Male',
  age: 23,
  email: 'wendy@dingdong.com',
  favoriteColor: ['Blue', 'Black', 'Gray'],
  isHavePet: 'No',
  education: [
    ['name: SD 02', 'city: Jakarta', 'graduate: 2010'],
    ['name: SMP 03', 'city: Bogor', 'graduate: 2013'],
    ['name: SMA 01', 'city: Surabya', 'graduate: 2016'],
  ],
  favoriteRestaurant,
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
