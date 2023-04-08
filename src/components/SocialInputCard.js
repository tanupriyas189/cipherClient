import React from "react";

function SocialInputCard({ title, img, on }) {
  return (
    <div className="flex flex-col space-y-2">
      <h1>{title}</h1>
      <div className="bg-[#262D36] flex space-x-2 rounded-md w-full px-4 py-2 items-center">
        <img src={img} alt="" />
        <input
          disabled={on}
          type="text"
          className="bg-[#262D36] w-full outline-none"
          placeholder={title}
        />
        {!on ? (
          <img
            className="w-4 h-4"
            src={
              "https://www.cipherschools.com/static/media/Pencil.da4ca677ddf0145e7203662a76a85ad5.svg"
            }
            alt=""
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default SocialInputCard;
