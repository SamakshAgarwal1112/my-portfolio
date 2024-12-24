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
      console.log("Resetting side menu state");
      setOpenSideMenu(false);
    }
  }, [isTabletOrMobile]);

  useEffect(() => {
    console.log("Side menu state:", openSideMenu);
  }, [openSideMenu]);

  const toggleSideMainMenu = () => {
    console.log("toggleSideMainMenu");
    setOpenSideMenu((prev) => !prev);
  };
  return (
    <>
      <div className="bg-[#3c3c3c] flex justify-start align-middle relative h-[25px] w-full">
        <Nav/>
      </div>
      <div
          className={`${
            openSideMenu ? "w-[320px] h-full inline-flex overflow-x-hidden" : "w-[47px] h-full inline-flex overflow-x-hidden"
          }`}
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
          className={`${
            openSideMenu ? "w-[calc(100vw-320px)]overflow-x-hidden h-screen mt-2 -ml-2 inline-flex justify-center" : "w-[calc(100vw-57px)] h-screen overflow-x-hidden justify-center mt-2 -ml-2 left-[60px] absolute inline-flex"
          }`}
        >
          {children}
        </main>

      {!isTabletOrMobile ? (
        <div className="absolute bottom-0 left-0 w-full h-5 bg-[#007acc] pb-6 z-50">
          <ul className="right pt-1 " style={{ fontSize: "12px" }}>
            <li>Made in</li>
            <li>Next.Js</li>
            <li>TypeScript</li>
            <li>NextUI</li>
            <li>Tailwind</li>
          </ul>
          <ul className="left">
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