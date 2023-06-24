---
title: "최대공약수,기약분수"
date: "2023-06-24"
description: "최대공약수,기약분수에 대해 설명합니다."
image: math.png
categories: ["math"]
---

### 목차

## 최대공약수

> 두 개 이상의 정수의 공통된 약수 중에서 가장 큰 수

주어진 수들을 약분하거나, 서로소로 만들거나, 분수를 기약분수로 변환하는 등 다양한 수학적 계산에 활용

```js[class="line-numbers"]
function getGcd(a, b) {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
}
```

<br>

## 기약분수

> 기약분수란 분자와 분모의 최대공약수가 1인 분수

```js[class="line-numbers"]
function getRF(numer, denom) {
  // 분자와 분모의 최대공약수를 구합니다.
  const gcd = getGcd(numer, denom);

  // 분자와 분모를 최대공약수로 나누어 기약분수를 구합니다.
  const reducedNumer = numer / gcd;
  const reducedDenom = denom / gcd;

  // 기약분수를 반환합니다.
  return [reducedNumer, reducedDenom];
}
```
