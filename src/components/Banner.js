import React from "react";

function Banner() {
  return (
    <div>
      {" "}
      <div className="h-24">
        <div className="bg-[#212B40] h-full border-b-[0.1px] border-gray-600 relative ">
          <img
            src="bgcipher.png"
            alt=""
            className="object-cover h-full w-full "
          />
          <div className="absolute items-center flex justify-between top-1 left-4 right-4 text-white">
            <div className="flex space-x-4">
              <div className="w-20 h-20 relative pt-2">
                <img
                  className="rounded-full"
                  src="https://lh3.googleusercontent.com/a/AGNmyxbpQffvfZ5uB47ZExPz3x20F1ZzdtuYtKJv1ufovA=s96-c"
                  alt=""
                />
              </div>
              <div className="w-full">
                <h1 className="text-xl text-gray-200">Hello,</h1>
                <h1 className="text-2xl font-semibold">Tanupriya Saxena</h1>
                <h1 className="text-lg text-gray-200">
                  saxenatanupriya80@gmail.com
                </h1>
              </div>
            </div>
            <h1 className="text-xl font-semibold flex text-gray-200">
              0 Followers
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
