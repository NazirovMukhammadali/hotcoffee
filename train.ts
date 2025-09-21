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

// function objectToArray(obj: any) {
//     let arr: [string, any][] = []; // typeni array ichida ham aniqlash mumkin
//     for (let key in obj)
//         arr.push([key, obj[key]]);

//     return arr;
// }

// console.log(objectToArray({ a: 10, b: 20 }));


// Q-TASK:
// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

// function hasProperty(obj: object, str: string): boolean {
//     const key = Object.keys(obj); // Javascript methodi
//     return key.includes(str);
// };

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "name"));


// R-TASK:
// Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

// function calculate(str: string) {
//     const num = str.match(/\d+/g);
//     if (!num) return 0;
//     const nums = num.map(num => Number(num));
//     let son = 0;
//     for (let i = 0; i < nums.length; i++) {
//         son += nums[i];
//     }
//     return son;
// }

// console.log(calculate("1+3"));


// S-TASK:
// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

// function missingNumber(arr: number[]) {
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);

//     for (let i = min; i <= max; i++) {
//         if (!arr.includes(i)) {
//             return i;
//         }
//     }

// }

// console.log(missingNumber([3, 4, 6]))
// console.log(missingNumber([6, 7, 9]))


// T-TASK:
// Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

// function mergeSortedArrays(arr1: number[], arr2: number[]) {
//     const add = arr1.concat(arr2);
//     add.sort((a, b) => a - b);
//     return add;
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// U-TASK:
// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// function sumOdds(num: number) {
//     let count = 0;
//     for (let i = 1; i < num; i++) {
//         if (i % 2 !== 0) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(sumOdds(9))
// console.log(sumOdds(11))


// V - TASK:
// Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
//     MASALAN: countChars("hello") return { h: 1, e: 1, l: 2, o: 1 }

// function countChars(str: string): Record<string, number> {
//     const result: Record<string, number> = {};

//     for (let char of str) {
//         if (result[char]) {
//             result[char]++;
//         } else {
//             result[char] = 1;
//         }
//     }

//     return result;
// }

// console.log(countChars("Hello"))


// W-TASK:
// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

// function chunkArray(arr: number[], num: number): number[][] {
//     const result: number[][] = [];

//     for (let i = 0; i < arr.length; i += num) {
//         result.push(arr.slice(i, i + num));
//     }

//     return result;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))


// X-TASK:
//  Shunday function yozing, uni object va string parapetrlari bolsin. Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)
//  MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// function countOccurrences(obj: Record<string, any>, keyToFind: string): number {
//     let count = 0;

//     (function search(current: any) {
//         if (typeof current === "object" && current !== null) {
//             Object.keys(current).forEach(key => {
//                 if (key === keyToFind) count++;
//                 search(current[key]);
//             });
//         }
//     })(obj);

//     return count;
// }

// console.log(countOccurrences({ model: 'Bugatti', steer: { model: 'HANKOOK', size: 30 } }, 'model'))


// TASK Y
// Shunday function yozing, uni 2'ta array parametri bo'lsin.
// Bu function ikkala arrayda ham ishtirok etgan bir xil
// qiymatlarni yagona arrayga joylab qaytarsin.
// MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// function findIntersection(arr1: number[], arr2: number[]) {
//     const set1 = new Set(arr1); // Set takrorlangan qiymatni olib tashlaydi
//     const intersection = new Set<number>();

//     for (const value of arr2) {
//         if (set1.has(value)) {
//             intersection.add(value);
//         }
//     }

//     return Array.from(intersection).sort((a, b) => a - b);
// }

// console.log(findIntersection([1, 2, 3], [3, 2, 0]))
// console.log(findIntersection([5, 6], [6, 5]))


// Shunday function yozing. Bu function sonlardan iborat array
// qabul qilsin. Function'ning vazifasi array tarkibidagi juft
// sonlarni topib ularni yig'disini qaytarsin.
// MASALAN:
// sumEvens([1, 2, 3]); return 2;
// sumEvens([1, 2, 3, 2]); return 4;

// function sumEvens(arr: number[]): number {
//     let num: number = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0)
//             num += arr[i];
//     }
//     return num;
// }

// console.log(sumEvens([1, 2, 3, 2]));
// console.log(sumEvens([1, 2, 3,]));


// ZC-TASK:
// Shunday function yozing, uni number parametri bolsin va function qabul parametrni selsiy miqdori 
// sifatida qabul qilib uni farenhitga ozgartirib bersin
// MASALAN: celsiusToFahrenheit(0) return 32

