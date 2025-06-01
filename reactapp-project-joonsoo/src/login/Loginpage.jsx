import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../tools/firebase";
import { useNavigate } from "react-router-dom";
export default function Loginpage () {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();

    if(!email || !password) {
      alert('아이디와 비밀번호가 일치하지 않습니다.');
      return;
    }
     try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("로그인 성공:", userCredential.user);
      alert("로그인 성공!");
      console.log("이동 전 navigate 호출:", "/mainpage");
      navigate("/mainpage");
    
      
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인 실패: " + error.message);
    }
  }
  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>아이디: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>비밀번호: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
  
}