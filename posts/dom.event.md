---
title: "DOM의 이벤트 객체에 대해 알아보자"
date: "2023-06-27"
description: "이벤트 객체에 대해 설명합니다."
image: dom.png
categories: ["dom"]
---

### 목차

## 정의

> DOM에서 발생한 이벤트에 대한 정보를 포함하는 객체

<br>

## target vs currentTarget

- target: 이벤트가 처음 발생했던 대상 DOM 요소의 참조를 갖음
- currentTarget: 발생한 이벤트가 등록된 DOM 요소의 참조를 갖음

```html[class="line-numbers"]
<!DOCTYPE html>
<html>
  <head>
    <title>DOM 이벤트 예시</title>
  </head>
  <body>
    <div id="myElement">
      <button id="myButton">Click Me</button>
    </div>

    <script>
      // 이벤트 핸들러 함수
      function eventHandler(event) {
        // <button id="myButton">Click Me</button>
        console.log("target:", event.target); // 이벤트가 발생한 요소를 가리킴

        // <div id="myElement"> ... </div>
        console.log("currentTarget:", event.currentTarget); // 이벤트 핸들러가 등록된 요소를 가리킴
      }

      // 이벤트 핸들러 등록
      const element = document.getElementById("myElement");
      element.addEventListener("click", eventHandler);
    </script>
  </body>
</html>
```

<br>

## stopPropagation()과 preventDefault()

> 이벤트 제어 하는 메소드

a. stopPropagation()은 이벤트가 전파(캡처링, 버블링)되는 것을 막음. 하지만 기본 동작을 중단 못함

```html[class="line-numbers"]
<!DOCTYPE html>
<html>
<head>
  <title>stopPropagation() 예제</title>
</head>
<body>
  <div id="parent">
    <button id="child">버튼</button>
  </div>

  <script>
    const parent = document.getElementById('parent');
    const child = document.getElementById('child');

    parent.addEventListener('click', function(event) {
      console.log("부모 요소 클릭");
    });

    child.addEventListener('click', function(event) {
      event.stopPropagation(); // 이벤트 전파 중단
      console.log("자식 요소 클릭");
    });
  </script>
</body>
</html>

```

<br>

b. preventDefault()는 이벤트를 취소할 수 있는 경우 이벤트 취소, 하지만 이벤트가 전파(캡처링, 버블링)되는 것을 못막음.

```html[class="line-numbers"]
<!DOCTYPE html>
<html>
<head>
  <title>preventDefault() 예제</title>
</head>
<body>
  <a id="link" href="https://www.google.com">구글로 이동</a>

  <script>
    const link = document.getElementById('link');

    link.addEventListener('click', function(event) {
      event.preventDefault(); // 기본 동작 취소
      console.log("기본 동작 취소됨");
    });
  </script>
</body>
</html>
```

<br>

## 이벤트 종류

- User Interface 이벤트
- Focus 이벤트
- 마우스 이벤트
- input 이벤트
- 키보드 이벤트 등이 있음.(MDN이나 W3C 참조)

<br>

## 이벤트 리스너 추가

1. html 요소에 속성 할당

```html[class="line-numbers"]
<!DOCTYPE html>
<html>
<head>
  <title>인라인 이벤트 핸들러 예제</title>
</head>
<body>
  <button id="myButton" onclick="handleClick()">클릭</button>

  <script>
    function handleClick() {
      console.log('버튼이 클릭되었습니다.');
    }
  </script>
</body>
</html>
```

2. DOM 프로퍼티로 할당

- 하나의 이벤트 핸들러만 할당 가능(새로운 이벤트 리스너 할당시 기존값 덮음)

```html[class='line-numbers]
<!DOCTYPE html>
<html>
<head>
  <title>이벤트 핸들러 할당 예제</title>
</head>
<body>
  <button id="myButton">클릭</button>

  <script>
    const button = document.getElementById('myButton');

    // 이벤트 핸들러 할당
    button.onclick = function(event) {
      console.log('버튼이 클릭되었습니다.');
    };
  </script>
</body>
</html>
```

3. addEventListener 사용(권장)

- 여러개 리스너 등록 가능
- 정밀한 제어(버블링,캡처링 사용)
- 할당한 이벤트 해제할때 반드시 동일한 참조를 가진 리스너를 넘겨줘야함(동일한 형태의 함수 x)

```html[class='line-numbers']
<!DOCTYPE html>
<html>
<head>
  <title>addEventListener 예제</title>
</head>
<body>
  <button id="myButton">클릭</button>

  <script>
    const button = document.getElementById('myButton');

    function handleClick(event) {
        console.log('버튼이 클릭되었습니다.');
    }

    button.addEventListener('click', handleClick);
    button.removeEventListener('click', handleClick);
  </script>
</body>
</html>
```

<br>

## 버블링, 캡처링

- DOM에 이벤트가 발생하면 전파(Propagation)됨.
  - 전파 방향에 따라 버블링, 캡처링으로 구분
    - 버블링
      - 부모요소 방향으로 올라가며 이벤트가 전파
    - 캡처링
      - 자식요소 방향으로 내려가며 이벤트가 전파
- 표준 DOM의 이벤트는 캡처링, 타깃, 버블링의 흐름순서

<br>

## 이벤트 위임

- 이벤트가 발생한 요소가 아닌 부모 요소에 이벤트 핸들러를 등록하고 이벤트가 발생한 요소를 식별하여 동작을 수행하는 방식.
- 이벤트 버블링을 이용하여 이벤트를 제어하는 패턴(버블링이 발생하는 경우에만 가능)
- 동적으로 추가되는 요소나 많은 자식 요소들의 이벤트를 효과적으로 다룰 수 있음.
- 이벤트가 발생한 target을 기준으로 정의하는 것이 아니기 때문에 이벤트 동작을 파악할때 가독성이 떨어짐.
