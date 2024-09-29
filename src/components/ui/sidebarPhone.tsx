// import React from 'react';
// import * as Icons from "lucide-react";
import { useLocation } from 'react-router-dom';
import { BsBoxSeam } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { GiDiamonds } from "react-icons/gi";
import { RiFunctionAddLine } from "react-icons/ri";

export const SideBarPhone = () => {
  // const Menus = [
  //   { title: "Dashboard", src: "Layout", path: "/dashboard" },
  //   { title: "Crates", src: "LayoutGrid", path: "/explorecrate" },
  //   { title: "Scroll", src: "Sparkle", path: "/scroll" },
  //   { title: "Create Crate", src: "PackageOpen", path: "/cratecreator" },
  // ];

  
  const location = useLocation();


  

  const sidebarData = [
    {
      path: "/dashboard",
      logo: <BsBoxSeam className={`${location.pathname === "/dashboard" ? "text-[#B6FF1B]" :"" }`} />,
      name: <p className={`${location.pathname === "/dashboard" ? "text-[#B6FF1B] text-xs" :"text-xs" }`}>{location.pathname === "/dashboard" ? "/": ""}dashboard </p>

    },
    {
      path: "/explorecrate",
      logo: <RxDashboard className={`${location.pathname === "/explorecrate" ? "text-[#B6FF1B]" :"" }`} />,
      name: <p className={`${location.pathname === "/explorecrate" ? "text-[#B6FF1B] text-xs" :"text-xs" }`}>{location.pathname === "/explorecrate" ? "/": ""}explore-crate </p>


    },
    {
      path: "/scroll",
      logo: <GiDiamonds className={`${location.pathname === "/scroll" ? "text-[#B6FF1B]" :"" }`} />,
      name: <p className={`${location.pathname === "/scroll" ? "text-[#B6FF1B] text-xs" :"text-xs" }`}>{location.pathname === "/scroll" ? "/": ""}scroll </p>


    },
    {
      path: "/cratecreator",
      logo: <RiFunctionAddLine className={`${location.pathname === "/cratecreator" ? "text-[#B6FF1B]" :"" } `}/>,
      name: <p className={`${location.pathname === "/cratecreator" ? "text-[#B6FF1B] text-xs" :"text-xs" }`}>{location.pathname === "/cratecreator" ? "/": ""}crate-creator </p>

    }
  ]

  return (
    <div className="block md:hidden fixed bottom-0 left-0 right-0 bg-[#02050ac0] backdrop-blur-md  z-50">
      <nav className="flex justify-around items-center h-20 px-4">
        {sidebarData.map((menu, index) => {
          return (
            <li key={index} className='list-none flex-col text-center'>
                    <a
                      href={menu.path}
                      data-tooltip-id={`tooltip-${index}`}
                      data-tooltip-content={menu.path}
                      className="flex items-center justify-center p-3 rounded-full sm:rounded-3xl transition-all duration-200 text-xl ease-in-out group"
                    >
                      {menu.logo}
                      
                      
                    </a>
                    {menu.name}


                    
                  </li>
          );
        })}
      </nav>
    </div>
  );
};

export default SideBarPhone;