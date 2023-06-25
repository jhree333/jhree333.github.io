---
title: "Math.floor VS Math.trunc VS double tilde(~~)"
date: "2023-06-23"
description: "Math.floor VS Math.trunc의 다른 점을 설명합니다."
image: js.png
categories: ["javascript"]
---

출처:
<br>
<a href='https://stackoverflow.com/questions/38702724/math-floor-vs-math-trunc-javascript' className=''>Math.floor VS Math.trunc</a>
<br>
<a href="https://stackoverflow.com/questions/5971645/what-is-the-double-tilde-operator-in-javascript">what is the double tilde operator in javascript</a>
</br>

### 목차

## Math.floor()

가장 가까운 정수로 내림값을 반환

```js[class="line-numbers"]
Math.floor(4.7); //4
Math.floor(4.3); //4
Math.floor(-4.2); //5
```

<br>

## Math.trunc()

소수점을 제거하고 숫자의 정수 부분만 반환

```js[class="line-numbers"]
Math.trunc(4.7); //4
Math.trunc(4.3); //4
Math.trunc(-4.2); //-4
```

<br>

## double tilde(~~)

주어진 숫자를 32비트 정수로 변환한 후 다시 32비트 정수로 변환

```js[class="line-numbers"]
~~3.14; // 3
~~(-3.14); // -3
~~9.99; // 9
```

<br>

## 비교

인수가 양수인 경우에만 Math.trunc(), ~~는 Math.floor()의 결과값이 같음(음수의 경우는 다름);
<br>

## 무엇을 써야 할까?

Math.trunc() 함수의 사용이 조금 더 빠르지만 성능 차이는 무시할 정도로 작다고 볼 수 있습니다.

**성능 비교**

```js[class="line-numbers"]
const iterations = 10000000; // 반복 횟수

// ~~ 연산자를 사용하여 속도 측정
const start = performance.now();
for (let i = 0; i < iterations; i++) {
  ~~3.14;
}
const end = performance.now();
const elapsed = end - start;
console.log("~~ 연산자 실행 시간 (밀리초):", elapsed);

// Math.floor()를 사용하여 속도 측정
const start2 = performance.now();
for (let i = 0; i < iterations; i++) {
  Math.floor(3.14);
}
const end2 = performance.now();
const elapsed2 = end2 - start2;
console.log("Math.floor() 실행 시간 (밀리초):", elapsed2);

// Math.trunc()를 사용하여 속도 측정
const start3 = performance.now();
for (let i = 0; i < iterations; i++) {
  Math.trunc(3.14);
}
const end3 = performance.now();
const elapsed3 = end3 - start3;
console.log("Math.trunc() 실행 시간 (밀리초):", elapsed3);

```

**결과값**

```
~~ 연산자 실행 시간 (밀리초): 20.099999994039536
Math.floor() 실행 시간 (밀리초): 11.700000002980232
Math.trunc() 실행 시간 (밀리초): 10.700000002980232
```
