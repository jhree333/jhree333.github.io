---
title: "Ajax에 대해서"
date: "2023-07-04"
description: "Ajax에 대해서 알아보자"
image: "network.png"
categories: ["network"]
---

- Ajax
  - Asynchronous JavaScript and XML
  - 클라이언트 측에서 서버 측으로 비동기 HTTP 요청을 만들어 대화형 및 동적 웹 애플리케이션을 만들 수 있게 해주는 일련의 웹 개발 기술
  - 전체 웹 페이지를 다시 로드하지 않고도 HTTP 요청을 보내고 응답을 받을 수 있는 내장 JavaScript API인 XMLHttpRequest 객체에 의존
  - 최신 구현에서는 종종 데이터 교환을 위해 XML 대신 JSON을 사용
  - XMLHttpRequest
    - Ajax 기능의 핵심
    - HTTP 요청(GET, POST 등)을 보내고 서버 응답을 처리하는 메소드와 속성을 제공
  - Promise
    - Ajax에서 보다 체계적이고 읽기 쉬운 방식으로 비동기 작업을 처리하는 데 사용되는 JavaScript 기능
    - 비동기 작업의 최종 완료 또는 실패를 나타내며 결과를 처리하기 위해 콜백을 연결할 수 있음
    - Ajax 요청 및 응답의 흐름을 관리하는 데 도움이 되므로 코드를 더 쉽게 이해하고 유지 관리할 수 있음
  - async, await
    - Promise 작업을 단순화하는 최신 JavaScript 추가 기능
    - 동기 코드처럼 보이고 작동하는 비동기 코드를 작성할 수 있음
    - Promise가 해결될 때까지 함수 실행을 일시 중지하여 코드 실행을 더 쉽게 따라갈 수 있음
  - fetch()
    - JavaScript에서 HTTP 요청을 만들기 위한 기존 XMLHttpRequest에 대한 현대적인 대안
    - 서버에서 리소스를 가져오는 간단하고 효율적인 방법을 제공
    - response 객체로 확인되는 Promise를 반환하므로 Promise 및 async/await 구문을 사용하여 서버의 응답을 처리할 수 있음
