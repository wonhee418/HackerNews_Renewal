# Hacker News - Renewal

</br>

# ⭐️ 프로젝트 소개

해커뉴스(Hacker News)의 오픈API를 활용하여 리뉴얼한 개인프로젝트입니다.

사용한 기술은 React, Redux, React-Router, Scss, Ajax, LocalStorage 등을 이용하였습니다.
</br>

[프로젝트 체험하기](https://wonhee418.github.io/HackerNews_Renewal)
</br>

# 💻 프로젝트 구현내용

<p>자바스크립트 라이브러리인 리액트를 중심으로 개발을 진행했습니다.</p>
<p>전역관리를 위해 Redux를 이용하여 Store 생성후 API를 관리하였습니다.</p>
<p>LocalStorage를 이용하여 다크모드, 라이트모드 설정하였습니다.</p>
<p>원활한 CSS 유지보수를 위해 SCSS를 적용하였습니다.</p>
<p>React-Router 이용하여 경로별 페이지를 분리하는 작업을하였습니다.</p>

</br>

# 📄 프로젝트 페이지 구성

1. 총 6개 페이지(메인, 상세, New, Ask, Show, Job) 구성

   - 메인페이지 = New, Ask, Show, Job 리스트를 혼합한 페이지
   - 각 페이지별 리스트에는 작성자, 게시글제목, 작성 시간, 좋아요, 댓글수를 표시
   - 리스트별 댓글 아이콘 클릭시 디테일 페이지 이동
   - 게시글별 타이틀 클릭시 디테일페이지 또는 연결된 URL로 연결
   - 유저 프로필클릭시 해당 유저 프로필 모달창 출력

2. 게시글 디테일 페이지

   - 게시글 상세 내용 및 연결된 URL 여부에 따라 출력 및 클릭시 연결된 URL로 이동
   - 해당 게시글에 대한 댓글 및 대댓글 출력
   - 유저 프로필 클릭시 해당 유저 프로필 모달창 출력

# 💡 개선 사항 및 추가 구현 예정 기능

<p>각 페이지별 리스트를 무한스크롤로 변경예정</p>
<p>특정상황에서 무한댓글이 정상출력되지 않는 부분수정예정</p>

<!-- # 🖼 프로젝트 이미지 -->

<!--
<span>**로그인 화면**</span>
![img03](https://user-images.githubusercontent.com/66175249/177054562-35dab496-c664-4bc9-b65e-2e51d99ecfc3.png)

</br>

<span>**라이트 모드**</span>
![img01](https://user-images.githubusercontent.com/66175249/177054555-c79d1927-cf86-4b81-a565-a2e7321b3edd.png)

</br>

<span>**다크 모드**</span>
![img02](https://user-images.githubusercontent.com/66175249/177054561-0056fff7-a113-456e-9a05-107d50df0e27.png) -->
