import "./App.css";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import SocialInputCard from "./components/SocialInputCard";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Button from "./components/Button";
import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
function App() {
  const [aboutMe, setAboutMe] = useState(false);
  const [onTheWeb, setOnTheWeb] = useState(false);
  const [professionalInfo, setProfessionalInfo] = useState(false);
  const [password, setPassword] = useState(false);
  const [interests, setInterests] = useState(false);

  return (
    <div className="bg-[#16181D] min-h-screen">
      <Header />
      <Banner />

      <div className="p-8 text-white flex flex-col ">
        <div>
          <div className="flex items-center justify-between">
            <h1 className="font-bold">ABOUT ME</h1>
            <Button label={"Edit"} on={aboutMe} onClick={setAboutMe} />
          </div>
          <textarea
            disabled={!aboutMe}
            name=""
            placeholder="Add something about you."
            id=""
            cols="30"
            rows="5"
            className="bg-[#262D36] p-4 rounded-md w-full mt-4 resize-none outline-none"
          ></textarea>
        </div>
        <div className="my-6 w-full border-b-[0.1px] border-gray-600"></div>
        <div className="w-full">
          <CalendarHeatmap
            classForValue={(value) => {
              if (!value) {
                return "bg-red-700";
              }
              return `color-github-${value.count}`;
            }}
            startDate={new Date("2016-01-01")}
            endDate={new Date("2016-12-01")}
            values={[]}
          />
        </div>

        <div className="my-6 w-full border-b-[0.1px] border-gray-600"></div>

        <div>
          <div className="flex items-center justify-between">
            <h1 className="font-bold">ON THE WEB</h1>
            <Button label={"Edit"} on={onTheWeb} onClick={setOnTheWeb} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <SocialInputCard
              on={!onTheWeb}
              title={"Linkedin"}
              img="https://www.cipherschools.com/static/media/LinkedIn.297c3e0e0411d3b8a7946c85a72f2bc7.svg"
            />
            <SocialInputCard
              on={!onTheWeb}
              title={"Github"}
              img="https://www.cipherschools.com/static/media/Github.2d6b6c0c10a3b3aa7e3c7438770688f8.svg"
            />
            <SocialInputCard
              on={!onTheWeb}
              title={"Facebook"}
              img="https://www.cipherschools.com/static/media/Facebook.766939726b802e2c4354f9629feba07f.svg"
            />
            <SocialInputCard
              on={!onTheWeb}
              title={"Twitter"}
              img="https://www.cipherschools.com/static/media/Twitter.8dec5dacebf84c0be8bcaa33dee4a7a0.svg"
            />
            <SocialInputCard
              on={!onTheWeb}
              title={"Instagram"}
              img="https://www.cipherschools.com/static/media/Instagram.31ac5927c40b6d948dc3369a313cb7c9.svg"
            />
            <SocialInputCard
              on={!onTheWeb}
              title={"Website"}
              img="https://www.cipherschools.com/static/media/Website.cd72366beefca5afbc5259237cf87838.svg"
            />
          </div>
        </div>
        <div className="my-6 w-full border-b-[0.1px] border-gray-600"></div>
        <div>
          <div className="flex items-center justify-between">
            <h1 className="font-bold">PROFESSIONAL INFORMATION</h1>
            <Button
              label={"Edit"}
              on={professionalInfo}
              onClick={setProfessionalInfo}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="flex flex-col space-y-2">
              <h1>{"Highest Education"}</h1>
              <select
                disabled={!professionalInfo}
                name="kjh"
                id=""
                className="bg-[#262D36] w-full px-4 py-2 outline-none rounded-md"
              >
                <option value="">Primary</option>
                <option value="">Secondary</option>
                <option value="">Higher Secondary</option>
                <option value="">Graduation</option>
                <option value="">Post Graduation</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <h1>{"What do you do currently?"}</h1>
              <select
                disabled={!professionalInfo}
                name="kjh"
                id=""
                className="bg-[#262D36] w-full px-4 py-2 outline-none"
              >
                <option value="">Schooling</option>
                <option value="">College Student</option>
                <option value="">Teaching</option>
                <option value="">Job</option>
                <option value="">Freelancing</option>
              </select>
            </div>
          </div>
        </div>
        <div className="my-6 w-full border-b-[0.1px] border-gray-600"></div>
        <div>
          <div className="flex items-center justify-between">
            <h1 className="font-bold">PASSWORD & SECURITY</h1>
            <Button label={"Change"} on={password} onClick={setPassword} />
          </div>
          <input
            disabled={!password}
            name=""
            placeholder="••••••••"
            className="bg-[#262D36] rounded w-full mt-4 px-4 py-2 outline-none"
          />
        </div>
        <div className="my-6 w-full border-b-[0.1px] border-gray-600"></div>
        <div className="flex items-center justify-between">
          <h1 className="font-bold">INTERESTS</h1>
          <Button label={"Edit"} on={interests} onClick={setInterests} />
        </div>
      </div>
    </div>
  );
}

export default App;
