/**
 * 100 JavaScript Coding Challenges
 * قم بكتابة منطق الفنكشن تحت كل وصف
 */

// --- الأساسيات (1-20) ---
console.log(swapCase("aasdlkAaAaAA"));


// 1. فنكشن تعيد مجموع رقمين
function sum(a, b) {
    return a + b;
}

// 2. فنكشن تعيد حاصل ضرب رقمين
function multiply(a, b) {
    return a * b;
}

// 3. فنكشن تتحقق إذا كان الرقم زوجياً (تعيد true أو false)
function isEven(n) {
    return !(n%2)? true: false;
}

// 4. فنكشن تتحقق إذا كان الرقم فردياً
function isOdd(n) {
    return (n%2)? true: false;
}

// 5. فنكشن تحول السنوات إلى أيام (بافتراض السنة 365 يوم)
function yearsToDays(years) {
    return years * 365;
}

// 6. فنكشن تأخذ العمر وتعيد "Adult" إذا كان 18 فما فوق، وغير ذلك "Minor"
function checkAge(age) {
    return (age >= 18)? "adult": "minor";
}

// 7. فنكشن تعيد القيمة المطلقة لرقم (Absolute Value)
function getAbs(n) {
    return (n < 0)? n * -1: n;// or Math.abs(n)
}

// 8. فنكشن تحول الساعات إلى ثوانٍ
function hoursToSeconds(hours) {
    return hours * 60 * 60;
}

// 9. فنكشن تحسب مساحة المثلث (القاعدة * الارتفاع / 2)
function triangleArea(base, height) {
    return base * height / 2;
}

// 10. فنكشن تعيد باقي قسمة رقمين
function remainder(a, b) {
    return a%b;
}

// 11. فنكشن تتحقق إذا كان الرقم يقبل القسمة على 10
function isDivisibleByTen(n) {
    return (n%10 == 0)? true: false;
}

// 12. فنكشن تعيد مكعب الرقم (n^3)
function cube(n) {
    return n**3;
}

// 13. فنكشن تأخذ الاسم وتعيد رسالة ترحيب "Hello [name]"
function greet(name) {
    return `Hello ${name}`;
}

// 14. فنكشن تتحقق إذا كان النص فارغاً
function isEmpty(str) {
    return (str.length == 0)? true: false;
}

// 15. فنكشن تعيد طول النص (عدد الحروف)
function strLength(str) {
    return str.length;
}

// 16. فنكشن تقارن بين نصين وتعيد true إذا كانا متطابقين
function compareStrings(str1, str2) {
    return (str1 == str2)? true: false;
}

// 17. فنكشن تعيد الرقم الأصغر بين رقمين
function getMin(a, b) {
    return (a == b)? "Equal": Math.min(a, b);
}

// 18. فنكشن تعيد الرقم الأكبر بين رقمين
function getMax(a, b) {
    return (a == b)? "Equal": Math.max(a, b);
}

// 19. فنكشن تحول الكيلومتر إلى متر
function kmToMeters(km) {
    return km * 1000;
}

// 20. فنكشن تحول السليزيوس إلى فهرنهايت
function celsiusToFahrenheit(c) {
    return Math.round((c * 1.8 + 32) * 10) / 10;
}


// --- المصفوفات والنصوص (21-40) ---

// 21. فنكشن تعيد أول عنصر في المصفوفة
function getFirstElement(arr) {
    return arr[0];
}

// 22. فنكشن تعيد آخر عنصر في المصفوفة
function getLastElement(arr) {
    return arr[arr.length - 1];
}

// 23. فنكشن تعيد مجموع كل الأرقام في المصفوفة
function sumArray(arr) {
    return arr.reduce(sum);//sum is the function on line 11
    // or
    // let a = 0;
    // for(i = 0; i < arr.length; i++) {
    //     a += arr[i];
    // }
    // return a;
}

// 24. فنكشن تعيد متوسط أرقام المصفوفة
function averageArray(arr) {
    return sumArray(arr) / arr.length;
}

// 25. فنكشن تبحث عن عنصر داخل المصفوفة وتعيد true إذا وجد
function findElement(arr, elem) {
    return arr.includes(elem);
}

// 26. فنكشن تعيد مصفوفة جديدة تحتوي على الأرقام الزوجية فقط من المصفوفة الأصلية
function filterEvens(arr) {
    return arr.filter(isEven);
}

