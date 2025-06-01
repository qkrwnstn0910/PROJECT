import { useEffect, useState } from "react";
import { auth } from "../tools/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function Mypage() {
  const [selectedMenu, setSelectedMenu] = useState("personal"); 
  const [userData, setUserData] = useState(null);
  const db = getFirestore();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      }
    };
    fetchUserData();
  }, []);

  const renderContent = () => {
    if (!userData) return <p>로딩 중...</p>;

    if (selectedMenu === "personal") {
      return (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">개인정보</h2>
          <p><strong>이메일:</strong> {userData.email}</p>
          <p><strong>닉네임:</strong> {userData.nickname}</p>
          <p><strong>전화번호:</strong> {userData.phone}</p>
          <p><strong>깃허브:</strong> {userData.github}</p>
          <p><strong>메일 주소:</strong> {userData.mailAddress}</p>
          <p><strong>집 주소:</strong> {userData.Address} {userData.DetailedAddress}</p>
        </div>
      );
    }

    if (selectedMenu === "portfolio") {
      return <div className="p-4"> 포트폴리오 게시판 (준비 중)</div>;
    }

    if (selectedMenu === "chat") {
      return <div className="p-4"> 채팅 목록 (준비 중)</div>;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* 사이드 메뉴 */}
      <aside className="w-48 bg-gray-100 p-4">
        <h2 className="text-lg font-semibold mb-4">마이페이지</h2>
        <ul className="space-y-2">
          <li>
            <button
              className={`w-full text-left ${selectedMenu === "personal" ? "text-blue-600 font-bold" : ""}`}
              onClick={() => setSelectedMenu("personal")}
            >
               개인정보
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left ${selectedMenu === "portfolio" ? "text-blue-600 font-bold" : ""}`}
              onClick={() => setSelectedMenu("portfolio")}
            >
               포트폴리오 게시판
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left ${selectedMenu === "chat" ? "text-blue-600 font-bold" : ""}`}
              onClick={() => setSelectedMenu("chat")}
            >
              💬 채팅 목록
            </button>
          </li>
        </ul>
      </aside>

      {/* 본문 영역 */}
      <main className="flex-1 bg-white p-6 shadow-md">{renderContent()}</main>
    </div>
  );
}

export default Mypage;