import { useState } from "react"
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";

function Regist () {
  
  const [data, setData] = useState ({
    email:'', //아이디
    password:'', //비밀번호
    confirmPassword:'', //비밀번호 확인
    nickname:'', //이름
    phone: '', //전화번호
    github: '', //깃허브링크
    mailAddress : '', //이메일(구글,네이버,카카오)
    Address: '',//집주소
    DetailedAddress:'',//집 상세주소
    termsAgreed : false, //이용약관 동의여부
    privacyAgreed : false,  //개인정보 처리방침 동의여부
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }; 
  
  //이용약관, 개인정보 처리방침 동의여부 확인
  const handleAgreed = (e) => {
    if (!data.termsAgreed || !data.privacyAgreed) {
      alert("약관에 동의해주세요.");
      return false;
    }
    return true;
  }
  //유효성검사
  const valid = async(e) => {
    e.preventDefault();
    if(!handleAgreed()) {
      return;
    }
    if (!data.email.trim()) {
      alert('이메일을 입력해주세요');
      return;
    }
    if(data.password !==data.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    if(data.password.length<8) {
      alert('비밀번호는 8자 이상이어야합니다.')
    }
    try {
    const userCredit = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    console.log('회원가입성공',userCredit.user);
    alert('회원가입이 완료되었습니다.');
  }
  catch (error) {
    console.log('회원가입 실패:', error);
    alert('회원가입중 오류가 발생했습니다.' + error.message)
  }
}

  
 
  return(
     <form onSubmit={valid}>
      <div>
        <label>이메일 (아이디): </label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>비밀번호: </label>
        <input
          type="text"
          name="password"
          value={data.password}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>비밀번호 확인: </label>
        <input
          type="text"
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>닉네임: </label>
        <input
          type="text"
          name="nickname"
          value={data.nickname}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>전화번호: </label>
        <input
          type="text"
          name="phone"
          value={data.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>깃허브 링크: </label>
        <input
          type="text"
          name="github"
          value={data.github}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>메일 주소(구글/네이버/카카오 등): </label>
        <input
          type="text"
          name="mailAddress"
          value={data.mailAddress}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>집 주소: </label>
        <input
          type="text"
          name="Address"
          value={data.Address}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>상세 주소: </label>
        <input
          type="text"
          name="DetailedAddress"
          value={data.DetailedAddress}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="termsAgreed"
            checked={data.termsAgreed}
            onChange={handleChange}
          />
          이용약관 동의
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="privacyAgreed"
            checked={data.privacyAgreed}
            onChange={handleChange}
          />
          개인정보 처리방침 동의
        </label>
      </div>

      <button type="submit">회원가입</button>
    </form>
  );
}

export default Regist;
  