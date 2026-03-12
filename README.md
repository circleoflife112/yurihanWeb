# yurihanWeb

my web portfolio

```mermaid
graph TB
    subgraph Client["🖥️ Client (Browser)"]
        React["React 19\n(SPA)"]
        Router["React Router\n(Client Routing)"]
        State["State Management\n(useState / Context)"]
        Tailwind["Tailwind CSS 4\n(Styling)"]
    end

    subgraph Build["⚙️ Build & Dev"]
        Vite["Vite 7\n(Build Tool / HMR)"]
        Lint["ESLint + Prettier\n(Code Quality)"]
    end

    subgraph Deploy["☁️ Deployment"]
        Vercel["Vercel\n(Hosting / CDN)"]
    end

    subgraph Auth["🔐 Authentication"]
        JWT["JWT Auth"]
        AccessToken["Access Token\n(1h)"]
        RefreshToken["Refresh Token\n(7d)"]
        Rotation["Token Rotation\n(auto refresh)"]
        Guard["Protected Routes\n(auth guard)"]
    end

    subgraph Backend["🗄️ Backend (API Server)"]
        API["REST API"]
        AuthAPI["Auth Endpoints\n(/login, /refresh)"]
        StudyAPI["Study Endpoints\n(/studies, /match)"]
    end

    React --> Router
    React --> State
    React --> Tailwind
    Vite -->|build| Vercel
    Vercel -->|serve| React
    React -->|HTTP Request| API
    API --> AuthAPI
    API --> StudyAPI
    AuthAPI -->|JWT issued| JWT
    JWT --> AccessToken
    JWT --> RefreshToken
    AccessToken -.->|expires → auto refresh| Rotation
    Rotation -.->|use| RefreshToken
    Guard -.->|auth guard| Router
```
