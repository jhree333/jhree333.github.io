---
title: "FE 개발 프로세스에 대해서"
date: "2023-06-30"
description: "FE 개발 프로세스에 대해서 알아보자"
image: process.png
categories: ["etc"]
---

개발 프로세스

1. 요구 사항 분석
   - 개발의 방향 설정
     - 기존 기획서와 신규 요구 사항 분석하여 UI에 작업할 항목들을 도출, 우선순위 설정
     - 모듈의 규모에 따라 Microservice로 나눠 작업할지, Monolithic하게 묶어서 작업할지 판단
     - 브라우저의 지원 범위나 검색엔진의 최적화 등과 같은 요구 사항도 고려해 적합한 기술이나 프레임워크를 검토
   - 원할한 협업
     - 디자인의 컨셉이나 레이아웃 구성에 대해 디자이너 협의
     - 워크 플로우를 UI에 어떻게 적용해야 자연스럽고 편리할지 기획자와 애기
     - 전반적인 기술에 대해 백엔드 개발자와 서로 공유
     - 슬랙, 제플린, 피그마 같은 협업 도구를 이용해 의견을 빠르고 쉽게 공유
2. 설계
   1. 개발 도구 및 환경 구성(번들러, 정적 분석기 등)
   2. 데이터의 구조 설계 및 관리
      - redux로 관리할지, mvc 패턴으로 관리할지 결정
   3. 컴포넌트 또는 모듈 간 데이터를 공유하고 변경하는 방법
   4. 컴포넌트(뷰)의 단위를 나누고 계층화하는 작업
      - 백엔드 개발자와 협의해 API 규약과 문서화 방법을 미리 정해 놓는 것이 좋음.
      - 정형화된 API 계층을 미리 만드는 것이 향후 개발 생산성에 효율적
3. 개발
   - 산출된 디자인과 기획서를 기준으로 마크업과 자바스크립트 개발 시작
   - 백엔드 개발자는 미리 약속한 규약을 기반으로 API의 데이터 포맷을 설계하고 프론트엔드 개발자와 공유
   - 프론트엔드 개발자는 백엔드 API의 개발상태에 영향을 받지 않도록 데이터를 모킹 하여 개발을 진행
     - 더미 데이터를 만들거나 Ajax 모킹 라이브러리를 사용하기도 하지만, 별도의 모킹 인터페이스 또는 서버를 통해 개발이 좋음
4. 배포
   - 테스트 환경을 구성해 QA를 진행
     - 개발 테스트 서버와 스테이징 서버에서 진행
     - 프로젝트 규모에 따라 개발테스트 환경에서 QA는 생략할 때도 있음
   - QA 조직이 없다면 반드시 개발자가 QA를 진행해 검증
   - QA에서 발견한 이슈들을 모두 해결하면 최종 상태를 반영해 실제 서비스에 배포.
   - 배포 프로세스
     - 개발 산출물 → 테스트 서버 배포 → QA → QA 이슈 대응 → QA 완료
     - 수동으로 배포하면 이슈가 발생할 확률 증가
     - 자동화 도구 사용
       - Github Actions, Jenkins와 같은 CI/CD 도구들
       - Netlify, AWS, Firebase 등의 호스팅 서비스
       - 조합해 프로젝트에 최적화된 배포 전략을 수립
