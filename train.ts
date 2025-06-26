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

function getDigits(str: string) {
    const add = str.split("").filter(char => char >= '0' && char <= '9');
    const result = add.join('');
    return result;
};
console.log(getDigits("m14i1t"));
console.log(getDigits("M2I7T"));
console.log(getDigits("MI0T1"));