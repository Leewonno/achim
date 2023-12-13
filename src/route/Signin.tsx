import { Link } from "react-router-dom"
import signin from "../css/signin.module.css"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"
import { doc, getDoc } from "firebase/firestore";
import { useAppDispatch } from "../hook";
import { setUserId, setName } from "../reducer/singin";

export default function Signin(){

    const dispatch = useAppDispatch();

    const [userid, setUserid] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleClickSignin = ()=>{
        handleSignin();
    }

    const handleKeyDownSignin = (e:KeyboardEvent)=>{
        if(e.key === "Enter"){
            handleSignin();
        }
    }

    const handleSignin = async ()=>{
        const email = userid + "@achim.com"
        try{
            const res = await signInWithEmailAndPassword(auth, email, password);

            const docRef = doc(db, "user", userid);
            const docSnap = await getDoc(docRef);

            dispatch(setUserId(docSnap.data()?.userid));
            dispatch(setName(docSnap.data()?.name));

            window.location.href = '/';

        }catch(err){
            alert(err)
            console.log(err);
        }
    } 

    return(
        <>
            <section className={signin.section}>
                <div className={signin.container}>
                    {/* <div className={signin.title}>Login</div> */}
                    <div className={signin.signinBox}>
                        <input placeholder="ID" className={signin.input} value={userid} onChange={(e)=>setUserid(e.target.value)}/>
                        <input type="password" placeholder="password" className={signin.input} value={password} onChange={(e)=>setPassword(e.target.value)} onKeyDown={(e)=>{handleKeyDownSignin(e)}}/>
                        <div className={signin.signinButton} onClick={handleClickSignin}>로그인</div>
                        <div className={signin.otherBox}>
                            <Link to={"/signup"} className={signin.signupButton}>회원가입</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}