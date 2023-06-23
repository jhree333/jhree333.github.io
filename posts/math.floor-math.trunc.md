---
title: "Math.floor VS Math.trunc "
date: "2023-06-23"
description: "Math.floor VS Math.trunc의 다른 점을 설명합니다."
image: js.png
categories: ["javascript"]
---

출처: <a href='https://stackoverflow.com/questions/38702724/math-floor-vs-math-trunc-javascript' className=''>Math.floor VS Math.trunc</a>

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

## 비교

인수가 양수인 경우에만 Math.trunc()는 Math.floor()의 결과값이 같음(음수의 경우 Math.trunc()는 Math.ceil()과 동일)

<br>

## 무엇을 써야 할까?

인자로 주어지는 값이 양수인 경우에는 Math.trunc() 함수를 사용하는 것이 좋습니다.

**Math.trunc()와 Math.floor()의 성능을 비교**

```js[class="line-numbers"]
let t0 = performance.now();
let result = Math.floor(3.5);
let t1 = performance.now();
console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:', result);

t0 = performance.now();
result = Math.trunc(3.5);
t1 = performance.now();
console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:', result);

```

**결과값**

```
Took 0.0300 milliseconds to generate: 3
Took 0.0200 milliseconds to generate: 3
```
