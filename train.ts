// TASK G:
// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1

// function getHighestIndex(arr: number[]) {
//     let katta = arr[0];
//     let indeks = 0;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > katta) {
//             katta = arr[i];
//             indeks = i;
//         }
//     }
//     return indeks;
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8]));
// console.log(getHighestIndex([5, 4, 12, 4, 8]));
// console.log(getHighestIndex([10, 9, 8, 11, 6]));
// console.log(getHighestIndex([10, 9, 8, 11, 12]));

// !==============================================================================!

// H-TASK: 
// shunday function tuzing, u integerlardan (butun son) iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// function getPositive(arr: number[]) {
//     const positive = arr.filter((num) => num > 0);
// const result = positive.join('');               // join('') stringga aylantiradi //('') single string qo'ymasam default holatda vergul qo'yadi har bir son orasiga
//     return result;
// }

// console.log(getPositive([1, -4, 2]));
// console.log(getPositive([2, -4, -5, 3]));
// console.log(getPositive([2, -4, -5]));
// console.log(getPositive([-4, -5, 5]));

// !==============================================================================!

// H2-TASK: 
// Shunday function tuzing, unga string argument pass bolsin.Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

// function getDigits(str: string) {
//     const add = str.split("").filter(char => char >= '0' && char <= '9');
//     const result = add.join('');
//     return result;
// };
// console.log(getDigits("m14i1t"));
// console.log(getDigits("M2I7T"));
// console.log(getDigits("MI0T1"));


// TASK I:
// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

// function majorityElement(arr: number[]) {
//     let count: any = {}; //type aniqlash shart qo'yilmasa ishlamaydi
//     let katta = 0;
//     let natija = arr[0];

//     arr.forEach(n => {
//         count[n] = (count[n] || 0) + 1;
//         if (count[n] > katta) {
//             katta = count[n];
//             natija = n;
//         }
//     })
//     return natija;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 5, 1, 1]));


// TASK J:
// Shunday function tuzing, u string qabul qilsin.
// Va string ichidagi eng uzun so'zni qaytarsin.
// MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

// function findLongestWord(str: string) {
//     const result = str.split(" ").reduce((a, b) => (a.length > b.length ? a : b));
//     return result;
// };

// console.log(findLongestWord("I came from Uzbekistan!"));


// TASK K:
// Berilayotgan parametr tarkibida nechta unli harf bor
// ekanligini aniqlovchi function tuzing
// MASALAN: countVowels("string"); return 1

// function countVowels(str: string) {
//     const unli = ['a', 'o', 'u', 'i', 'e',];
//     const kattakichik = str.toLowerCase();
//     const harflar = kattakichik.split('');
//     const result = harflar.filter(h => unli.includes(h));
//     return result.length;
// }

// console.log(countVowels("Hello World"));
// console.log(countVowels("Hello Ali"));


// L-TASK: 
// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

function reverseSentence(str: string): string {
    const sozlar = str.split(' ');
    const teskariSozlar = sozlar.map(soz => soz.split('').reverse().join(''));
    return teskariSozlar.join(' ');
}

console.log(reverseSentence("we like coding!"));
console.log(reverseSentence("Hello World"));