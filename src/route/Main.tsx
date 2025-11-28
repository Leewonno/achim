import main from "../css/main.module.css"
import naver from "../img/mobile_logo/naver_edit_logo.png"
import google from "../img/mobile_logo/google_edit_logo.png"
import youtube from "../img/mobile_logo/youtube_edit_logo.png"
import daum from "../img/mobile_logo/daum_edit_logo.png"
import bing from "../img/mobile_logo/bing_edit_logo.png"
import bg from "../img/winter2.jpg"
import { KeyboardEvent, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faX
} from "@fortawesome/free-solid-svg-icons";
import { collection, query, where, getDocs, addDoc, orderBy, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase"
import { useAppSelector } from "../hook"
import Modal from "react-modal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export default function Main() {

  // ================================================================
  // state, context
  // const [time, setTime] = useState<string>("2023년 00월 00일 00시 00분");
  const [siteName, setSiteName] = useState<string>("");
  const [siteUrl, setSiteUrl] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [siteColor, setSiteColor] = useState<string>("#ffffffe0");

  const user = useAppSelector((state) => state.signin);

  // ================================================================
  // site list get
  const getData = async () => {
    const q = query(collection(db, "site"), where("userid", "==", user.userid), orderBy("createDate", "asc"));
    const querySnapshot = await getDocs(q);
    const result: any[] = [];

    querySnapshot.forEach((doc) => {
      result.push({
        name: doc.data().name,
        url: doc.data().url,
        color: doc.data().color,
        id: doc.data().id,
      });
    });
    return result;
  }

  // ================================================================
  // tanstack query
  // queryClient
  const queryClient = useQueryClient();

  // get
  const { data } = useQuery({
    queryKey: ["site", user.userid],
    queryFn: getData,
    enabled: user.userid != "",
    staleTime: 1000 * 60 * 5,
  });
  
  // ================================================================
  // 모달창 스타일
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

  // ================================================================
  // 시간
  // const currentTimer = () => {
  //   const date = new Date();
  //   const year = String(date.getFullYear());
  //   const month = String(date.getMonth() + 1).padStart(2, "0");
  //   const day = String(date.getDate()).padStart(2, "0");
  //   const hours = String(date.getHours()).padStart(2, "0");
  //   const minutes = String(date.getMinutes()).padStart(2, "0");
  //   setTime(`${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`)
  // }

  // useEffect(() => {
  //   setInterval(currentTimer, 1000);
  // }, [time])

  // ================================================================
  // 사이트 추가
  const handleAddSiteKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  }

  function useCreateSite() {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: createSiteData,

      // 성공 → 캐시 갱신
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["site", user.userid] });
      },

      // 에러 핸들링
      onError: (err) => {
        console.error("사이트 등록 중 오류", err);
      },
    });
  }

  const createSiteData = async ({ name, url, color, userid }: any) => {
    // 1) 문서 추가
    const res = await addDoc(collection(db, "site"), {
      name,
      userid,
      url,
      color: color + "e0",
      createDate: Date.now(),
    });

    // 2) 문서 ID 업데이트
    const id = res.path.split("/")[1];

    await updateDoc(doc(db, "site", id), {
      id,
    });

    setSiteName("");
    setSiteUrl("");
    setSiteColor("#ffffffe0")
    setIsOpen(false)

    return { id };
  };

  const { mutate, isPending } = useCreateSite();

  const onSubmit = () => {
    if (user.userid === "") {
      alert("로그인 후 이용해주세요.");
    } else if (siteName === "") {
      alert("사이트 이름을 입력해주세요.");
    } else if (siteUrl === "" || siteUrl.indexOf('http') === -1) {
      alert("주소를 확인해주세요.\nhttp:// 가 포함되어야 합니다.");
    }
    else {
      mutate({
        name: siteName,
        userid: user.userid,
        url: siteUrl,
        color: siteColor,
      });
    }
  };


  // ================================================================
  // 사이트 삭제
  const handleSiteDelete = async (id: string) => {
    await deleteDoc(doc(db, "site", id));
    // 캐시 갱신
    queryClient.invalidateQueries({ queryKey: ["site", user.userid] });
  }

  // ================================================================
  // 안내 팝업
  const [isClose, setIsClose] = useState<boolean>(false);

  return (
    <>
      <div className={main.bgBox}>
        {isClose ?
          <></> :
          <div className={main.noticeBox}>
            <div className={main.notice}>
              <div className={main.close} onClick={() => setIsClose(true)}>x</div>
              2025년 12월 1일부터 사이트 주소가 <a href="https://achim.my" target="_blank">achim.my</a>로 변경됩니다.<br />
              계속 이용을 원하시는 분들은 홈페이지, 즐겨찾기(북마크) 등을 새로운 주소로 업데이트해 주세요.
            </div>
          </div>
        }
        <img className={main.bgImage} src={bg} />
      </div>
      {/* <section className={main.section}>
        
        <div className={main.firstSection}>
          <div className={main.dateBox}>
            <div className={main.date}>
              {time}
            </div>
          </div>
          
          <div className={main.scrollDownBox}>
            <a href="#second">
              <FontAwesomeIcon icon={faChevronDown} className={main.scrollDown} />
            </a>
          </div>
        </div>
      </section> */}
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
      <section className={main.section} id="second">
        <div className={main.secondSection}>
          <div className={main.addSiteContainer}>
            <div className={main.addSiteBox}>
              {data?.map((value, index) => {
                return (
                  <div className={main.addSiteItem} key={index}>
                    <FontAwesomeIcon icon={faX} className={main.itemDelete} onClick={() => handleSiteDelete(value.id)} />
                    <a href={value.url} target="_blank" className={main.addSiteAnchor}>
                      <div className={main.addSiteFirst} style={{ backgroundColor: value.color }}>
                        {value.name.charAt(0)}
                      </div>
                      <div className={main.addSiteName}>
                        {value.name}
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
            <button className={main.modalSaveButton} onClick={onSubmit} disabled={isPending}>
              {isPending ? "저장 중" : "저장"}
            </button>
          </div>
        </Modal>
      </section>
    </>

  )
}