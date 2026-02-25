// src/index.ts

function greet(name: string, umur: number): string {
    return `Selamat datang `+name+` di PWL, Umur saya `+umur+``;
}

const mahasiswa = "Shalwa";
const umur: number = 19;
console.log(greet(mahasiswa,umur));