// function celsiusToFahrenheit(celsius: number): number {
//     return (celsius * 9 / 5) + 32;
// }
// console.log(celsiusToFahrenheit(0));


// function changeNumberInArray(
//     num: number,
//     arr: number[],
//     newNum: number
// ): number[] {
//     const index = arr.indexOf(num);

//     if (index !== -1) {
//         arr[index] = newNum;
//     }

//     return arr;
// }

// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));



// function removeDuplicate(str: string) {
//     let result = '';
//     for (let char of str) {
//         if (!result.includes(char)) {
//             result += char;
//         }
//     }
//     return result;
// }

// console.log(removeDuplicate('stringg'));

//***********************************************************/

// ZF-TASK:
// Shunday function yozing, uni string parametri bolsin.
// String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin lekin 1 yoki 
// 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
// MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'

// function capitalizeWords(str: string) {
//     return str
//         .split(" ")
//         .map((word: string) => {
//             if (word.length <= 2) return word;
//             return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//         })
//         .join(" ");
// }

// console.log(capitalizeWords("name should be a string")); 

//***********************************************************/


// ZG-TASK:
// Shunday function yozing, u berilgan string parametrni snake casega otkazib qaytarsin. 
// MASALAN: capitalizeWords('name should be a string') return 'name_should_be_a_string'

// function toSnakeCase(str: string): string {
//     return str
//         .trim()
//         .toLowerCase()
//         .replace(/\s+/g, "_")
//         .replace(/[^\w_]/g, "");
// }

// console.log(toSnakeCase("name should be a string")); 

//***********************************************************/

// ZH-TASK:
// Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin. 
// MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]

// function findDisappearedNumbers(arr: number[]) {
//     const result: number[] = [];
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     } for (let i = 1; i <= max; i++) {
//         let exists = false;
//         for (let ii = 0; ii < arr.length; ii++) {
//             if (arr[ii] === i) {
//                 exists = true;
//                 break;
//             }
//         } if (!exists) {
//             result.push(i);
//         }
//     }
//     return result;
// }

// console.log(findDisappearedNumbers([1, 3, 4, 7]));

//***********************************************************/

// TASK ZI
// Shundan function yozing, bu function 3 soniydan so'ng
// "Hello World!" so'zini qaytarsin.
// MASALAN: delayHelloWorld("Hello World"); return "Hello World";

// function delayHelloWorld(word: string) {
//     const start = Date.now();
//     while (Date.now() - start < 3000) {
//     } return word;
// }

// console.log(delayHelloWorld("Hello World!"));

//***********************************************************/

// ZJ-TASK:
// Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8

// function reduceNestedArray(arr: any[]) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let val = arr[i];
//         if (Array.isArray(val)) {
//             sum += reduceNestedArray(val);
//         } else {
//             sum += val;
//         }
//     } return sum;
// }

// console.log(reduceNestedArray([1, [1, 2, [4]]]))
// console.log(reduceNestedArray([1, [1, 2, [2]]]))

//***********************************************************/

// ZK-TASK:
// Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
// MASALAN: printNumbers()

// function printNumbers() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => console.log(i), i * 1000);
//     }
// }

// printNumbers();

//***********************************************************/

// TASK ZL:
// Shunday function yozing, va bu function parametr
// sifatida raqamlarni qabul qilsin.Bu function qabul qilingan
// raqamlarni orqasiga o'girib qaytarsin

// MASALAN: reverseInteger(123456789); return 987654321;

// function reverseInteger(raq: number) {
//     const str = raq.toString();
//     let reversedStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i];
//     } return parseInt(reversedStr, 10);
// }

// console.log(reverseInteger(123456789));
// console.log(reverseInteger(987654321));

//***********************************************************/

// ZM-TASK:
// Shunday function yozing, u function parametrda berilgan sonni har bir raqamini kvadratiga ogirib qaytarsin.
// MASALAN: squareDigits(9119) return "811181"

// function squareDigits(num: number) {
//     let str = String(num);
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         let num2 = Number(str[i]);
//         result += (num2 * num2);
//     } return result;
// }

// console.log(squareDigits(9119));
// console.log(squareDigits(2222));

//***********************************************************/

// ZN-TASK:
// Shunday function yozing, uni array va number parametri bolsin. 
// Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]

function rotateArray(arr: number[], num: number) {
    const cut = arr.splice(0, num + 1);
    return arr.concat(cut);
}

console.log(rotateArray([1, 2, 3, 4, 5, 6], 3))
console.log(rotateArray([1, 2, 3, 4, 5, 6], 2))