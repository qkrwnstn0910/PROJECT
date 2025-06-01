import Regist from "./regist/Regist"
import Loginpage from "./login/Loginpage";
import Mainpage from "./Mainpage";
import TopNavbar from "./tools/TopNavbar";
import Mypage from "./mypage/Mypage";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
   
  return (
    <>
    <TopNavbar/>
    <Router>
      <div>
        {/* 페이지 내용 */}
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/mainpage" element={<Mainpage/>}/>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/mypage" element={<Mypage/>}/>
        </Routes>
      </div>
    </Router>
     </>
  );
 
}

export default App
