import Link from "next/link";
import { useState } from "react";
import { AvatarIcon, Copyicon } from "./SVG/Icons";

interface ISideMainPanel {
  mainActiveSideButton: boolean;
  toggleSideMainMenu: () => void;
}

export const SideMainPanel: React.FC<ISideMainPanel> = (props) => {
  const [selectedSideTab, setselectedSideTab] = useState("main");

  return (
    <div className="bg-[#333] absolute py-3 left-0 w-[47px] h-[calc(100%-40px)] text-center">
      <ul className="text-center relative h-full">
        <li
          className={`${
            props.mainActiveSideButton && selectedSideTab === "main"
              ? "text-white"
              : ""
          } text-center align-middle pl-[0.65rem] pr-0 cursor-pointer`}
          title="Sidebar"
          onClick={() => {
            props.toggleSideMainMenu();
            setselectedSideTab("main");
          }}
        >
          <Copyicon width={25} height={25} />
        </li>

        <Link href="/">
          <li
            className={`text-center align-middle pl-[0.65rem] pr-0 cursor-pointer`}
            style={{ position: "absolute", bottom: "0" }}
            title="About"
          >
            <div className={`cursor-pointer`} title="About">
              <AvatarIcon width={30} height={30} />
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
};