// 27. فنكشن تعكس ترتيب المصفوفة
function reverseArray(arr) {
    return arr.reverse();
}

// 28. فنكشن تعكس النص (مثال: "abc" تصبح "cba")
function reverseString(str) {
    return str.split("").reverse().join("");
}

// 29. فنكشن تحول جميع حروف النص إلى حروف كبيرة (Uppercase)
function toUpper(str) {
    return str.toUpperCase();
}

// 30. فنكشن تحذف المسافات من بداية ونهاية النص
function trimString(str) {  
    return str.split(" ").filter((a) => {
        return (a == "")? false: true;
    }).join(" ");
}

// 31. فنكشن تدمج مصفوفتين في مصفوفة واحدة
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

// 32. فنكشن تعيد أكبر رقم في مصفوفة
function findMax(arr) {
    return arr.reduce((a, b) => {
        return (a > b)? a: b;
    })
}

// 33. فنكشن تعيد أصغر رقم في مصفوفة
function findMin(arr) {
    return arr.reduce((a, b) => {
        return (a < b)? a: b;
    })
}

// 34. فنكشن تحسب عدد مرات تكرار حرف معين في نص
function countChar(str, char) {
    return str.split("").reduce((a, b) => {
        return (b == char)? a += 1: a;
    }, 0)
}

// 35. فنكشن تحول النص إلى مصفوفة كلمات
function splitToWords(str) {
    return str.split(" ");
}

// 36. فنكشن تتحقق إذا كانت المصفوفة تحتوي على رقم سالب
function hasNegative(arr) {
    return arr.reduce((a, b) => {
        return (b < 0)? a = true: a;
    }, false);
}

// 37. فنكشن تعيد مصفوفة تحتوي على أطوال الكلمات في مصفوفة نصوص
function wordsLengths(arr) {
    return arr.map((a) => {
        return a.length;
    });
}

// 38. فنكشن تحول مصفوفة من الأرقام إلى نصوص
function numsToStrings(arr) {
    return arr.map((a) => {
        return `${a}`;
    });
}

// 39. فنكشن تعيد النص مكرر n من المرات
function repeatStr(str, n) {
    let newStr = str;
    for(i = 0; i < n - 1; i++) {
        newStr += str; 
    }
    return newStr;
}

// 40. فنكشن تحذف العنصر الأخير من المصفوفة وتعيد المصفوفة الجديدة
function removeLast(arr) {
    return arr.slice(0, arr.length - 1);
}


// --- المنطق والعمليات المتوسطة (41-60) ---

// 41. فنكشن تحسب مضروب الرقم (Factorial)
function factorial(n) {
    for(i = n; i > 1; i--){
       n = n * (i - 1);
    }
    return n;
}

// 42. فنكشن تولد رقماً عشوائياً بين 1 و 10
function randomTen() {
   return Math.round(Math.random() * 10);
}

// 43. فنكشن تتحقق إذا كان النص ينتهي بحرف معين
function endsWith(str, char) {
    return str.includes(char, str.length - 1);
}

// 44. فنكشن تحسب عدد حروف العلة (a, e, i, o, u) في نص
function countVowels(str) {
    return str.split("").filter((item) => {
        return ['a', 'e', 'i', 'o', 'u'].includes(item);
    }).length;
}

// 45. فنكشن تحذف العناصر المكررة من المصفوفة
function removeDuplicates(arr) {
    return arr.filter((a, index) => {
        return !arr.includes(a, index + 1)
    })
}

// 46. فنكشن ترتب المصفوفة تصاعدياً
function sortAsc(arr) {
    return arr.sort((a, b) => a - b);
}

// 47. فنكشن ترتب المصفوفة تنازلياً
function sortDesc(arr) {
    return arr.sort((a, b) => b - a);
}

// 48. فنكشن تتحقق إذا كانت الكلمة "Palindrome" (تقرأ من الجهتين نفس الشيء)
function isPalindrome(str) {
    return (str.toLowerCase().split("").reverse().join("") == str.toLowerCase())? true: false;
}

// 49. فنكشن تحول أول حرف من كل كلمة إلى حرف كبير
function capitalizeWords(str) {
   return str.split(' ').map((a) => {
    return a.charAt(0).toUpperCase().concat(a.slice(1))
   }).join(' ');
}

