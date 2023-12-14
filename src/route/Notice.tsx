import notice from "../css/notice.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleExclamation
} from "@fortawesome/free-solid-svg-icons";

export default function Notice(){
    return(
        <section className={notice.section}>
            <div className={notice.container}>
                <div className={notice.emptyBox}>
                    <FontAwesomeIcon icon={faCircleExclamation} className={notice.warningIcon} /> 게시된 공지사항이 없습니다.
                </div>
            </div>
        </section>
    )
}