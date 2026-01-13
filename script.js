/**
 * 100 JavaScript Coding Challenges
 * قم بكتابة منطق الفنكشن تحت كل وصف
 */

// --- الأساسيات (1-20) ---


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
    })//
}

// 34. فنكشن تحسب عدد مرات تكرار حرف معين في نص
function countChar(str, char) {}

// 35. فنكشن تحول النص إلى مصفوفة كلمات
function splitToWords(str) {}

// 36. فنكشن تتحقق إذا كانت المصفوفة تحتوي على رقم سالب
function hasNegative(arr) {}

// 37. فنكشن تعيد مصفوفة تحتوي على أطوال الكلمات في مصفوفة نصوص
function wordsLengths(arr) {}

// 38. فنكشن تحول مصفوفة من الأرقام إلى نصوص
function numsToStrings(arr) {}

// 39. فنكشن تعيد النص مكرر n من المرات
function repeatStr(str, n) {}

// 40. فنكشن تحذف العنصر الأخير من المصفوفة وتعيد المصفوفة الجديدة
function removeLast(arr) {}


// --- المنطق والعمليات المتوسطة (41-60) ---

// 41. فنكشن تحسب مضروب الرقم (Factorial)
function factorial(n) {}

// 42. فنكشن تولد رقماً عشوائياً بين 1 و 10
function randomTen() {}

// 43. فنكشن تتحقق إذا كان النص ينتهي بحرف معين
function endsWith(str, char) {}

// 44. فنكشن تحسب عدد حروف العلة (a, e, i, o, u) في نص
function countVowels(str) {}

// 45. فنكشن تحذف العناصر المكررة من المصفوفة
function removeDuplicates(arr) {}

// 46. فنكشن ترتب المصفوفة تصاعدياً
function sortAsc(arr) {}

// 47. فنكشن ترتب المصفوفة تنازلياً
function sortDesc(arr) {}

// 48. فنكشن تتحقق إذا كانت الكلمة "Palindrome" (تقرأ من الجهتين نفس الشيء)
function isPalindrome(str) {}

// 49. فنكشن تحول أول حرف من كل كلمة إلى حرف كبير
function capitalizeWords(str) {}

// 50. فنكشن تعيد الأرقام المشتركة بين مصفوفتين
function getIntersection(arr1, arr2) {}

// 51. فنكشن تحول الرقم إلى نظام الثنائي (Binary)
function decimalToBinary(n) {}

// 52. فنكشن تحسب عدد الكلمات في جملة
function wordCount(str) {}

// 53. فنكشن تستبدل كلمة بكلمة أخرى في نص
function replaceWord(str, oldW, newW) {}

// 54. فنكشن تتحقق إذا كان الرقم أولياً (Prime Number)
function isPrime(n) {}

// 55. فنكشن تعيد مصفوفة بأسماء المستخدمين من مصفوفة كائنات (Objects)
function getNames(users) {}

// 56. فنكشن تحسب العمر بناءً على تاريخ الميلاد (سنة الميلاد)
function calcAge(birthYear) {}

// 57. فنكشن تولد كود لون سداسي عشري (Hex Color) عشوائي
function randomHexColor() {}

// 58. فنكشن تتحقق إذا كانت المصفوفة مرتبة
function isSorted(arr) {}

// 59. فنكشن تدمج كائنين (Objects) في كائن واحد
function mergeObjects(obj1, obj2) {}

// 60. فنكشن تحسب مجموع أرقام عدد معين (مثال 123 -> 6)
function sumDigits(n) {}


// --- المستوى المتقدم والمعالجة (61-80) ---

// 61. فنكشن تقوم بعمل "Flatten" لمصفوفة ثنائية الأبعاد (تحويلها لمصفوفة واحدة)
function flattenArray(arr) {}

// 62. فنكشن تنفذ تأخيراً زمنياً (Promise) لمدة معينة
function delay(ms) {}

// 63. فنكشن تسحب بيانات من رابط (API) باستخدام fetch (Async/Await)
async function fetchData(url) {}

// 64. فنكشن تحول كائن إلى Query String (مثال: {a:1, b:2} -> "a=1&b=2")
function objectToQueryString(obj) {}

// 65. فنكشن تتحقق إذا كان كائنان متساويين في المحتوى (Deep Comparison)
function deepEqual(obj1, obj2) {}

// 66. فنكشن تعيد مصفوفة من الأرقام الفريدة فقط (التي لم تتكرر أبداً)
function uniqueOnly(arr) {}

// 67. فنكشن تقوم بتقسيم مصفوفة إلى أجزاء صغيرة (Chunking)
function chunkArray(arr, size) {}

// 68. فنكشن تحسب الفرق بالأيام بين تاريخين
function daysBetween(date1, date2) {}

// 69. فنكشن تقوم بعمل "Debounce" لفنكشن أخرى
function debounce(func, wait) {}

// 70. فنكشن تحول النص من camelCase إلى snake_case
function camelToSnake(str) {}

// 71. فنكشن تعيد أكثر عنصر تكراراً في مصفوفة
function mostFrequent(arr) {}

// 72. فنكشن تخفي أرقام البطاقة الائتمانية عدا آخر 4 أرقام
function maskCard(number) {}

// 73. فنكشن تتحقق إذا كان النص يحتوي على أرقام فقط
function isNumeric(str) {}

// 74. فنكشن تحول الحروف الكبيرة لصغيرة والعكس في نص
function swapCase(str) {}

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

