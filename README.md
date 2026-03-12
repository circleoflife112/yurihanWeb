# yurihanWeb

my web portfolio

## URL Structure

> `PublicLayout` (GNBLogin, 인증 불필요) / `PrivateLayout` (GNB, 인증 필요) 두 가지 레이아웃으로 분리

```
/
├── [PublicLayout]
│   ├── /login                       # 로그인
│   └── /signup                      # 회원가입
│
├── [PrivateLayout]                  # 미인증 시 → /login 리다이렉트
│   ├── /                            # 홈 (스터디 목록)
│   │   ├── /?tab=online             # 온라인 스터디
│   │   ├── /?tab=local              # 내 지역 스터디
│   │   └── /?keyword=검색어         # 키워드 검색
│   ├── /study/create                # 스터디 만들기
│   ├── /study/:studyId              # 스터디 상세
│   ├── /study/:studyId/edit         # 스터디 수정
│   └── /profile/:userId             # 프로필
│
└── *                                # 404
```

> **주의** `/study/create`는 `/study/:studyId`보다 먼저 선언되어야 파라미터 오매칭을 방지합니다.

---

> **Base URL** `https://api.wenivops.co.kr/services/studyin`

### app:accounts

| Endpoint           | Method | 설명                 | 로그인 | 작성자 |
| ------------------ | ------ | -------------------- | :----: | :----: |
| `signup/`          | POST   | 회원가입             |        |        |
| `login/`           | POST   | 로그인               |        |        |
| `logout/`          | POST   | 로그아웃             |   ✅   |        |
| `token/refresh/`   | POST   | 토큰 재발급          |        |        |
| `<int:pk>/`        | GET    | 프로필 조회          |   ✅   |        |
| `<int:pk>/`        | PATCH  | 프로필 수정          |   ✅   |   ✅   |
| `<int:pk>/`        | DELETE | 회원 탈퇴            |   ✅   |   ✅   |
| `<int:pk>/status/` | PATCH  | 준회원 → 정회원 승급 |   ✅   |        |

### app:study

| Endpoint                 | Method | 설명           | 로그인 | 작성자 |
| ------------------------ | ------ | -------------- | :----: | :----: |
| `studies/`               | GET    | 스터디 목록    |   ✅   |        |
| `studies/`               | POST   | 스터디 생성    |   ✅   |        |
| `studies/<int:pk>/`      | GET    | 스터디 상세    |   ✅   |        |
| `studies/<int:pk>/`      | PUT    | 스터디 수정    |   ✅   |   ✅   |
| `studies/<int:pk>/`      | DELETE | 스터디 삭제    |   ✅   |   ✅   |
| `studies/<int:pk>/join/` | POST   | 참가 신청      |   ✅   |        |
| `studies/ai/`            | POST   | AI 스터디 생성 |   ✅   |        |

### app:comments

| Endpoint                     | Method | 설명          | 로그인 | 작성자 |
| ---------------------------- | ------ | ------------- | :----: | :----: |
| `studies/<int:pk>/comments/` | GET    | 댓글 목록     |   ✅   |        |
| `studies/<int:pk>/comments/` | POST   | 댓글 작성     |   ✅   |        |
| `comments/<int:pk>/`         | PATCH  | 댓글 수정     |   ✅   |   ✅   |
| `comments/<int:pk>/`         | DELETE | 댓글 삭제     |   ✅   |   ✅   |
| `comments/<int:pk>/reply/`   | POST   | 대댓글 작성   |   ✅   |        |
| `comments/<int:pk>/secret/`  | PATCH  | 비밀댓글 설정 |   ✅   |   ✅   |

### app:search

| Endpoint         | Method | 설명                                    | 로그인 | 작성자 |
| ---------------- | ------ | --------------------------------------- | :----: | :----: |
| `search/`        | GET    | 키워드 검색                             |   ✅   |        |
| `search/filter/` | GET    | 필터 검색 (지역/요일/난이도/온오프라인) |   ✅   |        |

### app:notifications

| Endpoint                       | Method | 설명           | 로그인 | 작성자 |
| ------------------------------ | ------ | -------------- | :----: | :----: |
| `notifications/`               | GET    | 알림 목록 조회 |   ✅   |        |
| `notifications/<int:pk>/read/` | PATCH  | 알림 읽음 처리 |   ✅   |        |
