import React from "react";

function Button({ label, on, onClick }) {
  return (
    <div
      onClick={() => onClick(!on)}
      className="cursor-pointer px-4 py-1 rounded text-sm bg-[#F2912E] hover:bg-[#c9711a] transition "
    >
      {!on ? label : "save"}
    </div>
  );
}

export default Button;
