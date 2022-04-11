# 퍼플독 과제전형 #2 - 이단비

## 사용된 기술

- React
- Redux, Redux-Thunk
- css module

## 실행 방법

1. `npm install` : 프로젝트 종속성 설치
2. `npm run start` : 개발모드에서 앱 실행

## 구현사항 소개

- 카테고리 리스트 페이지 (`/`)

  - React Router를 이용해 각 페이지간 이동할 수 있도록 구현했습니다.

    - [[#2] 라우터 적용](https://github.com/DanBi-Lee/purpledog_test2/commit/8225cf5868d4cfde278c74d60db57175c493f182)

  - 카테고리 리스트 생성

    - [[#4] 카테고리 리스트 데이터 연결](https://github.com/DanBi-Lee/purpledog_test2/commit/799ce702a5dae2e75b117360a9cfbef91ccfd0d4)

      > - 카테고리 리스트 배열을 불러와 내림차순으로 정렬한 뒤 렌더링 되도록 만들었습니다.

- 글 목록 페이지 (`/category/:categoryId`)

  - `useParam`을 사용해 카테고리 이름을 사용하여 글 목록 API를 요청할 수 있도록 구현했습니다.

  - 응답으로 받은 글 목록 배열을 페이지로 나누어서 렌더링했습니다.

    - [[#6] 글 목록 나눠서 렌더링하도록 만들기](https://github.com/DanBi-Lee/purpledog_test2/commit/4be7bd14199225a4a7b907b9fc32bb88be701871)

      > - 글 목록 배열이 너무 길어서 한꺼번에 렌더링할 경우 UX에 문제가 있을 것이라고 판단하여, [react-paginate](https://www.npmjs.com/package/react-paginate)를 활용하여 구현했습니다.

    - [react-paginate를 사용할 때 필요한 값을 생성해주는 커스텀 훅 usePaginationData 생성 #6](https://github.com/DanBi-Lee/purpledog_test2/commit/5aef9134b4a1b9006adaad0fbde7b3f6daeef0c4)

      > - 다른 컴포넌트에서도 react-paginate를 적용할 때 코드를 재활용할 수 있도록 커스텀 훅(`usePaginationData`)으로 만들었습니다.

  - 포스트 목록의 각 포스트 정보 불러오기

    - 응답 받은 글 목록 배열에는 해당 글의 id만 존재하기 때문에, 다시 해당 id로 글 목록에 표시할 데이터(글 제목, 작성자, 작성일 등)을 얻기 위해 글마다 각각 API요청을 해야했습니다. 한꺼번에 호출하는 횟수를 줄이기 위해 InteractionObserver API를 활용해 lazy loading을 구현했습니다.
      - [[#3] 포스트 리스트 데이터 연결](https://github.com/DanBi-Lee/purpledog_test2/commit/fd1fee67fa2d6a5919475da85d9844351c1487a0)

- 글 상세 페이지`(/post/:postId`)

  - `useParam`을 사용해 카테고리 이름을 사용하여 글 목록 API를 요청할 수 있도록 구현했습니다.

    - [[#5] 포스트 상세 페이지 데이터 연결](https://github.com/DanBi-Lee/purpledog_test2/commit/e9ba8cc7eb602f55b0b75c7476b72fd1e6d2d589)

  - 글 상세 페이지 안의 댓글(1depth)에도 페이지네이션을 적용했습니다.

    - [[#8] 포스트 상세 페이지 - 코멘트에 페이지네이션 적용](https://github.com/DanBi-Lee/purpledog_test2/commit/6d68b7b9e660e2da2003571f730173381a2baa93)
    - [[#9] 포스트 상세 페이지 댓글 불러오기](https://github.com/DanBi-Lee/purpledog_test2/commit/ec4a91804e356ac5906d262e51e645678f563e1a)
    - [대댓글 갯수 표시](https://github.com/DanBi-Lee/purpledog_test2/commit/2920e38ee85113c0f9d4cb532a80a1c92f82ee6e)

  - 댓글은 대댓글(2depth)까지 보이도록 만들었습니다.

    - [[#10] 포스트 상세페이지 대댓글 불러오기](https://github.com/DanBi-Lee/purpledog_test2/commit/8774335d4195ecaf86299f5268347a7471eba20f)

      > - 대댓글의 경우에도 lazy loading을 적용해, 화면에 보일때만 API요청을 하도록 만들었습니다.
      > - 아쉬운 점 : 대댓글 안에도 다시 대댓글이 존재했는데, 2depth까지밖에 구현하지 못했습니다.