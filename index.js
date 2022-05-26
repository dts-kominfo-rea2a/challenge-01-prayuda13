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
  favoriteRestaurant: [['Bento'], ['Sushi'], ['Pancake'], ['Eggy'], ['Tempura'], ['Bento'], ['Eggy'], ['Padang'], ['Tteok'], ['Sushi'], ['Sushi']],
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
  favoriteRestaurant: [['Tempura'], ['Bento'], ['Sushi'], ['Pancake'], ['Padang'], ['Katsu'], ['Geprek'], ['Pancake'], ['Eggy']],
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
