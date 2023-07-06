---
title: "Number.isNaN(), isNaN() 비교"
date: "2023-07-06"
description: "Number.isNaN이랑 isNaN을 비교해보자"
image: js.png
categories: ["javascript"]
---

- Number.isNaN()
  - 주어진 값이 정말로 NaN인 경우에만 true를 반환
  - 문자열, 객체, null, undefined 등은 모두 false를 반환
  - 엄격한 비교를 수행하여 주어진 값이 NaN인지 여부를 확인
- isNaN()
  - 주어진 값이 NaN인지 확인하기 위해 먼저 암묵적인 형 변환을 수행 NaN인지 여부를 확인
  - 값이 NaN이거나, 숫자로 변환할 수 없는 문자열이거나, 숫자가 아닌 값을 나타내는 다른 데이터 유형인 경우 true를 반환
  - 숫자로 변환 가능한 값들은 true를 반환하지 않고, false를 반환

```js[class="line-numbers"]
// Number.isNaN()은 데이터 타입을 보고 isNaN은 데이터 타입까지 안봄

console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN('NaN'));      // false (문자열이기 때문에)
console.log(Number.isNaN('123'));      // false (문자열을 숫자로 변환할 수 있음)
console.log(Number.isNaN('hello'));    // false (숫자로 변환할 수 없는 문자열)
console.log(Number.isNaN(undefined));  // false
console.log(Number.isNaN(null));       // false
console.log(Number.isNaN(123));        // false
console.log(Number.isNaN(true));       // false
console.log(Number.isNaN({}));         // false

console.log(isNaN(NaN));               // true
console.log(isNaN('NaN'));             // true (암묵적 형 변환 후 NaN)
console.log(isNaN('123'));             // false (숫자로 변환 가능)
console.log(isNaN('hello'));           // true (숫자로 변환 불가능)
console.log(isNaN(undefined));         // true (암묵적 형 변환 후 NaN)
console.log(isNaN(null));              // false (null은 숫자로 변환 가능)
console.log(isNaN(123));               // false
console.log(isNaN(true));              // false (true는 숫자로 변환 가능)
console.log(isNaN({}));                // true (암묵적 형 변환 후 NaN)
```