// 50. فنكشن تعيد الأرقام المشتركة بين مصفوفتين
function getIntersection(arr1, arr2) {
    return arr1.find((a) => {
        return arr2.includes(a);
    })
}

// 51. فنكشن تحول الرقم إلى نظام الثنائي (Binary)
function decimalToBinary(n) {
    return n.toString(2);
}

// 52. فنكشن تحسب عدد الكلمات في جملة
function wordCount(str) {
    return str.split(' ').length;
}

// 53. فنكشن تستبدل كلمة بكلمة أخرى في نص
function replaceWord(str, oldW, newW) {
    return str.replace(oldW, newW);
}

// 54. فنكشن تتحقق إذا كان الرقم أولياً (Prime Number)
function isPrime(n) {
    for (let i = n - 1; i > 1; i--) {
        if (n % i == 0) {
            return true;
        }
    }
    return false;
}

// 55. فنكشن تعيد مصفوفة بأسماء المستخدمين من مصفوفة كائنات (Objects)
function getNames(users) {
    return users.map((a) => a.name);
}

// 56. فنكشن تحسب العمر بناءً على تاريخ الميلاد (سنة الميلاد)
function calcAge(birthYear) {
    return new Date().getFullYear() - birthYear;
}

// 57. فنكشن تولد كود لون سداسي عشري (Hex Color) عشوائي
function randomHexColor() {
    return Math.round(Math.random() * 16777215).toString(16);
}

// 58. فنكشن تتحقق إذا كانت المصفوفة مرتبة
function isSorted(arr) {
    let arrSorted = arr.toSorted((a, b) => a - b)
    return arr.every((a, index) => {
        return (a == arrSorted[index])? true: false;
    })
}

// 59. فنكشن تدمج كائنين (Objects) في كائن واحد
function mergeObjects(obj1, obj2) {
    return Object.assign(obj1, obj2);
}

// 60. فنكشن تحسب مجموع أرقام عدد معين (مثال 123 -> 6)
function sumDigits(n) {
    return new String(n).split('').reduce((a, b) => Number(a) + Number(b));
}


// --- المستوى المتقدم والمعالجة (61-80) ---

// 61. فنكشن تقوم بعمل "Flatten" لمصفوفة ثنائية الأبعاد (تحويلها لمصفوفة واحدة)
function flattenArray(arr) {
    return arr.flat();
}

// 62. فنكشن تنفذ تأخيراً زمنياً (Promise) لمدة معينة
function delay(ms) {
    return new Promise(() => setTimeout(() => console.log("done"), ms))
}

// 63. فنكشن تسحب بيانات من رابط (API) باستخدام fetch (Async/Await)
async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response;

    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}


// 64. فنكشن تحول كائن إلى Query String (مثال: {a:1, b:2} -> "a=1&b=2")
function objectToQueryString(obj) {
    return new URLSearchParams(obj).toString();
}

// 65. فنكشن تتحقق إذا كان كائنان متساويين في المحتوى (Deep Comparison)
function deepEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key)) {
            return false;
        }
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

// 66. فنكشن تعيد مصفوفة من الأرقام الفريدة فقط (التي لم تتكرر أبداً)
function uniqueOnly(arr) {
    let newArr = [];
    for (const value of arr) {
        let conter = arr.filter((a) => (a === value)? true: false).length;
        if (conter === 1) {
            newArr.push(value);
        }
    }
    return newArr;
}

// 67. فنكشن تقوم بتقسيم مصفوفة إلى أجزاء صغيرة (Chunking)
function chunkArray(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length / size ; i++) {
        newArr.push(arr.slice(i * size, (i + 1) * size));
    }
    return newArr;
}

// 68. فنكشن تحسب الفرق بالأيام بين تاريخين
function daysBetween(date1, date2) {
    let msBetween = new Date (date2).valueOf() - new Date (date1).valueOf();
    return msBetween / 86400000;
}

// 69. فنكشن تقوم بعمل "Debounce" لفنكشن أخرى
function debounce(func, wait) {
}


// 70. فنكشن تحول النص من camelCase إلى snake_case
function camelToSnake(str) {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2').toLowerCase();
}

// 71. فنكشن تعيد أكثر عنصر تكراراً في مصفوفة
function mostFrequent(arr) {
    let counterObj = {};
    let mostRepeated;
    for (const value of arr) {
        counterObj[value] = (counterObj[value] || 0) + 1;
        if (!mostRepeated) {
            mostRepeated = value;
        }else if (counterObj[value] > counterObj[mostRepeated]) {
            mostRepeated = value;
        }
    }

    return mostRepeated;
}

