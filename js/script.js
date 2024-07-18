

///If-Else  ve swich case suallari

// 1)Ədədin müsbət, mənfi və ya sıfır olmasını müəyyən edən if-else if-else konstruksiyasını yaradın.

// const num = +prompt("Eded daxil edin");

// if(num > 0 ){
//     console.log("Eded musbetdir");
// } else if( num < 0){
//     console.log("Eded menfidir");
// } else{
//     console.log("Eded sifirdir");
// }




// 2)
// Müəyyən bir istifadəçi roluna
//  (admin, istifadəçi, qonaq) əsaslanan müxtəlif mesajları
//  qaytaran keçid-case strukturunu yazın.


// const user = prompt("Istifadeci adi daxil edin");

// if(user == "admin"){
//     console.log("admin xos gelmissiniz");
// } else if (user == "user"){
//     console.log("Istifadeci xos gelmissiniz");
// } else if(user == "guest"){
//     console.log("Qonaq xos gelmissiniz");
// }
//  else{
//     console.log("Duzgun istifadeci rolu daxil edin!");
// }


//3) Ədədin cüt və ya tək olduğunu müəyyən edən if-else 
// konstruksiyasını yazın.


// const number = +prompt("Eded daxil edin");

// if(number % 2 == 0){
//     console.log("Eded cutdur");
// } else {
//     console.log("Eded tekdir");
// }


// Ternary operatoruna aid sual

// 4)
// Ədədin müsbət və ya mənfi olmasını təyin edən ternary 
//  operatordan istifadə edərək ifadə yazın.


// const num = +prompt("Eded daxil edin ");

// num > 0 ? console.log("Eded musbetdir") : console.log("Eded menfidir");


// (==, ===, !==, <=, =>) isdifade edilecek suallar:
// 5)
// == və === operatorları arasındakı fərqi göstərən numune 
// yazın.


// let a = "11";

// let b = 11;

// if(a === b){
//     console.log(" a === b ");
// } else if ( a == b){
//     console.log("a == b");
// } else{
//     console.log("Error");
// }



// 6)!== operatorundan istifadə edərək ədədin 10-a bərabər olmadığını 
// yoxlayan ifadə yaradın.


// const a = +prompt("Eded daxil edin ");
// const b = "10";

// if( a !== 10){
//     console.log("Eded 10a qiymet ve tip e gore beraber deyil");
// }

// if( b != 10){
//     console.log("Eded 10a beraber deyil ama tipi onemli deyil");
// } else{
//     console.log("Error");
// }


// 7)
// Ədədin 5-dən böyük və 10-dan kiçik olmasını yoxlayan ifadə yazın.


// const num = +prompt("Eded daxil edin");

// if(num > 5 && num < 10){
//     console.log("Eded 5den boyuk 10dan kicikdir");
// } else if( num === 5 || num === 10){
//     console.log("Eded ya 5e ya 10na beraberdir");
// } else{
//     console.log("Daxil edilmis reqem 5den kicik yaxud 10dan boyukdur");
// }


// 8)
// Əgər varsa istifadəçi adı dəyişənini, əks halda
//  isə "Anonim"i qaytaran nullish coalescing  operatorundan 
// istifadə edin.

// const  userName = prompt("Eded daxil edin");

// userName ? console.log(`${userName}`): console.log("Error");

// userName ?? console.log("Anonim");




// Məntiqi Operatorlar (!, ||, &&)


// 9)Boolean dəyərinin tərsini qaytaran ifadə yazın.

//  const info = prompt("Eded daxil edin");

//  if(info != true){
//     console.log("False");
//  } else if (info == true){
//     console.log("True");
//  } else{
//     console.log("Error");
//  }




// 10)Hər iki şərtin doğru olub olmadığını yoxlayan && ifadəsi yaradın.

// const x = "Username";
// const y = "Password123"


// if(x ==="Username" && y === "Password123"){
//     console.log("Sehifeye xos gelmisiz");
// } else {
//     console.log("Istifadeci adi ve ya parol yanlisdir");
// }




// 11)İki şərtdən ən azı birinin doğru olub olmadığını yoxlayan 


// const user = "Anar";

// const user2 = "Gunel";

// if(user == "Anar" || user2 == "Ayan"){
//     console.log("Istifadeci adindan  en az biri dogrudur");
// } else{
//     console.log("Her iki istifadeci adi yalnisdir");
// }


// 12) Ədədin həm müsbət, həm də cüt olmasını yoxlayan ifadə yazın.


// const num = +prompt("Eded daxil edin");

// if(num > 0 && num % 2 == 0){
//     console.log("Eded hem musbet hem cutdur");
// } else if(num > 0 || num % 2 == 0){
//     console.log("Eded ya musbet ya cut");
// } else{
//     console.log("Hec biri");
// }



// 13)İstifadəçi adı və parolun hər ikisinin etibarlı olub olmadığını yoxlayan if-else strukturunu yazın.


// const userName = prompt("Istifadeci adini daxil edin");

// const pass = prompt("Istifadeci parolu daxil edin");

// if(userName == "Username" && pass == "pass123"){
//     console.log("Ugurlu");
// } else{
//     console.log("Istifadeci adi ve ya sifre yalnisdir");
// }



// 14)Ədədin mənfi və ya sıfır olduğunu yoxlayan və müvafiq olaraq mesajı qaytaran switch-case konstruksiyasını yazın.


// let num = +prompt("Eded daxil edin");

// switch(true){
//     case(num<0):
//         console.log("Eded menfidir ")
//         break;
//     case(num == 0):
//         console.log("Eded sifirdir")
//         break;
//     default:
//         console.log("Error");
// }




//Sinifdeki tapsiriqlar//////////////////////////////////////////////////////////////////////////////////////////////////////


// Tapsiriq 1 (musbet ve menfi)
// const reqem = +prompt("Eded daxil edin");


//1. yol

// if(reqem > 0){
//     console.log("Eded musbetdir");
//     document.write("Eded musbetdir");
// } else{
//     console.log("Eded menfidir");
//     document.write("Eded menfidir")
// }




// 2. yol

// reqem > 0 ? console.log("Eded musbetdi") : console.log("Eded menfidir");


// 3. yol

// switch (true){
//     case (reqem > 0):
//         console.log("musbet ");
//         break;
//     case ( reqem < 0 ):
//         console.log("menfi");
//         break;
//     default:
//         console.log("Error");

// }

//Tapsiriq 2(cut ve tek)

//1 ci yol

// let reqem  = +prompt("Eded daxil edin");

// if(reqem % 2 == 0){
//     console.log("Eded cuttdur");
// } else if ( reqem % 2 !==0){
//     console.log("Eded tekdir");
// } else{
//     console.log("Reqem daxil edin");
// }

// 2. yol 

// reqem % 2 == 0 ? console.log("Eded cutdur") : console.log("Eded tekdir");



// 3. yol

// switch (true){
//     case(reqem % 2 == 0):
//         console.log("Cutdur");
//         break;
//     case(reqem % 2 !==0):
//         console.log("Tekdir");
//         break;
//     default:
//         console.log("Error");

// }









































