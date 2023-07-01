---
title: "렌더링 블록에 대해서"
date: "2023-07-01"
description: "렌더링 블록에 대해서 알아보자"
image: browser.png
categories: ["browser"]
---

- 렌더링 블록(Rendering Block)
  - 브라우저의 HTML 렌더링 막음
    - 원인: JS, CSS 코드가 있는 경우(블록 리소스)
    - 블록 리소스는 브라우저 렌더링 과정(Critical Rendering Path)을 지연
    - 따라서 적절한 방법을 사용해 로딩 속도 개선시켜야 함
  - CSS 렌더링 블록
    - CSS 모두 파싱 후 CSSOM 트리 생성
    - @import
      - 다른 stylesheet의 스타일 규칙을 한 파일에서 깔끔하게 유지
      - 병렬로 다운로드 할 수 없음 → CSS 파싱 시간 증가
      - 그러므로 여러 CSS파일 추가시 link 태그로 추가하는 것이 좋음
      - 또는 번들러 사용 → CSS 파일을 통합 또는 분할하여 필요 상황시 로딩 되도록 최적화
    - inline CSS
      - HTML 문서에 CSS 삽입
      - 다운로드 리소스 요청 줄어듬
      - 그럼에도 CSS 용량이 큰 경우, 렌더링 지연
      - 캐시가 안됨
    - critical CSS
      - 뷰포트 영역(Above The Fold)에 렌더링에 중요한 CSS들만 추출하여 inline CSS 삽입
      - 모든 CSS를 초기에 로딩 하지 않음 → 렌더링 시간 단축
      - critical CSS 이외의 css 파일은 비동기로 로딩 → 렌더링 차단하지 않고 리소스 파싱
      - HTTP2의 서버 푸시 사용시에는 성능 저하의 원인
        - HTTP2의 서버 푸시: 클라이언트에서 사용하는 리소스들을 미리 알고 빠르게 전송
        - critical CSS 존재시 파싱 시간에 의해 렌더링 지연
  - JS 렌더링 블록
    - 브라우저는 HTML 요소 파싱 도중 script 태그 만나면 완료될때 까지 DOM 트리 생성 중단 → 그러므로 body 닫힌태그 앞에 script 배치
    - HTML 문서 자체가 크고 애니메이션이나 동적인 변경 코드가 있을시 페이지 로딩 시간이 길어짐 → 렌더링 지연
    - defer
      - 브라우저가 페이지 렌더링 차단하지 않도록 백그라운드에서 스크립트 다운로드
      - 다운로드 완료된 defer 스크립트는 DOMContentLoaded 이벤트 발생 전에 실행
      - DOMContentLoaded 이벤트는 브라우저가 HTML을 모두 파싱하여 DOM 트리 구성 완료 시 발생(stylesheet나 이미지 로딩 기다리지 않음)
    - async
      - 비동기로 JS코드 실행
      - HTML 파싱을 막지 않고 백그라운드에서 다운 → 완료 시 즉시 실행
      - async 스크립트 실행이 끝날때 까지 HTML 파싱을 막음
      - 다운로드 완료 시점에 실행 순서가 결정
      - 의존성 있는 스크립트 존재, 특정 이벤트(ex.DOMContentLoaded)발생 시점과 연관 있을시 사용 X
      - 광고, 데이터 수집 및 분석 같은 독립적인 역할을 하는 외부 스크립트 로딩 시 좋음.
    - defer와 async는 구형 브라우저(IE)에서 지원 X
