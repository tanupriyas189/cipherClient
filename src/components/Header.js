import React from "react";

function Header() {
  return (
    <div>
      <header className="bg-[#262D36] px-4 py-2 flex items-center space-x-2 border-b-[0.1px] border-gray-600">
        <div className="h-10 w-10 relative">
          <img src="/cipherIcon.png" alt="" srcset="" />
        </div>
         <h1 className="font-bold text-xl text-white">CipherSchools</h1>
      </header>
    </div>
  );
}

export default Header;
