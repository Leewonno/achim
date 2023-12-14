import develop from "../css/develop.module.css"

export default function Develop(){
    return(
        <section className={develop.section}>
            <div className={develop.container}>
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