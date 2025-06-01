
function TopNavbar({ isLoggedIn, onLogout, nickname }) {
  return (
    <div>
        <button className="text-blue-600 hover:underline">
            게시판
        </button>
          <button className="text-blue-600 hover:underline">
            채팅
        </button>
          <button className="text-blue-600 hover:underline">
            포트폴리오
        </button>
    </div>
  )
}

export default TopNavbar;