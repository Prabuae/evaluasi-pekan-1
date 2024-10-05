// //tipe data ada 6
// //number
// //string
// //boolean
// //null
// //object
// //array


// // number adalah tipe data yang berupa angka

// //contoh

// var number = 10
// var bilanganPecahan = 10.5 //ga pakai bisa pakai , koma) tapi menggunakan . sebagai koma

// console.log(number)
// console.log(bilanganPecahan)


// //string adalah tipe data yang berupa tanda kutip ""

// var string = "Ahmad"

// console.log(string)


// //boolean itu adalah true atau false

// var bol1 = true
// var bol2 = false


// console.log(bol1)
// console.log(bol2)

// //Apa itu variable
// //variable adalah  wadah untuk menyimpan nilai yang berupa data

// // variable mempunyai 3 syintak
// // var, let, const

// // Syintak mendeklarasikan veriable
// // - diawali dengan var let/conts
// // - tulis nama variablenya: tidak boleh diawali dengan angka/karakter lain kayak +, yang di perbolehkan hanya _ (underscore) 
// //variable tidak boleh pakai spasi .. Kecuali spasi terus _, Bolehnya pakai snackcase/caml
// // - masukkan value atau nilainya yang berupa tipe data, Contoh: 

// var nilai1 = 1
// let nilai2 = 5
// const nilai3 = 10

// console.log(nilai1)
// console.log(nilai2)
// console.log(nilai3)

// //Operator aritmatika
// //adalah sistem matematika

// ///ada 4

// //yaitu + - * /

// var nilai4 =15
// var nilai5 = 20

// var penjumlahan = nilai4 + nilai5
// var pengurangan = nilai4 - nilai5
// var perkalian = nilai4 * nilai5
// var pembagian = nilai4 / nilai5

// console.log(penjumlahan)
// console.log(pengurangan)
// console.log(perkalian)
// console.log(pembagian)

// //operator penugasan/assigment
// //adalah menugaskan ke suatu variable

// //ada 4 tipe

// // += -= *= /=

// var nilai6 = 5
// nilai6 += 5 // 10
// nilai6 -= 2 //8
// nilai6 *= 5 //40
// nilai6 /= 2 //20

// // nilai6 menyimpan 5
// //nilai6 + 5 = 10
// //niilai6 jadi menyimpan 10
// //nilai6 - 2 = 8
// //nilai6 jadi 8
// //nilai6 * 5 = 40
// //nilai6 jadi 40
// //nilai6 / 2 = 20


// //pengkondisian if, else if dan else

// var nilai7 = parseInt(prompt("masukkan nilai 1"))
// var operator = prompt("masukkan operator + - * /")
// var nilai8 = parseInt(prompt("masukkan nilai 2"))




// if(isNaN(nilai1) || isNaN(nilai2)){
//     alert("Yang kamu masukan bukan angka")
                                                                                                           
// }
// else {

//     if(operator == '+') {
//         alert(nilai7 + nilai8)
//     }else if(operator  == '-') {
//         alert(nilai7 - nilai8)
//     }else if(operator == '*') {
//         alert(nilai7 * nilai8)
//     }else if(operator == '/'){
//         alert(nilai7 / nilai8)
//     }

// }


// //switch

// var hari = parseInt(prompt("Masukkan hari 1-7"));

// switch (hari) {
//     case 1:
//       document.write("hari senin");
//       break;
//     case 2:
//       document.write("hari selasa");
//       break;
//     case 3:
//       document.write("hari rabu");
//       break;
//     case 4:
//       document.write("hari kamis");
//       break;
//     case 5:
//       document.write("hari jumat");
//       break;
//     case 6:
//       document.write("hari sabtu");
//       break;
//     case 7:
//       document.write("hari ahad");
//     default:
//       document.write("angka yang di masukkan tidak valid masukan angka satu sampai 7");
//   }
  

//   // For,

//   // 1.deklarasikan nilai awal
//   // 2.deklarasikan kondisi
//   // 3.deklarasikan operator increment/decrement
//   // increment: Angka pertama akan nambah 1
//   // decrement: Angkanya akan berkurang 1
  
  
//   let y = 1
//   let open = 100
  
//   for(y; y <= open ; y++){
//       Console.log(y)

//   }
  
// for(x ; x <= 10 ; x++){
//       Console.log("hello world")
  
//   }
//   let x = 1
//   let count = 5
  
//   for(x ; x < 10 ; x ++) {
//   Document.write('mobile' + x)
//   document.write('<br>')
//   }
  
  
  let a = 1
  let acount = parseInt(prompt("Masukkan nilai perulangan"))
  
  for(a ; a < acount ; a++) {
      console.log('mobile' + a)
  
  
  
  document.write(a)
  document.write('<br>')

  }

//   // operator perbandingan ada 6 tipe
// // == (sama dengan sama dengan), >= (tambah sama dengan) , <= (kurang sama dengan),
// // != (tidak sama dengan), < (kurang) , > (tambah)

// //contoh

// let nilaiA = 20
// let nilaiB = 40

// console.log(nilaiA == nilaiB)
// //'nilaiA dan nilaiB sama sam atau tidak nilainya? jawabanya: false 'tidak' karena nilaiA 20 dan nilaiB 40

// console.log(nilaiA >= nilaiB)
// // nilaiA lebih besar sama dengan nilaiB tidak? jawabanya: true 'ya' karena nilaiA 20 sedangkan nilaiB '40'lebih besar

// console.log(nilaiA <= nilaiB)
// // nilaiA lebih kecil sama di nilaiB tidak? jawabanya: false 'tidak' karena nilaiA '20' lebih kecil daripada nilaiB '40'

// console.log(nilaiA != nilaiB)
// // nilaiA tidak sama dengan nilaiB? jawabanya: true 'ya' karena beda nilaiA 20 sedangkan nilaiB 40

// console.log(nilaiA /= nilaiB)
// // nilaiA di bagi sama dengan nilaiB bisa atau tidak? jawabanya; true 'bisa' karena 20/40 = 0.5

// //operator logika
// // ada  3

// // || (atau), && (dan), ! (not)

// //contoh

// //|| (atau) jika di dalam nilai ada true maka hasilnya true
// console.log(true || false) // true
// console.log(false || false || true) //true

// //&& (dan) kebalikan dari || (atau) jika di dalam nilai ada false maka nanti hasilnya adalah false
// console.log(true && false) // false
// console.log(true && true && false) // false

// //! (not/tidak) adalah kebalikan dari kata true dan false
// console.log(!true) // false
// console.log(!false) // true

// // Kalau di bahasa lain integer bilangin bulat, flod bilangan pecahan, bilangan pecah satuan