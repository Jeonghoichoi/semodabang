# semodabang

세모다방 프로젝트요!!!!

# 패키지 구조 - 경량화한 FSD : app, pages, shared 만 사용
app - nextjs 14 app router
pages - 라우터의 화면 > n개의 widgets, [features], [entities], shared 으로 구성될 수 있음
widgets - 페이지의 구성요소 > n개의 [features], [entities], shared 으로 구성될 수 있음 
features - 사용자 상호작용, 비즈니스 로직 > n개의 entities, shared 으로 구성될 수 있음
entities - 비즈니스 데이터 엔티티 > api조회 > zustand > 엔티티 수정삭제
shared - 상위 레이어에서 사용할 수 있는 공통 기능 레이어

# FSD 구조 대략적인 설명
1. Layers
A) app
앱의 전체 설정, styles, providers 등을 관리합니다.
ex: Global Styles, Routing, Analytics initialization 등
C) pages
웹 사이트의 경우 전체 페이지, 모바일 앱의 경우 화면 또는 액티비티입니다.
widgets과 비슷하지만 규모가 더 큽니다.
ex: 로그인 페이지, 뉴스 피드, 사용자의 공개 프로필 등
D) widgets
하위 레이어들을 조합하여 만든 구성요소입니다.
복합적인 UI 블록, 여러 features나 entities를 조합
ex: 헤더, 포스트 카드 등
E) features
사용자 상호작용과 비즈니스 로직을 포함한 레이어입니다.
ex: 댓글 좋아요 기능, 도서 검색 기능 등
F) entities
특정 비즈니스 엔티티를 관리하는 레이어입니다.
ex: 도서, 사용자 등
G) shared
공유 유틸리티와 헬퍼
재사용 가능한 기능들로 구성된 레이어입니다.
ex: UIKit(버튼, 모달), 유틸리티 함수 등

2. 슬라이스
각 계층 내의 모듈을 "슬라이스"라고 부릅니다. 슬라이스는 특정 기능이나 영역을 캡슐화합니다.

3. 세그먼트
슬라이스 내부는 다시 "세그먼트"로 나뉩니다:
ui/: 프레젠테이션 로직
model/: 비즈니스 로직
lib/: 유틸리티 함수
api/: 외부 통신
config/: 설정

#FSD 공식사이트
https://feature-sliced.design/docs/get-started/overview
