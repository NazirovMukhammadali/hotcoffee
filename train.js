// TASK G:

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1

function getHighestIndex(arr) {
    let katta = arr[0];
    let indeks = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > katta) {
            katta = arr[i];
            indeks = i;
        }
    }
    return indeks;
}

console.log(getHighestIndex([5, 21, 12, 21, 8]));
console.log(getHighestIndex([5, 4, 12, 4, 8]));
console.log(getHighestIndex([10, 9, 8, 11, 6]));
console.log(getHighestIndex([10, 9, 8, 11, 12]));