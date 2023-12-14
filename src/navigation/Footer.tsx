import { Link } from "react-router-dom"
import footer from "../css/footer.module.css"

export default function Footer(){
    return(
        <footer className={footer.footer}>
            <div className={footer.container}>
                <div className={footer.pageBox}>
                    <Link to={'/notice'} className={footer.pageAnchor}>
                        <div className={footer.page}>공지사항</div>
                    </Link>               
                </div>
                <div className={footer.achimBox}>
                    <div className={footer.achimTitle}>Achim 2023</div>
                </div>
                
            </div>
        </footer>
    )
}