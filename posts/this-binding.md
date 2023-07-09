---
title: "this에 대해서"
date: "2023-07-09"
description: "this에 대해서 알아보자"
image: "js.png"
categories: ["javascript"]
---

JavaScript에서 **this**는 현재 실행 중인 함수를 호출한 객체를 참조하는 특수한 키워드입니다. **this**를 사용하여 객체의 속성에 접근하거나 메서드를 호출할 수 있습니다. **this**의 바인딩은 함수가 호출되는 방식에 따라 동적으로 결정됩니다.

**this** 바인딩은 다음과 같은 규칙에 따라 동작합니다:

1. 전역 컨텍스트(Global Context):

   - 전역 컨텍스트에서 **this**는 전역 객체를 참조합니다.
   - 브라우저 환경에서는 전역 객체가 **window** 객체이며, Node.js 환경에서는 **global** 객체입니다.

   ```jsx
   console.log(this); // 전역 컨텍스트에서의 this (브라우저에서는 window, Node.js에서는 global)
   // (브라우저 출력: window 객체, Node.js 출력: global 객체)
   ```

2. 함수 호출:

   - 일반 함수 호출에서 **this**는 해당 함수를 호출한 객체를 참조하지 않고, 전역 객체를 참조합니다.
   - **strict mode**에서는 일반 함수 호출 시 **this**가 **undefined**가 됩니다.

   ```jsx
   function greet() {
     console.log(this); // 일반 함수 호출에서의 this (전역 객체를 참조)
   }

   greet();
   // (브라우저 출력: window 객체, Node.js 출력: global 객체)
   ```

3. 메서드 호출:

   - 객체의 메서드 내부에서 **this**는 해당 메서드를 소유한 객체를 참조합니다.
   - 메서드 내부에서 **this**를 사용하면 메서드가 속한 객체에 접근할 수 있습니다.

   ```jsx
   const obj = {
     name: "Alice",
     greet: function () {
       console.log(this); // 메서드 호출에서의 this (해당 메서드를 호출한 객체를 참조)
     },
   };

   obj.greet();
   // 출력: { name: 'Alice', greet: [Function: greet] }
   ```

4. 생성자 함수 호출:

   - 생성자 함수로 객체를 생성할 때 **new** 키워드와 함께 호출되는 함수에서 **this**는 새로 생성된 객체를 참조합니다.
   - 생성자 함수 내에서 **this**를 사용하면 새로 생성된 객체에 접근할 수 있습니다.

   ```jsx
   function Person(name) {
     this.name = name;
     console.log(this); // 생성자 함수 호출에서의 this (새로 생성된 객체를 참조)
   }

   const person1 = new Person("Bob");
   // 출력: Person { name: 'Bob' }
   ```

5. 화살표 함수:

   - 화살표 함수에서 **this**는 함수를 정의한 시점에서 바인딩됩니다.
   - 화살표 함수 내에서 **this**를 사용하면 함수를 정의한 컨텍스트(주로 외부 함수)에 바인딩됩니다.

   ```jsx
   const obj = {
     name: "Alice",
     greet: function () {
       const arrowFunc = () => {
         console.log(this); // 화살표 함수에서의 this (외부 함수인 greet의 this를 참조)
       };
       arrowFunc();
     },
   };

   obj.greet();
   // 출력: { name: 'Alice', greet: [Function: greet] }
   ```
