import Regist from "./components/Regist"
import Loginpage from "./components/Loginpage";
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function App() {

  const auth = getAuth();
  const [user, setUser] = useState(null);
  useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
    setUser(user); 
  });
  return () => unsubscribe(); 
}, []);

  const goToLoginpage = () => {
    window.location.href = "/login";
  };
  const goToRegist = () => {
    window.location.href = "/regist";
  };
  return (
<Router>
      <div className="app-background">
        <nav className="flex justify-between items-center p-4 bg-white shadow-md">
          <div className="text-xl font-bold">
            <Link to="/">개발자의 요람</Link>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="통합검색"
              className="border rounded px-2 py-1"
            />
              {user ? (
              <button
              onClick={() => signOut(auth)}
              className="text-red-600 hover:underline"
            >
              로그아웃
             
            </button>
             ) : (
              <>
             <button onClick={goToLoginpage} className="text-blue-600 hover:underline">
              로그인
            </button>
            <button onClick={goToRegist} className="text-blue-600 hover:underline">
              회원가입
            </button> 
            </>
            )}
          </div>
        </nav>

        {/* 페이지 내용 */}
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/regist" element={<Regist />} />
        </Routes>
      </div>
    </Router>
  );
  
}

export default App
