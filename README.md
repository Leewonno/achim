# 나만의 시작페이지, 아침(Achim)

## 📋 프로젝트 개요

사용자가 자주 방문하는 웹사이트를 개인화된 바로가기로 관리할 수 있는 웹 사이트입니다. 로그인한 사용자별로 사이트 바로가기를 추가하고 관리할 수 있습니다.

<br />

## ✨ 주요 기능

### 🔐 사용자 인증
- 이메일/비밀번호 기반 회원가입 및 로그인
- Firebase Authentication을 통한 안전한 인증 처리
- 로그인 상태 유지 (Redux Persist)

### 🎯 사이트 바로가기 관리
- 사이트 바로가기 추가/삭제
- 사용자별 독립적인 사이트 목록 관리

### 📢 공지사항
- 서비스 공지사항 확인

### 📝 개발노트
- 프로젝트 개발 이력 및 변경사항 기록

<br />

## 🛠 기술 스택

### Frontend
- **React** 18.2.0 - 부드러운 UI 동작
- **TypeScript** 5.2.2 - 타입 안정성
- **Vite** 5.0.8 - 빌드 도구 및 개발 서버
- **Redux Toolkit** 2.0.1 - 전역 상태 관리
- **Redux Persist** 6.0.0 - 상태 영속성 (로컬 스토리지)
- **TanStack Query (React Query)** 5.90.11 - 서버 상태 관리 및 캐싱

### Backend & Database
- **Firebase Authentication** - 사용자 인증
- **Cloud Firestore** - 데이터베이스
- **Firebase Hosting** - 웹사이트 호스팅

<br />

## 🚀 시작하기

### 설치 및 실행

1. **저장소 클론**
```bash
git clone <repository-url>
cd achim
```

2. **의존성 설치**
```bash
npm install
```

4. **개발 서버 실행**
```bash
npm run dev
```
개발 서버는 `http://localhost:3000`에서 실행됩니다.
