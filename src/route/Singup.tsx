import { useState } from "react"
import signup from "../css/signup.module.css"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"
import { doc, setDoc } from "firebase/firestore"; 

export default function Signup(){

    const [userid, setUserid] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordCheck, setPasswordCheck] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");

    const handleSignup = async ()=>{

        const email = userid + "@achim.com"

        if(userid === ""){
            alert("아이디를 입력해주세요.")
        }else if(password === ""){
            alert("비밀번호를 입력해주세요.");
        }else if(passwordCheck === "" || password != passwordCheck){
            alert("비밀번호를 확인해주세요.");
        }else if(name === ""){
            alert("이름을 입력해주세요.");
        }else if(nickname === ""){
            alert("닉네임을 입력해주세요.")
        }else{
            try{
                const res = await createUserWithEmailAndPassword(auth, email, password);
            
                await setDoc(doc(db, "user", userid), {
                    name: name,
                    userid: userid,
                    nickname: nickname
                });
    
                alert("환영합니다!")
    
                window.location.href = "/";
            }
            catch(err){
                console.log(err);
                alert(err);
            }
        }

    }

    return(
        <>
            <section className={signup.section}>
                <div className={signup.container}>
                    <div className={signup.signupBox}>
                        <input placeholder="ID" className={signup.input} value={userid} onChange={(e)=>setUserid(e.target.value)}/>
                        <input placeholder="Password" type="password" className={signup.input} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <input placeholder="password Check" type="password" className={signup.input} value={passwordCheck} onChange={(e)=>setPasswordCheck(e.target.value)}/>
                        <input placeholder="NAME" className={signup.input} value={name} onChange={(e)=>setName(e.target.value)}/>
                        <input placeholder="Nick Name" className={signup.input} value={nickname} onChange={(e)=>setNickname(e.target.value)}/>
                        <div className={signup.signupButton} onClick={handleSignup}>회원가입</div>
                    </div>
                </div>
            </section>
        </>
    )
}