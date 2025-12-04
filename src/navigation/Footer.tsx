import { Link } from "react-router-dom"
import footer from "../css/footer.module.css"

export default function Footer() {
  return (
    <footer className={footer.footer}>
      <div className={footer.container}>
        <div className={footer.pageBox}>
          <Link to={'/notice'} className={footer.pageAnchor}>
            <div className={footer.page}>공지사항</div>
          </Link>
          <Link to={'/develop'} className={footer.pageAnchor}>
            <div className={footer.page}>개발노트</div>
          </Link>
        </div>
        {/* <div className={footer.achimBox}>
          <div className={footer.achimTitle}>Achim</div>
        </div> */}
        <div className={footer.copyright}>
          ⓒ 2025 Leewonno. All rights reserved.
        </div>
      </div>
    </footer>
  )
}