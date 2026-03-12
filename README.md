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

````mermaid
graph TB
    subgraph GitHub["☁️ GitHub (3rd-study-in/stydyIn)"]
        REPO[Source Code Repository]
        PR[Pull Requests / Code Review]
        GA[GitHub Actions<br/>자동 빌드 · 배포]
    end

    subgraph Vercel["🚀 Vercel (studyin-steel.vercel.app)"]
        VCEL[Static Hosting<br/>SPA Build Output]
        VCFG[vercel.json<br/>SPA Fallback 라우팅]
    end

    subgraph Backend["🖥️ Backend (api.wenivops.co.kr)"]
        AUTH_API["/accounts — 인증<br/>로그인 · 회원가입 · 토큰"]
        STUDY_API["/studies — 스터디<br/>CRUD · 참가 · 좋아요"]
        PROFILE_API["/profiles — 프로필<br/>조회 · 수정 · 닉네임중복"]
        COMMENT_API["/comments — 댓글<br/>작성 · 삭제"]
        FILE_API["/files — 파일<br/>이미지 업로드"]
        AI_API["/ai — AI<br/>커리큘럼 · 소개글 생성"]
    end

    subgraph Client["💻 Client (React 19 + Vite)"]
        subgraph Stores["Zustand Stores"]
            AS[authStore<br/>JWT · userId]
            LS[likeStore<br/>좋아요 상태]
            NS[notificationStore<br/>알림]
        end

        subgraph Pages["Pages"]
            P1[HomePage]
            P2[SearchPage]
            P3[StudyDetailPage]
            P4[StudyFormPage]
            P5[ProfilePage]
            P6[LoginPage · SignupPage]
        end

        subgraph Features["Features (hooks + api)"]
            F1[auth/]
            F2[study/]
            F3[profile/]
            F4[comment/]
            F5[ai/]
            F6[location/]
        end

        subgraph UI["UI Layer"]
            ATOMS[Atoms<br/>Button · Card · Modal · Tag · Input]
            SHARED[Shared Components<br/>GNB · Footer · Banner · Comment]
        end

        AXI[axiosInstance<br/>Bearer Token 자동 주입]
    end

    REPO -->|push / merge| GA
    GA -->|deploy| Vercel
    PR -->|merge to main| GA

    Pages --> Features
    Features --> AXI
    Stores --> Pages
    UI --> Pages

    AXI --> AUTH_API
    AXI --> STUDY_API
    AXI --> PROFILE_API
    AXI --> COMMENT_API
    AXI --> FILE_API
    AXI --> AI_API
    ```
````
