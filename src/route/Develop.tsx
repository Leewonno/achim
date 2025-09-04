import develop from "../css/develop.module.css"

export default function Develop() {
  return (
    <section className={develop.section}>
      <div className={develop.container}>
        <div className={develop.developBox}>
          <div className={develop.title}>2025.09.04 개발노트</div>
          <div className={develop.content}>
            <div className={develop.midTitle}>변경사항</div>
            <li className={develop.normalContent}>메인 배경 이미지 변경</li>
            <li className={develop.normalContent}>바로가기 테두리 제거</li>
          </div>
        </div>
        <div className={develop.developBox}>
          <div className={develop.title}>2025.01.21 개발노트</div>
          <div className={develop.content}>
            <div className={develop.midTitle}>변경사항</div>
            <li className={develop.normalContent}>페이지 이동 시 스크롤 맨 위로</li>
            <li className={develop.normalContent}>텍스트 overflow ellipsis로 수정</li>
          </div>
        </div>
        <div className={develop.developBox}>
          <div className={develop.title}>2025.01.06 개발노트</div>
          <div className={develop.content}>
            <div className={develop.midTitle}>변경사항</div>
            <li className={develop.normalContent}>메인페이지 이미지 변경</li>
          </div>
        </div>
        <div className={develop.developBox}>
          <div className={develop.title}>2024.12.20 개발노트</div>
          <div className={develop.content}>
            <div className={develop.midTitle}>변경사항</div>
            <li className={develop.normalContent}>도메인 / achim.store → achim.life</li>
            <li className={develop.normalContent}>사이트 등록 삭제 버튼 위치 개선</li>
            <li className={develop.normalContent}>사이트 등록 넓이 개선</li>
            <li className={develop.normalContent}>사이트 등록 사이트 이름 길이 개선</li>
            <li className={develop.normalContent}>개발노트 height 문제 개선</li>
          </div>
        </div>
        <div className={develop.developBox}>
          <div className={develop.title}>2023.12.14 개발노트</div>
          <div className={develop.content}>
            <div className={develop.midTitle}>변경사항</div>
            <li className={develop.normalContent}>기술 / (HTML + CSS + JavaScript) → (React + TypeScript)</li>
            <li className={develop.normalContent}>호스팅 / 카페24 → Firebase Hosting</li>
            <li className={develop.normalContent}>DB / None → Firebase Cloud Firestore</li>
            <li className={develop.normalContent}>도메인 / achim.shop → achim.store</li>
            <li className={develop.normalContent}>로그인 / 회원가입 추가</li>
            <li className={develop.normalContent}>사이트 등록 추가</li>
            <li className={develop.normalContent}>사이트 바로가기 위치 변경</li>

            <div className={develop.midTitle}>추가</div>
            <li className={develop.normalContent}>로그인 / 회원가입</li>
            <li className={develop.normalContent}>사이트 등록 영역</li>
            <li className={develop.normalContent}>배경이미지</li>

            <div className={develop.midTitle}>제거</div>
            <li className={develop.normalContent}>사이트 바로가기</li>
            <li className={develop.normalContent}>하늘 이미지</li>
            <li className={develop.normalContent}>검색바(유튜브/구글/네이버/빙/다음)</li>
          </div>
        </div>
      </div>
    </section>
  )
}