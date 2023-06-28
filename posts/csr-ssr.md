---
title: "CSR과 SSR 방식"
date: "2023-06-28"
description: "CSR과 SSR에 대해서 알아보자"
image: react.png
categories: ["react"]
---

### 목차

### 렌더링 방식

#### CSR(Client Side Rendering)

- 클라이언트 영역에서 화면을 제어하는 방식
- SPA(Single Page Application)
  - 장점
    - 한개의 페이지로 이루어진 어플리케이션(하나의 페이지를 동적으로 변경해 콘텐츠 렌더링)
    - 페이지 리로딩이 없어 자연스러운 화면 전환과 좋은 사용자 경험 제공
  - 단점
    - 앱 규모가 커지면(js,css 번들 용량 증가) 초기 로딩 성능 저하
    - SEO 처리 어려움(검색엔진 봇은 js를 실행하지 않고 파싱된 HTML만 크롤링하므로)
  - 단점 보안
    - 트리 셰이킹 or 코드 스플링팅 기법 사용(번들 용량 감소)
    - SSR(Server Side Rendering)을 사용해 SEO 최적화

#### SSR(Server Side Rendering)

- 서버에서 사용자에게 보일 페이지를 모두 구성해 사용자에게 보여주는 방식(즉 MPA 방식)
- 장점
  - 초기 로딩 속도 빠름
  - SEO 처리 쉬움
- 동적인 구성요소가 많아 초기 페이지 완벽 구성이 오래 걸릴때 → SSR 사용

#### CSR + SSR

- Next.js
- Nuxt.js