// 72. فنكشن تخفي أرقام البطاقة الائتمانية عدا آخر 4 أرقام
function maskCard(number) {
    return number.toString().replace(/.(?=.{4,}$)/g, '#')
}

// 73. فنكشن تتحقق إذا كان النص يحتوي على أرقام فقط
function isNumeric(str) {
    return str.split('').every((a) => a == /[0-9]/g)
}

// 74. فنكشن تحول الحروف الكبيرة لصغيرة والعكس في نص
function swapCase(str) {
    return str.split('').map((char) => {
        if ((/[a-z]/).test(char)) {
            return char.toUpperCase();
        }else {
            return char.toLowerCase();
        }
    }).join('');
}

// 75. فنكشن تحسب قيمة الفائدة البسيطة (P * R * T / 100)
function simpleInterest(p, r, t) {}

// 76. فنكشن تعيد مصفوفة بأسماء المفاتيح (Keys) الموجودة في الكائن
function getKeys(obj) {}

// 77. فنكشن تعيد مصفوفة بالقيم (Values) الموجودة في الكائن
function getValues(obj) {}

// 78. فنكشن تحول المصفوفة إلى كائن (Index هو المفتاح)
function arrayToObject(arr) {}

// 79. فنكشن تولد سلسلة فيبوناتشي حتى الرقم n
function fibonacci(n) {}

// 80. فنكشن تتحقق إذا كان الرقم هو "Perfect Square" (له جذر تربيعي صحيح)
function isPerfectSquare(n) {}


// --- تحديات إضافية وشاملة (81-100) ---

// 81. فنكشن تحذف القيم "Falsy" من المصفوفة (null, undefined, 0, "")
function compact(arr) {}

// 82. فنكشن تعيد الفرق بين مصفوفتين
function arrayDiff(arr1, arr2) {}

// 83. فنكشن تحول الوقت من نظام 12 ساعة إلى 24 ساعة
function timeConvert12to24(timeStr) {}

// 84. فنكشن تحسب عدد الأيام المتبقية حتى نهاية السنة
function daysUntilYearEnd() {}

// 85. فنكشن تعيد أصغر رقم موجب مفقود في مصفوفة أرقام
function firstMissingPositive(arr) {}

// 86. فنكشن تحسب تكرار الكلمات في نص وتعيدها في كائن
function wordFrequency(str) {}

// 87. فنكشن تقوم بعمل Shuffle (تبديل عشوائي) لعناصر المصفوفة
function shuffle(arr) {}

// 88. فنكشن تتحقق إذا كان النص بصيغة إيميل صحيح (Regex)
function isValidEmail(email) {}

// 89. فنكشن تحول مصفوفة كائنات إلى جدول CSV (نصي)
function toCSV(data) {}

// 90. فنكشن تأخذ رقم وتعيده مع فواصل الآلاف (مثال: 1000 -> 1,000)
function formatNumber(n) {}

// 91. فنكشن تعيد مصفوفة من أرقام عشوائية غير مكررة
function uniqueRandoms(count, min, max) {}

// 92. فنكشن تتحقق إذا كانت السنة كبيسة (Leap Year)
function isLeapYear(year) {}

// 93. فنكشن تعيد اسم اليوم من تاريخ معين (مثلاً "Monday")
function getDayName(date) {}

// 94. فنكشن تقوم بتقليص النص (Truncate) إذا زاد عن حد معين مع إضافة نقاط
function truncate(str, limit) {}

// 95. فنكشن تحسب المسافة بين نقطتين في المستوى الإحداثي (x1, y1) و (x2, y2)
function distance(x1, y1, x2, y2) {}

// 96. فنكشن تعيد الحرف الأكثر تكراراً في نص
function maxChar(str) {}

// 97. فنكشن تتحقق إذا كان المصفوفة تحتوي على مصفوفات فرعية
function hasSubArray(arr) {}

// 98. فنكشن تحسب مجموع الأرقام الفردية فقط في مصفوفة
function sumOdds(arr) {}

// 99. فنكشن تحول النص إلى URL Slug (مثال: "Hello World" -> "hello-world")
function toSlug(str) {}

// 100. فنكشن تعيد رقم عشوائي كمعرف (UUID) بسيط
function generateId() {}

