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

// function reverseSentence(str: string): string {
//     const sozlar = str.split(' ');
//     const teskariSozlar = sozlar.map(soz => soz.split('').reverse().join(''));
//     return teskariSozlar.join(' ');
// }

// console.log(reverseSentence("we like coding!"));
// console.log(reverseSentence("Hello World"));


// M-TASK: 
// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// function getSquareNumbers(arr: number[]): { number: number; square: number }[] {
//     return arr.map(son => ({
//         number: son,
//         square: son * son
//     }))
// }

// console.log(getSquareNumbers([1, 2, 3]))
// console.log(getSquareNumbers([5, 10, 15]));


// TASK N:
// Parametr sifatida yagona string qabul qiladigan function tuzing.
// Va bu function string'ni palindrom so'z yoki palindrom so'z emasligini aniqlab (boolean)
// 'true' yokida 'false' qaytarsin.
// MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false;

// function palindromCheck(word: string): boolean {
//     const lowerCased = word.toLowerCase();
//     const reversed = lowerCased.split('').reverse().join('');
//     return lowerCased === reversed;
// }

// console.log(palindromCheck("dad"));
// console.log(palindromCheck("son"));


// O-TASK:
// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array 
// ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// function calculateSumOfNumbers(arr: any[]): number {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number") {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));


// P-TASK:
// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

function objectToArray(obj: any) {
    let arr: [string, any][] = []; // typeni array ichida ham aniqlash mumkin
    for (let key in obj)
        arr.push([key, obj[key]]);

    return arr;
}

console.log(objectToArray({ a: 10, b: 20 }));