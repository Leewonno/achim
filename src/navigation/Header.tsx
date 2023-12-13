import { Link } from 'react-router-dom'
import header from '../css/header.module.css'
import logo from '../img/aclogoenver_merge.png'
import { useAppDispatch, useAppSelector } from '../hook';
import { setUserId, setName } from "../reducer/singin";

export default function Header(){

    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.signin);

    const handleLogout = ()=>{
        dispatch(setUserId(""));
        dispatch(setName(""));
        window.location.reload();
    }

    return(
        <header className={header.header}>
            <div className={header.container}>
                <div className={header.leftBox}>
                    <Link to={"/"} className={header.logoBox}>
                        <img src={logo} alt='로고' className={header.logoImg} />
                    </Link>
                </div>
                <div className={header.rightBox}>
                {user.userid === "" ? 
                    <Link to={"/signin"} className={header.signinBox}>
                        <div className={header.signin}>로그인</div>
                    </Link>
                    :
                    <div className={header.signin} onClick={handleLogout}>로그아웃</div>
                }    
                </div>
            </div>       
        </header>
    )
}