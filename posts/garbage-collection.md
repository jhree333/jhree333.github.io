---
title: "garbage collection에 대해 알아보자"
date: "2023-06-29"
description: "garbage collection에 대해서 알아보자"
image: browser.png
categories: ["browser"]
---

- 가비지 컬렉션
  - V8엔진 메모리 구조
    - 힙(heap) 메모리 + 스택(stack) 메모리
    - heap 메모리: 객체에 대한 동적인 메모리 할당
    - stack 메모리: 메소드, 함수, 포인터 등 정적인 데이터 관리
  - 힙 메모리에서 가비지 컬렉션 발생
  - 동적으로 할당된 메모리 중 필요없는, 사용하지 않는 메모리 영역을 자동으로 해제하는 기법
  - 가비지 컬렉션 메모리 해제 기준
    - JS 엔진은 도달 가능성(reachability)을 기준
    - 시작점: GC Root
    - 함수 스코프, 지역변수, 매개변수, 전역 변수들이 GC Root에 포함
    - Mark and Sweep 알고리즘 사용
      - 힙 메모리를 방향이 있는 그래프로 표현
      1. GC Root 정보 수집
      2. 마킹: GC Root부터 도달할 수 있는 객체를 활성 상태 표시, 마킹된 객체 또한 재귀적으로 도달할 수 있는 객체를 활성 상태로 표시
      3. 스위핑: 힙 메모리 순회하면서 활성상태 표시되지 않은 메모리 수거
