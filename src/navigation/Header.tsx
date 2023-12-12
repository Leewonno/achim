import { Link } from 'react-router-dom'
import header from '../css/header.module.css'
import logo from '../img/aclogoenver_merge.png'

export default function Header(){
    return(
        <header className={header.header}>
            <div className={header.container}>
                <div className={header.leftBox}>
                    <Link to={"/"} className={header.logoBox}>
                        <img src={logo} alt='로고' className={header.logoImg} />
                    </Link>
                </div>
                <div className={header.rightBox}>
                    <Link to={"/signin"} className={header.signinBox}>
                        <div className={header.signin}>로그인</div>
                    </Link>
                </div>
            </div>       
        </header>
    )
}