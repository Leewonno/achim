import main from "../css/main.module.css"
import naver from "../img/mobile_logo/naver_edit_logo.png"
import google from "../img/mobile_logo/google_edit_logo.png"
import youtube from "../img/mobile_logo/youtube_edit_logo.png"
import daum from "../img/mobile_logo/daum_edit_logo.png"
import bing from "../img/mobile_logo/bing_edit_logo.png"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faPlus
} from "@fortawesome/free-solid-svg-icons";

export default function Main(){

    const [time, setTime] = useState<string>("2023년 00월 00일 00시 00분");

    const currentTimer = () => {
        const date = new Date();
        const year = String(date.getFullYear());
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        // const seconds = String(date.getSeconds()).padStart(2, "0");
        setTime(`${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`)
    }

    useEffect(()=>{
        setInterval(currentTimer, 1000);
    }, [time])

    return(
        <>
            <section className={main.section}>
                <div className={main.firstSection}>
                    <div className={main.dateBox}>
                        <div className={main.date}>
                            {time}
                        </div>
                    </div>
                    <div className={main.importantContainer}>
                        <div className={main.importantSiteBox}>
                            <a className={main.siteLogoBox} href="https://www.naver.com" target="_blank">
                                <img className={main.siteLogo} src={naver} alt="네이버로고" />
                            </a>
                            <a className={main.siteLogoBox} href="https://www.google.com" target="_blank">
                                <img className={main.siteLogo} src={google} alt="구글로그" />
                            </a>
                            <a className={main.siteLogoBox} href="https://www.youtube.com" target="_blank">
                                <img className={main.siteLogo} src={youtube} alt="유튜브로그" />
                            </a>
                            <a className={main.siteLogoBox} href="https://www.daum.net" target="_blank">
                                <img className={main.siteLogo} src={daum} alt="다음로그" />
                            </a>
                            <a className={main.siteLogoBox} href="https://www.bing.com" target="_blank">
                                <img className={main.siteLogo} src={bing} alt="빙로그" />
                            </a>
                        </div>
                    </div>
                    <div className={main.scrollDownBox}>
                        <a href="#second">
                            <FontAwesomeIcon icon={faChevronDown} className={main.scrollDown} />
                        </a>
                    </div>
                </div>
            </section>
            <section className={main.section} id="second">
                <div className={main.secondSection}>
                    <div className={main.addSiteBox}>
                        <div className={main.addSiteItem}>
                            <a href="https://www.naver.com" target="_blank" className={main.addSiteAnchor}>
                                <div className={main.addSiteFirst}>
                                    카
                                </div>
                                <div className={main.addSiteName}>
                                    카카오페이지
                                </div>
                            </a>
                        </div>
                        <div className={main.addSiteButton}>
                            <FontAwesomeIcon icon={faPlus} className={main.addSiteButtonIcon} />
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    )
}