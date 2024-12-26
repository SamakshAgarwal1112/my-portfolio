"use client"
import { useEffect, useState } from "react";
import { SideSecondPanel } from "./SideSecondPanel"
import { SideMainPanel } from "./SideMainPanel";
import { useMediaQuery } from "react-responsive";
import Nav from "./Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });
  const [openSideMenu, setOpenSideMenu] = useState(false);
  // const DateTime = new Date().toLocaleString();

  useEffect(() => {
    if (isTabletOrMobile) {
      setOpenSideMenu(false);
    }
  }, [isTabletOrMobile]);

  const toggleSideMainMenu = () => {
    setOpenSideMenu((prev) => !prev);
  };
  return (
    <>
      <div className="bg-[#3c3c3c] flex justify-start align-middle relative h-[25px] w-full">
        <Nav/>
      </div>
      <div
          className={`${
            openSideMenu ? "w-[320px] h-full inline-flex overflow-hidden" : "w-[47px] h-full inline-flex overflow-hidden"
          } relative z-100`}
        >
          <SideMainPanel
            toggleSideMainMenu={toggleSideMainMenu}
            mainActiveSideButton={openSideMenu}
          />
          {openSideMenu && (
            <SideSecondPanel closeSideMenu={() => setOpenSideMenu(false)} />
          )}
      </div>
        <main
          className={`w-[100vw] h-screen overflow-x-hidden justify-center mt-2 left-[5%] absolute inline-flex`}
        >
          {children}
        </main>

      {!isTabletOrMobile ? (
        <div className="flex justify-between absolute bottom-0 left-0 w-full h-5 bg-[#007acc] pb-6 z-50 text-[12px] px-2">
          <ul className="right pt-1 flex gap-2">
            <li>Made in</li>
            <li>Next.Js</li>
            <li>TypeScript</li>
            <li>NextUI</li>
            <li>Tailwind</li>
          </ul>
          <ul className="left pt-1 flex gap-2">
            <li>
              {
                // DateTime
              }
            </li>
            <li>UTF-8</li>
            <li>
              Port: 443
            </li>
          </ul>
        </div>
      ) : (
        <div className="bottom-header fixed pb-6 z-50 bg-blue-400">
          <ul className="right pt-1 " style={{ fontSize: "12px" }}>
            <li>Next.Js</li>
            <li>TypeScript</li>
            <li>NextUI</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Layout;