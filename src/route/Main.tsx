import main from "../css/main.module.css"
import naver from "../img/mobile_logo/naver_edit_logo.png"
import google from "../img/mobile_logo/google_edit_logo.png"
import youtube from "../img/mobile_logo/youtube_edit_logo.png"
import daum from "../img/mobile_logo/daum_edit_logo.png"
import bing from "../img/mobile_logo/bing_edit_logo.png"
import { KeyboardEvent, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPlus,
  faX
} from "@fortawesome/free-solid-svg-icons";
import { collection, query, where, getDocs, addDoc, orderBy, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase"
import { useAppSelector } from "../hook"
import Modal from "react-modal";

export default function Main() {

  const [time, setTime] = useState<string>("2023년 00월 00일 00시 00분");
  const [site, setSite] = useState<any[]>([]);
  const [siteName, setSiteName] = useState<string>("");
  const [siteUrl, setSiteUrl] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [siteColor, setSiteColor] = useState<string>("#ffffffe0");

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 3,
    },
    content: {
      margin: "auto",
      width: "300px",
      height: "360px",
      padding: "25px",
      overflow: "hidden",
    },
  }

  const user = useAppSelector((state) => state.signin);


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

  useEffect(() => {
    setInterval(currentTimer, 1000);
  }, [time])

  useEffect(() => {
    setSite([]);
    const getSite = async () => {
      if (user.userid === "") {
        console.log("로그인하지않은 이용자");
      } else {
        getSiteData();
      }
    }
    getSite()

  }, [])

  const handleAddSiteKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddSite();
    }
  }

  const handleAddSiteClick = () => {
    handleAddSite();
  }

  const handleAddSite = async () => {
    if (user.userid === "") {
      alert("로그인 후 이용해주세요.");
    } else if (siteName === "") {
      alert("사이트 이름을 입력해주세요.");
    } else if (siteUrl === "" || siteUrl.indexOf('http') === -1) {
      alert("주소를 확인해주세요.\nhttp:// 가 포함되어야 합니다.");
    }
    else {
      const res = await addDoc(collection(db, "site"), {
        name: siteName,
        userid: user.userid,
        url: siteUrl,
        color: siteColor + "e0",
        createDate: Date.now(),
      });

      // Set the "capital" field of the city 'DC'
      await updateDoc(doc(db, "site", res.path.split('/')[1]), {
        id: res.path.split('/')[1]
      });

      setSite([]);

      getSiteData();

      setSiteName("");
      setSiteUrl("");
      setSiteColor("#ffffffe0")
      setIsOpen(false)
    }
  }

  const handleSiteDelete = async (id: string) => {
    await deleteDoc(doc(db, "site", id));
    setSite([]);
    getSiteData();
  }

  const getSiteData = async () => {
    const q = query(collection(db, "site"), where("userid", "==", user.userid), orderBy("createDate", "asc"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const newArray = {
        name: doc.data().name,
        url: doc.data().url,
        color: doc.data().color,
        id: doc.data().id
      }
      setSite((prev) => [...prev, newArray])
    });
  }

  return (
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
          <div className={main.addSiteContainer}>
            <div className={main.addSiteBox}>
              {site.map((value, index) => {
                return (
                  <div className={main.addSiteItem} key={index}>
                    <FontAwesomeIcon icon={faX} className={main.itemDelete} onClick={() => handleSiteDelete(value.id)} />
                    <a href={value.url} target="_blank" className={main.addSiteAnchor}>
                      <div className={main.addSiteFirst} style={{ backgroundColor: value.color }}>
                        {value.name.charAt(0)}
                      </div>
                      <div className={main.addSiteName}>
                        {value.name}
                        {/* {value.name.length > 6 ? value.name.substr(0, 5) + "..." : value.name} */}
                      </div>
                    </a>
                  </div>
                )
              })}

              <div className={main.addSiteButton} onClick={() => setIsOpen(true)}>
                <FontAwesomeIcon icon={faPlus} className={main.addSiteButtonIcon} />
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={isOpen} ariaHideApp={false} style={modalStyle} onRequestClose={() => setIsOpen(false)}>
          <div className={main.modalBox}>
            <div className={main.addTitle}>사이트 추가</div>
            <input className={main.modalInput} value={siteName} onChange={(e) => setSiteName(e.target.value)} placeholder="이름   ex) 네이버" />
            <input className={main.modalInput} value={siteUrl} onKeyDown={(e) => handleAddSiteKeyDown(e)} onChange={(e) => setSiteUrl(e.target.value)} placeholder="URL   ex) http://www.naver.com" />
            <div className={main.modalColorBox}>
              <div className={main.modalColorInfor} style={{ backgroundColor: siteColor }}>{siteColor}</div>
              <input type="color" onChange={(e) => setSiteColor(e.target.value)} />
            </div>
            <div className={main.modalSaveButton} onClick={handleAddSiteClick}>저장</div>
          </div>
        </Modal>
      </section>
    </>

  )
}