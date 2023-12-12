import { Link } from "react-router-dom"
import signin from "../css/signin.module.css"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"
import { doc, getDoc } from "firebase/firestore";

export default function Signin(){

    const [userid, setUserid] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSignin = async ()=>{

        const email = userid + "@achim.com"
        try{
            const res = await signInWithEmailAndPassword(auth, email, password);

            const docRef = doc(db, "user", userid);
            const docSnap = await getDoc(docRef);
            console.log(docSnap.data());

        }catch(err){
            alert(err)
            console.log(err);
        }
    }

    const handleKeyDownSignin = (e:KeyboardEvent)=>{
        if(e.key === "Enter"){
            console.log("키 실행")
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
                        <div className={signin.signinButton} onClick={handleSignin}>로그인</div>
                        <div className={signin.otherBox}>
                            <Link to={"/signup"} className={signin.signupButton}>회원가입</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}