"use client"
import React, { useEffect, useState } from "react";
import { DownIcon, RightIcon } from "./SVG/Icons";
import SidePanelSubLink from "./SidePanelSubLink";
import { useMediaQuery } from "react-responsive";
import { useRouter, usePathname } from "next/navigation";

interface IProps {
  closeSideMenu: () => void;
}

export const SideSecondPanel: React.FC<IProps> = ({ closeSideMenu }) => {
  const [panelState, setPanelState] = useState({
    aboutClose: false,
    projectsClose: false,
    contactClose: false,
    miscClose: false,
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });
  const router = useRouter();
  const pathname = usePathname();
  const [activeCurrentSubLink, setActiveCurrentSubLink] = useState("");

  const sections = {
    about: [
      { name: "index.html", path: "/", icon: "icons8-html-5" },
      { name: "experience.css", path: "/Experience", icon: "icons8-css3" },
      { name: "skills.js", path: "/Skills", icon: "icons8-javascript" },
      { name: "projects.ts", path: "/Projects", icon: "icons8-typescript" },
    ],
    projects: Array.from({ length: 6 }, (_, i) => ({
      name: `Project ${i + 1}`,
      path: `/Projects/${i + 1}`,
      icon: "icons8-nodejs",
    })),
    contact: [
      { name: "Email.tsx", path: "/Email", icon: "icons8-gmail" },
    ],
    misc: [
      { name: "Hobbies.cpp", path: "/Hobbies", icon: "icons8-cplusplus" },
      { name: "Blogs.py", path: "/Blogs", icon: "icons8-python" },
      { name: "Gaming.sln", path: "/Gaming", icon: "icons8-c-sharp" },
      { name: "Anime.jsx", path: "/Anime", icon: "icons8-react" },
      { name: "Learning.ts", path: "/Learning", icon: "icons8-angularjs" },
      { name: "Startup.md", path: "/Startup", icon: "icons8-markdown" },
    ],
  };

  useEffect(() => {
    const currentSubLink = pathname.split("/").pop() || "index.html";
    setActiveCurrentSubLink(currentSubLink);
  }, [pathname]);

  const togglePanel = (panel: keyof typeof panelState) => {
    setPanelState((prevState) => ({
      ...prevState,
      [panel]: !prevState[panel],
    }));
  };

  const navigateTo = (path: string, subLink: string) => {
    router.push(path);
    setActiveCurrentSubLink(subLink);
    if (isTabletOrMobile) closeSideMenu();
  };

  const renderSection = (section: string, links: typeof sections[keyof typeof sections]) => (
    <div className="pt-1">
      <div>
        <div
          className="flex pl-1 cursor-pointer"
          onClick={() => togglePanel(`${section}Close` as keyof typeof panelState)}
        >
          <div className="font-medium flex-min pt-1">
            {panelState[`${section}Close` as keyof typeof panelState] ? <RightIcon /> : <DownIcon />}
          </div>
          <span className="text-gray-300 text-xs mx-1.5 z-[99] relative font-medium flex-auto">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
        </div>
        {!panelState[`${section}Close` as keyof typeof panelState] && (
          <ul>
            {links.map((link) => (
              <li
                key={link.name}
                onClick={() => navigateTo(link.path, link.name)}
                className={`h-[27px] text-[12px] p-[5px] cursor-pointer relative ${activeCurrentSubLink === link.name ? "text-white" : ""}`}
              >
                <SidePanelSubLink name={link.name} link={link.path} icon={<span className={link.icon}></span>} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-[#252526] absolute top-[25px] left-[47px] w-[256px] h-[calc(100vh-50px)] overflow-x-hidden pl-[10px]">
      <h5 className="text-medium">EXPLORER</h5>
      <div className="mb-5 pb-5 z-1 scrollbar" style={{ height: "84%", overflowY: "scroll" }}>
        {renderSection("about", sections.about)}
        {renderSection("projects", sections.projects)}
        {renderSection("contact", sections.contact)}
        {renderSection("misc", sections.misc)}
      </div>
    </div>
  );
};
